import { create } from 'zustand';
import { nanoid } from 'nanoid';
import type { Difficulty, Empire, EmpireType, GameSettings, GameState, PlanetInstance } from '../domain/models/types';
import { planetCatalog } from '../domain/catalogs/planetCatalog';
import { getShipModel } from '../domain/catalogs/shipCatalog';
import type { ShipInstance } from '../domain/models/types';

const STORAGE_KEY = 'imperium_game_state_v1';

const START_FRIGATE_BY_EMPIRE: Record<EmpireType, number> = {
  HUMANOS: 1,
  ROBOTIRANIDOS: 17,
  NOMADAS: 33,
  LEGION_HIERRO: 49,
  MERCADERES: 65,
};

const defaultSettings: GameSettings = {
  difficulty: '6_PLANETAS',
  rivals: 2,
  showRolls: true,
};

function mkEmpireName(t: EmpireType) {
  switch (t) {
    case 'HUMANOS':
      return 'Humanos';
    case 'ROBOTIRANIDOS':
      return 'Robotiránidos';
    case 'NOMADAS':
      return 'Nómadas';
    case 'LEGION_HIERRO':
      return 'Legión de Hierro';
    case 'MERCADERES':
      return 'Mercaderes';
  }
}

const HOMEWORLD_BY_EMPIRE: Record<EmpireType, number> = {
  HUMANOS: 11,
  ROBOTIRANIDOS: 12,
  NOMADAS: 13,
  LEGION_HIERRO: 14,
  MERCADERES: 15,
};

function initPlanets(): Record<number, PlanetInstance> {
  const map: Record<number, PlanetInstance> = {};
  for (const p of planetCatalog) {
    map[p.id] = { planetId: p.id, ownerEmpireId: null, prIcons: typeof p.base.prIcons === 'number' ? p.base.prIcons : null, currentPR: typeof p.base.prIcons === 'number' ? p.base.prIcons : null, activeNodeIds: [], state: {} };
  }
  return map;
}

function logPush(state: GameState, msg: string): GameState {
  return { ...state, log: [...state.log, { ts: Date.now(), msg }] };
}

function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export type GameActions = {
  newGame: (playerEmpire: EmpireType, rivalEmpires: EmpireType[], difficulty: Difficulty) => void;
  load: () => void;
  reset: () => void;
  save: () => void;
  startTurn: () => void;
  endTurn: () => void;
  resolveAiTurn: () => void;
  addCredits: (empireId: string, amount: number, reason?: string) => void;
  setPlanetOwner: (planetId: number, ownerEmpireId: string | null) => void;
  conquerPlanet: (planetId: number) => void;
  adjustPlanetStat: (planetId: number, stat: 'prod' | 'atk' | 'def', delta: number) => void;
  togglePlanetNode: (planetId: number, nodeId: string) => void;
  setPlanetNodes: (planetId: number, nodes: any[]) => void;
  buyShip: (empireId: string, modelId: number) => void;
  setShipPR: (empireId: string, shipInstanceId: string, nextPR: number) => void;
  setShipUpgrades: (empireId: string, shipInstanceId: string, patch: Partial<Pick<ShipInstance,'lvl1Bought'|'lvl2Bought'|'specialUnlocked'>>) => void;
  buyCharacter: (empireId: string, characterId: number) => void;
  discardCharacter: (empireId: string, characterId: number) => void;
};

export const useGameStore = create<{ game: GameState | null } & GameActions>((set, get) => ({
  game: null,

  newGame: (playerEmpire, rivalEmpires, difficulty) => {
    const settings: GameSettings = { ...defaultSettings, difficulty, rivals: rivalEmpires.length };

    const planets = initPlanets();

    const empiresArr: Empire[] = [];
    const playerId = nanoid();
    empiresArr.push({
      id: playerId,
      type: playerEmpire,
      name: mkEmpireName(playerEmpire),
      isPlayer: true,
      credits: 0,
      homePlanetId: HOMEWORLD_BY_EMPIRE[playerEmpire],
      planetIdsOwned: [HOMEWORLD_BY_EMPIRE[playerEmpire]],
      characters: [],
      fleet: [{
        id: nanoid(),
        modelId: START_FRIGATE_BY_EMPIRE[playerEmpire],
        currentPR: getShipModel(START_FRIGATE_BY_EMPIRE[playerEmpire]).base.prIcons,
        lvl1Bought: 0,
        lvl2Bought: 0,
        specialUnlocked: false,
      }],
    });

    for (const r of rivalEmpires) {
      empiresArr.push({
        id: nanoid(),
        type: r,
        name: mkEmpireName(r),
        isPlayer: false,
        credits: 0,
        homePlanetId: HOMEWORLD_BY_EMPIRE[r],
        planetIdsOwned: [HOMEWORLD_BY_EMPIRE[r]],
        characters: [],
        fleet: [{
          id: nanoid(),
          modelId: START_FRIGATE_BY_EMPIRE[r],
          currentPR: getShipModel(START_FRIGATE_BY_EMPIRE[r]).base.prIcons,
          lvl1Bought: 0,
          lvl2Bought: 0,
          specialUnlocked: false,
        }],
      });
    }

    // Asigna propietarios de mundos natales
    for (const e of empiresArr) {
      planets[e.homePlanetId] = { ...planets[e.homePlanetId], ownerEmpireId: e.id };
    }

    // Regla del manual: el jugador activa 1 nodo gratis en su planeta natal al inicio.
    // Aquí lo dejamos registrado como un "crédito" para activar desde la UI de nodos (más transparente),
    // y no activamos nada automáticamente porque depende del nodo que elija el jugador.
    // Se verá como un aviso en el Dashboard.
    const empires: Record<string, Empire> = Object.fromEntries(empiresArr.map((e) => [e.id, e]));

    let game: GameState = {
      settings,
      round: 1,
      turnStarted: false,
      activeEmpireId: playerId,
      empires,
      planets,
      log: [],
    };

    game = logPush(game, `Nueva partida. Jugador: ${mkEmpireName(playerEmpire)}. Rivales: ${rivalEmpires.map(mkEmpireName).join(', ')}.`);

    set({ game });
    get().save();
  },

  save: () => {
    const g = get().game;
    if (!g) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(g));
  },

  load: () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as GameState;
    // Compat: si falta turnStarted (versiones previas), lo asumimos false.
    if (typeof (parsed as any).turnStarted !== 'boolean') (parsed as any).turnStarted = false;
    set({ game: parsed });
  },

  reset: () => {
    localStorage.removeItem(STORAGE_KEY);
    set({ game: null });
  },

  startTurn: () => {
    const g = get().game;
    if (!g) return;
    if (g.turnStarted) return;

    const e = g.empires[g.activeEmpireId];
    const owned = e.planetIdsOwned;

    // Producción = suma de producción "actual" de cada planeta (base + ajuste manual).
    // Excluimos planetas conquistados en este mismo turno (se marcan en inst.state.justConqueredAtRound).
    let prodSum = 0;
    for (const pid of owned) {
      const def = planetCatalog.find((p) => p.id === pid);
      const inst = g.planets[pid];
      if (!def || !inst) continue;
      const jcRound = (inst.state as any).justConqueredAtRound;
      const jcBy = (inst.state as any).justConqueredBy;
      if (jcRound === g.round && jcBy === e.id) continue;

      const adj = (inst.state as any).adjust ?? { prodAdj: 0, atkAdj: 0, defAdj: 0 };
      const cur = def.base.prod + (typeof adj.prodAdj === 'number' ? adj.prodAdj : 0);
      prodSum += cur;
    }

    const empires = {
      ...g.empires,
      [e.id]: { ...e, credits: e.credits + prodSum },
    };

    let game = { ...g, empires, turnStarted: true };
    game = logPush(game, `${e.name}: Producción automática +${prodSum} créditos.`);
    set({ game });
    get().save();
  },

  addCredits: (empireId, amount, reason) => {
    const g = get().game;
    if (!g) return;
    const e = g.empires[empireId];
    const empires = { ...g.empires, [empireId]: { ...e, credits: e.credits + amount } };
    let game = { ...g, empires };
    game = logPush(game, `${e.name}: ${amount >= 0 ? '+' : ''}${amount} créditos${reason ? ` (${reason})` : ''}.`);
    set({ game });
    get().save();
  },

  
  buyShip: (empireId, modelId) => {
    const g = get().game;
    if (!g) return;
    const e = g.empires[empireId];
    const model = getShipModel(modelId);

    // En el libro hay eventos que cambian naves de bando. Para mantener la app como hoja de registro,
    // permitimos comprar/añadir naves de cualquier imperio.

    if (e.credits < model.cost) {
      let game = logPush(g, `${e.name} no tiene créditos suficientes para comprar ${model.shipClass} (coste ${model.cost}).`);
      set({ game });
      get().save();
      return;
    }

    const ship: ShipInstance = {
      id: nanoid(),
      modelId,
      currentPR: model.base.prIcons,
      lvl1Bought: 0,
      lvl2Bought: 0,
      specialUnlocked: false,
    };

    const empires = {
      ...g.empires,
      [empireId]: { ...e, credits: e.credits - model.cost, fleet: [...e.fleet, ship] },
    };

    let game = { ...g, empires };
    game = logPush(game, `${e.name} compra ${model.shipClass} (#${modelId}) por ${model.cost} créditos.`);
    set({ game });
    get().save();
  },

  buyCharacter: (empireId, characterId) => {
    const g = get().game;
    if (!g) return;
    const e = g.empires[empireId];
    // El catálogo está en UI/domain; evitamos importar aquí para no inflar el store.
    // La UI valida el coste y lo pasa como "amount" usando addCredits.
    // Aun así, por seguridad: si ya lo tiene, no hace nada.
    if (e.characters.includes(characterId)) {
      let game = logPush(g, `${e.name} ya tiene el personaje #${characterId}.`);
      set({ game });
      get().save();
      return;
    }
    const empires = {
      ...g.empires,
      [empireId]: { ...e, characters: [...e.characters, characterId] },
    };
    let game = { ...g, empires };
    game = logPush(game, `${e.name} añade personaje #${characterId} a su lista.`);
    set({ game });
    get().save();
  },

  discardCharacter: (empireId, characterId) => {
    const g = get().game;
    if (!g) return;
    const e = g.empires[empireId];
    if (!e.characters.includes(characterId)) return;
    const empires = {
      ...g.empires,
      [empireId]: { ...e, characters: e.characters.filter((id) => id !== characterId) },
    };
    let game = { ...g, empires };
    game = logPush(game, `${e.name} descarta personaje #${characterId}.`);
    set({ game });
    get().save();
  },

  setShipPR: (empireId, shipInstanceId, nextPR) => {
    const g = get().game;
    if (!g) return;
    const e = g.empires[empireId];
    const fleet = e.fleet.map((s) => (s.id === shipInstanceId ? { ...s, currentPR: nextPR } : s));
    const empires = { ...g.empires, [empireId]: { ...e, fleet } };
    set({ game: { ...g, empires } });
    get().save();
  },

  setShipUpgrades: (empireId, shipInstanceId, patch) => {
    const g = get().game;
    if (!g) return;
    const e = g.empires[empireId];
    const fleet = e.fleet.map((s) => (s.id === shipInstanceId ? { ...s, ...patch } : s));
    const empires = { ...g.empires, [empireId]: { ...e, fleet } };
    set({ game: { ...g, empires } });
    get().save();
  },

  adjustPlanetStat: (planetId, stat, delta) => {
    const g = get().game;
    if (!g) return;
    const inst = g.planets[planetId];
    const cur = (inst.state as any).adjust ?? { prodAdj: 0, atkAdj: 0, defAdj: 0 };
    const next = { ...cur };
    if (stat === 'prod') next.prodAdj = (next.prodAdj ?? 0) + delta;
    if (stat === 'atk') next.atkAdj = (next.atkAdj ?? 0) + delta;
    if (stat === 'def') next.defAdj = (next.defAdj ?? 0) + delta;
    const planets = { ...g.planets, [planetId]: { ...inst, state: { ...inst.state, adjust: next } } };
    set({ game: { ...g, planets } });
    get().save();
  },

  conquerPlanet: (planetId) => {
    const g = get().game;
    if (!g) return;
    const active = g.empires[g.activeEmpireId];
    const inst = g.planets[planetId];
    if (!inst) return;
    // reutilizamos la lógica de setPlanetOwner, pero marcamos que se ha conquistado "en este turno"
    const prevOwnerId = inst.ownerEmpireId ?? null;

    const planets = {
      ...g.planets,
      [planetId]: {
        ...inst,
        ownerEmpireId: active.id,
        state: { ...inst.state, justConqueredAtRound: g.round, justConqueredBy: active.id },
      },
    };

    const empires = { ...g.empires };
    if (prevOwnerId) {
      const prev = empires[prevOwnerId];
      empires[prevOwnerId] = { ...prev, planetIdsOwned: prev.planetIdsOwned.filter((id) => id !== planetId) };
    }
    if (!active.planetIdsOwned.includes(planetId)) {
      empires[active.id] = { ...active, planetIdsOwned: [...active.planetIdsOwned, planetId] };
    }

    let game: GameState = { ...g, planets, empires };
    game = logPush(game, `Conquista: el planeta ${planetId} pasa a ${active.name}. (No produce hasta su siguiente turno)`);
    set({ game });
    get().save();
  },

  setPlanetOwner: (planetId, ownerEmpireId) => {
    const g = get().game;
    if (!g) return;

    const prevOwnerId = g.planets[planetId]?.ownerEmpireId ?? null;

    const planets = { ...g.planets, [planetId]: { ...g.planets[planetId], ownerEmpireId } };

    const empires = { ...g.empires };
    // quitar de anterior
    if (prevOwnerId) {
      const prev = empires[prevOwnerId];
      empires[prevOwnerId] = { ...prev, planetIdsOwned: prev.planetIdsOwned.filter((id) => id !== planetId) };
    }
    // añadir a nuevo
    if (ownerEmpireId) {
      const nxt = empires[ownerEmpireId];
      if (!nxt.planetIdsOwned.includes(planetId)) {
        empires[ownerEmpireId] = { ...nxt, planetIdsOwned: [...nxt.planetIdsOwned, planetId] };
      }
    }

    let game: GameState = { ...g, planets, empires };
    game = logPush(game, `Planeta ${planetId} ahora pertenece a ${ownerEmpireId ? empires[ownerEmpireId].name : 'nadie'}.`);
    set({ game });
    get().save();
  },

  togglePlanetNode: (planetId, nodeId) => {
    const g = get().game;
    if (!g) return;
    const inst = g.planets[planetId];
    const active = new Set(inst.activeNodeIds);
    if (active.has(nodeId)) active.delete(nodeId);
    else active.add(nodeId);
    const planets = { ...g.planets, [planetId]: { ...inst, activeNodeIds: [...active] } };
    set({ game: { ...g, planets } });
    get().save();
  },

  setPlanetNodes: (planetId, nodes) => {
    // guardamos el grafo en el estado persistente del planeta (para no tocar el catálogo base)
    const g = get().game;
    if (!g) return;
    const inst = g.planets[planetId];
    const state = { ...inst.state, nodes };
    const planets = { ...g.planets, [planetId]: { ...inst, state } };
    set({ game: { ...g, planets } });
    get().save();
  },

  endTurn: () => {
    const g = get().game;
    if (!g) return;
    const ids = Object.keys(g.empires);
    const idx = ids.indexOf(g.activeEmpireId);
    const nextIdx = (idx + 1) % ids.length;
    const nextId = ids[nextIdx];
    let game = { ...g, activeEmpireId: nextId, turnStarted: false };
    if (nextIdx === 0) game = { ...game, round: game.round + 1 };
    game = logPush(game, `Turno pasa a: ${game.empires[nextId].name}.`);
    set({ game });
    get().save();
  },

  resolveAiTurn: () => {
    // En modo guiado, el jugador pulsa "Resolver" y la app lo acompaña.
    // Primero ejecutamos la producción automática si aún no se ha iniciado el turno.
    if (get().game && !get().game!.turnStarted) get().startTurn();

    const g = get().game;
    if (!g) return;
    const empire = g.empires[g.activeEmpireId];
    if (empire.isPlayer) return;

    const d6 = rollD6();
    let game = logPush(g, `${empire.name} (I.A.) tira 1D6 para acción: ${d6}.`);

    // Decisión base del manual: 1-2 explorar, 3-4 compra/actualiza, 5-6 nodo.
    // Aquí implementamos solo el esqueleto + log. La resolución completa se enchufa en el motor de reglas cuando carguemos naves/eventos.
    if (d6 <= 2) {
      game = logPush(game, `${empire.name} decide EXPLORAR (pendiente de motor completo).`);
    } else if (d6 <= 4) {
      const d = rollD6();
      game = logPush(game, `${empire.name} sub-tira 1D6 para compra/actualizar: ${d}.`);
      game = logPush(game, d <= 3 ? `${empire.name} decide COMPRAR nave (pendiente).` : `${empire.name} decide ACTUALIZAR nave (pendiente).`);
    } else {
      const d = rollD6();
      game = logPush(game, `${empire.name} sub-tira 1D6 para tipo de nodo planeta: ${d}.`);
      game = logPush(game, `${empire.name} decide ACTIVAR nodo (${d <= 2 ? 'PROD' : d <= 4 ? 'DEF' : 'ATQ'}) (pendiente de selección planeta).`);
    }

    set({ game });
    get().save();
  },
}));

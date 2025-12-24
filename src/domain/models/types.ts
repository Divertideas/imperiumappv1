export type EmpireType =
  | 'HUMANOS'
  | 'ROBOTIRANIDOS'
  | 'NOMADAS'
  | 'LEGION_HIERRO'
  | 'MERCADERES';

export type Difficulty = '6_PLANETAS' | '12_PLANETAS' | '18_PLANETAS';

export type PlanetNodeType = 'capitol' | 'link' | 'prod' | 'atk' | 'def' | 'perk';

export type PlanetNode = {
  id: string;
  type: PlanetNodeType;
  requires: string[];
};

export type PlanetSpecialKey =
  | 'ASTRONAVEGANTES'
  | 'NACIDOS_PARA_LA_GUERRA'
  | 'VIAJEROS_NATOS'
  | 'ULTIMO_BASTION'
  | 'BUENOS_COMERCIANTES'
  | 'CHATARRERIA_ORBITAL'
  | 'ESCUDOS_TERMICOS'
  | 'PLAGAS_CORROSIVAS'
  | 'MUNDO_COLMENA'
  | 'ENERGIA_CURATIVA'
  | 'INTERFERENCIA_ANILLOS'
  | 'AL_INTERIOR'
  | 'ATMOSFERA_ABRASADORA'
  | 'TRATADO_COMERCIAL'
  | 'PIEL_DE_DIAMANTE'
  | 'FUGA_DE_CREDITOS'
  | 'MIMETISMO'
  | 'PILLAJE'
  | 'TERRAFORMADOR'
  | 'BLOQUEO_AEREO'
  | 'CUNA_DE_GUERREROS'
  | 'SIN_INTERES'
  | 'MEJORA_DE_CASCO'
  | 'BIENVENIDOS'
  | 'ARSENAL_NUCLEAR'
  | 'PODER_DE_LA_FE'
  | 'HABILIDOSOS'
  | 'PLANETA_PARAISO'
  | 'DEVORAMUNDOS'
  | 'FLOTA_MERCENARIA'
  | 'DESGASTE'
  | 'EMIGRACION_MASIVA'
  | 'MEJORAS_DE_ARMAMENTO'
  | 'UPGRADE'
  | 'XENO_UTSARH'
  | 'NONE';

export type PlanetDef = {
  id: number; // 11..66 (según catálogo)
  name: string;
  isHomeworld?: boolean;
  base: {
    prod: number;
    prIcons?: number;
    atk: number;
    def: number;
  };
  special: {
    key: PlanetSpecialKey;
    title: string;
    text: string;
  };
  // Grafo de nodos (cuando lo digitalicemos planeta a planeta)
  nodes?: PlanetNode[];
};

export type PlanetInstance = {
  planetId: number;
  ownerEmpireId: string | null;
  // PR del planeta (en iconos). En combate se reduce; fuera de combate se restaura a prIcons.
  prIcons: number | null;
  currentPR: number | null;
  // estado de nodos activados (por id)
  activeNodeIds: string[];
  // estado persistente específico del planeta (p.ej terraformador, desgaste acumulado)
  state: Record<string, unknown>;
};

// Ajustes manuales (el jugador suma/resta a mano con botones +/-)
export type PlanetAdjust = {
  prodAdj: number;
  atkAdj: number;
  defAdj: number;
};

export type ShipClass = 'FRAGATA' | 'CANONERO' | 'CRUCERO' | 'APOYO' | 'DESTRUCTOR' | 'CAPITAL';

export type ShipSpecialKey =
  | 'CAZAS'
  | 'BATERIA_MISILES'
  | 'ESCUDO_DEFENSIVO'
  | 'PULSO_ELECTROMAGNETICO'
  | 'SOBRECARGA_SISTEMAS'
  | 'DISRUPCION_APOYO'
  | 'REPARACION_APOYO'
  | 'BOMBARDEO_PLANETARIO'
  | 'CONTRAMEDIDAS'
  | 'AGUJERO_NEGRO'
  | 'BOMBARDEO_PLANETARIO_CAPITAL'
  | 'ANIQUILADOR_FLOTAS'
  | 'HACKEO'
  | 'NONE';

export type ShipModelDef = {
  id: number; // 1..80
  empire: EmpireType;
  shipClass: ShipClass;
  cost: number;
  base: { atk: number; def: number; prIcons: number };
  upgrades: {
    level1Nodes: number;
    level2Nodes: number;
    // bonus directo al completar mejora 2 (en el catálogo se ve "+1" en algunos casos)
    level2BonusAtk?: number;
    level2BonusDef?: number;
  };
  special: {
    key: ShipSpecialKey;
    title: string;
    text: string;
  };
};

export type ShipInstance = {
  id: string; // uuid
  modelId: number;
  name?: string;
  currentPR: number;
  // Progreso de mejoras (nodos comprados por nivel)
  lvl1Bought: number;
  lvl2Bought: number;
  specialUnlocked: boolean;
};

export type CharacterType = 'GENERAL' | 'ESPIA' | 'DIPLOMATICO';

export type CharacterDef = {
  id: number; // 1..18
  type: CharacterType;
  level: 1 | 2 | 3;
  cost: number;
  title: string;
  text: string;
};

export type Empire = {
  id: string;
  type: EmpireType;
  name: string;
  isPlayer: boolean;
  credits: number;
  homePlanetId: number;
  planetIdsOwned: number[];
  fleet: ShipInstance[];
  // Personajes comodín activos (solo para el jugador, pero lo guardamos en el estado)
  characters: number[];
};

export type GameSettings = {
  difficulty: Difficulty;
  rivals: number;
  showRolls: boolean;
};

export type GameState = {
  settings: GameSettings;
  round: number;
  // Se marca al pulsar "Iniciar turno" para ejecutar la producción automática una sola vez.
  turnStarted: boolean;
  activeEmpireId: string;
  empires: Record<string, Empire>;
  planets: Record<number, PlanetInstance>;
  log: { ts: number; msg: string }[];
};

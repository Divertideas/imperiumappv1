import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useGameStore } from '../../state/useGameStore';
import { planetCatalog } from '../../domain/catalogs/planetCatalog';
import type { PlanetNode, PlanetNodeType } from '../../domain/models/types';

const NODE_TYPES: { id: PlanetNodeType; label: string }[] = [
  { id: 'capitol', label: 'Capital' },
  { id: 'link', label: 'Enlace' },
  { id: 'prod', label: 'Producción' },
  { id: 'def', label: 'Defensa' },
  { id: 'atk', label: 'Ataque' },
  { id: 'perk', label: 'Especial' },
];

function safeParseNodes(x: unknown): PlanetNode[] {
  if (!Array.isArray(x)) return [];
  return x
    .map((n) => {
      if (!n || typeof n !== 'object') return null;
      const id = (n as any).id;
      const type = (n as any).type;
      const requires = (n as any).requires;
      if (typeof id !== 'string') return null;
      if (!NODE_TYPES.some((t) => t.id === type)) return null;
      if (!Array.isArray(requires) || !requires.every((r) => typeof r === 'string')) return null;
      return { id, type, requires } as PlanetNode;
    })
    .filter(Boolean) as PlanetNode[];
}

export function PlanetScreen() {
  const { planetId } = useParams();
  const navigate = useNavigate();
  const game = useGameStore((s) => s.game);
  const load = useGameStore((s) => s.load);
  const togglePlanetNode = useGameStore((s) => s.togglePlanetNode);
  const setPlanetNodes = useGameStore((s) => s.setPlanetNodes);
  const conquerPlanet = useGameStore((s) => s.conquerPlanet);
  const adjustPlanetStat = useGameStore((s) => s.adjustPlanetStat);

  useEffect(() => {
    load();
  }, [load]);

  const pid = Number(planetId);
  const def = planetCatalog.find((p) => p.id === pid);

  if (!def || !game) {
    return (
      <div style={styles.page}>
        <p>Planeta no encontrado o no hay partida.</p>
        <button style={styles.button} onClick={() => navigate('/dashboard')}>
          Volver
        </button>
      </div>
    );
  }

  const inst = game.planets[pid];
  const owner = inst?.ownerEmpireId ? game.empires[inst.ownerEmpireId] : null;
  const active = game.empires[game.activeEmpireId];

  const adj = (inst.state as any).adjust ?? { prodAdj: 0, atkAdj: 0, defAdj: 0 };
  const curProd = def.base.prod + (adj.prodAdj ?? 0);
  const curAtk = def.base.atk + (adj.atkAdj ?? 0);
  const curDef = def.base.def + (adj.defAdj ?? 0);

  const storedNodes = safeParseNodes(inst?.state?.nodes);
  const [editing, setEditing] = useState(false);
  const [nodesDraft, setNodesDraft] = useState<PlanetNode[]>(storedNodes.length ? storedNodes : [{ id: 'C', type: 'capitol', requires: [] }]);

  const nodeIds = useMemo(() => nodesDraft.map((n) => n.id), [nodesDraft]);

  return (
    <div style={styles.page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0 }}>
          {def.name} <span style={styles.small}>({def.id})</span>
        </h2>
        <Link to='/dashboard'>← Tablero</Link>
      </div>

      <div style={styles.card}>
        <div style={styles.row}>
          <div>
            <div style={styles.kicker}>Propietario</div>
            <div style={styles.big}>{owner ? owner.name : 'Libre'}</div>
            <div style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                style={{ ...styles.button, opacity: owner?.id === active.id ? 0.5 : 1 }}
                disabled={owner?.id === active.id}
                onClick={() => conquerPlanet(pid)}
              >
                Conquistar para {active.name}
              </button>
              <div style={styles.small}>
                Nota: al pulsar, el planeta se anexiona al imperio que está jugando el turno. Empezará a producir en el siguiente turno de ese imperio.
              </div>
            </div>
          </div>
          <div>
            <div style={styles.kicker}>Stats base</div>
            <div style={styles.small}>
              Base: Prod {def.base.prod} · ATQ {def.base.atk} · DEF {def.base.def}
              {typeof def.base.prIcons === 'number' ? ` · PR ${def.base.prIcons}` : ''}
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={styles.kicker}>Stats actuales (manual)</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                <StatPill label='Prod' value={curProd} onMinus={() => adjustPlanetStat(pid, 'prod', -1)} onPlus={() => adjustPlanetStat(pid, 'prod', +1)} />
                <StatPill label='ATQ' value={curAtk} onMinus={() => adjustPlanetStat(pid, 'atk', -1)} onPlus={() => adjustPlanetStat(pid, 'atk', +1)} />
                <StatPill label='DEF' value={curDef} onMinus={() => adjustPlanetStat(pid, 'def', -1)} onPlus={() => adjustPlanetStat(pid, 'def', +1)} />
              </div>
              <div style={styles.small}>Esto representa lo que tú marcarías en el ebook (+1 por mejora). No afecta al coste de nodos.</div>
            </div>
            {typeof def.base.prIcons === 'number' ? (
              <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={styles.kicker}>PR actual</span>
                <button
                  style={styles.linkBtn}
                  onClick={() => {
                    const g = useGameStore.getState().game;
                    if (!g) return;
                    const cur = g.planets[pid];
                    if (!cur) return;
                    const base = def.base.prIcons as number;
                    const next = Math.max(0, (cur.currentPR ?? base) - 1);
                    useGameStore.setState({ game: { ...g, planets: { ...g.planets, [pid]: { ...cur, currentPR: next } } } });
                    useGameStore.getState().save();
                  }}
                >
                  −1
                </button>
                <div style={{ fontWeight: 900 }}>{inst.currentPR ?? def.base.prIcons}</div>
                <button
                  style={styles.linkBtn}
                  onClick={() => {
                    const g = useGameStore.getState().game;
                    if (!g) return;
                    const cur = g.planets[pid];
                    if (!cur) return;
                    const base = def.base.prIcons as number;
                    const next = Math.min(base, (cur.currentPR ?? base) + 1);
                    useGameStore.setState({ game: { ...g, planets: { ...g.planets, [pid]: { ...cur, currentPR: next } } } });
                    useGameStore.getState().save();
                  }}
                >
                  +1
                </button>
                {(inst.currentPR ?? def.base.prIcons) === 0 ? <span style={styles.badge}>INACTIVO</span> : null}
                <div style={{ ...styles.small, marginLeft: 6 }}>
                  1 impacto = −1 PR. Al terminar una conquista, el planeta se restaura a su PR base.
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <div style={styles.kicker}>Especial</div>
          <div style={{ fontWeight: 800 }}>{def.special.title}</div>
          <div style={styles.small}>{def.special.text}</div>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={{ marginTop: 0 }}>Conquista</h3>
        <div style={styles.small}>
          Imperio en turno: <b>{active.name}</b> · Créditos: {active.credits} · Planetas: {active.planetIdsOwned.length} · Naves: {active.fleet.length}
        </div>
        <div style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            style={styles.button}
            onClick={() => conquerPlanet(pid)}
          >
            Conquistar este planeta para {active.name}
          </button>
          <div style={styles.small}>
            Al conquistar, el planeta pasa al imperio actual y <b>no produce</b> hasta el siguiente turno de ese imperio.
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0 }}>Nodos</h3>
          <button style={styles.ghost} onClick={() => setEditing((v) => !v)}>
            {editing ? 'Cerrar editor' : 'Editar nodos'}
          </button>
        </div>

        {!editing ? (
          <>
            <div style={styles.small}>
              Nodos activos en partida: {inst.activeNodeIds.length ? inst.activeNodeIds.join(', ') : 'ninguno'}.
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
              {nodesDraft.map((n) => (
                <button
                  key={n.id}
                  style={{ ...styles.nodeBtn, background: inst.activeNodeIds.includes(n.id) ? '#111' : 'transparent', color: inst.activeNodeIds.includes(n.id) ? 'white' : '#111' }}
                  onClick={() => togglePlanetNode(pid, n.id)}
                >
                  {n.id} · {n.type.toUpperCase()}
                </button>
              ))}
            </div>

            <div style={styles.small}>
              Consejo: usa el editor para reflejar el diagrama del PDF (rutas). Luego, en la fase siguiente, el motor validará “alcanzable desde Capital” automáticamente.
            </div>
          </>
        ) : (
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={styles.small}>
              Define el grafo de nodos del planeta. El motor de reglas usará <b>requires</b> para bloquear nodos no alcanzables y para “caída en cadena” si se desactiva un enlace.
            </div>

            {nodesDraft.map((n, idx) => (
              <div key={n.id} style={styles.nodeRow}>
                <input
                  style={styles.input}
                  value={n.id}
                  onChange={(e) => {
                    const v = e.target.value.trim();
                    setNodesDraft((prev) => prev.map((x, i) => (i === idx ? { ...x, id: v || x.id } : x)));
                  }}
                  placeholder='ID (ej: C, L1, P1...)'
                />

                <select
                  style={styles.select}
                  value={n.type}
                  onChange={(e) => {
                    const v = e.target.value as PlanetNodeType;
                    setNodesDraft((prev) => prev.map((x, i) => (i === idx ? { ...x, type: v } : x)));
                  }}
                >
                  {NODE_TYPES.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </select>

                <select
                  style={styles.select}
                  multiple
                  value={n.requires}
                  onChange={(e) => {
                    const opts = Array.from(e.target.selectedOptions).map((o) => o.value);
                    setNodesDraft((prev) => prev.map((x, i) => (i === idx ? { ...x, requires: opts } : x)));
                  }}
                >
                  {nodeIds
                    .filter((id) => id !== n.id)
                    .map((id) => (
                      <option key={id} value={id}>
                        requiere: {id}
                      </option>
                    ))}
                </select>

                <button
                  style={styles.iconBtn}
                  title='Eliminar nodo'
                  onClick={() => setNodesDraft((prev) => prev.filter((_, i) => i !== idx))}
                >
                  ✕
                </button>
              </div>
            ))}

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                style={styles.button}
                onClick={() => {
                  // Añade un nodo nuevo con id sugerido
                  const nextId = `N${nodesDraft.length + 1}`;
                  setNodesDraft((prev) => [...prev, { id: nextId, type: 'link', requires: [] }]);
                }}
              >
                + Añadir nodo
              </button>

              <button
                style={styles.ghost}
                onClick={() => {
                  setPlanetNodes(pid, nodesDraft);
                  setEditing(false);
                }}
              >
                Guardar grafo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatPill(props: { label: string; value: number; onMinus: () => void; onPlus: () => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', border: '1px solid #eee', borderRadius: 999 }}>
      <span style={{ fontSize: 12, color: '#555', fontWeight: 800 }}>{props.label}</span>
      <button style={styles.linkBtn} onClick={props.onMinus} title='−1'>−</button>
      <span style={{ fontWeight: 900, minWidth: 18, textAlign: 'center' }}>{props.value}</span>
      <button style={styles.linkBtn} onClick={props.onPlus} title='+1'>+</button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { padding: 16, maxWidth: 980, margin: '0 auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', display: 'flex', flexDirection: 'column', gap: 12 },
  card: { border: '1px solid #ddd', borderRadius: 16, padding: 16 },
  row: { display: 'flex', gap: 18, flexWrap: 'wrap' },
  kicker: { fontSize: 12, color: '#555' },
  big: { fontSize: 22, fontWeight: 900 },
  small: { fontSize: 12, color: '#555', lineHeight: 1.35 },
  button: { background: '#111', color: 'white', padding: '10px 14px', borderRadius: 12, border: 'none', cursor: 'pointer' },
  ghost: { background: 'transparent', color: '#111', padding: '10px 14px', borderRadius: 12, border: '1px solid #ddd', cursor: 'pointer' },
  linkBtn: { textDecoration: 'none', padding: '8px 10px', borderRadius: 12, border: '1px solid #ddd', color: '#111', fontSize: 12, background: 'transparent', cursor: 'pointer' },
  badge: { display: 'inline-block', padding: '2px 8px', borderRadius: 999, border: '1px solid #ddd', fontSize: 12, fontWeight: 800 },
  nodeBtn: { padding: '8px 10px', borderRadius: 12, border: '1px solid #ddd', cursor: 'pointer' },
  nodeRow: { display: 'grid', gridTemplateColumns: '160px 180px 1fr 44px', gap: 10, alignItems: 'center' },
  input: { padding: 10, borderRadius: 12, border: '1px solid #ddd' },
  select: { padding: 10, borderRadius: 12, border: '1px solid #ddd', minHeight: 42 },
  iconBtn: { width: 44, height: 44, borderRadius: 12, border: '1px solid #ddd', background: 'transparent', cursor: 'pointer' },
};
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useGameStore } from '../../state/useGameStore';
import { planetCatalog } from '../../domain/catalogs/planetCatalog';
import { getShipModel, shipModelsForEmpire } from '../../domain/catalogs/shipCatalog';
import { CHARACTER_CATALOG, getCharacterDef } from '../../domain/catalogs/characterCatalog';

export function EmpireScreen() {
  const { empireId } = useParams();
  const navigate = useNavigate();
  const game = useGameStore((s) => s.game);
  const load = useGameStore((s) => s.load);
  const buyShip = useGameStore((s) => s.buyShip);
  const addCredits = useGameStore((s) => s.addCredits);
  const buyCharacter = useGameStore((s) => s.buyCharacter);
  const discardCharacter = useGameStore((s) => s.discardCharacter);

  useEffect(() => {
    load();
  }, [load]);

  if (!game || !empireId || !game.empires[empireId]) {
    return (
      <div style={styles.page}>
        <p>Imperio no encontrado.</p>
        <button style={styles.button} onClick={() => navigate('/dashboard')}>
          Volver
        </button>
      </div>
    );
  }

  const e = game.empires[empireId];
  const planets = e.planetIdsOwned
    .slice()
    .sort((a, b) => a - b)
    .map((id) => planetCatalog.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div style={styles.page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0 }}>{e.name}</h2>
        <Link to='/dashboard'>← Tablero</Link>
      </div>

      <div style={styles.card}>
        <div style={styles.row}>
          <div>
            <div style={styles.kicker}>Créditos</div>
            <div style={styles.big}>{e.credits}</div>
          </div>
          <div>
            <div style={styles.kicker}>Planetas</div>
            <div style={styles.big}>{e.planetIdsOwned.length}</div>
          </div>
          <div>
            <div style={styles.kicker}>Planeta natal</div>
            <Link to={`/planet/${e.homePlanetId}`}>{e.homePlanetId}</Link>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={{ marginTop: 0 }}>Planetas conquistados</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {planets.map((p) => (
            <div key={p!.id} style={styles.tile}>
              <div style={{ fontWeight: 900 }}>
                {p!.name} <span style={styles.small}>({p!.id})</span>
              </div>
              <div style={styles.small}>
                Prod {p!.base.prod} · ATQ {p!.base.atk} · DEF {p!.base.def}
                {typeof p!.base.prIcons === 'number' ? ` · PR ${p!.base.prIcons}` : ''}
              </div>
              <div style={{ marginTop: 10 }}>
                <Link style={styles.linkBtn} to={`/planet/${p!.id}`}>
                  Ver planeta
                </Link>
              </div>
            </div>
          ))}
        </div>

        {planets.length === 0 ? <div style={styles.small}>Sin planetas todavía.</div> : null}
      </div>

      <div style={styles.card}>
        <h3 style={{ marginTop: 0 }}>Flota</h3>
        <div style={styles.small}>
          En esta app, las estadísticas (ATQ/DEF/bonos por nodos) las gestionas tú como en el libro. Aquí registras qué naves tienes, su PR actual
          y el avance de mejoras.
        </div>

        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
          {e.fleet.map((s) => {
            const model = getShipModel(s.modelId);
            const destroyed = s.currentPR <= 0;
            return (
              <div key={s.id} style={{ ...styles.tile, opacity: destroyed ? 0.55 : 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <div style={{ fontWeight: 900, textDecoration: destroyed ? 'line-through' : 'none' }}>
                    {model.shipClass} <span style={styles.small}>#{model.id}</span>
                  </div>
                  <div style={styles.small}>Coste {model.cost}</div>
                </div>
                <div style={styles.small}>
                  Base: ATQ {model.base.atk} · DEF {model.base.def} · PR máx {model.base.prIcons}
                </div>
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={styles.small}>PR actual:</span>
                  <button
                    style={styles.linkBtn}
                    onClick={() => {
                      // PR se ajusta manualmente: restamos 1 (mín 0)
                      addCredits(empireId, 0); // noop para forzar persistencia si el usuario ajusta PR fuera (se mantiene patrón)
                      // Ajuste directo: lo hacemos aquí para no introducir más acciones del store
                      const g = useGameStore.getState().game;
                      if (!g) return;
                      const cur = g.empires[empireId].fleet.find((x) => x.id === s.id);
                      if (!cur) return;
                      const next = Math.max(0, cur.currentPR - 1);
                      const fleet = g.empires[empireId].fleet.map((x) => (x.id === s.id ? { ...x, currentPR: next } : x));
                      useGameStore.setState({ game: { ...g, empires: { ...g.empires, [empireId]: { ...g.empires[empireId], fleet } } } });
                      useGameStore.getState().save();
                    }}
                    title='Marcar 1 PR de daño'
                  >
                    −1
                  </button>
                  <div style={{ fontWeight: 900 }}>{s.currentPR}</div>
                  <button
                    style={styles.linkBtn}
                    onClick={() => {
                      const g = useGameStore.getState().game;
                      if (!g) return;
                      const cur = g.empires[empireId].fleet.find((x) => x.id === s.id);
                      if (!cur) return;
                      const next = Math.min(model.base.prIcons, cur.currentPR + 1);
                      const fleet = g.empires[empireId].fleet.map((x) => (x.id === s.id ? { ...x, currentPR: next } : x));
                      useGameStore.setState({ game: { ...g, empires: { ...g.empires, [empireId]: { ...g.empires[empireId], fleet } } } });
                      useGameStore.getState().save();
                    }}
                    title='Recuperar 1 PR'
                  >
                    +1
                  </button>
                  {destroyed ? <span style={{ ...styles.badge, borderColor: '#f0c', color: '#111' }}>INACTIVA</span> : null}
                </div>

                <details style={{ marginTop: 10 }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 700 }}>Habilidad especial</summary>
                  <div style={{ marginTop: 6 }}>
                    <div style={{ fontWeight: 800 }}>{model.special.title}</div>
                    <div style={styles.small}>{model.special.text}</div>
                  </div>
                </details>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 14 }}>
          <h4 style={{ margin: '8px 0' }}>Comprar nave</h4>
          <div style={styles.small}>La app descuenta créditos y añade la nave. Las mejoras/nodos los gestionas manualmente (igual que en el ebook).</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 10 }}>
            {[e.type, 'HUMANOS', 'ROBOTIRANIDOS', 'NOMADAS', 'LEGION_HIERRO', 'MERCADERES'].filter((v, i, a) => a.indexOf(v as any) === i).map((empType) => (
              <div key={empType}>
                <div style={{ fontWeight: 900, marginBottom: 8 }}>{empType}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 10 }}>
                  {shipModelsForEmpire(empType as any).map((m) => (
              <div key={m.id} style={styles.tile}>
                <div style={{ fontWeight: 900 }}>{m.shipClass} <span style={styles.small}>#{m.id}</span></div>
                <div style={styles.small}>Coste {m.cost} · Base ATQ {m.base.atk} · DEF {m.base.def} · PR {m.base.prIcons}</div>
                <button
                  style={{ ...styles.button, marginTop: 8, opacity: e.credits < m.cost ? 0.4 : 1 }}
                  disabled={e.credits < m.cost}
                  onClick={() => buyShip(empireId, m.id)}
                >
                  Comprar
                </button>
              </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {e.isPlayer ? (
        <div style={styles.card}>
          <h3 style={{ marginTop: 0 }}>Personajes comodín (solo jugador)</h3>
          <div style={styles.small}>
            Los personajes se compran y se descartan cuando corresponda. La app guarda tu lista activa y te muestra su texto.
          </div>

          <h4 style={{ margin: '10px 0 6px' }}>Tus personajes</h4>
          {e.characters.length === 0 ? <div style={styles.small}>No tienes personajes ahora mismo.</div> : null}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
            {e.characters.map((cid) => {
              const c = getCharacterDef(cid);
              if (!c) return null;
              return (
                <div key={cid} style={styles.tile}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                    <div style={{ fontWeight: 900 }}>
                      #{c.id} {c.type} (nv.{c.level})
                    </div>
                    <button style={styles.linkBtn} onClick={() => discardCharacter(empireId, cid)}>
                      Descartar
                    </button>
                  </div>
                  <div style={styles.small}>Coste {c.cost} · {c.title}</div>
                  <div style={styles.small}>{c.text}</div>
                </div>
              );
            })}
          </div>

          <h4 style={{ margin: '14px 0 6px' }}>Comprar personaje</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 10 }}>
            {CHARACTER_CATALOG.map((c) => {
              const already = e.characters.includes(c.id);
              const disabled = already || e.credits < c.cost;
              return (
                <div key={c.id} style={styles.tile}>
                  <div style={{ fontWeight: 900 }}>#{c.id} {c.type} (nv.{c.level})</div>
                  <div style={styles.small}>Coste {c.cost} · {c.title}</div>
                  <div style={styles.small}>{c.text}</div>
                  <button
                    style={{ ...styles.button, marginTop: 8, opacity: disabled ? 0.4 : 1 }}
                    disabled={disabled}
                    onClick={() => {
                      addCredits(empireId, -c.cost, `Compra personaje #${c.id}`);
                      buyCharacter(empireId, c.id);
                    }}
                  >
                    {already ? 'Ya lo tienes' : e.credits < c.cost ? 'Sin créditos' : 'Comprar'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { padding: 16, maxWidth: 980, margin: '0 auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', display: 'flex', flexDirection: 'column', gap: 12 },
  card: { border: '1px solid #ddd', borderRadius: 16, padding: 16 },
  row: { display: 'flex', gap: 18, flexWrap: 'wrap' },
  kicker: { fontSize: 12, color: '#555' },
  big: { fontSize: 22, fontWeight: 900 },
  small: { fontSize: 12, color: '#555' },
  tile: { border: '1px solid #eee', borderRadius: 16, padding: 12 },
  linkBtn: { textDecoration: 'none', padding: '8px 10px', borderRadius: 12, border: '1px solid #ddd', color: '#111', fontSize: 12 },
  button: { background: '#111', color: 'white', padding: '10px 14px', borderRadius: 12, border: 'none', cursor: 'pointer' },
  badge: { display: 'inline-block', padding: '2px 8px', borderRadius: 999, border: '1px solid #ddd', fontSize: 12, fontWeight: 800 },
};

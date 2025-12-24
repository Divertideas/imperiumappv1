import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useGameStore } from '../../state/useGameStore';

export function DashboardScreen() {
  const navigate = useNavigate();
  const game = useGameStore((s) => s.game);
  const load = useGameStore((s) => s.load);
  const startTurn = useGameStore((s) => s.startTurn);
  const endTurn = useGameStore((s) => s.endTurn);
  const resolveAiTurn = useGameStore((s) => s.resolveAiTurn);

  useEffect(() => {
    load();
  }, [load]);

  if (!game) {
    return (
      <div style={styles.page}>
        <p>No hay partida cargada.</p>
        <button style={styles.button} onClick={() => navigate('/')}>
          Ir al menú
        </button>
      </div>
    );
  }

  const active = game.empires[game.activeEmpireId];

  return (
    <div style={styles.page}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'baseline' }}>
        <h2 style={{ margin: 0 }}>Ronda {game.round}</h2>
        <Link to='/' style={{ textDecoration: 'none' }}>
          Menú
        </Link>
      </div>

      <div style={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div style={styles.kicker}>Turno de</div>
            <div style={styles.big}>{active.name}</div>
            <div style={styles.small}>
              {active.isPlayer ? 'Jugador' : 'I.A.'} · Créditos: {active.credits} · Planetas: {active.planetIdsOwned.length}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <button style={{ ...styles.button, opacity: game.turnStarted ? 0.5 : 1 }} disabled={game.turnStarted} onClick={startTurn}>
              {game.turnStarted ? 'Turno iniciado' : 'Iniciar turno (producción)'}
            </button>
            {!active.isPlayer ? (
              <button style={styles.button} onClick={resolveAiTurn}>
                Resolver turno I.A.
              </button>
            ) : (
              <button style={{ ...styles.button, opacity: 0.6 }} disabled>
                (Jugador) Acciones — se implementan al cargar naves/eventos
              </button>
            )}
            <button style={styles.ghost} onClick={endTurn}>
              Fin de turno
            </button>
          </div>
        </div>

        <div style={styles.notice}>
          Según el manual, al inicio de partida el jugador activa 1 nodo gratis en su planeta natal. Aquí lo harás entrando en tu planeta natal y usando “Editar nodos” / “Activar”.
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={{ marginTop: 0 }}>Imperios</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          {Object.values(game.empires).map((e) => (
            <div key={e.id} style={styles.tile}>
              <div style={{ fontWeight: 800 }}>{e.name}</div>
              <div style={styles.small}>Créditos: {e.credits}</div>
              <div style={styles.small}>Planetas: {e.planetIdsOwned.length}</div>
              <div style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link style={styles.linkBtn} to={`/empire/${e.id}`}>
                  Ver ficha
                </Link>
                <Link style={styles.linkBtn} to={`/planet/${e.homePlanetId}`}>
                  Planeta natal
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={{ marginTop: 0 }}>Registro</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 260, overflow: 'auto' }}>
          {game.log.slice().reverse().slice(0, 80).map((l) => (
            <div key={l.ts} style={styles.logLine}>
              {new Date(l.ts).toLocaleTimeString()} — {l.msg}
            </div>
          ))}
          {game.log.length === 0 ? <div style={styles.small}>Sin acciones todavía.</div> : null}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { padding: 16, maxWidth: 980, margin: '0 auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', display: 'flex', flexDirection: 'column', gap: 12 },
  card: { border: '1px solid #ddd', borderRadius: 16, padding: 16 },
  kicker: { fontSize: 12, color: '#555' },
  big: { fontSize: 22, fontWeight: 900 },
  small: { fontSize: 12, color: '#555', lineHeight: 1.3 },
  button: { background: '#111', color: 'white', padding: '10px 14px', borderRadius: 12, border: 'none', cursor: 'pointer' },
  ghost: { background: 'transparent', color: '#111', padding: '10px 14px', borderRadius: 12, border: '1px solid #ddd', cursor: 'pointer' },
  tile: { border: '1px solid #eee', borderRadius: 16, padding: 12 },
  linkBtn: { textDecoration: 'none', padding: '8px 10px', borderRadius: 12, border: '1px solid #ddd', color: '#111', fontSize: 12 },
  logLine: { fontSize: 12, padding: '6px 8px', borderRadius: 10, border: '1px solid #f0f0f0' },
  notice: { marginTop: 12, fontSize: 12, color: '#333', padding: 10, borderRadius: 12, background: '#fafafa', border: '1px solid #f0f0f0' },
};

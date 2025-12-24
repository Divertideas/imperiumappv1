import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useGameStore } from '../../state/useGameStore';

export function MenuScreen() {
  const navigate = useNavigate();
  const game = useGameStore((s) => s.game);
  const load = useGameStore((s) => s.load);
  const reset = useGameStore((s) => s.reset);
  const save = useGameStore((s) => s.save);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.h1}>IMPERIUM — Companion App</h1>
        <p style={styles.p}>
          Web app (React) para gestionar imperios, planetas y (cuando carguemos el catálogo) flotas, con motor de I.A.
        </p>

        <div style={styles.row}>
          <Link to='/setup' style={styles.button}>
            Nueva partida
          </Link>

          {game ? (
            <button style={styles.button} onClick={() => navigate('/dashboard')}>
              Continuar
            </button>
          ) : (
            <button style={{ ...styles.button, opacity: 0.5 }} disabled>
              Continuar
            </button>
          )}
        </div>

        <div style={styles.row}>
          <button style={styles.ghost} onClick={reset}>
            Borrar partida guardada
          </button>
        </div>

        {game ? (
          <div style={styles.row}>
            <button
              style={styles.ghost}
              onClick={() => {
                save();
                const blob = new Blob([JSON.stringify(game, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'imperium-partida.json';
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              Exportar partida (JSON)
            </button>

            <label style={styles.ghost}>
              Importar partida (JSON)
              <input
                type='file'
                accept='application/json'
                style={{ display: 'none' }}
                onChange={(ev) => {
                  const file = ev.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    try {
                      const txt = String(reader.result || '');
                      localStorage.setItem('imperium_game_state_v1', txt);
                      load();
                      navigate('/dashboard');
                    } catch (e) {
                      alert('No se pudo importar el JSON.');
                    }
                  };
                  reader.readAsText(file);
                }}
              />
            </label>
          </div>
        ) : null}

        <p style={styles.small}>
          Nota: esta versión trae ya el catálogo base de planetas (stats + habilidad). Las rutas de nodos se pueden
          digitalizar desde “Editar nodos” en cada planeta.
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { padding: 16, maxWidth: 820, margin: '0 auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' },
  card: { border: '1px solid #ddd', borderRadius: 16, padding: 16 },
  h1: { margin: 0, fontSize: 28 },
  p: { marginTop: 8, marginBottom: 16, lineHeight: 1.4 },
  row: { display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 },
  button: { background: '#111', color: 'white', padding: '10px 14px', borderRadius: 12, textDecoration: 'none', border: 'none', cursor: 'pointer' },
  ghost: { background: 'transparent', color: '#111', padding: '10px 14px', borderRadius: 12, border: '1px solid #ddd', cursor: 'pointer' },
  small: { marginTop: 16, fontSize: 12, color: '#555', lineHeight: 1.3 },
};

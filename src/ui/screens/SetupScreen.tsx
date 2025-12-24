import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Difficulty, EmpireType } from '../../domain/models/types';
import { useGameStore } from '../../state/useGameStore';

const ALL_EMPIRES: { id: EmpireType; label: string }[] = [
  { id: 'HUMANOS', label: 'Humanos (Primus 11)' },
  { id: 'ROBOTIRANIDOS', label: 'Robotiránidos (Xil-Nah 12)' },
  { id: 'NOMADAS', label: 'Nómadas (Navui 13)' },
  { id: 'LEGION_HIERRO', label: 'Legión de Hierro (Tora 14)' },
  { id: 'MERCADERES', label: 'Mercaderes (Miradu 15)' },
];

export function SetupScreen() {
  const navigate = useNavigate();
  const newGame = useGameStore((s) => s.newGame);

  const [player, setPlayer] = useState<EmpireType>('HUMANOS');
  const [difficulty, setDifficulty] = useState<Difficulty>('6_PLANETAS');
  const rivalsCount = useMemo(() => (difficulty === '6_PLANETAS' ? 1 : difficulty === '12_PLANETAS' ? 2 : 3), [difficulty]);

  const rivalOptions = useMemo(() => ALL_EMPIRES.filter((e) => e.id !== player), [player]);
  const [rivals, setRivals] = useState<EmpireType[]>(['ROBOTIRANIDOS', 'NOMADAS']);

  // Ajusta array rivales al recuento
  const normalizedRivals = useMemo(() => {
    const base = rivals.filter((r) => r !== player);
    const unique: EmpireType[] = [];
    for (const r of base) if (!unique.includes(r)) unique.push(r);
    while (unique.length < rivalsCount) {
      const next = rivalOptions.find((o) => !unique.includes(o.id));
      if (!next) break;
      unique.push(next.id);
    }
    return unique.slice(0, rivalsCount);
  }, [rivals, rivalsCount, player, rivalOptions]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.h2}>Nueva partida</h2>

        <label style={styles.label}>
          Dificultad (objetivo de planetas conquistados)
          <select style={styles.select} value={difficulty} onChange={(e) => setDifficulty(e.target.value as Difficulty)}>
            <option value='6_PLANETAS'>Fácil — 6 planetas</option>
            <option value='12_PLANETAS'>Media — 12 planetas</option>
            <option value='18_PLANETAS'>Difícil — 18 planetas</option>
          </select>
        </label>

        <label style={styles.label}>
          Imperio del jugador
          <select style={styles.select} value={player} onChange={(e) => setPlayer(e.target.value as EmpireType)}>
            {ALL_EMPIRES.map((e) => (
              <option key={e.id} value={e.id}>
                {e.label}
              </option>
            ))}
          </select>
        </label>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Rivales ({normalizedRivals.length})</div>
          {Array.from({ length: rivalsCount }).map((_, idx) => (
            <select
              key={idx}
              style={styles.select}
              value={normalizedRivals[idx]}
              onChange={(e) => {
                const v = e.target.value as EmpireType;
                setRivals((prev) => {
                  const next = [...prev];
                  next[idx] = v;
                  return next;
                });
              }}
            >
              {rivalOptions.map((o) => (
                <option key={o.id} value={o.id} disabled={normalizedRivals.includes(o.id) && o.id !== normalizedRivals[idx]}>
                  {o.label}
                </option>
              ))}
            </select>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
          <button
            style={styles.button}
            onClick={() => {
              newGame(player, normalizedRivals, difficulty);
              navigate('/dashboard');
            }}
          >
            Iniciar
          </button>
          <button style={styles.ghost} onClick={() => navigate('/')}>
            Volver
          </button>
        </div>

        <p style={styles.small}>
          La partida se guarda automáticamente en el navegador (localStorage). Esta app es “online sin descarga”: la puedes publicar en GitHub Pages.
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { padding: 16, maxWidth: 820, margin: '0 auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' },
  card: { border: '1px solid #ddd', borderRadius: 16, padding: 16 },
  h2: { margin: 0, fontSize: 22 },
  label: { display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 },
  select: { padding: 10, borderRadius: 12, border: '1px solid #ddd' },
  section: { marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 },
  sectionTitle: { fontWeight: 700 },
  button: { background: '#111', color: 'white', padding: '10px 14px', borderRadius: 12, border: 'none', cursor: 'pointer' },
  ghost: { background: 'transparent', color: '#111', padding: '10px 14px', borderRadius: 12, border: '1px solid #ddd', cursor: 'pointer' },
  small: { marginTop: 16, fontSize: 12, color: '#555', lineHeight: 1.3 },
};

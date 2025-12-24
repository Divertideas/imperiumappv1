import type { CharacterDef } from '../models/types';

// Extraído del PDF "personajes comodín (mercenarios)".
// Nota: aquí solo guardamos el texto y el coste; la resolución de efectos la hace el jugador
// consultando el libro, si lo prefiere. La app sirve como hoja de registro + ayuda rápida.

export const CHARACTER_CATALOG: CharacterDef[] = [
  // GENERALES (1-6)
  {
    id: 1,
    type: 'GENERAL',
    level: 1,
    cost: 4,
    title: 'Ataque +1',
    text: 'Suma +1 Ataque a un planeta o una flota durante la duración del combate.',
  },
  {
    id: 2,
    type: 'GENERAL',
    level: 1,
    cost: 4,
    title: 'Defensa +1',
    text: 'Suma +1 Defensa a un planeta o una flota durante la duración del combate.',
  },
  {
    id: 3,
    type: 'GENERAL',
    level: 2,
    cost: 7,
    title: 'Ataque +1 / Defensa +2',
    text: 'Suma +1 Ataque y +2 Defensa a un planeta o una flota durante la duración del combate.',
  },
  {
    id: 4,
    type: 'GENERAL',
    level: 2,
    cost: 7,
    title: 'Ataque +2 / Defensa +1',
    text: 'Suma +2 Ataque y +1 Defensa a un planeta o una flota durante la duración del combate. Al finalizar el combate, se descarta.',
  },
  {
    id: 5,
    type: 'GENERAL',
    level: 3,
    cost: 11,
    title: 'Ataque +2 / Defensa +3',
    text: 'Suma +2 Ataque y +3 Defensa a un planeta o una flota durante la duración del combate.',
  },
  {
    id: 6,
    type: 'GENERAL',
    level: 3,
    cost: 10,
    title: 'Ataque +3 / Defensa +2',
    text: 'Suma +3 Ataque y +2 Defensa a un planeta o una flota durante la duración del combate. SOLO en el primer turno tira 1D6: si sale 6, el enemigo no puede atacar en ese turno. Al finalizar el combate, se descarta.',
  },

  // ESPIAS (7-12)
  {
    id: 7,
    type: 'ESPIA',
    level: 1,
    cost: 4,
    title: 'Sabotaje (nv.1)',
    text: 'Durante una invasión planetaria o combate espacial, antes de empezar tira 1D6: 5 inutiliza 1 nodo de defensa; 6 inutiliza 1 nodo de ataque. Al finalizar el combate, se descarta.',
  },
  {
    id: 8,
    type: 'ESPIA',
    level: 1,
    cost: 4,
    title: 'Sabotaje (nv.1)',
    text: 'Durante una invasión planetaria o combate espacial, antes de empezar tira 1D6: 5 inutiliza 1 nodo de ataque; 6 inutiliza 1 nodo de defensa. Al finalizar el combate, se descarta.',
  },
  {
    id: 9,
    type: 'ESPIA',
    level: 2,
    cost: 7,
    title: 'Sabotaje (nv.2)',
    text: 'Antes de empezar tira 1D6: 5 inutiliza 2 nodos de ataque; 6 inutiliza 2 nodos de defensa. Al finalizar el combate, se descarta.',
  },
  {
    id: 10,
    type: 'ESPIA',
    level: 2,
    cost: 7,
    title: 'Sabotaje (nv.2)',
    text: 'Antes de empezar tira 1D6: 4 inutiliza 1 nodo de ataque; 5 inutiliza 2 nodos de defensa; 6 inutiliza 2 nodos de ataque. Al finalizar el combate, se descarta.',
  },
  {
    id: 11,
    type: 'ESPIA',
    level: 3,
    cost: 11,
    title: 'Sabotaje (nv.3)',
    text: 'Antes de empezar tira 1D6: 4 inutiliza 1 nodo de defensa; 5 inutiliza todos los nodos de defensa; 6 inutiliza todos los nodos de ataque. Al finalizar el combate, se descarta.',
  },
  {
    id: 12,
    type: 'ESPIA',
    level: 3,
    cost: 11,
    title: 'Sabotaje (nv.3)',
    text: 'Antes de empezar tira 1D6: 4 inutiliza 1 nodo de ataque y 1 de defensa; 5 inutiliza todos los nodos de ataque; 6 inutiliza todos los nodos de defensa. Al finalizar el combate, se descarta.',
  },

  // DIPLOMÁTICOS (13-18)
  {
    id: 13,
    type: 'DIPLOMATICO',
    level: 1,
    cost: 4,
    title: 'Resolución diplomática (nv.1)',
    text: 'Durante una invasión planetaria o combate espacial, en cualquier momento puedes usarlo. Tira 1D6: con 6 ganas el combate automáticamente; con 1-5, cualquier nave o planeta de tu bando sufre 2 PR. Solo se tira una vez y se descarta.',
  },
  {
    id: 14,
    type: 'DIPLOMATICO',
    level: 1,
    cost: 4,
    title: 'Resolución diplomática (nv.1)',
    text: 'Durante una invasión planetaria o combate espacial: 1D6. Con 6 ganas automáticamente; con 1-5, cualquier nave o planeta de tu bando sufre 2 PR. Solo una tirada y se descarta.',
  },
  {
    id: 15,
    type: 'DIPLOMATICO',
    level: 2,
    cost: 7,
    title: 'Resolución diplomática (nv.2)',
    text: '1D6: con 6 ganas automáticamente; con 1-3, cualquier nave o planeta de tu bando sufre 2 PR. Solo una tirada y se descarta.',
  },
  {
    id: 16,
    type: 'DIPLOMATICO',
    level: 2,
    cost: 7,
    title: 'Resolución diplomática (nv.2)',
    text: '1D6: con 6 ganas automáticamente; con 1-3, cualquier nave o planeta de tu bando sufre 2 PR. Solo una tirada y se descarta.',
  },
  {
    id: 17,
    type: 'DIPLOMATICO',
    level: 3,
    cost: 11,
    title: 'Resolución diplomática (nv.3)',
    text: '1D6: con 5-6 ganas automáticamente; con 1-2, cualquier nave o planeta de tu bando sufre 2 PR. Solo una tirada y se descarta.',
  },
  {
    id: 18,
    type: 'DIPLOMATICO',
    level: 3,
    cost: 11,
    title: 'Resolución diplomática (nv.3)',
    text: '1D6: con 5-6 ganas automáticamente; con 1-2, cualquier nave o planeta de tu bando sufre 2 PR. Solo una tirada y se descarta.',
  },
];

export function getCharacterDef(id: number): CharacterDef | undefined {
  return CHARACTER_CATALOG.find((c) => c.id === id);
}

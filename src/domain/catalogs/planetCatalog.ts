import type { PlanetDef } from '../models/types';

// Catálogo base de planetas (stats + habilidad).
// Nota: Los diagramas de nodos (rutas) se completan desde el editor de nodos de la app.
// Fuente: planetas.pdf.

export const planetCatalog: PlanetDef[] = [
  {
    id: 11,
    name: 'PRIMUS',
    isHomeworld: true,
    base: { prod: 1, prIcons: 4, atk: 2, def: 2 },
    special: {
      key: 'ASTRONAVEGANTES',
      title: 'Astronavegantes',
      text: 'Mientras controlan este planeta, cuando compran una nave, pueden activar un nodo de esa nave de forma gratuita.',
    },
  },
  {
    id: 12,
    name: 'XIL-NAH',
    isHomeworld: true,
    base: { prod: 1, prIcons: 4, atk: 2, def: 2 },
    special: {
      key: 'NACIDOS_PARA_LA_GUERRA',
      title: 'Nacidos para la guerra',
      text: 'Mientras controlas este planeta, suma +1 de Ataque a cada nave cuando atacas un planeta de cualquier tipo.',
    },
  },
  {
    id: 13,
    name: 'NAVUI',
    isHomeworld: true,
    base: { prod: 1, prIcons: 4, atk: 2, def: 2 },
    special: {
      key: 'VIAJEROS_NATOS',
      title: 'Viajeros natos',
      text: 'Si en un evento les sale un resultado negativo, vuelven a tirar dados y se quedan con el segundo resultado, sea positivo o negativo.',
    },
  },
  {
    id: 14,
    name: 'TORA',
    isHomeworld: true,
    base: { prod: 1, prIcons: 4, atk: 2, def: 2 },
    special: {
      key: 'ULTIMO_BASTION',
      title: 'Último bastión',
      text: '+1 defensa en todos los planetas que tengan un nodo de defensa activo mientras se controle este mundo.',
    },
  },
  {
    id: 15,
    name: 'MIRADU',
    isHomeworld: true,
    base: { prod: 1, prIcons: 4, atk: 2, def: 2 },
    special: {
      key: 'BUENOS_COMERCIANTES',
      title: 'Buenos comerciantes',
      text: 'Ganan +2 créditos cada vez que compran una nave mientras posean este planeta.',
    },
  },
  {
    id: 16,
    name: 'AURELION',
    base: { prod: 1,
      prIcons: 5, atk: 1, def: 1 },
    special: {
      key: 'NONE',
      title: 'Nave abandonada',
      text: 'Tras la conquista, recuperas la nave destruida de menor coste de tu flota.',
    },
  },
  {
    id: 21,
    name: 'KALDRUM',
    base: { prod: 1,
      prIcons: 6, atk: 1, def: 0 },
    special: {
      key: 'ESCUDOS_TERMICOS',
      title: 'Escudos térmicos',
      text: 'Durante la batalla, a cada nueva ronda, el planeta aumenta su DEF +1.',
    },
  },
  {
    id: 22,
    name: 'RAX-∆7',
    base: { prod: 2, prIcons: 2, atk: 2, def: 0 },
    special: {
      key: 'CHATARRERIA_ORBITAL',
      title: 'Chatarrería orbital',
      text: '+2 crédito adicional cuando se conquista este planeta.',
    },
  },
  {
    id: 23,
    name: 'VELAE PRIME',
    base: { prod: 1,
      prIcons: 5, atk: 1, def: 1 },
    special: {
      key: 'PLAGAS_CORROSIVAS',
      title: 'Plagas corrosivas',
      text: 'Las naves invasoras tiran dos veces los dados cuando se defienden y se quedan el peor resultado.',
    },
  },
  {
    id: 24,
    name: 'ALMORU-AG',
    base: { prod: 4,
      prIcons: 5, atk: 4, def: 5 },
    special: {
      key: 'MUNDO_COLMENA',
      title: 'Mundo Colmena',
      text: 'Tras la conquista, sumas +4 créditos.',
    },
  },
  {
    id: 25,
    name: 'VIRGAL',
    base: { prod: 1,
      prIcons: 5, atk: 0, def: 0 },
    special: {
      key: 'ENERGIA_CURATIVA',
      title: 'Energía curativa',
      text: 'Si ganas el combate, las naves que han sobrevivido recuperan todos sus PR.',
    },
  },
  {
    id: 26,
    name: 'VULCANO',
    base: { prod: 2,
      prIcons: 5, atk: 1, def: 3 },
    special: {
      key: 'ATMOSFERA_ABRASADORA',
      title: 'Atmósfera abrasadora',
      text: 'Todas las naves sufren 1 daño de PR antes de empezar el combate.',
    },
  },
  {
    id: 31,
    name: 'TUXA',
    base: { prod: 2,
      prIcons: 6, atk: 2, def: 2 },
    special: {
      key: 'INTERFERENCIA_ANILLOS',
      title: 'Interferencia de anillos',
      text: 'En cada ATAQUE, tira dos veces el dado y quédate con el peor resultado.',
    },
  },
  {
    id: 32,
    name: 'URKO',
    base: { prod: 1,
      prIcons: 6, atk: 1, def: 1 },
    special: {
      key: 'AL_INTERIOR',
      title: '¡Al interior!',
      text: 'El planeta suma +2 de defensa y +2 de Ataque por cada nave invasora de coste 5 o más.',
    },
  },
  {
    id: 33,
    name: 'TIRIAN',
    base: { prod: 0,
      prIcons: 5, atk: 1, def: 2 },
    special: {
      key: 'TRATADO_COMERCIAL',
      title: 'Tratado comercial',
      text: 'Cuando se conquista, suma 1 crédito por cada planeta que poseas.',
    },
  },
  {
    id: 34,
    name: 'CRISTALINO',
    base: { prod: 3,
      prIcons: 6, atk: 0, def: 3 },
    special: {
      key: 'PIEL_DE_DIAMANTE',
      title: 'Piel de diamante',
      text: 'Cada ataque con un resultado de dado 5-6 se considera fallo automático.',
    },
  },
  {
    id: 35,
    name: 'GORASH',
    base: { prod: 1,
      prIcons: 6, atk: 2, def: 2 },
    special: {
      key: 'FUGA_DE_CREDITOS',
      title: 'Fuga de créditos',
      text: 'Al conquistarlo, elige al Imperio rival más débil y súmate tantos créditos como planetas tenga.',
    },
  },
  {
    id: 36,
    name: 'CITADEL',
    base: { prod: 4,
      prIcons: 5, atk: 0, def: 0 },
    special: {
      key: 'MIMETISMO',
      title: 'Mimetismo',
      text: 'El planeta tiene el mismo ataque base y la misma defensa base que la nave invasora más poderosa.',
    },
  },
  {
    id: 41,
    name: 'FENTA',
    base: { prod: 1,
      prIcons: 6, atk: 1, def: 1 },
    special: {
      key: 'PILLAJE',
      title: 'Pillaje',
      text: 'Al inicio del combate, el invasor se descuenta 3 créditos. Si no los tiene, pierde el combate automáticamente. Si gana la conquista, suma 7 créditos.',
    },
  },
  {
    id: 42,
    name: 'ARENARH',
    base: { prod: 0,
      prIcons: 6, atk: 1, def: 1 },
    special: {
      key: 'TERRAFORMADOR',
      title: 'Terraformador',
      text: 'Al conquistarlo, tira un dado y suma el número resultante como si fuesen mejoras de producción. Cada vez que es conquistado, se mantiene ese resultado anterior y se vuelve a tirar el dado para sumar el resultado.',
    },
  },
  {
    id: 43,
    name: 'NIMBUS',
    base: { prod: 2,
      prIcons: 5, atk: 1, def: 2 },
    special: {
      key: 'BLOQUEO_AEREO',
      title: 'Bloqueo aéreo',
      text: 'Solo puedes usar una nave al intentar invadir este planeta.',
    },
  },
  {
    id: 44,
    name: 'HIVIA',
    base: { prod: 1,
      prIcons: 6, atk: 0, def: 2 },
    special: {
      key: 'CUNA_DE_GUERREROS',
      title: 'Cuna de guerreros',
      text: 'Si el jugador lo conquista, puede sumar gratis un personaje comodín tipo “General” de nivel 3 que no tenga.',
    },
  },
  {
    id: 45,
    name: 'PERPETUO',
    base: { prod: 1,
      prIcons: 6, atk: 1, def: 1 },
    special: {
      key: 'SIN_INTERES',
      title: 'Sin interés',
      text: 'Este planeta no tiene ninguna habilidad especial.',
    },
  },
  {
    id: 46,
    name: 'ROOCHE',
    base: { prod: 2,
      prIcons: 5, atk: 3, def: 3 },
    special: {
      key: 'MEJORA_DE_CASCO',
      title: 'Mejora de casco',
      text: 'Al conquistarlo, las naves que sobrevivan a este combate mejoran gratis todos sus nodos de defensa.',
    },
  },
  {
    id: 51,
    name: 'KALAGHAN',
    base: { prod: 0,
      prIcons: 6, atk: 0, def: 0 },
    special: {
      key: 'BIENVENIDOS',
      title: '¡Bienvenidos!',
      text: 'Cada vez que es conquistado (tras calcular las consecuencias de la invasión), se desbloquea un nodo de producción gratis.',
    },
  },
  {
    id: 52,
    name: 'XEROS',
    base: { prod: 0,
      prIcons: 6, atk: 1, def: 1 },
    special: {
      key: 'ARSENAL_NUCLEAR',
      title: 'Arsenal nuclear',
      text: 'Todas las naves sufren 1 PR antes del combate. Si es conquistado, las naves que sobrevivan mejoran gratis todos sus nodos de Ataque.',
    },
  },
  {
    id: 53,
    name: 'SHRILANK',
    base: { prod: 0,
      prIcons: 5, atk: 0, def: 0 },
    special: {
      key: 'PODER_DE_LA_FE',
      title: 'El poder de la fe',
      text: 'Cuando se conquista, consigues sin luchar un planeta ajeno a tu imperio que no sea natal. Tira dos dados para obtener el resultado.',
    },
  },
  {
    id: 54,
    name: 'ROMULUS',
    base: { prod: 3,
      prIcons: 6, atk: 2, def: 4 },
    special: {
      key: 'HABILIDOSOS',
      title: 'Habilidosos',
      text: 'Si conquistas el planeta, una de las naves que sobreviva desbloquea automáticamente su habilidad especial.',
    },
  },
  {
    id: 55,
    name: 'VIVIRIAN',
    base: { prod: 1,
      prIcons: 6, atk: 0, def: 0 },
    special: {
      key: 'PLANETA_PARAISO',
      title: 'Planeta paraíso',
      text: 'Si conquistas el planeta, todas las naves supervivientes recuperan sus PR.',
    },
  },
  {
    id: 56,
    name: 'WASP',
    base: { prod: 1,
      prIcons: 5, atk: 1, def: 1 },
    special: {
      key: 'DEVORAMUNDOS',
      title: 'Devoramundos',
      text: 'Cuando se conquista, tira un dado. Si sale 5-6, destruyes el planeta más poderoso del Imperio rival con más planetas (que no sea natal).',
    },
  },
  {
    id: 61,
    name: 'NECRONO',
    base: { prod: 3,
      prIcons: 6, atk: 0, def: 0 },
    special: {
      key: 'FLOTA_MERCENARIA',
      title: 'Flota mercenaria',
      text: 'Durante el combate, además de luchar contra el planeta lo haces contra una nave idéntica a tu nave más poderosa pero sin mejoras.',
    },
  },
  {
    id: 62,
    name: 'CALISTO',
    base: { prod: 4,
      prIcons: 6, atk: 3, def: 7 },
    special: {
      key: 'DESGASTE',
      title: 'Desgaste',
      text: 'A cada turno, su defensa se reduce un punto.',
    },
  },
  {
    id: 63,
    name: 'SAUTY',
    base: { prod: 1,
      prIcons: 5, atk: 1, def: 2 },
    special: {
      key: 'EMIGRACION_MASIVA',
      title: 'Emigración masiva',
      text: 'Cuando se conquista, activa gratis 1 nodo de producción a todos los planetas que poseas.',
    },
  },
  {
    id: 64,
    name: 'HOLO',
    base: { prod: 1,
      prIcons: 6, atk: 4, def: 4 },
    special: {
      key: 'MEJORAS_DE_ARMAMENTO',
      title: 'Mejoras de armamento',
      text: 'Cuando se conquista, se desbloquea gratis un nodo de ataque en todos los planetas que poseas.',
    },
  },
  {
    id: 65,
    name: 'IGNIO',
    base: { prod: 1,
      prIcons: 6, atk: 1, def: 2 },
    special: {
      key: 'UPGRADE',
      title: 'Upgrade',
      text: 'Si conquistas el planeta, cambias obligatoriamente una nave que tengas de coste 4 o menos por una de coste inmediatamente superior.',
    },
  },
  {
    id: 66,
    name: 'XENO-UTSARH',
    base: { prod: 6,
      prIcons: 5, atk: 8, def: 8 },
    special: {
      key: 'XENO_UTSARH',
      title: 'Xeno-Utsarh',
      text: 'Al intentar conquistarlo, antes de cada ataque normal tira un dado: con 1-3 no puedes aplicar las actualizaciones (nodos) de la nave. Al conquistarlo, los 4 planetas menos poderosos del Imperio activan todos sus nodos. Además, +1 ATQ y +1 DEF a todas las naves del Imperio mientras se controla.',
    },
  },
];

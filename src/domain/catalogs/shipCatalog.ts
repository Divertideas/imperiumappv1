import type { ShipModelDef } from '../models/types';

export const shipCatalog: ShipModelDef[] = [
  {
    id: 1,
    empire: "HUMANOS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 1,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 2,
    empire: "HUMANOS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 2,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 3,
    empire: "HUMANOS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 3,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 4,
    empire: "HUMANOS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 4,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 5,
    empire: "HUMANOS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 5,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 6,
    empire: "HUMANOS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 6,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 7,
    empire: "HUMANOS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 7,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 8,
    empire: "HUMANOS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 8,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 9,
    empire: "HUMANOS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 9,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 10,
    empire: "HUMANOS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 10,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 11,
    empire: "HUMANOS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 11,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 12,
    empire: "HUMANOS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 12,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 13,
    empire: "HUMANOS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 13,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 14,
    empire: "HUMANOS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 14,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 15,
    empire: "HUMANOS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 15,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 16,
    empire: "HUMANOS",
    shipClass: "CAPITAL",
    cost: 14,
    base: {
      atk: 5,
      def: 6,
      prIcons: 16,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "AGUJERO_NEGRO",
      title: "Ataque especial (tras ataque normal)",
      text: "Elige una opción y tira 1D6. Agujero negro: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 6, al principio del siguiente turno destruyes el planeta que invades. Bombardeo planetario: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 5-6, al principio del siguiente turno destruyes todos los nodos activos del planeta. Aniquilador de flotas: si sale 4-6 vuelve a tirar; si en la segunda 5-6, al principio del siguiente turno todas las naves rivales reducen sus PR actuales a la mitad. Hackeo: si sale 5-6 vuelve a tirar; si en la segunda 5-6, al empezar el siguiente turno te quedas con la nave rival de menor coste contra la que combates.",
    },
  },
  {
    id: 17,
    empire: "ROBOTIRANIDOS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 17,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 18,
    empire: "ROBOTIRANIDOS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 18,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 19,
    empire: "ROBOTIRANIDOS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 19,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 20,
    empire: "ROBOTIRANIDOS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 20,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 21,
    empire: "ROBOTIRANIDOS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 21,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 22,
    empire: "ROBOTIRANIDOS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 22,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 23,
    empire: "ROBOTIRANIDOS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 23,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 24,
    empire: "ROBOTIRANIDOS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 24,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 25,
    empire: "ROBOTIRANIDOS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 25,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 26,
    empire: "ROBOTIRANIDOS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 26,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 27,
    empire: "ROBOTIRANIDOS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 27,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 28,
    empire: "ROBOTIRANIDOS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 28,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 29,
    empire: "ROBOTIRANIDOS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 29,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 30,
    empire: "ROBOTIRANIDOS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 30,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 31,
    empire: "ROBOTIRANIDOS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 31,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 32,
    empire: "ROBOTIRANIDOS",
    shipClass: "CAPITAL",
    cost: 14,
    base: {
      atk: 5,
      def: 6,
      prIcons: 32,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "AGUJERO_NEGRO",
      title: "Ataque especial (tras ataque normal)",
      text: "Elige una opción y tira 1D6. Agujero negro: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 6, al principio del siguiente turno destruyes el planeta que invades. Bombardeo planetario: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 5-6, al principio del siguiente turno destruyes todos los nodos activos del planeta. Aniquilador de flotas: si sale 4-6 vuelve a tirar; si en la segunda 5-6, al principio del siguiente turno todas las naves rivales reducen sus PR actuales a la mitad. Hackeo: si sale 5-6 vuelve a tirar; si en la segunda 5-6, al empezar el siguiente turno te quedas con la nave rival de menor coste contra la que combates.",
    },
  },
  {
    id: 33,
    empire: "NOMADAS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 33,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 34,
    empire: "NOMADAS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 34,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 35,
    empire: "NOMADAS",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 35,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 36,
    empire: "NOMADAS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 36,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 37,
    empire: "NOMADAS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 37,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 38,
    empire: "NOMADAS",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 38,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 39,
    empire: "NOMADAS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 39,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 40,
    empire: "NOMADAS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 40,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 41,
    empire: "NOMADAS",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 41,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 42,
    empire: "NOMADAS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 42,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 43,
    empire: "NOMADAS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 43,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 44,
    empire: "NOMADAS",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 44,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 45,
    empire: "NOMADAS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 45,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 46,
    empire: "NOMADAS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 46,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 47,
    empire: "NOMADAS",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 47,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 48,
    empire: "NOMADAS",
    shipClass: "CAPITAL",
    cost: 14,
    base: {
      atk: 5,
      def: 6,
      prIcons: 48,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "AGUJERO_NEGRO",
      title: "Ataque especial (tras ataque normal)",
      text: "Elige una opción y tira 1D6. Agujero negro: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 6, al principio del siguiente turno destruyes el planeta que invades. Bombardeo planetario: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 5-6, al principio del siguiente turno destruyes todos los nodos activos del planeta. Aniquilador de flotas: si sale 4-6 vuelve a tirar; si en la segunda 5-6, al principio del siguiente turno todas las naves rivales reducen sus PR actuales a la mitad. Hackeo: si sale 5-6 vuelve a tirar; si en la segunda 5-6, al empezar el siguiente turno te quedas con la nave rival de menor coste contra la que combates.",
    },
  },
  {
    id: 49,
    empire: "LEGION_HIERRO",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 49,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 50,
    empire: "LEGION_HIERRO",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 50,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 51,
    empire: "LEGION_HIERRO",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 51,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 52,
    empire: "LEGION_HIERRO",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 52,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 53,
    empire: "LEGION_HIERRO",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 53,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 54,
    empire: "LEGION_HIERRO",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 54,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 55,
    empire: "LEGION_HIERRO",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 55,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 56,
    empire: "LEGION_HIERRO",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 56,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 57,
    empire: "LEGION_HIERRO",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 57,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 58,
    empire: "LEGION_HIERRO",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 58,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 59,
    empire: "LEGION_HIERRO",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 59,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 60,
    empire: "LEGION_HIERRO",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 60,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 61,
    empire: "LEGION_HIERRO",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 61,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 62,
    empire: "LEGION_HIERRO",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 62,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 63,
    empire: "LEGION_HIERRO",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 63,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 64,
    empire: "LEGION_HIERRO",
    shipClass: "CAPITAL",
    cost: 14,
    base: {
      atk: 5,
      def: 6,
      prIcons: 64,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "AGUJERO_NEGRO",
      title: "Ataque especial (tras ataque normal)",
      text: "Elige una opción y tira 1D6. Agujero negro: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 6, al principio del siguiente turno destruyes el planeta que invades. Bombardeo planetario: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 5-6, al principio del siguiente turno destruyes todos los nodos activos del planeta. Aniquilador de flotas: si sale 4-6 vuelve a tirar; si en la segunda 5-6, al principio del siguiente turno todas las naves rivales reducen sus PR actuales a la mitad. Hackeo: si sale 5-6 vuelve a tirar; si en la segunda 5-6, al empezar el siguiente turno te quedas con la nave rival de menor coste contra la que combates.",
    },
  },
  {
    id: 65,
    empire: "MERCADERES",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 65,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 66,
    empire: "MERCADERES",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 66,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 67,
    empire: "MERCADERES",
    shipClass: "FRAGATA",
    cost: 3,
    base: {
      atk: 1,
      def: 1,
      prIcons: 67,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "CAZAS",
      title: "Cazas (ataque relámpago)",
      text: "Tras atacar, tira 1D6. 1-4: el dado del ataque enemigo del siguiente turno se reduce 1 punto. 5-6: se reduce a la mitad. Luego los cazas vuelven a la fragata.",
    },
  },
  {
    id: 68,
    empire: "MERCADERES",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 68,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 69,
    empire: "MERCADERES",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 69,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 70,
    empire: "MERCADERES",
    shipClass: "CANONERO",
    cost: 4,
    base: {
      atk: 2,
      def: 1,
      prIcons: 70,
    },
    upgrades: {
      level1Nodes: 1,
      level2Nodes: 3,
    },
    special: {
      key: "BATERIA_MISILES",
      title: "Ataque especial: Batería de misiles / Escudo defensivo",
      text: "Elige una opción y tira 1D6. Batería de misiles: con 5-6 suma +2 al ataque en su siguiente turno. Escudo defensivo: con 5-6 suma +2 a la defensa en el siguiente turno.",
    },
  },
  {
    id: 71,
    empire: "MERCADERES",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 71,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 72,
    empire: "MERCADERES",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 72,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 73,
    empire: "MERCADERES",
    shipClass: "CRUCERO",
    cost: 5,
    base: {
      atk: 2,
      def: 2,
      prIcons: 73,
    },
    upgrades: {
      level1Nodes: 2,
      level2Nodes: 2,
      level2BonusAtk: 1,
    },
    special: {
      key: "PULSO_ELECTROMAGNETICO",
      title: "Pulso electromagnético / Sobrecarga de sistemas",
      text: "Elige una opción y tira 1D6. Con 4-6, al principio del siguiente turno destruyes 1 nodo del planeta: ATQ (pulso) o DEF (sobrecarga).",
    },
  },
  {
    id: 74,
    empire: "MERCADERES",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 74,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 75,
    empire: "MERCADERES",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 75,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 76,
    empire: "MERCADERES",
    shipClass: "APOYO",
    cost: 6,
    base: {
      atk: 0,
      def: 2,
      prIcons: 76,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "DISRUPCION_APOYO",
      title: "Disrupción (sin ataque normal)",
      text: "No tiene ataque normal. En lugar de atacar, tira 1D6: 1 nada; 2-3 ninguna nave rival puede atacarla el siguiente turno; 4-5 desactivas la nave rival con más ATQ (no atacará el siguiente turno); 6 desactivas todas las naves rivales (no atacan el siguiente turno). Alternativa: tirar 1D6 y con 6 la nave aliada que combate recupera 1 PR.",
    },
  },
  {
    id: 77,
    empire: "MERCADERES",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 77,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 78,
    empire: "MERCADERES",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 78,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 79,
    empire: "MERCADERES",
    shipClass: "DESTRUCTOR",
    cost: 7,
    base: {
      atk: 3,
      def: 4,
      prIcons: 79,
    },
    upgrades: {
      level1Nodes: 3,
      level2Nodes: 4,
    },
    special: {
      key: "BOMBARDEO_PLANETARIO",
      title: "Bombardeo planetario / Contramedidas",
      text: "Tras atacar, elige una opción y tira 1D6. Bombardeo: con 5 destruyes la mitad de los nodos DEF del planeta; con 6 destruyes todos. Contramedidas: con 5 recibes la mitad del ataque total en el próximo ataque enemigo; con 6 no recibes daño (da igual el resultado).",
    },
  },
  {
    id: 80,
    empire: "MERCADERES",
    shipClass: "CAPITAL",
    cost: 14,
    base: {
      atk: 5,
      def: 6,
      prIcons: 80,
    },
    upgrades: {
      level1Nodes: 0,
      level2Nodes: 0,
    },
    special: {
      key: "AGUJERO_NEGRO",
      title: "Ataque especial (tras ataque normal)",
      text: "Elige una opción y tira 1D6. Agujero negro: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 6, al principio del siguiente turno destruyes el planeta que invades. Bombardeo planetario: si sale 3-6 vuelve a tirar; si en la segunda tirada sale 5-6, al principio del siguiente turno destruyes todos los nodos activos del planeta. Aniquilador de flotas: si sale 4-6 vuelve a tirar; si en la segunda 5-6, al principio del siguiente turno todas las naves rivales reducen sus PR actuales a la mitad. Hackeo: si sale 5-6 vuelve a tirar; si en la segunda 5-6, al empezar el siguiente turno te quedas con la nave rival de menor coste contra la que combates.",
    },
  }
] as const;

export function getShipModel(id: number) {
  const m = shipCatalog.find((s) => s.id === id);
  if (!m) throw new Error(`Ship model not found: ${id}`);
  return m;
}

export function shipModelsForEmpire(empire: ShipModelDef['empire']) {
  return shipCatalog.filter((s) => s.empire === empire);
}

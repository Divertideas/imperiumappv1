# IMPERIUM — Companion Web App (React)

Proyecto React + TypeScript (Vite) para acompañar el librojuego **IMPERIUM**.

Incluye ya:
- Menú + setup (elige imperio jugador y rivales)
- Tablero de turnos (rotación de turnos + log)
- Ficha de imperio (planetas conquistados)
- Ficha de planeta (stats + habilidad) + **editor de grafo de nodos** por planeta (se guarda en la partida)

Catálogo de planetas:
- Precargado con stats + habilidad de los planetas más relevantes del PDF `planetas.pdf` (11-15 y un conjunto amplio de planetas 16..66).
- Los diagramas de nodos se completan en la app (porque en el PDF vienen como iconos/rutas).

Pendiente (cuando se añada catálogo de naves/eventos):
- Motor completo de exploración, compra/upgrade de naves, combate, daños de invasión, éxodo.
- IA completa (ahora está el esqueleto con logs).

## Ejecutar en local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages (sin servidor)
1. En `vite.config.ts`, fija `base` con el nombre del repo:
   ```ts
   export default defineConfig({
     base: '/NOMBRE_REPO/',
     plugins: [react()],
   })
   ```
2. Build:
   ```bash
   npm run build
   ```
3. Publica `/dist` con GitHub Pages (Settings → Pages → Deploy from branch) o con `gh-pages`.

Recomendación: usar `gh-pages`:
```bash
npm i -D gh-pages
```

En `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

Luego:
```bash
npm run build
npm run deploy
```

# PixelRoyale 3D

Separate Three.js browser-game rebuild. Original 2D repository is not modified.

## Run locally
Serve this folder over HTTP, e.g. `python -m http.server 8000`, then open http://localhost:8000.

## GitHub Pages
Enable Pages in Settings → Pages → GitHub Actions. The included workflow deploys the root folder.

## Current playable build
- Third-person 3D island with six named landmarks and a Pulse reactor.
- Battle Royale: player vs 23 bots, loot, storm timer, weapons, pickups, eliminations and match results.
- Box Fights: 1v1 arena loop and round-style match finish.
- Movement, mouse aiming, firing, reload, weapon selection, building, healing and shield.
- HUD, minimap, menu, shop/locker/stats/settings panels, Pulse news and trailer.
- Local career save data and room connection entry points to the existing Worker.

## Controls
WASD move · Mouse aim · Left click fire · 1–5 select weapon · R reload · E pickup · F build · H medkit · J shield · K Chug Jug · Esc pause.

## Technical notes
Three.js 0.160.0 is loaded from jsDelivr. Game simulation and bots run client-side. The multiplayer Worker URL is the existing PixelRoyale Worker; this initial 3D build uses the relay connection as a room entry point and does not yet provide authoritative synchronized 3D combat. This is an early playable conversion, not a claim of exact feature parity with the original 2D game.

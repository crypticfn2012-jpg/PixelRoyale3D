# PixelRoyale 3D

A separate third-person Three.js rebuild of PixelRoyale. This project is maintained in its own repository; the original 2D game repository is unchanged.

## Play

https://crypticfn2012-jpg.github.io/PixelRoyale3D/

The GitHub Pages deployment loads Three.js 0.160.0 from jsDelivr and the original PixelRoyale weapon and menu art directly from the original repository.

## Game modes

### Battle Royale
- 24 combatants: one player and 23 AI opponents.
- Six named island locations, terrain, roads, buildings, trees and the Pulse Core.
- Weapon loot, five rarity tiers, five inventory slots, ammo and reloads.
- Health, shields, medkits, shield potions, Chug Jugs and Pulse Splash.
- A staged shrinking storm that damages players and bots outside the safe zone.
- Three Pulse bosses (The Warden, The Ravager and The Oracle), boss attacks and second phases.
- Sixteen Pulse shard effects and boss-exclusive weapon drops.
- Elimination drops, placement, XP, coins and match results.

### Box Fights
- 1v1 against an AI opponent.
- First to five rounds; health, shields and loadout reset between rounds.
- Assault Rifle and Shotgun loadout.
- Buildable 250-HP walls, bullet collision, wall damage and a simple window edit.

### Pure Weapon Roulette
- 23 AI opponents with respawns.
- The player advances through the weapon order after each elimination, starting with high-powered weapons and moving towards weaker ones.
- First to 30 eliminations or a five-minute match limit.
- Player respawns; the current weapon and kill count are retained.
- Building and private matchmaking are disabled in this solo mode.

## Account, cosmetics and menus
- Shop and Locker with 20 outfits, 18 hats, 17 trails and 10 build styles.
- Equipped hats appear on the 3D character; trails emit particles while moving; build styles recolour walls.
- Account XP, levels, coins, lifetime statistics and saved progress.
- Permanent starting-shield, reload-speed and wood upgrades.
- Resettable daily and weekly challenges.
- A 50-tier Season 01: Pulse PixelPass, including an unlockable premium track.
- Graphics quality, camera FOV, mouse sensitivity and FPS settings.
- Pulse news panel and a 34-second season trailer sequence.
- Responsive HUD, minimap, pause screen and mobile action buttons.

## Controls

| Input | Action |
|---|---|
| WASD | Move |
| Mouse | Aim / rotate camera |
| Left click | Fire |
| Space | Jump |
| Shift | Sprint |
| 1–5 | Select weapon slot |
| R | Reload |
| E | Pick up a weapon or shard |
| F | Build a wall |
| V | Edit a nearby wall |
| H | Use medkit |
| J | Use shield potion |
| K | Use Chug Jug |
| L | Use Pulse Splash |
| Q | Activate equipped Pulse shard |
| X | Pulse Dash |
| Esc / P | Pause |

## Multiplayer status

The party interface uses the existing PixelRoyale Cloudflare Worker for room creation, joining, queue matchmaking, kicking, player-state relay, shots and builds. The 3D client currently simulates combat and AI locally. The Worker is a relay, not a server-authoritative game simulation, so this should not be treated as competitive-grade online multiplayer yet. Pure Weapon Roulette is currently solo-only.

## Technical notes

The game is a substantial 3D rebuild, not a verified one-to-one port of every original 2D system. It uses procedural low-poly characters, weapon models, an island and gameplay systems. Some original systems and exact balance values may still differ.

To run locally, serve this directory over HTTP (ES modules do not work reliably from `file://`):

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

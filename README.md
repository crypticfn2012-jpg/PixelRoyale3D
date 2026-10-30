# PixelRoyale 3D

A separate third-person Three.js rebuild inspired by the original PixelRoyale browser game. The 2D repository is not modified.

## Play

When GitHub Pages is enabled for this repository, the game is served from:

https://crypticfn2012-jpg.github.io/PixelRoyale3D/

The game loads Three.js 0.160.0 from jsDelivr and original PixelRoyale image assets directly from the original repository.

## Game modes

### Battle Royale
- 24 combatants: the player and 23 bots.
- Island loot, weapon rarities, weapon swaps, ammo and reloads.
- Health, shield, medkits, shield potions, Chug Jugs and Pulse Splash.
- A staged shrinking storm with a changing safe zone and storm damage.
- Three Pulse boss encounters: The Warden, The Ravager and The Oracle.
- Boss attacks, second-phase behaviour, 16 shard variants and boss-only weapons.
- Elimination drops, match placement and victory rewards.

### Box Fights
- 1v1 against a named bot.
- First to five rounds, with the score carried between rounds.
- Assault Rifle and Shotgun loadout, 100 health and 100 shield.
- Buildable walls, wall damage, a simple edit window and round resets.

## Account and menus
- Shop and Locker with unlockable outfits and equipped skin saving.
- Account XP, levels, coins, statistics and match rewards.
- Permanent upgrades, challenge rewards and a 50-tier Pulse PixelPass track.
- Settings for graphics quality, camera FOV, sensitivity and FPS display.
- Pulse news panel and trailer sequence.
- Local progress saved in browser storage.

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

## Multiplayer and technical status

The party UI uses the existing PixelRoyale Cloudflare Worker endpoints for room creation, room joining and queue matchmaking. Player positions, shots and builds are relayed between connected clients.

This is not yet a server-authoritative multiplayer implementation: combat simulation and bots run client-side, and the existing Worker relays state rather than validating hits or owning the game simulation. Online play should therefore be treated as an early relay implementation, not competitive-grade multiplayer.

## Run locally

Serve this directory over HTTP because ES modules do not run reliably from file URLs:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
# VoxelCraft — Game Design & Architecture Document

## 🎮 Overview

VoxelCraft is a Minecraft-like sandbox 3D voxel game built with **Three.js** (JavaScript).  
It runs entirely in the browser — no engine install required.

**Tech Stack:** Three.js + Vite + Vanilla JS  
**Render:** WebGL via Three.js  
**Physics:** Custom AABB collision  
**World Gen:** Simplex Noise (procedural terrain, caves, biomes, ores)

---

## 📁 Project Structure

```
voxelcraft/
├── index.html           # Entry HTML with HUD elements
├── package.json         # Dependencies (three, vite)
├── src/
│   ├── main.js          # Game loop, Three.js setup, event handling
│   ├── blocks.js        # Block types, properties, recipes, biome data
│   ├── noise.js         # Simplex noise (2D & 3D) with fractal octaves
│   ├── worldgen.js      # Procedural world generator (terrain, caves, trees, ores)
│   ├── chunk.js         # Chunk data storage + optimized mesh building
│   ├── world.js         # World manager (chunk loading, block access, raycasting)
│   ├── player.js        # FPS camera, movement, physics, collision
│   ├── inventory.js     # Inventory slots, crafting system, recipe matching
│   ├── ui.js            # HUD, hotbar, health, inventory/crafting screen
│   └── styles.css       # All UI styling
```

---

## 🏗️ Architecture — Step by Step

### Step 1: World Generation (`worldgen.js`)

The world is generated procedurally using **Simplex Noise**:

1. **Biome Selection** — Two noise channels (temperature + moisture) determine biome at each (x, z):
   - Plains, Desert, Forest, Mountains, Tundra, Ocean
   
2. **Height Map** — Multi-octave fractal noise creates smooth terrain elevation per biome:
   ```
   height = biome.baseHeight + fractalNoise(x, z) * biome.heightVariation
   ```

3. **Block Layering** — For each column:
   - y=0 → Bedrock
   - y < surfaceHeight-4 → Stone (+ ore veins)
   - y = surfaceHeight-3..surfaceHeight-1 → Sub-surface (dirt/sandstone)
   - y = surfaceHeight → Surface block (grass/sand/snow)
   - y > surfaceHeight → Air (or Water if below sea level)

4. **Cave Generation** — 3D Simplex noise creates interconnected cave tunnels:
   ```
   isCave = |noise3D(x, y, z)| < threshold && |noise3D_2(x, y, z)| < threshold
   ```

5. **Ore Distribution** — Depth-dependent ore placement:
   - Diamond: y < 16
   - Gold: y < 32
   - Iron: y < 64
   - Coal: y < 80

6. **Tree Generation** — Deterministic placement using noise for consistency:
   - Standard trees (trunk + leaf canopy) in Plains/Forest/Tundra
   - Cactus in Desert biomes

### Step 2: Chunk System (`chunk.js`, `world.js`)

The world is divided into **16×128×16 block chunks**:

- **Chunk Loading** — Circular render distance around the player
- **Lazy Generation** — Chunks generated on-demand via a load queue
- **Frame Budget** — Max 2 chunk generations and 1 mesh build per frame (prevents hitching)
- **Unloading** — Chunks beyond render distance are disposed

**Mesh Building (Face Culling):**
- Only emit faces between solid and non-solid blocks
- Per-face vertex coloring with simple ambient occlusion
- Separate transparent mesh for water (double-sided, alpha-blended)
- Boundary awareness: chunks query neighbors for seamless edges

### Step 3: Player & Physics (`player.js`)

**Movement:**
- WASD movement relative to camera yaw
- Sprint (Shift) with 1.6× speed multiplier
- Jump (Space) with upward impulse
- Swimming in water (reduced gravity, Space to swim up)

**Physics:**
- Custom gravity: -24 units/s²
- AABB collision detection against voxel grid
- Axis-separated movement (X → Z → Y) prevents tunneling
- Collision checked at all corners of player bounding box

**Combat/Health:**
- 20 HP (10 hearts)
- Fall damage: (fallDistance - 3) HP for falls > 3 blocks
- Respawn at world spawn on death

### Step 4: Block Interaction (`main.js`)

**Raycasting (DDA Algorithm):**
- Steps through the voxel grid along the camera direction
- Returns hit block position + face normal
- Visual highlight (wireframe box) on targeted block

**Breaking:** Left-click removes the targeted block, drops it in inventory  
**Placing:** Right-click places the held block on the targeted face  
- Prevents placement inside the player's bounding box

### Step 5: Inventory & Crafting (`inventory.js`)

**Inventory:**
- 36 slots (9 hotbar + 27 storage)
- Items stack up to 64
- Scroll wheel / number keys to select hotbar slot
- Q to drop held item

**Crafting (3×3 grid):**
- Shaped recipes: pattern must match at any offset within the grid
- Shapeless recipes: only ingredient types and counts must match
- Recipes included:
  - Wood → 4 Planks
  - 4 Planks → Crafting Table
  - 8 Cobblestone → Furnace
  - Sand + Coal → Glass
  - 4 Sand → 4 Sandstone
  - Clay + Coal → Brick
  - Coal + Planks → 4 Torches

### Step 6: UI System (`ui.js`, `styles.css`)

- **Crosshair** — Center screen targeting reticle
- **Hotbar** — 9 slots at bottom with selection highlight
- **Health Bar** — 10 hearts above hotbar
- **Debug Overlay** — Position, biome, chunk count, FPS (toggle F3)
- **Inventory Screen** — Full inventory + 3×3 crafting grid (toggle E)
- **Start Screen** — Title + controls help + play button

---

## 🚀 How to Run

```bash
cd voxelcraft
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. Click **"Click to Play"** to start.

---

## 🎮 Controls

| Key | Action |
|-----|--------|
| W/A/S/D | Move |
| Mouse | Look around |
| Space | Jump / Swim up |
| Shift | Sprint |
| Left Click | Break block |
| Right Click | Place block |
| 1-9 | Select hotbar slot |
| Scroll Wheel | Cycle hotbar |
| E | Open/close inventory & crafting |
| Q | Drop held item |
| F3 | Toggle debug info |

---

## ⚡ Performance Optimizations

### Implemented
1. **Face Culling** — Only render faces between solid/transparent blocks (reduces triangle count ~85%)
2. **Chunk-based Meshing** — Each chunk is one draw call (batched geometry)
3. **Frame-budgeted Loading** — Max chunk loads/mesh builds per frame prevents stuttering
4. **Circular Render Distance** — Chunks outside radius are unloaded (memory management)
5. **Typed Arrays** — `Uint8Array` for block storage (1 byte per block, 32KB per chunk)
6. **Fog** — Hides chunk loading boundaries

### Recommended Next Steps
7. **Web Workers** — Move chunk generation and meshing to worker threads
8. **Greedy Meshing** — Merge adjacent same-type faces into larger quads (reduces vertex count ~60%)
9. **LOD System** — Distant chunks use simplified meshes
10. **Frustum Culling** — Skip rendering chunks outside camera view (Three.js does this per-mesh)
11. **Instanced Rendering** — For repeated elements like torches
12. **Texture Atlas** — Replace vertex colors with a texture atlas for better visuals
13. **Chunk Serialization** — Save/load chunks to IndexedDB for persistence
14. **Spatial Hashing** — Faster collision lookups for entities

---

## 🌐 Multiplayer Architecture (Outline)

For multiplayer, use a **client-server model with authoritative server**:

### Architecture
```
┌──────────┐     WebSocket     ┌──────────────┐
│  Client   │ ◄──────────────► │   Server     │
│ (Browser) │                  │  (Node.js)   │
│           │  Block changes   │              │
│ Three.js  │  Player moves    │  World state │
│ Renderer  │  Chat messages   │  Physics     │
│           │  ◄────────────►  │  Authority   │
└──────────┘                   └──────────────┘
```

### Key Components
1. **Server** (Node.js + ws):
   - Holds authoritative world state
   - Validates block place/break actions
   - Broadcasts player positions to all clients
   - Chunk data sent to clients on request

2. **Client**:
   - Sends input (movement, block actions) to server
   - Receives world updates and other player positions
   - Client-side prediction for smooth movement
   - Interpolation for other players

3. **Protocol** (WebSocket messages):
   ```js
   // Client → Server
   { type: 'move', pos: {x, y, z}, yaw, pitch }
   { type: 'break', x, y, z }
   { type: 'place', x, y, z, blockType }
   { type: 'chat', message }

   // Server → Client
   { type: 'chunk', cx, cz, data: Uint8Array }
   { type: 'player_update', id, pos, yaw, pitch }
   { type: 'block_change', x, y, z, blockType }
   { type: 'player_join', id, name }
   { type: 'player_leave', id }
   ```

4. **Server-side example** (Node.js):
   ```js
   import { WebSocketServer } from 'ws';
   
   const wss = new WebSocketServer({ port: 8080 });
   const players = new Map();
   
   wss.on('connection', (ws) => {
     const id = crypto.randomUUID();
     players.set(id, { ws, pos: {x:0,y:60,z:0} });
     
     ws.on('message', (raw) => {
       const msg = JSON.parse(raw);
       if (msg.type === 'move') {
         players.get(id).pos = msg.pos;
         // Broadcast to others
         broadcast({ type: 'player_update', id, ...msg }, id);
       }
       if (msg.type === 'break') {
         // Validate and apply
         world.setBlock(msg.x, msg.y, msg.z, 0);
         broadcast({ type: 'block_change', ...msg, blockType: 0 });
       }
     });
     
     ws.on('close', () => {
       players.delete(id);
       broadcast({ type: 'player_leave', id });
     });
   });
   
   function broadcast(msg, excludeId) {
     const data = JSON.stringify(msg);
     for (const [id, p] of players) {
       if (id !== excludeId) p.ws.send(data);
     }
   }
   ```

---

## 🗺️ Roadmap / Future Features

- [ ] Texture atlas with UV mapping
- [ ] Day/night cycle with dynamic lighting
- [ ] Mob entities (passive animals, hostile mobs)
- [ ] More crafting recipes (tools, armor)
- [ ] Sound effects and music
- [ ] World save/load (IndexedDB)
- [ ] Infinite world with chunk serialization
- [ ] Redstone-like logic system
- [ ] Water/lava flow simulation
- [ ] Particle effects (breaking, torch fire)
- [ ] Multiplayer via WebSocket

---

## 📐 Technical Details

### Block Storage
Each chunk stores blocks in a flat `Uint8Array(16 × 128 × 16 = 32,768)`:
```
index = localX * CHUNK_HEIGHT * CHUNK_SIZE + y * CHUNK_SIZE + localZ
```

### Noise Functions
- **2D Simplex** — Terrain height, biome selection, tree placement
- **3D Simplex** — Cave generation, ore veins
- **Fractal (FBM)** — Multi-octave noise for natural-looking terrain

### Coordinate Systems
- **World coords** (wx, wy, wz) — Absolute block position
- **Chunk coords** (cx, cz) — Chunk grid position (`cx = floor(wx / 16)`)
- **Local coords** (lx, ly, lz) — Block position within chunk (0-15, 0-127, 0-15)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

const TILE_SIZE = 16;
const ATLAS_COLS = 16;
const ATLAS_ROWS = 16;
const canvas = createCanvas(ATLAS_COLS * TILE_SIZE, ATLAS_ROWS * TILE_SIZE);
const ctx = canvas.getContext('2d');

// Helper to draw a pixel art tile
function drawTile(col, row, baseColor, noiseStr, pattern = 'noise') {
    const x0 = col * TILE_SIZE;
    const y0 = row * TILE_SIZE;

    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    ctx.fillStyle = baseColor;
    ctx.fillRect(x0, y0, TILE_SIZE, TILE_SIZE);

    const imgData = ctx.getImageData(x0, y0, TILE_SIZE, TILE_SIZE);
    const data = imgData.data;

    let seed = col * 73 + row * 23;
    const rnd = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };

    for (let i = 0; i < TILE_SIZE; i++) {
        for (let j = 0; j < TILE_SIZE; j++) {
            let v = 0;
            if (pattern === 'noise') {
                v = (rnd() * 2 - 1) * noiseStr;
            } else if (pattern === 'wood') {
                v = (Math.sin(j * 0.5 + rnd() * 0.5) + (rnd() - 0.5)) * noiseStr;
            } else if (pattern === 'leaves') {
                if (rnd() < 0.3) v = -noiseStr * 2;
                else if (rnd() < 0.2) v = noiseStr * 2;
            } else if (pattern === 'bricks') {
                const brickX = j % 8;
                const brickY = i % 4;
                if (brickX === 0 || brickY === 0) {
                    v = -noiseStr * 3;
                } else {
                    v = (rnd() * 2 - 1) * noiseStr;
                }
            } else if (pattern === 'planks') {
                const plankY = i % 4;
                if (plankY === 0 || j === 0) {
                    v = -noiseStr * 2;
                } else {
                    v = (Math.sin(j * 0.5) + (rnd() - 0.5)) * noiseStr;
                }
            } else if (pattern === 'glass') {
                if (i === 0 || i === 15 || j === 0 || j === 15) v = noiseStr * 4;
                else if (i + j > 10 && i + j < 13) v = noiseStr * 3;
                else if (i + j > 16 && i + j < 18) v = noiseStr * 2;
                else v = -255;
            } else if (pattern === 'stonebrick') {
                if (i % 8 === 0 || (Math.floor(i / 8) % 2 === 0 ? j % 8 === 0 : (j + 4) % 8 === 0)) {
                    v = -noiseStr * 3;
                } else {
                    v = (rnd() * 2 - 1) * noiseStr;
                }
            }

            const idx = (i * TILE_SIZE + j) * 4;
            data[idx] = Math.min(255, Math.max(0, r + v));
            data[idx + 1] = Math.min(255, Math.max(0, g + v));
            data[idx + 2] = Math.min(255, Math.max(0, b + v));
            data[idx + 3] = (pattern === 'glass' && v === -255) ? 40 : 255;
        }
    }
    ctx.putImageData(imgData, x0, y0);
}

function drawOre(col, row, baseColor, oreColor) {
    drawTile(col, row, baseColor, 15, 'noise');
    const x0 = col * TILE_SIZE;
    const y0 = row * TILE_SIZE;
    ctx.fillStyle = oreColor;

    const clumps = [
        [2, 3], [3, 2], [3, 4], [4, 3],
        [10, 12], [11, 11], [12, 12], [11, 13],
        [5, 10], [6, 9], [6, 11], [7, 10],
        [12, 4], [13, 3], [14, 4], [13, 5]
    ];
    for (let p of clumps) {
        ctx.fillRect(x0 + p[0], y0 + p[1], 1, 1);
    }
}

// ATLAS MAPPING
// Row 0: Soils
drawTile(0, 0, '#5B8C3E', 15, 'noise'); // Grass Top
drawTile(1, 0, '#8B6B3E', 20, 'noise'); // Dirt
drawTile(2, 0, '#8B6B3E', 20, 'noise');
ctx.fillStyle = '#5B8C3E'; ctx.fillRect(2 * TILE_SIZE, 0, TILE_SIZE, 3);
for (let i = 0; i < TILE_SIZE; i += 4) { ctx.fillRect(2 * TILE_SIZE + i, 3, 2, 2); } // grass side

drawTile(3, 0, '#DBC67B', 15, 'noise'); // Sand
// Podzol Side
drawTile(4, 0, '#8B6B3E', 20, 'noise');
ctx.fillStyle = '#6A5030'; ctx.fillRect(4 * TILE_SIZE, 0, TILE_SIZE, 3);
drawTile(5, 0, '#6A5030', 15, 'noise'); // Podzol Top

// Row 1: Stones & Ores
drawTile(0, 1, '#808080', 15, 'noise'); // Stone
drawTile(1, 1, '#6B6B6B', 25, 'noise'); // Cobblestone
drawTile(2, 1, '#333333', 40, 'noise'); // Bedrock
drawOre(3, 1, '#808080', '#222222');   // Coal ore
drawOre(4, 1, '#808080', '#DFA37A');   // Iron ore
drawOre(5, 1, '#808080', '#F8DE7E');   // Gold ore
drawOre(6, 1, '#808080', '#6CE3E6');   // Diamond ore
drawOre(7, 1, '#808080', '#E54545');   // Redstone ore
drawOre(8, 1, '#808080', '#0047AB');   // Lapis ore
drawOre(9, 1, '#808080', '#41A317');   // Emerald ore

// Row 2: Woods
drawTile(0, 2, '#9B7B3E', 15, 'wood'); // Oak Log Top
drawTile(1, 2, '#6B4226', 20, 'wood'); // Oak Log Side
drawTile(2, 2, '#C0B898', 15, 'wood'); // Birch Log Top
drawTile(3, 2, '#D0C8B0', 15, 'wood'); // Birch Log Side
ctx.fillStyle = '#444444'; ctx.fillRect(3 * TILE_SIZE + 2, 2 * TILE_SIZE + 4, 4, 1); ctx.fillRect(3 * TILE_SIZE + 10, 2 * TILE_SIZE + 12, 3, 1);

drawTile(4, 2, '#B8945A', 15, 'planks'); // Oak Planks
drawTile(5, 2, '#3A7D32', 25, 'leaves'); // Oak Leaves

// Row 3: Crafted & Deco
drawTile(0, 3, '#D0E8F0', 40, 'glass'); // Glass
drawTile(1, 3, '#A04030', 20, 'bricks'); // Brick
drawTile(2, 3, '#1A0A2E', 25, 'noise'); // Obsidian
drawTile(3, 3, '#7A7A7A', 15, 'stonebrick'); // Stone Brick
drawTile(4, 3, '#909090', 30, 'noise'); // Gravel
// Bookshelf side
drawTile(5, 3, '#B8945A', 15, 'planks');
ctx.fillStyle = '#222'; ctx.fillRect(5 * TILE_SIZE, 3 * TILE_SIZE + 4, 16, 8);
ctx.fillStyle = '#C03030'; ctx.fillRect(5 * TILE_SIZE + 2, 3 * TILE_SIZE + 4, 3, 8);
ctx.fillStyle = '#30C030'; ctx.fillRect(5 * TILE_SIZE + 7, 3 * TILE_SIZE + 4, 2, 8);
ctx.fillStyle = '#3030C0'; ctx.fillRect(5 * TILE_SIZE + 11, 3 * TILE_SIZE + 4, 3, 8);

// Row 4: Utilities
drawTile(0, 4, '#B8945A', 15, 'planks'); // Crafting Table Top
ctx.fillStyle = '#8B6B3E'; ctx.fillRect(0 * TILE_SIZE + 4, 4 * TILE_SIZE + 4, 8, 8);
ctx.fillStyle = '#A8844A';
for (let gx = 0; gx < 3; gx++) for (let gy = 0; gy < 3; gy++) ctx.fillRect(0 * TILE_SIZE + 5 + gx * 2, 4 * TILE_SIZE + 5 + gy * 2, 1, 1);

drawTile(1, 4, '#B8945A', 10, 'planks'); // Crafting Box Side
ctx.fillStyle = '#8B6B3E'; ctx.fillRect(1 * TILE_SIZE + 2, 4 * TILE_SIZE + 2, 12, 12);
ctx.fillStyle = '#A8844A'; ctx.fillRect(1 * TILE_SIZE + 4, 4 * TILE_SIZE + 4, 8, 8);

drawTile(2, 4, '#7A7A7A', 10, 'stonebrick'); // Furnace Front
ctx.fillStyle = '#222'; ctx.fillRect(2 * TILE_SIZE + 4, 4 * TILE_SIZE + 8, 8, 6);
drawTile(3, 4, '#7A7A7A', 10, 'stonebrick'); // Furnace Side

// Torch/Door
ctx.clearRect(4 * TILE_SIZE, 4 * TILE_SIZE, TILE_SIZE, TILE_SIZE);
ctx.fillStyle = '#8B6B3E'; ctx.fillRect(4 * TILE_SIZE + 7, 4 * TILE_SIZE + 6, 2, 10);
ctx.fillStyle = '#FFDD00'; ctx.fillRect(4 * TILE_SIZE + 7, 4 * TILE_SIZE + 4, 2, 2);

ctx.clearRect(5 * TILE_SIZE, 4 * TILE_SIZE, TILE_SIZE, TILE_SIZE);
ctx.fillStyle = '#8B6B3E'; ctx.fillRect(5 * TILE_SIZE, 4 * TILE_SIZE, 16, 16);
ctx.fillStyle = '#FFE0B2'; ctx.fillRect(5 * TILE_SIZE + 12, 4 * TILE_SIZE + 8, 2, 2);

// Row 5: Gems & Minerals Blocks
drawTile(0, 5, '#D0D0D0', 10, 'planks'); // Iron
drawTile(1, 5, '#FFD700', 10, 'planks'); // Gold
drawTile(2, 5, '#60E0F0', 10, 'planks'); // Diamond
drawTile(3, 5, '#30D030', 10, 'planks'); // Emerald
drawTile(4, 5, '#2050A0', 15, 'noise');  // Lapis
drawTile(5, 5, '#F0E8E0', 5, 'planks');  // Quartz

// Row 6: Natural
drawTile(0, 6, '#4A9A8A', 20, 'noise'); // Prismarine
drawTile(1, 6, '#B0E0E8', 10, 'glass'); // Sea Lantern
drawTile(2, 6, '#5A4A3A', 25, 'noise'); // Soul Sand
drawTile(3, 6, '#8A3030', 25, 'noise'); // Netherrack
drawTile(4, 6, '#FFDD80', 20, 'glass'); // Glowstone
drawTile(5, 6, '#C4783C', 10, 'noise'); // Red Sand
drawTile(6, 6, '#BA6B44', 5, 'noise');  // Terracotta

// Water
drawTile(7, 3, '#3366AA', 10, 'noise');

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(publicDir, 'atlas.png'), buffer);
console.log('Saved public/atlas.png successfully!');

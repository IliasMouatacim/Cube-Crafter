import { BlockType, CHUNK_HEIGHT, CHUNK_SIZE } from './blocks.js';
import { Chunk } from './chunk.js';
import { WorldGenerator } from './worldgen.js';

let generator;
let worldSeed;

self.onmessage = ({ data }) => {
  const { kind, id, seed, cx, cz } = data;
  if (kind === 'terrain') {
    if (seed !== worldSeed) {
      generator = new WorldGenerator(seed);
      worldSeed = seed;
    }
    const blocks = generator.generateChunkData(cx, cz);
    self.postMessage({ kind, id, blocks }, [blocks.buffer]);
    return;
  }

  const adjacent = new Map(data.adjacent);
  const doors = new Set(data.openDoors);
  const chunk = new Chunk(cx, cz, {
    getBlock(x, y, z) {
      if (y < 0 || y >= CHUNK_HEIGHT) return BlockType.AIR;
      const ncx = Math.floor(x / CHUNK_SIZE);
      const ncz = Math.floor(z / CHUNK_SIZE);
      const blocks = adjacent.get(`${ncx},${ncz}`);
      if (!blocks) return BlockType.AIR;
      return blocks[WorldGenerator.blockIndex(x - ncx * CHUNK_SIZE, y, z - ncz * CHUNK_SIZE)];
    },
    isDoorOpen: (x, y, z) => doors.has(`${x},${y},${z}`),
  });
  chunk.blocks = data.blocks;
  chunk.metadata = data.metadata;
  const mesh = chunk.createMeshData();
  const buffers = [mesh.solid, mesh.water].flatMap(part => part ? Object.values(part).map(array => array.buffer) : []);
  self.postMessage({ kind, mesh }, buffers);
};

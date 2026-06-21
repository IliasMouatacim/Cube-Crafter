// ============================================================
// Network: PeerJS-based multiplayer networking
// Handles hosting and joining rooms, broadcasting block changes
// ============================================================

import Peer from 'peerjs';

export class Network {
  constructor(scene) {
    this.scene = scene;
    this.peer = null;
    this.connections = [];
    this.roomCode = null;
    this.seed = null;
    this._isHost = false;

    // Callbacks set by main.js
    this.onReady = null;       // (code) => {}   — host got a room code
    this.onConnected = null;   // (seed) => {}   — guest connected to host
    this.onRemoteBlock = null; // (x,y,z,type) => {}
    this.onError = null;       // (msg) => {}
    this.onPlayerJoin = null;  // () => {}
    this.onPlayerLeave = null; // () => {}
  }

  setSeed(seed) {
    this.seed = seed;
  }

  // ── Host a room ──────────────────────────────────────────
  host() {
    try {
      // Generate a short 4-letter room code
      const code = Math.random().toString(36).substring(2, 6);
      this.roomCode = code;
      this._isHost = true;

      this.peer = new Peer('cc-' + code);

      this.peer.on('open', () => {
        if (this.onReady) this.onReady(code);
      });

      this.peer.on('connection', (conn) => {
        this._setupConnection(conn, true);
      });

      this.peer.on('error', (err) => {
        if (this.onError) this.onError('Host error: ' + err.type);
      });
    } catch (e) {
      if (this.onError) this.onError('Failed to create room');
    }
  }

  // ── Join a room ──────────────────────────────────────────
  join(code) {
    try {
      this._isHost = false;
      this.peer = new Peer();

      this.peer.on('open', () => {
        const conn = this.peer.connect('cc-' + code, { reliable: true });
        this._setupConnection(conn, false);
      });

      this.peer.on('error', (err) => {
        if (this.onError) this.onError('Could not connect: ' + err.type);
      });
    } catch (e) {
      if (this.onError) this.onError('Failed to join room');
    }
  }

  // ── Setup a data connection ───────────────────────────────
  _setupConnection(conn, asHost) {
    conn.on('open', () => {
      this.connections.push(conn);

      if (asHost) {
        // Send seed to the new guest
        conn.send({ type: 'seed', seed: this.seed });
        if (this.onPlayerJoin) this.onPlayerJoin();
      } else {
        // Guest: wait for seed
        this.roomCode = conn.peer.replace('cc-', '');
      }
    });

    conn.on('data', (data) => {
      if (!data || !data.type) return;

      if (data.type === 'seed') {
        if (this.onConnected) this.onConnected(data.seed);
      } else if (data.type === 'block') {
        if (this.onRemoteBlock) {
          this.onRemoteBlock(data.x, data.y, data.z, data.blockType);
        }
        // Relay to other connections if host
        if (asHost) {
          for (const other of this.connections) {
            if (other !== conn && other.open) {
              other.send(data);
            }
          }
        }
      }
    });

    conn.on('close', () => {
      this.connections = this.connections.filter(c => c !== conn);
      if (this.onPlayerLeave) this.onPlayerLeave();
    });

    conn.on('error', (err) => {
      if (this.onError) this.onError('Connection error: ' + err);
    });
  }

  // ── Send a block change to all peers ─────────────────────
  sendBlockChange(x, y, z, blockType) {
    if (this.connections.length === 0) return;
    const msg = { type: 'block', x, y, z, blockType };
    for (const conn of this.connections) {
      if (conn.open) conn.send(msg);
    }
  }

  // ── Get number of connected players ──────────────────────
  getPlayerCount() {
    return this.connections.length + 1; // +1 for self
  }

  // ── Per-frame update (sync player position etc.) ─────────
  update(dt, player) {
    // Reserved for future position sync
  }
}

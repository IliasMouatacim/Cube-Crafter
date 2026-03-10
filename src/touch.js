// ============================================================
// Mobile Touch Controls
// Virtual joystick + look area + action buttons for phone play
// ============================================================

export class TouchControls {
  constructor() {
    this.isMobile = this._detectMobile();
    if (!this.isMobile) return;

    // Movement joystick state
    this.moveX = 0; // -1 to 1
    this.moveY = 0; // -1 to 1
    this._joystickActive = false;
    this._joystickTouchId = null;
    this._joystickOrigin = { x: 0, y: 0 };

    // Look state
    this._lookTouchId = null;
    this._lookLastPos = { x: 0, y: 0 };
    this.lookDeltaX = 0;
    this.lookDeltaY = 0;

    // Button states (edge-triggered)
    this.jumpPressed = false;
    this.attackPressed = false;
    this.attackHeld = false;
    this.placePressed = false;
    this.inventoryPressed = false;
    this.sprintActive = false;

    // Hotbar scroll
    this.hotbarDelta = 0;

    this._buildUI();
    this._bindEvents();
  }

  _detectMobile() {
    return 'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  _buildUI() {
    const container = document.createElement('div');
    container.id = 'touch-controls';
    container.innerHTML = `
      <div id="touch-joystick-zone">
        <div id="touch-joystick-base">
          <div id="touch-joystick-thumb"></div>
        </div>
      </div>
      <div id="touch-look-zone"></div>
      <div id="touch-buttons">
        <button id="touch-jump" class="touch-btn">⬆</button>
        <button id="touch-attack" class="touch-btn touch-btn-attack">⛏</button>
        <button id="touch-place" class="touch-btn touch-btn-place">◼</button>
        <button id="touch-inventory" class="touch-btn touch-btn-small">☰</button>
        <button id="touch-sprint" class="touch-btn touch-btn-small touch-btn-sprint">🏃</button>
      </div>
      <div id="touch-hotbar-arrows">
        <button id="touch-hotbar-left" class="touch-btn touch-btn-tiny">◀</button>
        <button id="touch-hotbar-right" class="touch-btn touch-btn-tiny">▶</button>
      </div>
    `;
    document.getElementById('app').appendChild(container);

    this._joystickBase = document.getElementById('touch-joystick-base');
    this._joystickThumb = document.getElementById('touch-joystick-thumb');
    this._joystickZone = document.getElementById('touch-joystick-zone');
    this._lookZone = document.getElementById('touch-look-zone');
  }

  _bindEvents() {
    // Prevent default touch behaviors (scroll, zoom)
    document.addEventListener('touchstart', (e) => { e.preventDefault(); }, { passive: false });

    // Joystick zone
    this._joystickZone.addEventListener('touchstart', (e) => this._onJoystickStart(e), { passive: false });
    this._joystickZone.addEventListener('touchmove', (e) => this._onJoystickMove(e), { passive: false });
    this._joystickZone.addEventListener('touchend', (e) => this._onJoystickEnd(e), { passive: false });
    this._joystickZone.addEventListener('touchcancel', (e) => this._onJoystickEnd(e), { passive: false });

    // Look zone
    this._lookZone.addEventListener('touchstart', (e) => this._onLookStart(e), { passive: false });
    this._lookZone.addEventListener('touchmove', (e) => this._onLookMove(e), { passive: false });
    this._lookZone.addEventListener('touchend', (e) => this._onLookEnd(e), { passive: false });
    this._lookZone.addEventListener('touchcancel', (e) => this._onLookEnd(e), { passive: false });

    // Action buttons
    const jumpBtn = document.getElementById('touch-jump');
    jumpBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.jumpPressed = true; });
    jumpBtn.addEventListener('touchend', (e) => { e.preventDefault(); this.jumpPressed = false; });
    jumpBtn.addEventListener('touchcancel', (e) => { e.preventDefault(); this.jumpPressed = false; });

    const attackBtn = document.getElementById('touch-attack');
    attackBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.attackPressed = true; this.attackHeld = true; });
    attackBtn.addEventListener('touchend', (e) => { e.preventDefault(); this.attackHeld = false; });
    attackBtn.addEventListener('touchcancel', (e) => { e.preventDefault(); this.attackHeld = false; });

    const placeBtn = document.getElementById('touch-place');
    placeBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.placePressed = true; });
    placeBtn.addEventListener('touchend', (e) => { e.preventDefault(); });
    placeBtn.addEventListener('touchcancel', (e) => { e.preventDefault(); });

    const invBtn = document.getElementById('touch-inventory');
    invBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.inventoryPressed = true; });

    const sprintBtn = document.getElementById('touch-sprint');
    sprintBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.sprintActive = !this.sprintActive; sprintBtn.classList.toggle('active', this.sprintActive); });

    // Hotbar arrows
    document.getElementById('touch-hotbar-left').addEventListener('touchstart', (e) => { e.preventDefault(); this.hotbarDelta = -1; });
    document.getElementById('touch-hotbar-right').addEventListener('touchstart', (e) => { e.preventDefault(); this.hotbarDelta = 1; });
  }

  _onJoystickStart(e) {
    if (this._joystickTouchId !== null) return;
    const touch = e.changedTouches[0];
    this._joystickTouchId = touch.identifier;
    this._joystickOrigin.x = touch.clientX;
    this._joystickOrigin.y = touch.clientY;

    // Position joystick base at touch point
    const rect = this._joystickZone.getBoundingClientRect();
    this._joystickBase.style.left = (touch.clientX - rect.left) + 'px';
    this._joystickBase.style.top = (touch.clientY - rect.top) + 'px';
    this._joystickBase.style.display = 'block';
    this._joystickActive = true;
  }

  _onJoystickMove(e) {
    for (const touch of e.changedTouches) {
      if (touch.identifier !== this._joystickTouchId) continue;
      const dx = touch.clientX - this._joystickOrigin.x;
      const dy = touch.clientY - this._joystickOrigin.y;
      const maxRadius = 50;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const clamped = Math.min(dist, maxRadius);
      const angle = Math.atan2(dy, dx);
      const clampedX = Math.cos(angle) * clamped;
      const clampedY = Math.sin(angle) * clamped;

      this.moveX = clampedX / maxRadius;
      this.moveY = clampedY / maxRadius; // positive = down on screen = backward

      this._joystickThumb.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
    }
  }

  _onJoystickEnd(e) {
    for (const touch of e.changedTouches) {
      if (touch.identifier !== this._joystickTouchId) continue;
      this._joystickTouchId = null;
      this._joystickActive = false;
      this.moveX = 0;
      this.moveY = 0;
      this._joystickThumb.style.transform = 'translate(0, 0)';
      this._joystickBase.style.display = 'none';
    }
  }

  _onLookStart(e) {
    if (this._lookTouchId !== null) return;
    const touch = e.changedTouches[0];
    this._lookTouchId = touch.identifier;
    this._lookLastPos.x = touch.clientX;
    this._lookLastPos.y = touch.clientY;
  }

  _onLookMove(e) {
    for (const touch of e.changedTouches) {
      if (touch.identifier !== this._lookTouchId) continue;
      this.lookDeltaX += touch.clientX - this._lookLastPos.x;
      this.lookDeltaY += touch.clientY - this._lookLastPos.y;
      this._lookLastPos.x = touch.clientX;
      this._lookLastPos.y = touch.clientY;
    }
  }

  _onLookEnd(e) {
    for (const touch of e.changedTouches) {
      if (touch.identifier !== this._lookTouchId) continue;
      this._lookTouchId = null;
    }
  }

  // Call once per frame to apply touch input to player
  applyToPlayer(player) {
    if (!this.isMobile) return;

    const kb = player.keyBindings;

    // Movement via joystick → set virtual key states
    const deadzone = 0.2;
    player.keys[kb.forward] = this.moveY < -deadzone;
    player.keys[kb.back] = this.moveY > deadzone;
    player.keys[kb.left] = this.moveX < -deadzone;
    player.keys[kb.right] = this.moveX > deadzone;

    // Sprint
    player.keys[kb.sprint] = this.sprintActive;

    // Jump
    player.keys[kb.jump] = this.jumpPressed;

    // Look (apply accumulated delta then reset)
    const sensitivity = 0.004;
    player.yaw -= this.lookDeltaX * sensitivity;
    player.pitch -= this.lookDeltaY * sensitivity;
    player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch));
    this.lookDeltaX = 0;
    this.lookDeltaY = 0;
  }

  // Consume one-shot button presses (call in main loop)
  consumeAttack() {
    if (this.attackPressed) { this.attackPressed = false; return true; }
    return false;
  }

  consumePlace() {
    if (this.placePressed) { this.placePressed = false; return true; }
    return false;
  }

  consumeInventory() {
    if (this.inventoryPressed) { this.inventoryPressed = false; return true; }
    return false;
  }

  consumeHotbarDelta() {
    const d = this.hotbarDelta;
    this.hotbarDelta = 0;
    return d;
  }

  show() {
    if (!this.isMobile) return;
    const el = document.getElementById('touch-controls');
    if (el) el.style.display = 'block';
  }

  hide() {
    const el = document.getElementById('touch-controls');
    if (el) el.style.display = 'none';
  }
}

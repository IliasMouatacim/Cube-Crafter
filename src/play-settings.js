const STORAGE_KEY = 'cubecrafter_play_settings';

export class PlaySettings {
  constructor(onChange, onToggle) {
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const defaults = {
      reflections: !touch,
      shadows: !touch,
      viewDistance: touch ? '3' : '4',
      adaptiveResolution: true,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      highContrast: false,
      creatureCues: true,
      peaceful: false,
      sensitivity: 1,
    };
    let saved;
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch {
      saved = null;
    }
    this.values = { ...defaults };
    for (const [key, initial] of Object.entries(defaults)) {
      if (typeof saved?.[key] === typeof initial) this.values[key] = saved[key];
    }
    if (!['3', '4', '6'].includes(this.values.viewDistance)) this.values.viewDistance = defaults.viewDistance;
    this.values.sensitivity = Math.min(2, Math.max(0.5, this.values.sensitivity));

    this.dialog = document.getElementById('play-settings');
    this.dialog.addEventListener('close', () => onToggle(false));
    for (const button of document.querySelectorAll('[data-open-settings]')) {
      button.addEventListener('click', () => this.open(onToggle));
    }
    document.addEventListener('keydown', event => {
      if (event.code !== 'KeyM' || event.repeat || this.dialog.open ||
          event.target.closest('dialog, input, textarea, select, [contenteditable]')) return;
      event.preventDefault();
      this.open(onToggle);
    });
    for (const input of this.dialog.querySelectorAll('input[name], select[name]')) {
      const key = input.name;
      if (input.type === 'checkbox') input.checked = this.values[key];
      else input.value = this.values[key];
      input.addEventListener('input', () => {
        this.values[key] = input.type === 'checkbox' ? input.checked :
          input.type === 'range' ? input.valueAsNumber : input.value;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.values));
        } catch {
          // Preferences still apply for the current session.
        }
        this.apply(onChange);
      });
    }
    this.apply(onChange);
  }

  open(onToggle) {
    if (this.dialog.open) return;
    onToggle(true);
    this.dialog.showModal();
  }

  apply(onChange) {
    const { reducedMotion, highContrast } = this.values;
    document.body.classList.toggle('reduced-motion', reducedMotion);
    document.body.classList.toggle('high-contrast', highContrast);
    onChange(this.values);
  }
}

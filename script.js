/* Live clock — purely cosmetic, page works fine without JS */
(function () {
  'use strict';

  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function tick() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    clockEl.textContent = `${h}:${m}:${s} local`;
  }

  tick();
  setInterval(tick, 1000);
})();

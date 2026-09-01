import "./styles.css";

function initShotCycles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.querySelectorAll(".shot-cycle").forEach((cycle) => {
    const frames = [...cycle.querySelectorAll(".shot-cycle-frames img")];
    if (frames.length < 2) return;

    const interval = Number(cycle.dataset.cycleInterval) || 3000;
    let index = frames.findIndex((frame) => frame.classList.contains("is-active"));
    if (index < 0) index = 0;

    setInterval(() => {
      frames[index].classList.remove("is-active");
      index = (index + 1) % frames.length;
      frames[index].classList.add("is-active");
    }, interval);
  });
}

initShotCycles();

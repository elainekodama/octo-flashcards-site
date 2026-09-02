import "./styles.css";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = year;
  });
}

function initShotCycles() {
  if (reducedMotion) return;

  document.querySelectorAll(".shot-cycle").forEach((cycle) => {
    const frames = [...cycle.querySelectorAll("img")];
    if (frames.length < 2) return;

    const interval = Number(cycle.dataset.cycleInterval) || 3000;
    let index = Math.max(0, frames.findIndex((frame) => frame.classList.contains("is-active")));
    let timer = null;

    const advance = () => {
      frames[index].classList.remove("is-active");
      index = (index + 1) % frames.length;
      frames[index].classList.add("is-active");
    };

    // Only cycle while the figure is actually on screen so the fade is seen from the start.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && timer === null) {
          timer = setInterval(advance, interval);
        } else if (!entry.isIntersecting && timer !== null) {
          clearInterval(timer);
          timer = null;
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(cycle);
  });
}

function initVideos() {
  document.querySelectorAll("video[autoplay]").forEach((video) => {
    if (reducedMotion) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }
    // Some browsers ignore autoplay on muted inline video until a play() call.
    video.play().catch(() => {});
  });
}

initYear();
initShotCycles();
initVideos();

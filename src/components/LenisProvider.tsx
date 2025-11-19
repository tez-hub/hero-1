import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,          // adjust smoothness
    wheelMultiplier: 1, // scroll speed
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

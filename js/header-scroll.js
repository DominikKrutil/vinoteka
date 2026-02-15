// header-scroll.js

(() => {
  const header = document.querySelector(".header");
  if (!header) return;

  const SCROLLED_CLASS = "scrolled";
  const SCROLL_OFFSET = 50;

  const handleScroll = () => {
    header.classList.toggle(
      SCROLLED_CLASS,
      window.scrollY > SCROLL_OFFSET
    );
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
})();


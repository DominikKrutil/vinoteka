// navigation.js

(() => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuBtn || !nav) return;

  const ACTIVE_CLASS = "active";
  let lastFocusedElement = null;

  const isOpen = () => nav.classList.contains(ACTIVE_CLASS);

  const openMenu = () => {
    lastFocusedElement = document.activeElement;

    nav.classList.add(ACTIVE_CLASS);
    menuBtn.setAttribute("aria-expanded", "true");

    closeBtn?.focus();
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    nav.classList.remove(ACTIVE_CLASS);
    menuBtn.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";
    lastFocusedElement?.focus();
  };

  const handleKeydown = (e) => {
    if (e.key === "Escape" && isOpen()) {
      closeMenu();
    }
  };

  menuBtn.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);

  navLinks.forEach(link =>
    link.addEventListener("click", closeMenu)
  );

  document.addEventListener("keydown", handleKeydown);
})();

document.addEventListener("DOMContentLoaded", () => {

  /* ==============================
     SMOOTH SCROLLING
  ============================== */
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");

      // Ignore external links
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      window.scrollTo({
        top: targetEl.offsetTop - 70,
        behavior: "smooth"
      });
    });
  });

  /* ==============================
     BACK TO TOP BUTTON
  ============================== */
  let topBtn = document.getElementById("backToTop");

  if (!topBtn) {
    topBtn = document.createElement("button");
    topBtn.id = "backToTop";
    topBtn.textContent = "↑ Top";
    document.body.appendChild(topBtn);
  }

  Object.assign(topBtn.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "10px 15px",
    backgroundColor: "#e60073",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    display: "none",
    zIndex: "1000",
    transition: "opacity 0.3s"
  });

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ==============================
     MOBILE NAV TOGGLE
  ============================== */
  const nav = document.querySelector("nav");
  if (!nav) return;

  let toggleBtn = document.getElementById("navToggle");

  if (!toggleBtn) {
    toggleBtn = document.createElement("button");
    toggleBtn.id = "navToggle";
    toggleBtn.innerHTML = "☰";
    document.body.appendChild(toggleBtn);
  }

  Object.assign(toggleBtn.style, {
    position: "fixed",
    top: "15px",
    right: "20px",
    background: "transparent",
    border: "none",
    fontSize: "1.6rem",
    cursor: "pointer",
    zIndex: "1100",
    display: "none"
  });

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });

  function handleNav() {
    if (window.innerWidth <= 768) {
      toggleBtn.style.display = "block";
      nav.classList.remove("nav-desktop");
    } else {
      toggleBtn.style.display = "none";
      nav.classList.remove("nav-open");
      nav.classList.add("nav-desktop");
    }
  }

  window.addEventListener("resize", handleNav);
  handleNav();

});

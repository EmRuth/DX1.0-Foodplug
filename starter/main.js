var hamburger = document.querySelector(".navmobile-menu");
var mobileLinksHolder = document.querySelector(".navmobile-links");
var backdrop = document.querySelector(".backdrop");

function hamburgerHandler() {
  hamburger.classList.toggle("showmenu");
  mobileLinksHolder.classList.toggle("shownavmobile-links");
  backdrop.classList.toggle("showbackdrop");
}

ScrollReveal({
  reset: true,
  distance: "100px",
  origin: "right",
  duration: 1800,
});

ScrollReveal().reveal(".header-banner__content h1", {
  origin: "left",
});
ScrollReveal().reveal(".aboutfoods-text h2, aboutfoods-text h2", {
  origin: "right",
});
ScrollReveal().reveal(".foodcard img", {
  rotate: {
    x: 180,
  },
});

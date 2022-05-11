document.querySelector(".menu-openner").addEventListener("click", () => {
  document.querySelector("aside").style.left = "0";
});

document.querySelector(".menu-closer").addEventListener("click", () => {
  document.querySelector("aside").style.left = "100vw";
});

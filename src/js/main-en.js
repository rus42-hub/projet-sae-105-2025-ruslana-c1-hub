document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "Is there anyone<br>out there…?",
    "They won’t let me<br>publish my work.",
    "They say a woman<br>has no right to.",
    "But I will not<br>give up.",
    "I will prove that the<br>mind has no gender."
  ];

  let index = 0;
  const textElement = document.getElementById("heroText");

  if (textElement) {
    function changeText() {
      textElement.innerHTML = texts[index];
      index = (index + 1) % texts.length;
    }
    changeText();
    setInterval(changeText, 3000); // change chaque 3 secondes
  }
});




document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".timeline__toggle");
  if (!toggle) return;

  const item = toggle.closest(".timeline__item");
  const expand = item.querySelector(".timeline__expand");
  const icon = toggle.querySelector("img");

  const isOpen = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", !isOpen);
  expand.style.display = isOpen ? "none" : "block";
  icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
});





const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const menu = document.getElementById("menuContainer");

if (openMenuBtn && menu) {
  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });
}

if (closeMenuBtn && menu) {
  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}




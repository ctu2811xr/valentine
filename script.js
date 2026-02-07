const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reveal = document.getElementById("reveal");

// Optional: make "No" run away if hovered (still not selectable)
noBtn.addEventListener("mouseenter", () => {
  const parent = document.querySelector(".buttons");
  // move the No button around within the card area
  const x = Math.floor(Math.random() * 180) - 90;
  const y = Math.floor(Math.random() * 80) - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Make clicking No do nothing (or show a tiny message if you want)
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

yesBtn.addEventListener("click", () => {
  reveal.classList.remove("hidden");
  yesBtn.disabled = true;
  yesBtn.textContent = "She said YES 💖";
});

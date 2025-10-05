// Button-Interaktion
const button = document.getElementById("magicButton");

button.addEventListener("click", () => {
  button.textContent = "✨ Magie aktiviert!";
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";

  setTimeout(() => {
    button.textContent = "Klick mich!";
    button.style.backgroundColor = "#ffcc00";
    button.style.color = "#333";
  }, 2000);
});
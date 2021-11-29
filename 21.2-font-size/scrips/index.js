minusBtn = document.querySelector(".minus-btn");
plusBtn = document.querySelector(".plus-btn");
fontSizeText = document.querySelector(".font-size-text");
fontSizeText.style.fontSize = "16px";

minusBtn.addEventListener("click", () => {
  if (parseInt(fontSizeText.style.fontSize) <= 6) return;
  fontSizeText.style.fontSize =
    parseInt(fontSizeText.style.fontSize) - 1 + "px";
});

plusBtn.addEventListener("click", () => {
  if (parseInt(fontSizeText.style.fontSize) >= 100) return;
  fontSizeText.style.fontSize =
    parseInt(fontSizeText.style.fontSize) + 1 + "px";
});

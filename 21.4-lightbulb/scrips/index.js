buttonElement = document.querySelector(".toggle-light");
imgElement = document.querySelector(".light-bulb");

buttonElement.addEventListener("click", () => {
  imgElement.classList.toggle("off");

  buttonElement.value === "turn off"
    ? (buttonElement.value = "turn on")
    : (buttonElement.value = "turn off");
});

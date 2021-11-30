buttonElement = document.querySelector(".submit-btn");
messageElement = document.querySelector(".user-input");
textElement = document.querySelector(".submit-msg");

buttonElement.addEventListener("click", () => {
  console.log(textElement);
  messageElement.value.length < 100
    ? (textElement.textContent = `submited! - fewer than ${messageElement.value.length} characters`)
    : (textElement.textContent = `not submited! - ${messageElement.value.length} characters - maximum 100 characters!`);
});

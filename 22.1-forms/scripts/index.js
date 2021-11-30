const formData = {};

buttonElement = document.querySelector(".submit-form-button");
formElement = document.querySelector(".user-form");
userName = document.querySelector("#user-name");
userAge = document.querySelector("#age");
userEmail = document.querySelector("#email");
modalEmail = document.querySelector(".modal-content-mail");
modalAge = document.querySelector(".modal-content-age");
modalname = document.querySelector(".modal-content-name");
modal = document.querySelector("#modal");
modalAccept = document.querySelector(".modal-btn-accept");
modaldecline = document.querySelector(".modal-btn-decline");
modalUserValues = document.querySelector(".modal-user-values");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
});

modalAccept.addEventListener("click", () => {
  modalUserValues.textContent = "succsess";
  modaldecline.value = "close";
  modalAccept.style.display = "none";
});

modaldecline.addEventListener("click", () => {
  modal.style.display = "none";
});

for (let input of [userName, userAge, userEmail])
  input.addEventListener("change", ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    console.log(value);
    formData[name] = value;
  });

buttonElement.addEventListener("click", ({ target }) => {
  {
    modalEmail.textContent = formData["email"];
    modalAge.textContent = formData["age"];
    modalname.textContent = formData["user-name"];
    modal.style.display = "flex";
  }
});

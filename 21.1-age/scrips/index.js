ageBtn = document.querySelector(".age-btn");
checkAgeMessage = document.querySelector(".check-age-message");
ageValue = document.querySelector(".age-value");

ageBtn.addEventListener("click", () => {
  ageValue.value >= 18
    ? (checkAgeMessage.innerHTML = "you can drink appear")
    : (checkAgeMessage.innerHTML = "you’re too young");

  console.log(ageValue.value);
});

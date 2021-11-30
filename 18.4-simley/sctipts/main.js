const button = document.querySelector("#smileys-submit");
const smilesinput = document.querySelector("#smileys-input");
const smilesContainer = document.querySelector(".smileys-container");

button.addEventListener("click", function () {
  console.log();
  if (/^\d+$/.test(smilesinput.value) === false) {
    smilesContainer.innerHTML = "not a number";
    return;
  }
  smilesContainer.innerHTML = "";
  for (let index = 0; index < smilesinput.value; index++) {
    const smiley = document.createElement("img");
    smiley.src = "./assets/img/smiley.jpg";
    smiley.alt = "smiley";

    smilesContainer.append(smiley);
  }
  smilesinput.value = "";
});

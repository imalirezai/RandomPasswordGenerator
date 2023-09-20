const btnEl = document.querySelector(".password-btn");

const inputEl = document.getElementById("input");
const copyiconEl = document.querySelector(".fa-copy");

const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  creatPassword();
});

copyiconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});





function creatPassword() {
  const chars =
    "0123456789abcdefghijkmlopqrstuvwxyz!@#$%^&*()-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordlength = 14;
  let password = "";
  for (let index = 0; index < passwordlength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " copied";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}

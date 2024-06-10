const guestCompanionTrue = document.getElementById("companionTrue");
const guestCompanionFalse = document.getElementById("companionFalse");
const addGuestBtn = document.getElementById("addGuest");
const removeBtn = document.getElementById("removeGuest");
const guestsGroup = document.getElementById("guestsGroup");
const inputs = document.getElementsByClassName("guest-input");

guestCompanionTrue.addEventListener("click", (e) => {
  toggleCompanionNameForm(true);
});

guestCompanionFalse.addEventListener("click", (e) => {
  toggleCompanionNameForm(false);
});

addGuestBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newInput = newGuestInput(inputs.length);
  guestsGroup.appendChild(newInput);
  newInput.focus();
  evaluateGuestBtn();
});

removeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  removeGuestInput();
  evaluateGuestBtn();
});

function toggleCompanionNameForm(state) {
  const companionNameForm = document.getElementById("companionNameForm");
  
  if (state) {
    companionNameForm.classList.remove("hidden");
    companionNameForm.classList.add("show");
    const newInput = newGuestInput(0);
    guestsGroup.appendChild(newInput);
  } else {
    companionNameForm.classList.remove("show");
    companionNameForm.classList.add("hidden");
    guestsGroup.innerHTML = "";
    evaluateGuestBtn();
  }
}

function newGuestInput(id) {
  const newInput = document.createElement("input");
  
  newInput.type = "text";
  newInput.className = "guest-input";
  newInput.name = "companionName";
  newInput.id = `companionName${id}`;
  newInput.autocomplete = "off";
  newInput.placeholder = "Su nombre...";
  newInput.required = "required";
  
  return newInput;
}

function removeGuestInput() {
  guestsGroup.removeChild(guestsGroup.lastChild);
  guestsGroup.lastChild.focus();
}

function evaluateGuestBtn() {
  if (inputs.length > 1) {
    removeBtn.classList.remove("hidden");
    removeBtn.classList.add("show-btn");
  } else {
    removeBtn.classList.remove("show-btn");
    removeBtn.classList.add("hidden");
  }
}

function onSubmitContactForm() {
  const guestUsername = document.getElementById("guestUsername");
  return guestUsername.value.length == 0;
}
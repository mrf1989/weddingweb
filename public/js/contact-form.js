const guestCompanionTrue = document.getElementById("companionTrue");
const guestCompanionFalse = document.getElementById("companionFalse");

guestCompanionTrue.addEventListener("click", (e) => {
  toggleCompanionNameForm(true);
});

guestCompanionFalse.addEventListener("click", (e) => {
  toggleCompanionNameForm(false);
});

function toggleCompanionNameForm(state) {
  const companionNameForm = document.getElementById("companionNameForm");
  const companionName = document.getElementById("companionName");

  if (state) {
    companionNameForm.classList.remove("hidden");
    companionNameForm.classList.add("show");
    companionName.setAttribute("required", "true");
  } else {
    companionName.value = "";
    companionNameForm.classList.remove("show");
    companionNameForm.classList.add("hidden");
  }
}
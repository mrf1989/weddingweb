const btns = document.getElementsByClassName("delete-btn");
const modalWrapper = document.getElementById("modalWrapper");
const modalInfo = document.getElementById("modalInfo");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cleanModal();
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const guestNode = document.getElementById("guestId");
  const guestId = guestNode.getAttribute("data-guest-id");
  deleteGuest(guestId);
  cleanModal();
})

Array.from(btns).forEach((btn) => btn.addEventListener("click", (e) => {
  const guestId = e.target.getAttribute("data-guest-id");
  const guestName = e.target.getAttribute("data-guest-name");
  modalInfo.innerHTML += `<p id="guestId" data-guest-id="${guestId}">${guestName}</p>`;

  modalWrapper.classList.remove("hidden");
  modalWrapper.classList.add("show");
}));

function cleanModal() {
  modalInfo.innerHTML = "";
  modalWrapper.classList.remove("show");
  modalWrapper.classList.add("hidden");
}

function deleteGuest(id) {
  axios.delete(`/delete/${id}`)
    .then(e => window.location.reload());
}
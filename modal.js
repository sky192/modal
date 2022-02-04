const showModal = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const backDrop = document.querySelector(".backdrop");
const confirmbtn = document.querySelector(".confirm-modal");

showModal.addEventListener("click", () => {
    modal.style.opacity = 1;
    backDrop.style.display = "block";
    modal.style.transform = "translateY(20vh)";
});
function closeFunction() {
    modal.style.opacity = 0;
    backDrop.style.display = "none";
    modal.style.transform = "translateY(-100vh)";
}
closeModal.addEventListener("click", closeFunction);
backDrop.addEventListener("click", closeFunction);
confirmbtn.addEventListener("click", () => {
    closeFunction();
    alert("Thanks");
});

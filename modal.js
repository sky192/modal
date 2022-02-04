const showModal = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const backDrop = document.querySelector(".backdrop");

showModal.addEventListener("click", () => {
    modal.style.opacity = 1;
    backDrop.style.display = "block";
    modal.style.transform = "translateY(20vh)";
});

closeModal.addEventListener("click", () => {
    modal.style.opacity = 0;
    backDrop.style.display = "none";
    modal.style.transform = "translateY(-100vh)";
});

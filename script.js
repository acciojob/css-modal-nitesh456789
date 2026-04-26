const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-modal");

// Open Modal
openBtn.onclick = () => {
    modal.style.display = "block";
};

// Close Modal (button)
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close Modal (outside click)
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
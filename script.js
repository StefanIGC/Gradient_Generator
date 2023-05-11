const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box slect");
const colorInput = document.querySelectorAll(".colors input");

const generateGradient = () => {
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`
    gradientBox.style.background = gradient;
}


colorInput.forEach(input => {
    input.addEventListener("input", generateGradient);
});

selectMenu.addEventListener("change", generateGradient);
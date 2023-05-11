const gradientBox = document.querySelector(".gradient-box");
const colorInput = document.querySelectorAll(".colors input");

const generateGradient = () => {
    const gradient = `linear-gradient(to top left, ${colorInputs[0].value}, ${colorInputs[1].value})`
    gradientBox.style.background = gradient;
}


colorInput.forEach(input => {
    input.addEventListener("input", generateGradient);
})
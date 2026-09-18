const balloon = document.getElementById("balloon");

let size = 200;
let colors = ["red", "green", "blue"];
let colorIndex = 0;

balloon.addEventListener("click", () => {
    size += 10;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
    }

    updateBalloon();
});

balloon.addEventListener("mouseleave", () => {
    size -= 5;
    if (size < 200) size = 200;

    colorIndex--;
    if (colorIndex < 0) colorIndex = colors.length - 1;

    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}

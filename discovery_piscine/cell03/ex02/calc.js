const leftInput = document.getElementById("left");
const rightInput = document.getElementById("right");
const operator = document.getElementById("operator");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
    const left = leftInput.value;
    const right = rightInput.value;

    if (
        !/^\d+$/.test(left) ||
        !/^\d+$/.test(right)
    ) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    const a = parseInt(left);
    const b = parseInt(right);
    let result;

    if ((operator.value === "/" || operator.value === "%") && b === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    switch (operator.value) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        case "%":
            result = a % b;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);

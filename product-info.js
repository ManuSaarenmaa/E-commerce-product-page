let count = 0;
let counterD = document.querySelector(".counter-display");
let plusBtn = document.querySelector(".plus-button");
let minusBtn = document.querySelector(".minus-button");
let addToBtn = document.querySelector(".addToCart-button");

function increment() {
    count++;
    updateCount("+1", "float-up");
}

function decrement() {
    if (count > 0) {
        count--;
        updateCount("-1", "float-down");
    }
}

function updateCount(text, animationClass) {
    counterD.textContent = count;

    let floatText = document.createElement("span");
    floatText.innerText = text;
    floatText.classList.add(animationClass);

    let container = counterD.parentElement; 
    container.appendChild(floatText);

    setTimeout(() => {
        floatText.remove();
    }, 1000);
}

plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);

let count = 0;
let counterD = document.getElementById("counter-display");
let plusBtn = document.getElementById("plus-button");
let minusBtn = document.getElementById("minus-button");
let addToCart = document.getElementById("addToCart-button");

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

function addItem() {
    alert(count);
}

plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);
addToCart.addEventListener("click", addItem);
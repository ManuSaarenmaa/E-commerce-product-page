let cart = document.querySelector(".cart");
let cartBtn = document.querySelector(".cart-button");
let cartItems = document.querySelector(".cart-items");
let checkoutBtn = document.querySelector(".checkout-button");
let quantityIndicator = document.querySelector(".quantity");

function toggleCart() {
  cart.classList.toggle("active");
}

cartBtn.addEventListener("click", toggleCart);

function checkEmptyCart() {
  let emptyMessage;
  if (cartItems.children.length === 0) {
    emptyMessage = document.createElement("p");
    emptyMessage.classList.add("empty-message");
    emptyMessage.textContent = "Your cart is empty.";
    cartItems.appendChild(emptyMessage);
    checkoutBtn.style.display = "none";
  } else {
    let existingMessage = document.querySelector(".empty-message");
    if (existingMessage) {
      existingMessage.remove();
    }
    checkoutBtn.style.display = "";
  }
  updateCartQuantity();
}

function updateCartQuantity() {
  let totalQuantity = Array.from(cartItems.children).reduce((sum, item) => {
    let priceElement = item.querySelector(".p-price");
    return sum + (priceElement ? parseInt(priceElement.dataset.quantity) : 0);
  }, 0);

  quantityIndicator.textContent = totalQuantity;
  quantityIndicator.style.display = totalQuantity > 0 ? "inline-block" : "none";
}

checkEmptyCart();

function addItem() {
  if (count === 0) {
    alert("Quantity cannot be 0!");
    return;
  }

  let productName = document.querySelector(".product-name").dataset.name;
  let pCurrentPrice = document.querySelector(".curr-price");
  let pricePerItem = parseFloat(pCurrentPrice.dataset.price);
  let summary = pricePerItem * count;

  let existingCartItem = Array.from(cartItems.children).find(
    (item) => item.dataset.name === productName
  );

  if (existingCartItem) {
    let priceElement = existingCartItem.querySelector(".p-price");
    let currentQuantity = parseInt(priceElement.dataset.quantity);
    let newQuantity = currentQuantity + count;
    let newTotalPrice = pricePerItem * newQuantity;

    priceElement.dataset.quantity = newQuantity;
    priceElement.innerHTML = `$${pricePerItem} x ${newQuantity} <strong>$${newTotalPrice.toFixed(
      2
    )}</strong>`;
  } else {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.dataset.name = productName;

    let pImg = document.createElement("img");
    pImg.src = "images/image-product-1-thumbnail.jpg";
    pImg.alt = "product";
    pImg.classList.add("p-img");

    let pText = document.createElement("div");
    pText.classList.add("p-text");

    let pName = document.createElement("p");
    pName.classList.add("p-name");
    pName.textContent = productName;

    let pPrice = document.createElement("p");
    pPrice.classList.add("p-price");
    pPrice.dataset.quantity = count;
    pPrice.innerHTML = `$${pricePerItem} x ${count} <strong>$${summary.toFixed(
      2
    )}</strong>`;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "images/icon-delete.svg";
    deleteIcon.alt = "delete";
    deleteBtn.appendChild(deleteIcon);

    deleteBtn.addEventListener("click", () => {
      cartItem.remove();
      checkEmptyCart();
    });

    cartItem.appendChild(pImg);
    cartItem.appendChild(pText);
    pText.appendChild(pName);
    pText.appendChild(pPrice);
    cartItem.appendChild(deleteBtn);

    cartItems.appendChild(cartItem);
  }

  count = 0;
  counterD.textContent = 0;
  checkEmptyCart();
}

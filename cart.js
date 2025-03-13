let cart = document.querySelector(".cart");
let cartBtn = document.querySelector(".cart-button");
let cartItems = document.querySelector(".cart-items");
let checkoutBtn = document.querySelector(".checkout-button");

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
}

checkEmptyCart();

function addItem() {
  let cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  let pImg = document.createElement("img");
  pImg.src = "images/image-product-1-thumbnail.jpg";
  pImg.alt = "product";
  pImg.classList.add("p-img");

  let pText = document.createElement("div");
  pText.classList.add("p-text");

  let pName = document.createElement("p");
  pName.classList.add("p-name");
  let productName = document.querySelector(".product-name");
  pName.textContent = productName.dataset.name;

  let pPrice = document.createElement("p");
  pPrice.classList.add("p-price");
  let pCurrentPrice = document.querySelector(".curr-price");
  let summary = parseFloat(pCurrentPrice.dataset.price) * count;

  pPrice.innerHTML = `$${pCurrentPrice.dataset.price} x ${count} <strong>$${summary}</strong>`;

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-button");

  let deleteIcon = document.createElement("img");
  deleteIcon.src = "images/icon-delete.svg";
  deleteIcon.alt = "delete";
  deleteBtn.appendChild(deleteIcon);

  deleteBtn.addEventListener("click", removeItem);

  function removeItem() {
    cartItem.remove();
    checkEmptyCart();
  }

  cartItem.appendChild(pImg);
  cartItem.appendChild(pText);
  pText.appendChild(pName);
  pText.appendChild(pPrice);
  cartItem.appendChild(deleteBtn);

  cartItems.appendChild(cartItem);

  checkEmptyCart();
}
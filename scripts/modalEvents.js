let cart = [];

function closeModal() {
  c(".pizzaWindowArea").style.opacity = 0;
  setTimeout(() => {
    c(".pizzaWindowArea").style.display = "none";
  }, 500);
  modalQt = 1;
}
cs(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach(
  (element) => {
    element.addEventListener("click", closeModal);
  }
);
c(".pizzaInfo--qtmenos").addEventListener("click", () => {
  if (modalQt > 1) {
    modalQt--;
    c(".pizzaInfo--qt").innerHTML = modalQt;
  }
});

c(".pizzaInfo--qtmais").addEventListener("click", () => {
  modalQt++;
  c(".pizzaInfo--qt").innerHTML = modalQt;
});

cs(".pizzaInfo--size").forEach((size, sizeIndex) => {
  size.addEventListener("click", (e) => {
    c(".pizzaInfo--size.selected").classList.remove("selected");
    size.classList.add("selected");
  });
});

c(".pizzaInfo--addButton").addEventListener("click", () => {
  let size = parseInt(c(".pizzaInfo--size.selected").getAttribute("data-key"));

  let identifier = pizzaJson[modalKey].id + "@" + size;

  let key = cart.findIndex((item) => {
    return item.identifier == identifier;
  });

  if (key > -1) {
    cart[key].qt += modalQt;
  } else {
    cart.push({
      identifier,
      id: pizzaJson[modalKey].id,
      size,
      qt: modalQt,
    });
  }
  updateCart();
  closeModal();
});

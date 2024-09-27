export function createItemsView(onAddToCartClick) {
  const itemsListNode = document.querySelector(".main-items-container");
  const cartListNode = document.querySelector(".side-bar-cart-items");
  const addToCartBtn = document.querySelector(".main-item__btn-add-to-cart");

  return {
    itemsListNode,

    renderMainItems: function (mainItems) {
      let mainItemsHTML = "";

      mainItems.forEach((mainItem) => {
        mainItemsHTML += `
          <div class="main-item">
            <div style="background-image: url('${mainItem.img}')" class="main-item__img"></div>
            <h2 class="main-item__model">${mainItem.model}</h2>
            <p class="main-item__series">${mainItem.series}</p>
            <p class="main-item__price">$${mainItem.price}</p>
            <button id="${mainItem.id}" class="main-item__btn-add-to-cart"></button>
          </div>
        `;
      });

      itemsListNode.innerHTML = mainItemsHTML;

      const buttons = itemsListNode.querySelectorAll(
        ".main-item__btn-add-to-cart"
      );

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          onAddToCartClick(button.getAttribute("id"));
        });
      });
    },

    renderCartItems: function (cartItemsImgs) {
      let cartItemsHTML = "";

      cartItemsImgs.forEach((cartItemImg) => {
        cartItemsHTML += `
          <div style="background-image: url('${cartItemImg}')" class="side-bar-cart-items__item"></div>
        `;
      });

      cartListNode.innerHTML = cartItemsHTML;
    },

    addToCart: function (item) {
      cartListNode.innerHTML += `<div style="background-image: url('${item.img}')" class="side-bar-cart-items__item"></div>`;
    },
  };
}

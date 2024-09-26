export function createItemsView() {
  const itemsListNode = document.querySelector(".main-items-container");
  const cartListNode = document.querySelector(".side-bar-cart-items");

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
            <p class="main-item__price">${mainItem.price}</p>
            <button class="main-item__btn-add-to-cart"></button>
          </div>
        `;
      });

      itemsListNode.innerHTML = mainItemsHTML;
    },

    renderCartItems: function (cartItems) {
      let cartItemsHTML = "";

      cartItems.forEach((cartItem) => {
        cartItemsHTML += `
          <div style="background-image: url('${cartItem.img}')" class="side-bar-cart-items__item"></div>
        `;
      });
    },
  };
}

export function createViewCart() {
  const cartListNode = document.querySelector(".side-bar-cart-items");

  return {
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
      const divs = cartListNode.querySelectorAll("div");
      let isExist = false;

      divs.forEach((div) => {
        if (div.style.backgroundImage === `url("${item.img}")`) {
          isExist = true;
        }
      });

      if (!isExist) {
        cartListNode.innerHTML += `<div id="${item.id}" style="background-image: url('${item.img}')" class="side-bar-cart-items__item"></div>`;
      }
    },
  };
}

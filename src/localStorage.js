export function createLocalStorage() {
  return {
    create: function (cartItems) {
      cartItems.forEach((cartItem) => {
        cartItemId = JSON.stringify(cartItem.id);
        cartItem = JSON.stringify(cartItem);
        localStorage.setItem(cartItemId, cartItem);
      });
    },

    read: function () {
      const cartItems = [];

      for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }

        cartItems.push(JSON.parse(localStorage.getItem(key)));
      }

      return cartItems;
    },
  };
}

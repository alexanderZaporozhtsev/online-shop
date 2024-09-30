import { v4 as uuidv4 } from "uuid";

export function createLocalStorage() {
  return {
    userInit: function () {
      if (!localStorage.hasOwnProperty("userId")) {
        userId = JSON.stringify(uuidv4());
        localStorage.setItem("userId", userId);
      }
    },

    create: function (cartItems) {
      cartItems.forEach((cartItem) => {
        cartItemId = cartItem.id;
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

        if (key != "userId") {
          cartItems.push(JSON.parse(localStorage.getItem(key)));
        }
      }

      return cartItems;
    },
  };
}

import { v4 as uuidv4 } from "uuid";

export function createLocalStorage() {
  return {
    userInit: function () {
      if (!localStorage.hasOwnProperty("userId")) {
        userId = JSON.stringify(uuidv4());
        localStorage.setItem("userId", userId);
      }
    },

    getUserId: function () {
      const id = localStorage.getItem("userId");
      return JSON.parse(id);
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

    update: function (id, isIncrease) {
      const itemById = JSON.parse(localStorage.getItem(id));

      const incAmount = () => {
        itemById.amount += 1;
        localStorage.setItem(id, JSON.stringify(itemById));
      };

      const decAmount = () => {
        itemById.amount -= 1;
        localStorage.setItem(id, JSON.stringify(itemById));
      };

      isIncrease ? incAmount() : decAmount();
    },
  };
}

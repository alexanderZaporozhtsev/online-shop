export function createLocalStorage() {
  return {
    create: function (id) {
      localStorage.setItem(id, id);
    },

    read: function () {
      cartItems = { ...localStorage };

      console.log(cartItems);
      return cartItems;
    },

    delete: function (id) {
      localStorage.removeItem(id);
    },
  };
}

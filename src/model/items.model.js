export function createItemsModel() {
  return {
    items: [],
    cart: [],

    setItems: function (items) {
      items.forEach((item) => {
        this.items.push(item);
      });
    },

    setCart: function (cartItems) {
      this.cart = cartItems;
    },

    getCartItemsImg: function () {
      const cartItemsImgs = [];

      this.items.forEach((item) => {
        this.cart.forEach((cartItem) => {
          if (item.id == cartItem.id) cartItemsImgs.push(item.img);
        });
      });

      return cartItemsImgs;
    },

    getMainItems: function () {
      return this.items;
    },

    getCartItems() {
      return this.cart;
    },

    addToCart: function (id) {
      const cartItemToFind = this.cart.find((cartItem) => cartItem.id == id);

      if (cartItemToFind) {
        cartItemToFind.amount += 1;
      } else {
        this.cart.push({
          id: id,
          amount: 1,
        });
      }

      console.log(this.cart);
    },

    getItemById: function (id) {
      let itemById = {};

      this.items.forEach((item) => {
        if (item.id === parseInt(id)) itemById = item;
      });

      return itemById;
    },
  };
}

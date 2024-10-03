export function createModelCart() {
  return {
    cart: [],

    setCart: function (cartItems) {
      this.cart = cartItems;
    },

    getCartItemsImg: function (items) {
      const cartItemsImgs = [];

      items.forEach((item) => {
        this.cart.forEach((cartItem) => {
          if (item.id == cartItem.id) cartItemsImgs.push(item.img);
        });
      });

      return cartItemsImgs;
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

    changeAmount: function (id, isIncrease) {
      const incAmount = () => {
        this.cart.forEach((item) => {
          if (item.id == id) {
            item.amount += 1;
          }
        });
      };

      const decAmount = () => {
        this.cart.forEach((item) => {
          if (item.id == id) {
            item.amount -= 1;
          }
        });
      };

      isIncrease ? incAmount() : decAmount();

      console.log(this.cart);
    },
  };
}

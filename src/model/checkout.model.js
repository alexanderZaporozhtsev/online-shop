export function createModelCheckout() {
  return {
    checkout: {
      addressInfo: {
        addressName: "",
        addressLine: "",
        addressCity: "",
        addressNumber: "",
      },
      paymentMethod: true,
      items: [],
      deliveryPrice: 6.99,
      status: "new",
      userId: "",
    },

    setAddressInfo: function (newAddressInfo) {
      this.checkout.addressInfo = newAddressInfo;

      console.log(this.checkout);
    },

    setUserId: function (userId) {
      this.checkout.userId = userId[0].id;
    },

    setItems: function (items) {
      items.forEach((item) => {
        this.checkout.items.push({
          itemId: item.id,
          itemAmount: item.amount,
        });
      });
    },
  };
}

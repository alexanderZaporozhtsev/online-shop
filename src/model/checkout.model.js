import { v4 as uuidv4 } from "uuid";

export function createModelCheckout() {
  return {
    checkout: {
      addressInfo: {
        addressName: "",
        addressLine: "",
        addressCity: "",
        addressNumber: "",
      },
      paymentMethodIsCard: true,
      items: [],
      deliveryPrice: 6.99,
      status: "new",
      userId: "",
      orderId: "",
    },

    setOrderId: function () {
      this.checkout.orderId = uuidv4();
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

    switchPaymentMethod: function () {
      this.checkout.paymentMethodIsCard = !this.checkout.paymentMethodIsCard;
    },

    getCheckout: function () {
      console.log(this.checkout);
      return this.checkout;
    },
  };
}

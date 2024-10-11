import { isBoolean } from "util";
import { createLocalStorage } from "../localStorage";
import { createModelCart } from "../model/cart.model";
import { createModelCheckout } from "../model/checkout.model";
import { createModelUser } from "../model/user.model";
import { createStorage } from "../storage";
import { createViewCheckout } from "../view/checkout.view";

const localStorage = createLocalStorage();
const storage = createStorage("items");

const modelCart = createModelCart();
const modelCheckout = createModelCheckout();
const modelUser = createModelUser();

const viewCheckout = createViewCheckout(
  handleAddressInfoChange,
  handlePaymentMethodChange,
  handleNewOrderAdd
);

storage.readById(localStorage.read()).then((items) => {
  modelUser.setUser(localStorage.getUserId());
  modelCart.setCart(items);

  viewCheckout.render(items);
  viewCheckout.renderSum(modelCart.getCartSum());
});

function handleAddressInfoChange(newAddressInfo) {
  modelCheckout.setAddressInfo(newAddressInfo);
  modelCheckout.setUserId(modelUser.getUser());
  modelCheckout.setItems(modelCart.getCartItems());
}

function handlePaymentMethodChange() {
  modelCheckout.switchPaymentMethod();
  console.log(modelCheckout.checkout.paymentMethodIsCard);
}

function handleNewOrderAdd() {
  storage.createOrder(modelCheckout.getCheckout());
  localStorage.clearCart();
  location.href = "/";
}

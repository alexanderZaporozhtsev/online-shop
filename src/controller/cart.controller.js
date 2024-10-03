import { createLocalStorage } from "../localStorage";
import { createModelCart } from "../model/cart.model";
import { createStorage } from "../storage";
import { createViewCart } from "../view/cart.view";

const localStorage = createLocalStorage();
const storage = createStorage("items");

const modelCart = createModelCart();

const viewCart = createViewCart(handleIncBtnClick, handleDecBtnClick);

storage.readById(localStorage.read()).then((items) => {
  modelCart.setCart(items);
  viewCart.render(modelCart.getCartItems());
});

function handleIncBtnClick(id) {
  const isIncrease = true;

  localStorage.update(id, isIncrease);
  modelCart.changeAmount(id, isIncrease);

  viewCart.renderAmount(id, isIncrease);
}

function handleDecBtnClick(id) {
  const isIncrease = false;

  localStorage.update(id, isIncrease);
  modelCart.changeAmount(id, isIncrease);

  viewCart.renderAmount(id, isIncrease);
}

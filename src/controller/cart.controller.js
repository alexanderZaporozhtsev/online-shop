import { createLocalStorage } from "../localStorage";
import { createModelCart } from "../model/cart.model";
import { createStorage } from "../storage";
import { createViewCart } from "../view/cart.view";

const localStorage = createLocalStorage(handleItemAmount0);
const storage = createStorage("items");

const modelCart = createModelCart();

const viewCart = createViewCart(
  handleIncBtnClick,
  handleDecBtnClick,
  handleAmountChanged,
  handleItemAmount0
);

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

function handleAmountChanged() {
  viewCart.renderSum(modelCart.getCartSum());
}

function handleItemAmount0(id) {
  modelCart.deleteItem(id);
  viewCart.deleteItem(id);
}

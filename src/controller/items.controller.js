import { createItemsStorage } from "../storage";
import { createItemsModel } from "../model/items.model";
import { createItemsView } from "../view/items.view";
import { createLocalStorage } from "../localStorage";

const storage = createItemsStorage("items");
const model = createItemsModel();
const view = createItemsView(handleClickAddToCart);
const localStorage = createLocalStorage();

localStorage.userInit();

storage.read().then((items) => {
  model.setItems(items);
  model.setCart(localStorage.read());
  view.renderMainItems(model.getMainItems());
  view.renderCartItems(model.getCartItemsImg());
});

function handleClickAddToCart(id) {
  model.addToCart(id);
  localStorage.create(model.getCartItems());
  view.addToCart(model.getItemById(id));
}

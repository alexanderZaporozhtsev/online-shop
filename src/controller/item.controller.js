import { createStorage } from "../storage";
import { createLocalStorage } from "../localStorage";
import { createModelItem } from "../model/item.model";
import { createModelItems } from "../model/items.model";
import { createModelCart } from "../model/cart.model";
import { createViewCart } from "../view/cart-preview.view";
import { createViewItem } from "../view/item.view";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const storage = createStorage("items");
const localStorage = createLocalStorage();

const modelItem = createModelItem();
const modelItems = createModelItems();
const modelCart = createModelCart();

const viewCartPreview = createViewCart();
const viewItem = createViewItem(handleClickAddToCartItem);

storage.read().then((items) => {
  modelItems.setItems(items);

  modelItem.setItem(items, id);
  modelCart.setCart(localStorage.read());

  viewCartPreview.renderCartItems(
    modelCart.getCartItemsImg(modelItems.getItems())
  );
  viewItem.render(modelItem.getItem());
});

function handleClickAddToCartItem() {
  modelCart.addToCart(id);
  localStorage.create(modelCart.getCartItems());
  viewCartPreview.addToCart(modelItems.getItemById(id));
}

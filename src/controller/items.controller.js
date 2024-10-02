import { createStorage } from "../storage";
import { createModelItems } from "../model/items.model";
import { createViewItems } from "../view/items.view";
import { createLocalStorage } from "../localStorage";
import { createViewCart } from "../view/cart-preview.view";
import { createModelCart } from "../model/cart.model";
import { createModelUser } from "../model/user.model";

const storage = createStorage("items");
const localStorage = createLocalStorage();

const modelItems = createModelItems();
const modelCart = createModelCart();

const viewItems = createViewItems(handleClickAddToCartItems);
const viewCartPreview = createViewCart();

const modelUser = createModelUser();

localStorage.userInit();
modelUser.setUser(localStorage.getUserId());

storage.read().then((items) => {
  modelItems.setItems(items);

  modelCart.setCart(localStorage.read());

  viewItems.render(modelItems.getItems());
  viewCartPreview.renderCartItems(
    modelCart.getCartItemsImg(modelItems.getItems())
  );
});

export function handleClickAddToCartItems(id) {
  modelCart.addToCart(id);
  localStorage.create(modelCart.getCartItems());
  viewCartPreview.addToCart(modelItems.getItemById(id));
}

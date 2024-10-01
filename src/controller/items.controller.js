import { createItemsStorage } from "../storage";
import { createModelItems } from "../model/items.model";
import { createViewItems } from "../view/items.view";
import { createLocalStorage } from "../localStorage";
import { createViewCart } from "../view/cart-preview.view";
import { createModelCart } from "../model/cart.model";
import { createModelUser } from "../model/user.model";

const storage = createItemsStorage("items");
const localStorage = createLocalStorage();

const modelItems = createModelItems();
const modelCart = createModelCart();

const viewItems = createViewItems(handleClickAddToCart);
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

function handleClickAddToCart(id) {
  modelCart.addToCart(id);
  localStorage.create(modelCart.getCartItems());
  viewCartPreview.addToCart(modelCart.getItemById(id));
}

console.log(modelUser.user);

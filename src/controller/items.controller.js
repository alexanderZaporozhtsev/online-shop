import { createItemsStorage } from "../storage";
import { createItemsModel } from "../model/items.model";
import { createItemsView } from "../view/items.view";
import { createLocalStorage } from "../localStorage";

const storage = createItemsStorage("items");
const model = createItemsModel();
const view = createItemsView();
const localStorage = createLocalStorage();

storage.read().then((items) => {
  model.setItems(items);
  view.renderMainItems(model.getMainItems());
});

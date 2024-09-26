export function createItemsModel() {
  return {
    items: [],

    setItems: function (items) {
      this.items = [];

      items.forEach((item) => {
        this.items.push(item);
      });
    },

    getMainItems: function () {
      return this.items;
    },
  };
}

export function createModelItems() {
  return {
    items: [],

    setItems: function (items) {
      items.forEach((item) => {
        this.items.push(item);
      });
    },

    getItems: function () {
      return this.items;
    },

    getItemById: function (id) {
      let itemById = {};

      this.items.forEach((item) => {
        if (item.id === parseInt(id)) itemById = item;
      });

      return itemById;
    },
  };
}

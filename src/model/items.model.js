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
  };
}

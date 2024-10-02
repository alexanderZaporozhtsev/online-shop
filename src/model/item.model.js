export function createModelItem() {
  return {
    item: [],

    setItem: function (items, id) {
      items.forEach((item) => {
        if (item.id == id) {
          this.item.push(item);
        }
      });
    },

    getItem: function () {
      return (this.item = this.item[0]);
    },
  };
}

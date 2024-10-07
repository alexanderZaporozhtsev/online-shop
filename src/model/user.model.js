export function createModelUser() {
  return {
    user: [],

    setUser: function (id) {
      this.user.push({
        id: id,
      });
    },

    getUser: function () {
      return this.user;
    },
  };
}

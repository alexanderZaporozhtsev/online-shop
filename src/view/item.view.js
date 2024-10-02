export function createViewItem(onAddToCartClick) {
  const itemNode = document.querySelector(".item");
  const description = document.querySelector(".item__description-wrapper");

  return {
    itemNode,
    description,

    render: function (item) {
      let itemHTML = "";

      itemHTML = `
        <div class="item__img" style="background-image: url('${item.img}')"></div>
          <div class="item-info-wrapper">
            <h2 class="item__model">${item.model}</h2>
            <p class="item__series">${item.series}</p>
            <div class="item__rating">★★★★★ 5/5</div>
            <p class="item__price">$ ${item.price}</p>
            <p class="item__description-short">${item.descriptionShort}</p>
            <button class="item__btn-add-to-cart">Добавить в корзину</button>
          </div>
      `;

      itemNode.innerHTML = itemHTML;
      description.innerHTML = `
        <h2 class="item__description-header">Описание</h2>
        <p>${item.description}</p>
      `;

      const addToCartBtn = document.querySelector(".item__btn-add-to-cart");
      addToCartBtn.addEventListener("click", () => {
        onAddToCartClick(item.id);
      });

      const backBtn = document.querySelector(".item-back-btn");
      backBtn.addEventListener("click", () => {
        location.href = "/";
      });
    },
  };
}

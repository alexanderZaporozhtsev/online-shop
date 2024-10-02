export function createViewItems(onAddToCartClick) {
  const itemsListNode = document.querySelector(".main-items-container");

  return {
    itemsListNode,

    render: function (mainItems) {
      let mainItemsHTML = "";

      mainItems.forEach((mainItem) => {
        mainItemsHTML += `
          <div class="main-item">
            <div onclick="location.href = 'item.html?id=${mainItem.id}'" style="background-image: url('${mainItem.img}')" class="main-item__img"></div>
            <h2 class="main-item__model">${mainItem.model}</h2>
            <p class="main-item__series">${mainItem.series}</p>
            <p class="main-item__price">$${mainItem.price}</p>
            <button id="${mainItem.id}" class="main-item__btn-add-to-cart"></button>
          </div>
        `;
      });

      itemsListNode.innerHTML = mainItemsHTML;

      const buttons = itemsListNode.querySelectorAll(
        ".main-item__btn-add-to-cart"
      );

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          onAddToCartClick(button.getAttribute("id"));
        });
      });
    },
  };
}

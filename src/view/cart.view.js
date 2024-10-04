export function createViewCart(
  onIncBtnClick,
  onDecBtnClick,
  onAmountChanged,
  handleSumLoad
) {
  const cartListNode = document.querySelector(".items-wrapper");
  const backBtn = document.querySelector(".item-back-btn");
  const sumNode = document.querySelector(".side-bar-cart__amount");

  return {
    render: function (items) {
      let cartHTML = "";

      items.forEach((item) => {
        cartHTML += `
          <div id="${item.id}" class="item">
            <div class="item__img" onclick="location.href = 'item.html?id=${
              item.id
            }'" style="background-image: url('${item.img}')"></div>
            <div class="item-info-wrapper">
              <h2 class="item__model">${item.model}</h2>
              <p class="item__series">${item.series}</p>
              <p class="item__description-short">
                ${item.descriptionShort.slice(0, 70)}...
              </p>
              <div class="item__rating">★★★★★ 5/5</div>
              <div class="item__count-wrapper">
                <p class="item__price">$ ${item.price}</p>
                <div class="count-container">
                  <button id="${item.id}" class="count-dec">-</button>
                  <p id="${item.id}" class="item__amount">${item.amount}</p>
                  <button id="${item.id}" class="count-inc">+</button>
                </div>
              </div>
            </div>
          </div>
        `;
      });

      cartListNode.innerHTML = cartHTML;
      onAmountChanged();

      backBtn.addEventListener("click", () => {
        location.href = `index.html`;
      });

      const incBtns = document.querySelectorAll(".count-inc");

      incBtns.forEach((incBtn) => {
        incBtn.addEventListener("click", () => {
          const id = incBtn.getAttribute("id");
          onIncBtnClick(id);

          onAmountChanged();
        });
      });

      const decBtns = document.querySelectorAll(".count-dec");

      decBtns.forEach((decBtn) => {
        decBtn.addEventListener("click", () => {
          const id = decBtn.getAttribute("id");
          onDecBtnClick(id);

          onAmountChanged();
        });
      });
    },

    renderAmount: function (id, isIncrease) {
      const amountNode = document.querySelectorAll(".item__amount");

      const incAmount = () => {
        amountNode.forEach((node) => {
          if (node.getAttribute("id") == id) {
            const newAmount = Number(node.innerHTML) + 1;
            node.innerHTML = newAmount;
          }
        });
      };

      const decAmount = () => {
        amountNode.forEach((node) => {
          if (node.getAttribute("id") == id) {
            const newAmount = Number(node.innerHTML) - 1;
            node.innerHTML = newAmount;
          }
        });
      };

      isIncrease ? incAmount() : decAmount();
    },

    renderSum: function (sum) {
      sumNode.innerHTML = `Сумма $ ${sum}`;
    },

    deleteItem: function (id) {
      const itemNode = document.querySelectorAll(".item");

      itemNode.forEach((node) => {
        if (node.getAttribute("id") == id) {
          node.remove();
        }
      });
    },
  };
}

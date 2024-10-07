export function createViewCheckout(onAddressInfoChange) {
  const checkoutNode = document.querySelector(".cart-item-output");
  const sumNode = document.querySelector(".checkout-pricing-items__amount");
  const fullSumNode = document.querySelector(".checkout-pricing__amount");

  const nameInput = document.getElementById("name");
  const addressInput = document.getElementById("address");
  const cityInput = document.getElementById("city");
  const numberInput = document.getElementById("number");

  const changeAddressBtn = document.querySelector(".check-out-info-edit-btn");
  const closeChangeAddressBtn = document.querySelector(
    ".btn-close-address-popup"
  );
  const submitAddressBtn = document.querySelector(".btn-submit-address");

  return {
    render: function (items) {
      let checkoutHTML = "";

      items.forEach((item) => {
        checkoutHTML += `
        <div class="cart-item">
          <div class="cart-item__img" style="background-image: url('${
            item.img
          }')"></div>
            <div class="cart-item-info-wrapper">
              <p class="cart-item__model">${item.model}</p>
              <p class="cart-item__series">${item.series}</p>
              <p class="cart-item__description-short">
                ${item.descriptionShort.slice(0, 70)}...
              </p>
              <p class="cart-item__rating">★★★★★ 5/5</p>
              <p class="cart-item__amount">$ ${item.price} x ${item.amount}</p>
            </div>
          </div>
        <div class="underline"></div>
        `;
      });

      checkoutNode.innerHTML = checkoutHTML;

      changeAddressBtn.addEventListener("click", () => {
        this.toggleChangeAddress();
      });

      closeChangeAddressBtn.addEventListener("click", () => {
        this.toggleChangeAddress();
      });

      submitAddressBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const newAddressInfo = {
          addressName: nameInput.value,
          addressLine: addressInput.value,
          addressCity: cityInput.value,
          addressNumber: numberInput.value,
        };

        onAddressInfoChange(newAddressInfo);
        this.toggleChangeAddress();
      });
    },

    renderSum: function (sum) {
      sumNode.innerHTML = `$ ${sum}`;
      fullSumNode.innerHTML = `Стоимость: $ ${Number(sum) + 6.99}`;
    },

    toggleChangeAddress: function () {
      const overlay = document.getElementById("popupOverlay");
      overlay.classList.toggle("show");
    },
  };
}

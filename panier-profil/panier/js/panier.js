function addIcons() {
  let arr = [
    {
      element: ".ok-icon",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="59.739" height="57.753" viewBox="0 0 59.739 57.753">
          <path id="Tracé_40" data-name="Tracé 40" d="M8468.271,1876.84c-1.854,25.231,8.017,20.489,14.109,13.322s25.425-31.179,25.425-31.179" transform="matrix(0.966, 0.259, -0.259, 0.966, -7683.917, -3980.866)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="12"/>
        </svg>
        `,
    },
  ];

  arr.forEach((item) => {
    let root = document.querySelectorAll(item.element);
    let iconWrapper = createElement("span", { class: "ib" });
    iconWrapper.innerHTML = item.icon;
    root.forEach((r) => r.appendChild(iconWrapper.cloneNode(true)));
  });
}

function handleQuantity() {
  let quantityWrapper;

  let wrappers = document.querySelectorAll(".quantity-wrapper");

  wrappers.forEach((quantityWrapper) =>
    quantityWrapper.addEventListener("click", handleWrapperClick)
  );

  function handleWrapperClick(e) {
    console.log(quantityWrapper);
    let target = e.target;
    let targetClass = target.classList;
    if (!targetClass.contains("less") && !targetClass.contains("more")) return;

    let root = getParent(target, ".product-card");

    if (targetClass.contains("less")) addQuantity(-1, root);
    else addQuantity(1, root);
  }

  function addQuantity(i = 1, root) {
    let quantityWrapper = root.querySelector(".quantity");
    let montantTotalWrapper = root.querySelector(".montant-total");
    let prix = root.querySelector(".product-price").textContent * 1;

    let quantity = quantityWrapper.textContent * 1;
    if (i == -1 && quantity == 1) return;
    quantity += i;
    quantityWrapper.textContent = quantity;
    montantTotalWrapper.textContent = prix * quantity;
  }
}

  addIcons();
  handleQuantity();

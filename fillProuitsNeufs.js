const electronicsArr = [
  {
    img: `https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80`,
    name: "Camera ##",
  },
  {
    img: `https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80`,
    name: "laptop ##",
  },
  {
    img: `https://images.unsplash.com/photo-1607016284318-d1384bf5edd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
    name: "ps5",
  },
  {
    img: `https://images.unsplash.com/flagged/photo-1580234820596-0876d136e6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80`,
    name: "gamepad 1",
  },
  {
    img: `https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80`,
    name: "souris #",
  },
  {
    img: `https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80`,
    name: "xbox",
  },
];

const clothesArr = [
  {
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    name: "hat",
  },
  {
    img: `https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80`,
    name: "veste 1",
  },
  {
    img: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80`,

    name: "pull",
  },
  {
    img: `https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    name: "t-shirt",
  },
  ,
  {
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80",
    name: "jean1",
  },
  {
    img: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    name: "sneaker",
  },
  {
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    name: "sneaker",
  },
  {
    name: "hat1",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];
function addContent(parent, { name, img }) {
  //   debugger;
  parent.innerHTML += `<div class="product-card-wrapper ">
    <div class="product-card new r3 ">
        <div class="top flex">
            <img src="${img}" alt="" class="r3">
<buton class="btn read-more ">Savoir plus</buton>

        </div>
        <div class="bottom r3 ">
            <p class="product-name main-txt">${name}</p>
            <p class="product-price ib">
                99
            </p>
            
           
            <div class="product-description HIDE">
                a description for the product***
                name : --***
                coleur:---***
            </div>
        </div>
        <div class="add-to-cart-wrapper r3">
            <button class="add-to-cart btn  ">

                <span class="add-circle r50 ib">+</span>
                <span>Ajouter au panier</span>
            </button>
            
        </div>

    </div>
    





 


</div>`;
}

const electronicsWrapper = document.querySelector(
  ".electronics .carousel-content"
);
const clothesWrapper = document.querySelector(".clothes .carousel-content");

electronicsArr.forEach((item) => addContent(electronicsWrapper, item));
clothesArr.forEach((item) => addContent(clothesWrapper, item));

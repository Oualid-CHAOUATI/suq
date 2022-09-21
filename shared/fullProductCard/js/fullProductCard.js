function addReadmoreListeners(){

    let btns=document.querySelectorAll(".read-more.btn");
    let closeBtn=document.querySelector(".product-full-card .close-btn");
  let fullCard=document.querySelector(".product-full-card");
    btns.forEach(btn=>btn.addEventListener("click",()=>{

  
      updateFullCard(getParent(btn,".product-card"),fullCard);
  
  fullCard.classList.add("show");
    }))
  
    closeBtn.addEventListener("click",()=>{
      fullCard.classList.remove("show");
    })
  }
  
  
  function updateFullCard(minimalCard,fullCard){
    let img=minimalCard.querySelector("img").src;
    let name=minimalCard.querySelector(".product-name").textContent;
    let description=minimalCard.querySelector(".product-description").textContent;
    let price=minimalCard.querySelector(".product-price").textContent;
    description=description.replaceAll("***","<br>");
  
    fullCard.querySelector("img").setAttribute("src",img);
    fullCard.querySelector(".product-name").textContent=name;
    fullCard.querySelector(".product-description").innerHTML=description;
    fullCard.querySelector(".product-price").textContent=price;
    if(minimalCard.classList.contains("new")){
      fullCard.classList.add("hide-posteur-wrapper");
      return;
    };
    fullCard.classList.remove("hide-posteur-wrapper");

    try{


      let strings=[".posteur-name",'.posteur-email',".posteur-tel"];

      strings.forEach(str=>{
        let content=minimalCard.querySelector(str).textContent;
        fullCard.querySelector(str).textContent=content;

      })


    }
    catch(e){

    }
  }

   function addIcons() {
    let arr = [
      {
        element: ".x-icon",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="51.443" height="51.443" viewBox="0 0 51.443 51.443">
          <g id="Groupe_99" data-name="Groupe 99" transform="translate(-341.533 8.467)">
            <line id="Ligne_15" data-name="Ligne 15" y2="52.751" transform="translate(385.905 -1.396) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="10"/>
            <line id="Ligne_16" data-name="Ligne 16" y2="52.751" transform="translate(385.905 35.905) rotate(135)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="10"/>
          </g>
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

  addReadmoreListeners();//ajouter des event listeners pour les bouttons readmore 
  addIcons();

  



    handleCategories();



function handleCategories(){


    let categoriesCards=document.querySelectorAll(".category-card");

categoriesCards.forEach(card=>{
    let bgImgSrc=card.querySelector(".bg-img").src;
let overlayImgSrc=card.querySelector(".overlay-img").src;
    card.style.backgroundImage=`url(${bgImgSrc})`;


    card.addEventListener("mouseenter",()=>{
        document.body.style.setProperty("--overlay-img",`url(${overlayImgSrc})`);
    })

});

}


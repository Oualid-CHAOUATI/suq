function handleHeroGallery() {
  console.log("hello world");
  let imgs = [
    [
      `https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80`,
      `https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80`,
      `https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80`,
      `https://images.unsplash.com/photo-1499971856191-1a420a42b498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=329&q=80`,
      `https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=349&q=80`,
      `https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80`,
    ],
    [
      `https://images.unsplash.com/photo-1587305138714-9675ed5c9415?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80`,
      `https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`,
      `https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80`,
      `https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80`,
      `https://images.unsplash.com/photo-1585232350744-974fc9804d65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80`,
      `https://images.unsplash.com/photo-1610540502378-c97e1e391e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80`,
    ],
    [
      `https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80`,
      `https://images.unsplash.com/photo-1497377825569-02ad2f9edb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80`,
      `https://images.unsplash.com/photo-1608638562455-bc8927d3abd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80`,
      `https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80`,
    ],
  ];
  let root = document.querySelector(".hero-section");
  let heroGallery = createElement("div", { class: "hero-gallery flex" });
  root.appendChild(heroGallery);
  let galleryContent = createElement("div", {
    class: "hero-gallery-content flex",
  });
  heroGallery.append(galleryContent);

  imgs.forEach((row) => {
    let columnsWrapper = createElement("div", { class: "columns-wrapper" });
    galleryContent.append(columnsWrapper);

    let column = createElement("div", { class: "column flex" });
    galleryContent.append(columnsWrapper);
    row.forEach((img) => {
      // let myImg=createElement("img",{src:img});
      let myImg = createElement("img", { src: img });
      column.append(myImg);
    });
    columnsWrapper.append(column);
    columnsWrapper.append(column.cloneNode(true));
    columnsWrapper.append(column.cloneNode(true));
  });
}




function addIcons() {
  let arrowIcon = `<?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="123.964px" height="123.964px" viewBox="0 0 123.964 123.964" style="enable-background:new 0 0 123.964 123.964;"
     xml:space="preserve">
  <g>
    <path d="M121.7,57.681L83,26.881c-4-3.1-10-0.3-10,4.8v10.3c0,3.3-2.2,6.2-5.5,6.2H6c-3.3,0-6,2.4-6,5.8v16.2c0,3.2,2.7,6,6,6h61.5
      c3.3,0,5.5,2.601,5.5,5.9v10.3c0,5,6,7.8,9.9,4.7l38.6-30C124.7,64.781,124.8,60.081,121.7,57.681z"/>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
  `;
  let arr = [
    {
      element: ".cta-btn.main",
      icon: `<svg id="Layer_1" enable-background="new 0 0 511.998 511.998" height="512" viewBox="0 0 511.998 511.998" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m354.099 399.601-27.218-30.785-22.475 19.872 48.725 55.108 78.919-81.747-21.583-20.836z"/><path d="m369.451 265.331c-2.735 0-5.447.099-8.138.275l-8.698-148.885h-70.979v-28.95c-.001-48.397-39.375-87.771-87.772-87.771s-87.771 39.374-87.771 87.771v28.95h-70.98l-15.766 269.873c-1.227 21.013 6.051 41.018 20.494 56.329s33.989 23.743 55.037 23.743h179.112c22.636 27.652 57.021 45.332 95.461 45.332 68.006 0 123.333-55.327 123.333-123.333 0-68.007-55.327-123.334-123.333-123.334zm-233.359-177.56c0-31.855 25.916-57.771 57.771-57.771s57.772 25.916 57.772 57.771v28.95h-115.543zm-41.214 348.895c-12.702 0-24.498-5.089-33.214-14.329s-13.108-21.313-12.368-33.993l14.115-241.622h42.681v37.588h30v-37.588h115.543v37.588h30v-37.588h42.681l7.277 124.562c-49.541 16.016-85.475 62.578-85.475 117.382 0 17.017 3.465 33.24 9.725 48.001h-160.965zm274.573 45.332c-51.464 0-93.333-41.869-93.333-93.333 0-51.465 41.869-93.334 93.333-93.334s93.333 41.869 93.333 93.334c0 51.464-41.869 93.333-93.333 93.333z"/></g></svg>`,
    },
    {
      element: ".cta-btn.secondary",
      icon: `<svg height="354pt" viewBox="0 0 354.00032 354" width="354pt" xmlns="http://www.w3.org/2000/svg"><path d="m177 354c97.601562 0 177-79.398438 177-177 .042969-23.410156-4.585938-46.59375-13.621094-68.191406-.949218-2.328125-3.078125-3.972656-5.570312-4.296875-2.496094-.328125-4.976563.707031-6.496094 2.710937-1.515625 2.007813-1.84375 4.675782-.851562 6.988282 8.320312 19.886718 12.582031 41.234374 12.539062 62.789062 0 89.878906-73.121094 163-163 163s-163-73.121094-163-163 73.121094-163 163-163c18.265625-.023438 36.40625 3.03125 53.65625 9.039062 2.363281.839844 5 .347657 6.902344-1.289062 1.902344-1.632812 2.785156-4.164062 2.3125-6.628906s-2.230469-4.488282-4.605469-5.300782c-18.734375-6.523437-38.429687-9.8437495-58.265625-9.820312-97.601562 0-177 79.398438-177 177s79.398438 177 177 177zm0 0"/><path d="m246.394531 45.523438c-2.734375-2.734376-7.167969-2.734376-9.902343 0-2.730469 2.734374-2.730469 7.167968 0 9.902343l32.574218 32.574219c2.691406 2.691406 7.035156 2.738281 9.785156.109375l57.425782-54.847656c1.835937-1.722657 2.605468-4.296875 2.019531-6.742188-.589844-2.445312-2.445313-4.390625-4.863281-5.089843-2.414063-.699219-5.019532-.046876-6.824219 1.707031l-52.480469 50.125zm0 0"/><path d="m177 109.292969c16.523438.019531 29.914062 13.410156 29.933594 29.933593 0 3.867188 3.132812 7 7 7 3.867187 0 7-3.132812 7-7-.027344-21.550781-15.664063-39.910156-36.933594-43.371093v-13.855469c0-3.867188-3.132812-7-7-7s-7 3.132812-7 7v13.855469c-22.601562 3.660156-38.605469 24.058593-36.773438 46.882812 1.828126 22.820313 20.878907 40.410157 43.773438 40.417969 16.460938 0 29.835938 13.292969 29.929688 29.757812.097656 16.460938-13.121094 29.910157-29.582032 30.101563-.117187-.007813-.230468-.019531-.347656-.019531s-.230469.011718-.347656.019531c-16.386719-.207031-29.566406-13.539063-29.585938-29.925781 0-3.867188-3.132812-7-7-7-3.867187 0-7 3.132812-7 7 .027344 21.550781 15.660156 39.910156 36.933594 43.371094v15.539062c0 3.867188 3.132812 7 7 7s7-3.132812 7-7v-15.539062c22.605469-3.648438 38.617188-24.054688 36.785156-46.878907-1.828125-22.824219-20.886718-40.417969-43.785156-40.417969-10.734375.058594-20.683594-5.632812-26.066406-14.917968-5.386719-9.289063-5.386719-20.746094 0-30.035156 5.382812-9.285157 15.332031-14.976563 26.066406-14.914063zm0 0"/></svg>`,
    },
    {
      element: `.nav-btn`,
      icon: arrowIcon,
    },
    {
      element: ".product-description [class*='btn']",
      icon: arrowIcon,
    },
   
    
    {
      element: ".lightbox-btn",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80.001" height="80.001" viewBox="0 0 80.001 80.001">
      <path id="Soustraction_6" data-name="Soustraction 6" d="M7829-2189h-18v-6h12v-13h6v19Zm-60,0h-20v-19h6v13h14v6Zm60-61h-6v-13h-12v-6h18v19Zm-74,0h-6v-19h20v6h-14v13Z" transform="translate(-7748.999 2269)" fill="#fff"/>
    </svg>
    
    `,
    }
  ];

  arr.forEach((item) => {
    let root = document.querySelectorAll(item.element);
    let iconWrapper = createElement("span", { class: "ib" });
    iconWrapper.innerHTML = item.icon;
    root.forEach((r) => r.appendChild(iconWrapper.cloneNode(true)));
  });
}




addIcons();//ajouter les icons .. vu que les svg prendent beacoup d'espace .. je voulais pas ecombrer les fichiers HTML
handleHeroGallery();//creer la galerie de la section HERO






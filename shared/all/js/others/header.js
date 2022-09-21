function addIcons() {
  let elements = {
    ".search-icon": `<svg xmlns="http://www.w3.org/2000/svg" width="40.252" height="40" viewBox="0 0 40.252 40">
        <path id="chercher" d="M39.5,35.975,28.931,25.409a2.857,2.857,0,0,0-2.013-.755,15.671,15.671,0,0,0,3.27-9.56A15.094,15.094,0,1,0,15.094,30.189a14.455,14.455,0,0,0,9.56-3.522,2.086,2.086,0,0,0,.755,2.013L35.975,39.245a2.432,2.432,0,0,0,3.522,0A2.145,2.145,0,0,0,39.5,35.975Zm-24.4-9.56A11.321,11.321,0,1,1,26.415,15.094,11.274,11.274,0,0,1,15.094,26.415Z" fill="#444"/>
      </svg>
      `,
    ".panier-icon": `<svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" width="42.002" height="40" viewBox="0 0 42.002 40">
      <g id="_13" data-name="13">
        <path id="Tracé_1" data-name="Tracé 1" d="M36.7,24.663H16.9C13.55,16.574,10.57,8.09,7.436,0H0V3.067H5.623c2.98,8.323,6.145,16.412,9.218,24.5H36.656a16.742,16.742,0,0,0,0-2.906Zm-4.793,5.973a4.326,4.326,0,0,0-2.98,3.677,5.293,5.293,0,0,0,.494,3.515,4.044,4.044,0,0,0,2.486,2.064,3.658,3.658,0,0,0,3.7-1.263A5.234,5.234,0,0,0,36.7,34.314C36.24,31.759,34.1,30.117,31.909,30.636Zm-13.059,0a4.81,4.81,0,0,0-3.073,3.677,4.98,4.98,0,0,0,3.073,5.578,3.77,3.77,0,0,0,3.639-1.334,5.357,5.357,0,0,0,1.154-4.245c-.462-2.555-2.6-4.2-4.793-3.677ZM18.343,21.4H36.871L42,6.17H13.228l.83,3.085H19l.968,3.085H15.209l1,2.888H21.17l.983,3.282H17.36Z" fill="#271b1b" fill-rule="evenodd"/>
      </g>
    </svg>
    `,
    ".profil-icon": `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40">
    <g id="Groupe_125" data-name="Groupe 125" transform="translate(-1639 -40)">
      <circle id="Ellipse_21" data-name="Ellipse 21" cx="7" cy="7" r="7" transform="translate(1647 40)" fill="#271b1b"/>
      <rect id="Rectangle_67" data-name="Rectangle 67" width="30" height="24" rx="9" transform="translate(1639 56)" fill="#271b1b"/>
    </g>
  </svg>
  `,
  };

  Object.keys(elements).forEach((k) => {
    try {
      document.querySelectorAll(k).forEach((e) => (e.innerHTML = elements[k]));
    } finally {
    }
  });

  sunIcon = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 302.4 302.4" style="enable-background:new 0 0 302.4 302.4;" xml:space="preserve">
    <g>
        <g>
            <path d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6
                c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z M190.4,190.4
                c-10,10-24,16-39.2,16s-29.2-6-39.2-16s-16-24-16-39.2s6-29.2,16-39.2s24-16,39.2-16s29.2,6,39.2,16s16,24,16,39.2
                S200.4,180.4,190.4,190.4z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4
                C302.4,145.6,297.6,140.8,292,140.8z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8
                C161.6,255.6,156.8,250.8,151.2,250.8z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M258,243.6l-22-22c-3.6-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S262,247.6,258,243.6z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M151.2,0c-5.6,0-10.4,4.8-10.4,10.4v30.8c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4V10.4
                C161.6,4.8,156.8,0,151.2,0z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M258.4,44.4c-4-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4c3.6,4,10.4,4,14.4,0l22-22C262.4,54.8,262.4,48.4,258.4,44.4z"
                />
        </g>
    </g>
    <g>
        <g>
            <path d="M41.2,140.8H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.4,10.4,10.4,10.4h30.8c5.6,0,10.4-4.8,10.4-10.4
                C51.6,145.6,46.8,140.8,41.2,140.8z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M80.4,221.6c-3.6-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22C84.4,232,84.4,225.6,80.4,221.6z"/>
        </g>
    </g>
    <g>
        <g>
            <path d="M80.4,66.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S84.4,70.4,80.4,66.4z"/>
        </g>
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

  moonIcon = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 312.999 312.999" style="enable-background:new 0 0 312.999 312.999;" xml:space="preserve">
    <g>
        <g>
            <path d="M305.6,178.053c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4
                c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4
                c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.8,60-32.8,96.4c0,43.6,17.6,83.2,46.4,112s68.4,46.4,112,46.4
                c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314.4,184.853,311.2,179.253,305.6,178.053z M244.4,261.653
                c-23.2,18.4-52.8,29.6-85.2,29.6c-38,0-72.4-15.6-97.2-40.4c-24.8-24.8-40.4-59.2-40.4-97.2c0-31.6,10.4-60.4,28.4-83.6
                c12.4-16,28-29.2,46-38.4c-2,4.4-4,8.8-5.6,13.6c-5.2,14.4-7.6,29.6-7.6,45.6c0,38,15.6,72.8,40.4,97.6s59.6,40.4,97.6,40.4
                c16.8,0,32.8-2.8,47.6-8.4c5.2-2,10.4-4,15.2-6.4C274,232.453,260.8,248.853,244.4,261.653z"/>
        </g>
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

  let label = document.querySelector(".scheme-label-wrapper");

  label.innerHTML = sunIcon + label.innerHTML + moonIcon;
}

addIcons();

function handleHamburgerMenu() {
  let hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector("nav .menu");

  window.addEventListener("click", (e) => {
    e.stopPropagation();
    let target = e.target;
    console.log(target);

    if (target.classList.contains("hamburger")) {
      console.log("haambuurger");
      menu.classList.add("show");
      return;
    }
    if (target.classList.contains("x-btn")) {
      menu.classList.remove("show");
      return;
    }

    let parent = getParent(target, ".menu");
    if (parent.tagName.toLowerCase() == "html") {
      menu.classList.remove("show");
    }
  });
}


function handleSchemes() {
  let currentScheme;
  const localStorageKey = "suuq-scheme";
  const allSchemes = {
    dark: { value: "dark", reverse: "light" },
    light: { value: "light", reverse: "dark" },
  };
  const schemeBtn = document.querySelector("#scheme-checkbox");

  // Check for dark mode preference at the OS level
  let prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Get the user's theme preference from local storage, if it's there
  currentScheme = localStorage.getItem(localStorageKey);
  currentScheme =
    currentScheme || (prefersDarkScheme ? allSchemes.dark.value : allSchemes.light.value);

  setCheckboxState();
  setScheme();

  schemeBtn.addEventListener("change",changeScheme);

  function changeScheme() {
currentScheme=allSchemes[currentScheme].reverse;
setScheme();

  }
  function setScheme() {
    document.documentElement.setAttribute("color-scheme", currentScheme);
    localStorage.setItem(localStorageKey, currentScheme);
  }

  function setCheckboxState() {
    if (currentScheme == allSchemes.dark.value) schemeBtn.checked = true;
  }
}

window.addEventListener("DOMcontentloaded",()=>{
  handleSchemes();
  handleHamburgerMenu();

})

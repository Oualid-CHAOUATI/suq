


function watchImageFileInput(){

    let imgFileInput=document.querySelector(".img-file-input");
    let imgValueWrapper=document.querySelector(".img-value");

    imgFileInput.addEventListener("change",(e)=>{
        let value=imgFileInput.value;
        value=value.substring(value.lastIndexOf('\\')+1);
        imgValueWrapper.textContent=value;

        

    })
}


    
    watchImageFileInput();

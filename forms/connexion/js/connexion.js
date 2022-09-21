


function addFormNavigation(){
    let formSegmentsContent=document.querySelector(".form-segments-content");
    let nextBtns=document.querySelectorAll(".form-segment .next-btn");
    let returnBtns=document.querySelectorAll(".form-segment .return-btn");
nextBtns.forEach((btn,i)=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();

        
        formSegmentsContent.style.transform=`translateX(${-100*(i+1)}%)`;

    })
})
returnBtns.forEach((btn,i)=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        formSegmentsContent.style.transform=`translateX(${-100*(i)}%)`;

    })
})


let toggleStateBtns=document.querySelectorAll(".toggle-state-btn")
toggleStateBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{
        document.body.classList.toggle("other-state");
    
    })
})


}

    
    addFormNavigation();

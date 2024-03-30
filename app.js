var typed = new Typed(".auto",{
    strings:["Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});



let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    alert("Click Ok to send the Message");
})



let links = document.querySelectorAll(".tab-links");
let contents = document.querySelectorAll(".tab-contents");
function opentab(arg){
    for(link of links){
        link.classList.remove("active-link");
    }
    for(content of contents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(arg).classList.add("active-tab");
}








const wrraper = document.querySelector(".sliderWrraper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrraper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
let showStatus = false;

function showMenu(){
    let line1 = document.querySelector(".line-1");
    let line2 = document.querySelector(".line-2");
    let line3 = document.querySelector(".line-3");
    let menus = document.querySelector(".nav-lists");
    
    if(showStatus === false){
        line1.style.transform = "translate(0px, 12px) rotateZ(45deg)";
        line2.style.opacity = "0";
        line3.style.transform = "translate(0px, -6px) rotateZ(-45deg)";
        menus.style.top = "0%";
        showStatus = true;
    }else{
        line1.style.transform = "translate(0px, 0px) rotateZ(0deg)";
        line2.style.opacity = "1";
        line3.style.transform = "translate(0px, 0px) rotateZ(0deg)";
        menus.style.top = "-100%";
        showStatus = false;
    }  
}

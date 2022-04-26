const menuBtn = document.getElementById("menu-btn")
const navMenu = document.getElementById("nav-menu")



menuBtn.addEventListener("click",menuHandler)

function menuHandler(){
    const closeBtn = this.children[1]
    this.classList.toggle("menu-btn-active")

    if([...this.classList].includes("menu-btn-active")){
        closeBtn.style.display = "block"
    }else{
        closeBtn.style.display = "none"
    }

    navMenu.classList.toggle("nav-menu-active")
    
}


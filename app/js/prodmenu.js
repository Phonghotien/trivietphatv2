const prodMenu = document.querySelector(".prod-menu")
if(prodMenu) {
    if(window.innerWidth < 1201) {
        const prodList = prodMenu.querySelector(".prod-menu-list")
        console.log(prodList);
        const prodItems = prodMenu.querySelectorAll(".prod-menu-list > .prod-menu-item")
        console.log(prodItems);
        prodItems.forEach(prodItem => {
            const icon = prodItem.querySelector("i")
            const prodItemBody = prodItem.querySelector(".prod-menu-list ")
            $(prodItemBody).slideUp();
            icon.addEventListener("click", (e)=> {
                e.preventDefault();
                icon.closest(".prod-menu-link").classList.toggle("active");
                $(prodItemBody).slideToggle();
            })
        })
        
        
    }
}
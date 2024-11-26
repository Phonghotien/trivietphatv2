const seemore = document.querySelector(".block-seemore")
if(seemore) {
    const seemoreItem = seemore.querySelectorAll(".homes-bn-item")
    seemoreItem.forEach(item => {
        const text = item.querySelector(".info-des")
        const button = item.querySelector(".info-link")
        const less = button.getAttribute("data-less")
        const more = button.getAttribute("data-more")
        
        let lineClamp = true
        
        button.addEventListener("click", ()=> {
            if(lineClamp) {
                $(text).css("-webkit-line-clamp","99");
                button.innerHTML = `${less}<i class="fa-solid fa-chevron-right"></i>`
            } else {
                $(text).css("-webkit-line-clamp","5");
                button.innerHTML = `${more}<i class="fa-solid fa-chevron-right"></i>`
            }
            lineClamp = !lineClamp;
        })
    })
}
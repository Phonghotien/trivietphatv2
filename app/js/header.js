const main = document.querySelector(".main")
const headers = document.querySelector(".hd");
const mobiles = document.querySelector(".mobile");
const mobileOverlay = document.querySelector(".mobile-overlay");
const search = document.querySelector(".search-mona");

function HandleHeader() {
    if (header && mobiles && mobileOverlay) {
        if (window.scrollY > 0) {
            main.classList.add("hd-sticky");
            headers.classList.add("sticky");
            mobiles.classList.add("sticky");
            mobileOverlay.classList.add("sticky");
        } else {
            headers.classList.remove("sticky");
            mobiles.classList.remove("sticky");
            mobileOverlay.classList.remove("sticky");
            main.classList.remove("hd-sticky");
        }
    }
}
window.addEventListener("scroll", function () {
    HandleHeader();
});
$(document).ready(function () {
    HandleHeader();
});



const cart = document.querySelector(".cartJS")
if (cart) {
    const cartMini = cart.querySelector('.cartMini')
    const cartOver = cart.querySelector('.cartOver')
    const cartClick = cart.querySelector('.cartClick')
    const cartClose = cart.querySelector('.cartClose')
    const cartEditClose = cart.querySelector('.cartEditClose')
    const tableEdit = document.querySelectorAll('.cartx-table .cartx-tr .editJS')
    // mobile cart
    const cartBtn = document.querySelector(".cartBtn")
    if (cartBtn) {
        cartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            Open();
        })
    }
    // cart step
    const carts = document.querySelector(".hd-cart-main")
    const cartEdit = document.querySelector(".cartEdit")


    if (cartClick) {
        cartClick.addEventListener('click', () => {
            Open();
        })
    }

    if (cartClose) {
        cartClose.addEventListener('click', () => {
            Close();
            CloseEdit();
        })
    }
    if (cartEditClose) {
        cartEditClose.addEventListener('click', () => {
            // cartEdit.classList.remove("open")
            Close();
            CloseEdit();
        })
    }
    if (tableEdit) {
        tableEdit.forEach(items => {
            items.addEventListener('click', () => {
                OpenEdit();
            })
        })
    }

    if (cartOver) {
        cartOver.addEventListener('click', () => {
            Close();
            CloseEdit();
        })
    }
    function Open() {
        if (cartMini && cartOver) {
            cartMini.classList.add('open')
            cartOver.classList.add('open');
            // $('body').css('overflow', 'hidden')
        }
    }
    function Close() {
        if (cartMini && cartOver) {
            cartMini.classList.remove('open')
            cartOver.classList.remove('open')
            $('body').css('overflow', 'normal')
            
        }
    }
    function OpenEdit() {
        if (cartEdit && cartOver) {
            cartEdit.classList.add('open')
            cartOver.classList.add('open');
            // $('body').css('overflow', 'hidden')
        }
    }
    function CloseEdit() {
        if (cartEdit && cartOver) {
            cartEdit.classList.remove('open')
            cartOver.classList.remove('open');
            $('body').css('overflow', 'normal')
        }
    }
    // cart Step

    if (carts && cartEdit) {
        const cartItem = carts.querySelectorAll(".hd-cart-item")
        const confirm = cartEdit.querySelector(".confirmJS")
        cartItem.forEach(items => {
            const edit = items.querySelector(".editJS")
            edit.addEventListener("click", () => {
                OpenEdit()
            })
        })
        // confirm.addEventListener("click", (e) => {
        //     e.preventDefault();
        //     cartEdit.classList.remove("open")
        // })
    }
}

// cate
const cateSp = document.querySelector('.hd-cate')
if(cateSp) {
    const cateHead = cateSp.querySelector(".cateInnerJs")
    const cateSpBox = cateSp.querySelector(".cateBoxJs")
    const cateClose = cateSp.querySelector(".cateCloseJs")
    document.addEventListener("click", (e)=> {
        if(e.target.closest(".hd-cate")) {
            cateSp.classList.add("active")
            if(e.target.closest(".cateCloseJs")) {
                cateSp.classList.remove("active")
            }
        }else {
            cateSp.classList.remove("active")
        }
    })

    const cateParents = cateSp.querySelectorAll(".cateParentJs")
    const cateChilds = cateSp.querySelectorAll(".cateChildJs")

    cateParents.forEach((cateParent,index) => {
        cateParents[0].classList.add("active")
        cateChilds[0].classList.add("open")
        cateParent.addEventListener("mouseenter", ()=> {
            $(cateParents).removeClass("active")
            $(cateChilds).removeClass("open")
            cateParent.classList.add("active")
            cateChilds[index].classList.add("open");
        })
    })
    

}



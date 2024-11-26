const regisCheck = document.querySelector(".register-cl >.heads input")
const regisCheckChild = document.querySelectorAll(".register-cl-item input")
if (regisCheck && regisCheckChild) {
    document.addEventListener("click", (e) => {
        if (e.target.closest(".register-cl >.heads input")) {
            if (regisCheck.checked == true) {
                regisCheckChild.forEach(item => {
                    item.checked = true
                })
                // console.log("true");            
            } else {
                regisCheckChild.forEach(item => {
                    item.checked = false
                })
                // console.log("false");
            }
        }
    })
    regisCheckChild.forEach(item => {
        item.addEventListener('click', function () {
            // Kiểm tra nếu tất cả các checkbox đã được check
            const allChecked = [...regisCheckChild].every(item => item.checked);
            regisCheck.checked = allChecked; // Nếu tất cả đều check, checkAll sẽ check
        });
    })
    if(regisCheck.checked == true) {
        regisCheckChild.forEach(item => {
            item.checked = true
        })
    }
}

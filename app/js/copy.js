
function copy() {
    var copyButtons = document.querySelectorAll('.copyButton');

    copyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Tìm parent là div.item của nút được bấm
            var parentItem = button.closest('.copyItem');

            // Chọn input ẩn trong parent item
            var hiddenInput = parentItem.querySelector('.copyInput');

            // Copy giá trị vào clipboard bằng API clipboard
            navigator.clipboard.writeText(hiddenInput.value).then(function () {
                console.log("đã copy");
                button.classList.add("copied")
                setTimeout(() => {
                    button.classList.remove("copied")
                },1000)
            }).catch(function (err) {
                console.error('Lỗi khi copy: ', err);
            });
        });
    });
}
copy();

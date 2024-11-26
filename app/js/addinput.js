// Lấy đối tượng button và div chứa input
const addButton = document.querySelector('.buttonAddJS');
const inputContainer = document.querySelector('.boxAddJS .form-list');

// Hàm thêm input mới
function addInput() {
    // Tạo phần tử input mới
    const newFormIp = document.createElement('div');
    const newInput = document.createElement('input');
    newFormIp.className = "form-ip col"
    newInput.type = 'text';
    newInput.placeholder = 'Nhập thông tin';
    newFormIp.appendChild(newInput)
    // Thêm input mới vào container
    inputContainer.appendChild(newFormIp);
}

// Gắn sự kiện click cho nút
if (addButton && inputContainer) {
    addButton.addEventListener('click', addInput);
}


// 
function setupCopyFeature(containerSelector, itemSelector, buttonSelector, maxCopies) {
    let copyCount = 0;
    const copyButton = document.querySelector(buttonSelector);
    if (copyButton) {
        copyButton.addEventListener('click', function () {
            const container = document.querySelector(containerSelector);
            const itemToCopy = document.querySelector(itemSelector);
            if (copyCount < maxCopies) {
                $(itemToCopy).find('.re-select-main').select2('destroy');
                const clonedItem = itemToCopy.cloneNode(true);
                copyCount++;
                // Cập nhật lại name cho các phần tử trong bản sao theo tên cụ thể
                $(clonedItem).find('[name="user_address[0][nation]"]').attr('name', `user_address[${copyCount}][nation]`);
                $(clonedItem).find('[name="user_address[0][conscious]"]').attr('name', `user_address[${copyCount}][conscious]`);
                $(clonedItem).find('[name="user_address[0][district]"]').attr('name', `user_address[${copyCount}][district]`);
                $(clonedItem).find('[name="user_address[0][ward]"]').attr('name', `user_address[${copyCount}][ward]`);

                // Cập nhật lại name cho input
                $(clonedItem).find('[name="user_address[0][address]"]').attr('name', `user_address[${copyCount}][address]`);


                container.appendChild(clonedItem);
                // Khởi tạo lại select2 trên bản sao
                $(clonedItem).find('.re-select-main').select2();
                // Khởi tạo lại select2 trên phần tử gốc
                $(itemToCopy).find('.re-select-main').select2();
                const text = clonedItem.querySelector(".stt")
                text.textContent = copyCount + 1
                if (copyCount === maxCopies) {
                    copyButton.style.display = 'none'; // Ẩn nút sao chép
                }
            }
        });
    }
    // Sự kiện click radio button
    $(document).on('click', '.profile-info-block .checker input', function () {
        // Bỏ chọn tất cả các radio khác
        $('.profile-info-block .checker input').not(this).prop('checked', false);
    });
}
$('.re-select-main').select2();

setupCopyFeature('.addressBlock', '.addressBlock  .profile-info-block', '.addressJs', 2);
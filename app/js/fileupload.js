const fileLabels = document.querySelectorAll(".fileInput");
if (fileLabels) {
    fileLabels.forEach(fileLabel => {
        const fileInput = fileLabel.querySelector("input")
        const fileNameParagraph = fileLabel.querySelector(".upTxt");
        fileInput.addEventListener("change", function () {
            // Lấy ra tên của tệp
            const fileName = fileInput.files[0].name;
    
            // Hiển thị tên tệp trong thẻ p
            fileNameParagraph.innerHTML = fileName;
        });
    })
}
const ImgPara = document.querySelectorAll('.imgPara')
if (ImgPara) {
    ImgPara.forEach(ImgParaItem => {
        new Ukiyo(ImgParaItem, {
            scale: 1.2, // 1~2 is recommended
            speed: 1.2, // 1~2 is recommended
            willChange: true,
            wrapperClass: "ukiyo-wrapper",
            externalRAF: false
        })
    })

}
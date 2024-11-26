// search

const hdSrch = document.querySelector(".hd-srch")
if (hdSrch) {
    const hdSrchform = document.querySelector(".foundJS")
    const close = document.querySelector(".foundClose")
    const hdSrchIp = hdSrchform.querySelector("input")
    document.addEventListener("click", (e) => {
        if (e.target.matches(".hd-srch, .hd-srch *") || e.target.matches(".found-wr, .found-wr *")) {
            hdSrchform.classList.add("open");
            // $("body").css("overflow", "hidden")
            setTimeout(() => {
                hdSrchIp.focus();
            }, 100)
        } else {
            hdSrchform.classList.remove("open");
            $("body").css("overflow", "normal")
        }
    })
    close.addEventListener("click", () => {
        hdSrchform.classList.remove("open");
        $("body").css("overflow", "normal")
    })

}
$(".seepassJS").on("click", function () {
    // console.log("show pass");
    const pwd = $(this).siblings('input');
    if (pwd.attr("type") == "password") {
        pwd.attr("type", "text");
        // console.log("show");
        // $(this).parent().addClass("show");
        $(this).removeClass("fa-eye");
        $(this).addClass("fa-eye-slash");
    } else {
        pwd.attr("type", "password");
        $(this).addClass("fa-eye");
        $(this).removeClass("fa-eye-slash");
    }
});
function scrollEvent() {
    $(window).scroll(function () {
        headerFix();
    });

    function headerFix() {
        if (winSc > 50) {
            $header.addClass("fixed");
        } else {
            $header.removeClass("fixed");
        }
    }
    headerFix();
}
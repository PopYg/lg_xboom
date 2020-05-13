"use strict";
var winW;
var winH;
var esStep = "Expo.ease";
var esOut = "Expo.easeOut";
var $window = $(window);
var winSc;
var $html = $("html");
var htmlH;
var htmlW;
var $gxHtml = $("#gxHtml");
var _compareBoxW;
var $header = $("#header");
var $alignMonitor = $(".monitor_compare .compare_box, .monitor_compare .lcd_screen .img_wrap");

var docW;
var $leftToRight = $("#leftToRight");
var leftToRightW;
var conPosLeft = [],
    conWidth = [];

$window.load(function () {
    winW = $(this).width();
    winH = $(this).height();
    htmlH = $("body").outerHeight(true);
    htmlW = $html.width();
    winSc = $(this).scrollTop();
    _compareBoxW = $(".monitor_compare .compare_box").width();
    $alignMonitor.css({"background-position-x" :  -(1462 - _compareBoxW) / 2});
    gxScrollSet();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
        htmlW = $html.width();
        _compareBoxW = $(".monitor_compare .compare_box").width();
        $alignMonitor.css({"background-position-x" :  -(1462 - _compareBoxW) / 2});
        gxScrollSet();
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });

    function gxScrollSet(){
        if (!$gxHtml.length) return false;
        docW = $(document).width();
        $gxHtml.find(".gx_contents09").width(htmlW);
        leftToRightW = $leftToRight.width();
        $gxHtml.height(leftToRightW - docW + winH);
        $gxHtml.find("#header").width(htmlW - 136);
        $gxHtml.find("#footer").width(htmlW - 260);
        $gxHtml.find("#footerLink").width(htmlW);
        $gxHtml.find("#header .header_wrap #allNav nav").width(htmlW / 2);
        $leftToRight.find("> section").each(function(i){
            var _this = $(this);
            conPosLeft.push(_this.offset().left);
            conWidth.push(_this.width());
        });
    }
    main();
    layout();
    scrollEvent();
    cinemaJS();
    gamingJS();
    lifeJS();
    lineUpJS();
    gx();
});
"use strict";
var winW;
var winH;
var esStep = "Expo.ease";
var esOut = "Expo.easeOut";
var $window = $(window);
var winSc;
var $header = $("#header");
var $html = $("html");

$window.load(function () {
    winW = $(this).width();
    winH = $(this).height();
    winSc = $(this).scrollTop();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });
    layout();
    main();
    pn();
    pl();
    meridian();
    jellybean();
    scrollEvent();
});
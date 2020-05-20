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

    main();
    layout();
    scrollEvent();
});
function layout() {
    var $allNav = $("#allNav");
    var $gnbNav = $allNav.find("nav");
    var $allMenuBtn = $("#allMenuBtn");
    var $navDimmed = $("#navDimmed");

    //nav btn open
    $allMenuBtn.click(function () {
        var _this = $(this);
        if(!$allNav.hasClass("nav_open")){
            $html.addClass("no_scroll");
            $allNav.addClass("nav_open");
            TweenMax.to($navDimmed, .3, {display:"block", opacity:.6});
            TweenMax.to($gnbNav, .3, {x:"0%", ease:esStep});
        } else {
            allNavClose();
        }
    });
    $navDimmed.click(function () {
        allNavClose();
    });
    function allNavClose(){
        $html.removeClass("no_scroll");
        $allNav.removeClass("nav_open");
        TweenMax.to($navDimmed, .3, {display:"none", opacity:0});
        TweenMax.to($gnbNav, .3, {x:"-100%", ease:esStep});
    }

    //cookie
    var _cookieNameFunctional = "UK_LGCOM_IMPROVEMENTS",
        _cookieNameSocial = "UK_LGCOM_SOCIAL_MEDIA",
        _cookieNameAnalysis = "UK_LGCOM_ANALYSIS_OF_SITE",
        _cookieNameAdvertising = "UK_LGCOM_ADVERTISING";

    var $cookieAll = $("#cookieAllPc"),
        $cookieAllAgree = $cookieAll.find("#allAgreeBtn"),
        $cookieChangeWrap = $cookieAll.find(".change_wrap"),
        $cookieChangeBtn = $cookieAll.find("#cookieChange"),
        $cookieDimmed = $("#cookieDimmed");
    var $cookieClose = $cookieAll.find("#cookieClose");
    var $cookieSave = $cookieAll.find("#cookieSave");

    var $functionalAgree = document.getElementById("functionalAgree"),
        $socialAgree = document.getElementById("socialAgree"),
        $analysisAgree = document.getElementById("analysisAgree"),
        $advertisingAgree = document.getElementById("advertisingAgree");

    $cookieChangeBtn.click(function () {
        $cookieAll.addClass("cookie_open");
        TweenMax.to($cookieChangeWrap, .3, {height:0});
        TweenMax.to($cookieAll, .5, {height:410});
    });
    $cookieClose.click(function () {
        $cookieAll.removeClass("cookie_open");
        TweenMax.to($cookieAll, .3, {height:50});
        TweenMax.to($cookieChangeWrap, .5, {height:50});
        TweenMax.to($cookieDimmed, .5, {opacity:0, display:"none"});
    });
    $cookieAllAgree.click(function(){
        setCookie(_cookieNameFunctional, "Y", 365);
        setCookie(_cookieNameSocial, "Y", 365);
        setCookie("analysisCookie", "Y", 365);
        setCookie(_cookieNameAnalysis, "Y", 365);
        setCookie(_cookieNameAdvertising, "Y", 365);
        window.location.reload();
    });

    if(getCookie(_cookieNameFunctional) === null && getCookie(_cookieNameSocial) === null && getCookie("analysisCookie") === null && getCookie(_cookieNameAdvertising) === null){
        $cookieAll.addClass("cookie_open");
        $cookieChangeWrap.css({height:0});
        $cookieAll.css({height:410});
        $cookieDimmed.css({opacity:.6, display:"block"});
    }
    $cookieSave.click(function(){
        if($functionalAgree.checked === true){
            setCookie(_cookieNameFunctional, "Y", 365);
        } else {
            setCookie(_cookieNameFunctional, "N", 365);
        }
        if($socialAgree.checked === true){
            setCookie(_cookieNameSocial, "Y", 365);
        } else {
            setCookie(_cookieNameSocial, "N", 365);
        }
        if($analysisAgree.checked === true){
            setCookie("analysisCookie", "Y", 365);
            setCookie(_cookieNameAnalysis, "Y", 365);
        } else {
            setCookie("analysisCookie", "N", 365);
            setCookie(_cookieNameAnalysis, "N", 365);
        }
        if($advertisingAgree.checked === true){
            setCookie(_cookieNameAdvertising, "Y", 365);
        } else {
            setCookie(_cookieNameAdvertising, "N", 365);
        }
        window.location.reload();
    });
    if(getCookie(_cookieNameFunctional) === "Y"){
        $functionalAgree.checked = true;
    }
    if(getCookie(_cookieNameSocial) === "Y"){
        $socialAgree.checked = true;
    }
    if(getCookie("analysisCookie") === "Y" && getCookie(_cookieNameAnalysis) === "Y"){
        $analysisAgree.checked = true;
    }
    if(getCookie(_cookieNameAdvertising) === "Y"){
        $advertisingAgree.checked = true;
    }
}
function main() {
    var $mainContainer = $("#container.main_container");
    if(!$mainContainer.length) return false;

    var $meridianTitle = $("#meridianTitle"),
        $meridianTxt = $meridianTitle.find("p"),
        $meridianLogo = $meridianTitle.find("img");

    var openingScene = new TimelineLite();
    openingScene.to($meridianTxt, 1, {opacity:0, delay:1, ease:esStep})
                .to($meridianLogo, 1, {opacity:1, ease:esStep})
                .to($meridianTitle, 1, {opacity:0, display:"none", ease:esStep})
                .set($("body"), {overflow:"auto", padding:0});

    /*
        메인 PL scene
        0번에서 스크롤 하면 이미지 오퍼 60 ~ 100으로 NEW LOOK 텍스트 올라옴
        1번에서 스크롤 하면  NEW LOOK - > SIMPLY STYLISH로 변경,
                      이미지 main_scene02.png 로 변경
        2번에서 스크롤 하면  SIMPLY STYLISH - > The New PL Series로 변경,
                      이미지 main_scene03.png 로 변경
        3번에서 스크롤 하면 텍스트 위로 반정도 올리고,
                      이미지 스케일 .8정도로 줄임
     */

    /* main scene */
    var controller = new ScrollMagic.Controller();
    var $scenePl = $("#scenePl");
    var $plImg = $scenePl.find(".pl_img"),
        $plImg01 = $plImg.find(".pl_img01"),
        $plImg02 = $plImg.find(".pl_img02"),
        $plImg03 = $plImg.find(".pl_img03");

    var $plTxt = $scenePl.find(".pl_txt"),
        $plTxt01 = $plTxt.find(".pl_txt01"),
        $plTxt02 = $plTxt.find(".pl_txt02"),
        $plTxt03 = $plTxt.find(".pl_txt03");
    var $plBg = $scenePl.find(".pl_bg");
    var $plLink = $scenePl.find(".link_wrap");

    var _plSceneTimer1 = 1;
    var _plSceneTimer2 = 1;
    var _plSceneTimer3 = 1;
    var plSceneTime = new TimelineMax();
    //image scene
    var plSceneImg01 = TweenMax.to($plImg01, _plSceneTimer1, {opacity:1}),
        plSceneImg02 = TweenMax.to($plImg02, _plSceneTimer2, {opacity:1}),
        plSceneImg03 = TweenMax.to($plImg03, _plSceneTimer3, {opacity:1}),
        plSceneImg04 = TweenMax.to($plImg03, 2, {scale:.7, y:"-48%"}),
        plSceneImg03_end = TweenMax.to($plImg.find(".pl_img01, .pl_img02"), .1, {display:"none"});

    //txt scene
    var plSceneTxt01 = TweenMax.to($plTxt01, _plSceneTimer1, {opacity:1}),
        plSceneTxt01_end = TweenMax.to($plTxt01, .5, {opacity:0}),
        plSceneTxt02 = TweenMax.to($plTxt02, _plSceneTimer2, {opacity:1}),
        plSceneTxt02_end = TweenMax.to($plTxt02, .5, {opacity:0}),
        plSceneTxt03 = TweenMax.to($plTxt03, _plSceneTimer3, {opacity:1}),
        plSceneTxt04 = TweenMax.to($plTxt03, 2, {fontSize:"6rem", top:"11%", y:0});

    //bg scene
    var plSceneBg = TweenMax.to($plBg, 2, {scale:1, opacity:1});

    //link scene
    var plLink = TweenMax.to($plLink, 1, {opacity:1, display:"block"});

    plSceneTime.add([plSceneImg01, plSceneTxt01])
                .add([plSceneImg02, plSceneTxt02, plSceneTxt01_end])
                .add([plSceneImg03, plSceneTxt03, plSceneTxt02_end])
                .add([plSceneImg04, plSceneTxt04, plSceneBg, plSceneImg03_end])
                .add(plLink);

    var scenePL = new ScrollMagic.Scene({
        triggerElement: ".main_container",
        offset: 0,
        duration:6000,
        triggerHook:0
    })
    .setPin("#scenePl")
    .setTween(plSceneTime)
    .addTo(controller)
    /*.addIndicators({
        name: "pl scene"
    });*/
}
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

    var $jsScrSec = $(".js-scr-sec");
    var scrInnerStep = [];
    if (!$jsScrSec.length) return false;

    function scrollEvent() {
        $window.scroll(function () {
            scrollMotion(winSc);
        });
        $jsScrSec.each(function () {
            var _this = $(this);
            var secTop = _this.offset().top;
            var secInner = secTop - (winH / 2) - 250;
            scrInnerStep.push([_this, secInner]);
        });

        function scrollMotion(_winSc) {
            $.each(scrInnerStep, function (i, v) {
                if (_winSc >= v[1]) {
                    if (v[0].motion === undefined) {
                        TweenMax.staggerTo(v[0].find(".js-scr-box"), .8, {
                            y: 0, opacity: 1, ease: esStep
                        }, .2);
                        v[0].motion = true;
                    }
                    v[0].addClass("js-motion-end");
                }
            });
        }

        scrollMotion(winSc);
    }
    scrollEvent();
}
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

    console.log(winH);
    var $meridianTitle = $("#meridianTitle"),
        $meridianTxt = $meridianTitle.find("h3"),
        $meridianLogo = $meridianTitle.find("img");

    /*var openingScene = new TimelineLite();
    openingScene.to($meridianTxt, 1, {opacity:0, delay:1, ease:esStep})
                .to($meridianLogo, 1, {opacity:1, ease:esStep})
                .to($meridianTitle, 1, {opacity:0, display:"none", ease:esStep});
                // .set($("body"), {overflow:"auto", padding:0});*/

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

    /* main scene 1*/
    var controller = new ScrollMagic.Controller({
        tweenChanges: true
    });
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
    var _plSceneTimer1 = 1,
        _plSceneTimer2 = 1,
        _plSceneTimer3 = 1;

    //bg scene
    var plSceneBg = TweenMax.to($plBg, 2, {scale:1, opacity:1});

    //link scene
    var plLink = TweenMax.to($plLink, 1, {opacity:1, display:"block"});

    //image scene
    var plSceneImg01 = TweenMax.to($plImg01, _plSceneTimer1, {opacity:1}),
        plSceneImg02 = TweenMax.to($plImg02, _plSceneTimer2, {opacity:1}),
        plSceneImg03 = TweenMax.to($plImg03, _plSceneTimer3, {opacity:1}),
        plSceneImg04 = TweenMax.to($plImg03, 2, {scale:.7, y:"-48%"}),
        plSceneImg03_end = TweenMax.to($plImg.find(".pl_img01, .pl_img02"), .01, {display:"none"});

    //txt scene
    var plSceneTxt01 = TweenMax.to($plTxt01, _plSceneTimer1, {opacity:1}),
        plSceneTxt01_end = TweenMax.to($plTxt01, .3, {opacity:0, y:-40}),
        plSceneTxt02 = TweenMax.to($plTxt02, _plSceneTimer2, {opacity:1, delay:.5}),
        plSceneTxt02_end = TweenMax.to($plTxt02, .3, {opacity:0, y:-40}),
        plSceneTxt03 = TweenMax.to($plTxt03, _plSceneTimer3, {opacity:1, delay:.5}),
        plSceneTxt04 = TweenMax.to($plTxt03, 2, {fontSize:"6rem", top:"21%"});

    var plSceneTime = new TimelineMax();
    plSceneTime.add([plSceneImg01, plSceneTxt01])
                .add([plSceneImg02, plSceneTxt02, plSceneTxt01_end])
                .add([plSceneImg03, plSceneTxt03, plSceneTxt02_end])
                .add([plSceneImg04, plSceneTxt04, plSceneBg, plSceneImg03_end])
                .add(plLink);

    var scenePL = new ScrollMagic.Scene({
        triggerElement: "#scenePl",
        duration:6000,
        triggerHook:0,
        indent: 120
    })
    .setPin("#scenePl")
    .setTween(plSceneTime)
    .addTo(controller)
    .addIndicators({
        name: "pl scene"
    });

    /* main scene 2 */
    var $scenePn = $("#scenePn");
    var $pnImg = $scenePn.find(".pn_img"),
        $pnImg01 = $pnImg.find(".pn_img01"),
        $pnImg02 = $pnImg.find(".pn_img02"),
        $pnImg03 = $pnImg.find(".pn_img03"),
        $pnImg04 = $pnImg.find(".rotate_img img"),
        $pnImg06 = $pnImg.find(".pn_img06");


    var $pnTxt = $scenePn.find(".pn_txt"),
        $pnTxt01 = $pnTxt.find(".pn_txt01"),
        $pnTxt02 = $pnTxt.find(".pn_txt02"),
        $pnTxt03 = $pnTxt.find(".pn_txt03");

    var $pnLink = $scenePn.find(".pn_link_wrap");

    //txt scene
    var pnSceneTxt01 = TweenMax.to($pnTxt01, .5, {opacity:0, y:-40}), //scene1
        pnSceneTxt02 = TweenMax.to($pnTxt02, .5, {opacity:1, delay:.5}), //scene1
        pnSceneTxt02_end = TweenMax.to($pnTxt02, .5, {opacity:0, y:-40}), //scene2
        pnSceneTxt03 = TweenMax.to($pnTxt03, .5, {opacity:1, delay:.5}), //scene2
        plSceneTxt03_end = TweenMax.to($pnTxt03, 2, {fontSize:"6rem", top:"16%"}); //scene3

    //image scene
    var pnSceneImg01 = TweenMax.to($pnImg01, _plSceneTimer1, {opacity:1}), //scene1
        pnSceneImg01_end = TweenMax.to($pnImg01, _plSceneTimer1, {opacity:0}), //scene2
        pnSceneImg02 = TweenMax.to($pnImg02, _plSceneTimer1, {opacity:1}), //scene2
        pnSceneImg02_end = TweenMax.to($pnImg02, _plSceneTimer1, {opacity:0, scale:.5}), //scene3
        pnSceneImg03 = TweenMax.to($pnImg03, _plSceneTimer1, {opacity:1}), //scene3
        pnSceneImg04 = TweenMax.staggerTo($pnImg04, .1, {opacity:1, delay:1}, .1); //scene3

    //link scene
    var pnLink = TweenMax.to($pnLink, .3, {opacity:1, display:"block"});


    var $sceneJelly = $("#sceneJelly");
    var $jellyTit = $sceneJelly.find(".jelly_tit");
    var $jellyImg = $sceneJelly.find(".jelly_img"),
        $jellyTxt = $sceneJelly.find(".jelly_txt");

    var sceneJelly = TweenMax.to($sceneJelly, 2, {opacity:1, display:"block", delay:1}),
        pnSectionUp = TweenMax.to($scenePn.find("> .section_wrap"), 2, {y:"-100%", delay:1}),
        jellySceneImg = TweenMax.to($jellyImg, 1, {y:"-100%", x:"30%"}),
        jellySceneTit = TweenMax.to($jellyTit, .8, {opacity:0}),
        jellySceneTxt = TweenMax.to($jellyTxt, 1, {opacity:1, display:"flex", delay:.2});

    var pnSceneTime = new TimelineMax();
    pnSceneTime.add([pnSceneTxt01, pnSceneImg01, pnSceneTxt02])
                .add([pnSceneImg01_end, pnSceneImg02, pnSceneTxt02_end, pnSceneTxt03])
                .add([pnSceneImg02_end, pnSceneImg03, plSceneTxt03_end, pnSceneImg04])
                .add(pnLink)

                //jelly Scene
                .add([sceneJelly, pnSectionUp])
                .add([jellySceneImg, jellySceneTit, jellySceneTxt])

    var scenePN = new ScrollMagic.Scene({
        triggerElement: "#scenePn",
        duration:8000,
        triggerHook:0
    })
    .setPin("#scenePn")
    .setTween(pnSceneTime)
    .on("progress", function (event) {
        console.log(event.progress);
        if(event.progress > .45){
            $pnImg06.addClass("loop");
        } else {
            $pnImg06.removeClass("loop");
        }
    })
    .addTo(controller)
    .addIndicators({
        name: "pn scene",
        indent: 80
    });

















































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
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
function jellybean() {


}
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
    var $plWoofer = $plImg.find(".pl_woofer01, .pl_woofer02");
    var $plTxt = $scenePl.find(".pl_txt"),
        $plTxt01 = $plTxt.find(".pl_txt01"),
        $plTxt02 = $plTxt.find(".pl_txt02"),
        $plTxt03 = $plTxt.find(".pl_txt03");
    var $plBg = $scenePl.find(".pl_bg"),
        $plBg02 = $scenePl.find(".pl_bg02");
    var $plLink = $scenePl.find(".link_wrap");
    var _plSceneTimer1 = 1,
        _plSceneTimer2 = 1,
        _plSceneTimer3 = 1;

    //bg scene
    var plSceneBg = TweenMax.to($plBg, 2, {scale:1, opacity:1}),
        plSceneBg02 = TweenMax.to($plBg02, 2, {opacity:1, delay:1});

    //link scene
    var plLink = TweenMax.to($plLink, 1, {opacity:1, display:"block"});

    //image scene
    var plSceneImg01 = TweenMax.to($plImg01, _plSceneTimer1, {opacity:1}),
        plSceneImg02 = TweenMax.to($plImg02, _plSceneTimer2, {opacity:1}),
        plSceneImg03 = TweenMax.to($plImg03, _plSceneTimer3, {opacity:1}),
        plSceneImg04 = TweenMax.to($plImg03, 2, {scale:.7, y:"-47%"}),
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
                .add([plSceneImg04, plSceneTxt04, plSceneBg, plSceneImg03_end, plSceneBg02])
                .add(plLink);

    var scenePL = new ScrollMagic.Scene({
        triggerElement: "#scenePl",
        duration:6000,
        triggerHook:0
    })
    .on("progress", function (event) {
        console.log(event.progress);
        if(event.progress > .8){
            $plWoofer.addClass("loop");
        } else {
            $plWoofer.removeClass("loop");
        }
    })
    .setPin("#scenePl")
    .setTween(plSceneTime)
    .addTo(controller)
    .addIndicators({
        name: "pl scene",
        indent: 120
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







































function meridian() {


}
function pl() {
    var $plContainer = $("#container.pl_container");
    if(!$plContainer.length) return false;

    /* pl series scene 1 */
    var controller = new ScrollMagic.Controller({
        tweenChanges: true
    });
    var $plSeries = $("#plSeries");
    var $plSeriesScene01 = $plSeries.find(".scene01"),
        $plSeriesScene02 = $plSeries.find(".scene02"),
        $plSeriesScene03 = $plSeries.find(".scene03");
    var $plImg03 = $plSeriesScene02.find(".pl_img03"),
        $plImg05 = $plSeriesScene03.find(".pl_img05");
    var $plTxt01 = $plSeriesScene02.find("h4"),
        $plTxt02 = $plSeriesScene02.find(".txt_wrap"),
        $plTxt03 = $plSeriesScene03.find("h4"),
        $plTxt04 = $plSeriesScene03.find("p");
    var $plBg = $plSeriesScene03.find(".boost_bg"),
        $plBg02 = $plBg.find("img").eq(1),
        $plBg03 = $plBg.find("img").eq(2),
        $plBg04 = $plBg.find("img").eq(3);

    var plSeriesScene01 = TweenMax.to($plSeriesScene01, 1, {y:"-100%"});
    var plSeriesScene02 = TweenMax.to($plSeriesScene02, 1, {y:"-100%"}),
        plSeriesSceneImg01 = TweenMax.to($plImg03, 2, {opacity:1}),
        plSeriesSceneTxt01 = TweenMax.to($plTxt01, 1, {y:0, opacity:1, display:"block", delay:1}),
        plSeriesSceneTxt01_end = TweenMax.to($plTxt01, 1, {y:-30, opacity:0, display:"none"}),
        plSeriesSceneTxt02 = TweenMax.to($plTxt02, 1, {y:0, opacity:1, display:"block"});
    var plSeriesScene03 = TweenMax.to($plSeriesScene03, 1, {y:"-200%"}),
        plSeriesScene02_end = TweenMax.to($plSeriesScene02, 1, {y:"-200%"}),
        plSeriesSceneImg02 = TweenMax.to($plImg05, 1, {opacity:.5}),
        plSeriesSceneBg02 = TweenMax.to($plBg02, 1, {opacity:.5}),
        plSeriesSceneBg03 = TweenMax.to($plBg03, 1, {opacity:.5}),
        plSeriesSceneBg04 = TweenMax.to($plBg04, 1, {opacity:.5}),
        plSeriesSceneTxt03 = TweenMax.to($plTxt03, 1, {y:0, opacity:1, display:"block", delay:1}),
        plSeriesSceneTxt03_end = TweenMax.to($plTxt03, 1, {y:-30, opacity:0, display:"none"}),
        plSeriesSceneTxt04 = TweenMax.to($plTxt04, 1, {y:0, opacity:1, display:"block"});

    var plSeriesTime = new TimelineMax();
    plSeriesTime.add([plSeriesScene01, plSeriesScene02, plSeriesSceneImg01, plSeriesSceneTxt01])
                .add([plSeriesSceneTxt01_end, plSeriesSceneTxt02])
                .add([plSeriesScene03, plSeriesScene02_end])
                .add([plSeriesSceneImg02, plSeriesSceneBg02, plSeriesSceneTxt03])
                .add([plSeriesSceneBg03, plSeriesSceneTxt03_end, plSeriesSceneTxt04])
                .add(plSeriesSceneBg04);

    var scenePlSeries = new ScrollMagic.Scene({
        triggerElement: "#plSeries",
        duration:5500,
        triggerHook:0
    })
    .setPin("#plSeries")
    .setTween(plSeriesTime)
    .addTo(controller)
    .addIndicators({
        name: "plSeries scene",
        indent: 120
    });

    /* pl series scene 2 */
    var $dualBass = $("#dualBass");
    var $videoDimmed01 = $dualBass.find(".video_dimmed01"),
        $videoDimmed02 = $dualBass.find(".video_dimmed02")

    var $dualWhiteVideo = $dualBass.find(".video_white"),
        $dualTxt = $dualBass.find(".txt_wrap"),
        $dualTxt01 = $dualTxt.find(".txt01 h3"),
        $dualTxt02 = $dualTxt.find(".txt01 p"),
        $dualTxt03 = $dualTxt.find(".txt02 h3"),
        $dualTxt04 = $dualTxt.find(".txt02 p");

    var dualSceneDimmed01 = TweenMax.to($videoDimmed01, .5, {opacity:0}),
        dualSceneDimmed02 = TweenMax.to($videoDimmed02, .5, {opacity:1});
    var dualSceneVideo = TweenMax.to($dualWhiteVideo, .5, {opacity:1});
    var dualSceneTxt01 = TweenMax.to($dualTxt01, 1, {opacity:0, y:-20}),
        dualSceneTxt02 = TweenMax.to($dualTxt02, .5, {opacity:0, y:-20, delay:.5}),
        dualSceneTxt03 = TweenMax.to($dualTxt03, 1, {opacity:1, y:0}),
        dualSceneTxt04 = TweenMax.to($dualTxt04, .5, {opacity:1, y:0, delay:.5});

    var dualBassTime = new TimelineMax();
    dualBassTime.add(dualSceneDimmed01)
                .add([dualSceneTxt01, dualSceneTxt02])
                .add([dualSceneVideo, dualSceneTxt03, dualSceneTxt04, dualSceneDimmed02]);

    var sceneDualBass = new ScrollMagic.Scene({
        triggerElement: "#dualBass",
        duration:2000,
        triggerHook:0
    })
    .setPin("#dualBass")
    .setTween(dualBassTime)
    .addTo(controller)
    .addIndicators({
        name: "dualBass scene",
        indent: 150
    });


    /* pl series scene 2 */
    var simplyController = new ScrollMagic.Controller({
        tweenChanges: true
    });

    var $simply = $("#simply");
    var $simplyTxt01 = $simply.find("h3"),
        $simplyTxt02 = $simply.find("p");
    var $simplyImgWrap = $simply.find(".img_wrap"),
        $simplyImg01 = $simply.find(".simply_img01"),
        $simplyImg02 = $simply.find(".simply_img02"),
        $simplyImg03 = $simply.find(".simply_img03");

    var simplySceneImgWrap = TweenMax.to($simplyImgWrap, 4, {y:"-515rem"});
    var simplySceneImg01 = TweenMax.to($simplyImg01, 1, {opacity:.2}),
        simplySceneImg02 = TweenMax.to($simplyImg02, 1, {opacity:1}),
        simplySceneImg02_end = TweenMax.to($simplyImg02, 1, {opacity:.2, delay:1.5}),
        simplySceneImg03 = TweenMax.to($simplyImg03, 1, {opacity:1, delay:1.5});

    var simplySceneTxt01 = TweenMax.to($simplyTxt01, 1, {y:"-65%", opacity:0}),
        simplySceneTxt02 = TweenMax.to($simplyTxt02, 1, {y:"-50%", opacity:1, delay:.5});

    var simplyTime = new TimelineMax();
    simplyTime.add([simplySceneImg01, simplySceneImgWrap, simplySceneImg02, simplySceneImg02_end, simplySceneImg03, simplySceneTxt01, simplySceneTxt02]);

    var sceneSimply = new ScrollMagic.Scene({
        triggerElement: "#simply",
        duration:2500,
        triggerHook:0
    })
    .setPin("#simply")
    .setTween(simplyTime)
    .addTo(simplyController)
    .addIndicators({
        name: "simply scene",
        indent: 150
    });

    //surround
    var $surround = $("#surround");
    var $surroundTxt01 = $surround.find(".txt_wrap h3"),
        $surroundTxt02 = $surround.find(".txt_wrap p"),
        $surroundTxt03 = $surround.find(".disc");

    var $surroundImg01 = $surround.find(".surround_img01"),
        $surroundImg02 = $surround.find(".surround_img02"),
        $surroundImg03 = $surround.find(".surround_img03");

    var surroundSceneTxt01 = TweenMax.to($surroundTxt01, 1, {y:-20, opacity:0}),
        surroundSceneTxt02 = TweenMax.to($surroundTxt02, 2, {y:0, opacity:1, delay:.5}),
        surroundSceneTxt03 = TweenMax.to($surroundTxt03, 2, {opacity:1, delay:.5});

    var surroundSceneImg01 = TweenMax.to($surroundImg01, 2, {x:"-50%"}),
        surroundSceneImg02 = TweenMax.to($surroundImg02, 2, {x:"-50%"}),
        surroundSceneImg03 = TweenMax.to($surroundImg03, 1, {opacity:1, delay:2});

    var surroundTime = new TimelineMax();
    surroundTime.add([surroundSceneImg01, surroundSceneImg02, surroundSceneImg03, surroundSceneTxt01, surroundSceneTxt02, surroundSceneTxt03]);

    var sceneSimply = new ScrollMagic.Scene({
        triggerElement: "#surround",
        duration:2500,
        triggerHook:0
    })
    .setPin("#surround")
    .setTween(surroundTime)
    .addTo(simplyController)
    .addIndicators({
        name: "surround scene",
        indent: 150
    });


    //battery
    var $battery = $("#battery");
    var $batteryTxt01 = $battery.find(".txt_wrap h3"),
        $batteryTxt02 = $battery.find(".txt_wrap p"),
        $batteryTxt03 = $battery.find(".disc");

    var $batteryImg01 = $battery.find(".battery_img01"),
        $batteryImg03 = $battery.find(".battery_img03");

    var batterySceneTxt01 = TweenMax.to($batteryTxt01, 1, {y:0, opacity:1}),
        batterySceneTxt01_end = TweenMax.to($batteryTxt01, 1, {y:-20, opacity:0}),
        batterySceneTxt02 = TweenMax.to($batteryTxt02, 2, {y:0, opacity:1, delay:.5}),
        batterySceneTxt03 = TweenMax.to($batteryTxt03, 1, {opacity:1, delay:1.5});

    var batterySceneImg01 = TweenMax.to($batteryImg01, 2, {rotation:-20}),
        batterySceneImg02 = TweenMax.to($batteryImg03, 2, {y:"-50%"});

    var batteryTime = new TimelineMax();
    batteryTime.add([batterySceneTxt01, batterySceneImg01])
                .add([batterySceneTxt01_end, batterySceneTxt02, batterySceneImg02, batterySceneTxt03]);

    var batterySimply = new ScrollMagic.Scene({
        triggerElement: "#battery",
        duration:2000,
        triggerHook:0
    })
    .setPin("#battery")
    .setTween(batteryTime)
    .addTo(simplyController)
    .addIndicators({
        name: "battery scene",
        indent: 150
    });
    
    //choice
    var $choice = $("#choice");
    var $choiceTxt01 = $choice.find(".txt_wrap h3");

    var $choiceImg01 = $choice.find(".choice_img02"),
        $choiceImg02 = $choice.find(".choice_img03"),
        $choiceImg03 = $choice.find(".choice_img04, .choice_img05"),
        $choiceImg04 = $choice.find(".choice_img06, .choice_img07, .choice_img08");


    var choiceSceneImg01 = TweenMax.to($choiceImg01, 1, {opacity:0}),
        choiceSceneImg02 = TweenMax.to($choiceImg02, 1, {opacity:1}),
        choiceSceneImg03 = TweenMax.staggerTo($choiceImg03, 1, {left:"0%", top:"0%"}, .2),
        choiceSceneImg04 = TweenMax.staggerTo($choiceImg04, 1, {left:"0%", bottom:"0%"}, .2);

    var choiceSceneTxt01 = TweenMax.to($choiceTxt01, 1, {y:"-50%", opacity:1});

    var choiceTime = new TimelineMax();
    choiceTime.add([choiceSceneImg01, choiceSceneImg02])
                .add([choiceSceneImg03, choiceSceneImg04])
                .add(choiceSceneTxt01);

    var choiceSimply = new ScrollMagic.Scene({
        triggerElement: "#choice",
        duration:2000,
        triggerHook:0
    })
    .setPin("#choice")
    .setTween(choiceTime)
    .addTo(simplyController)
    .addIndicators({
        name: "choice scene",
        indent: 150
    });



























    //goSoundRolling
    var $goSoundRolling = $("#goSound .slider_wrap");
    var $imgWrap = $goSoundRolling.find(".img_wrap"),
        $imgLi = $imgWrap.find("li");
    var $txtWrap = $goSoundRolling.find(".txt_wrap"),
        $txtLi = $txtWrap.find("li");
    var $indiBtn = $goSoundRolling.find(".indi_btn");
    var $prevBtn = $goSoundRolling.find(".prev_btn"),
        $nextBtn = $goSoundRolling.find(".next_btn");
    var _imgLength = $imgLi.length;

    var goSoundCrr = {};
    for(var i=0; i<_imgLength; i++){
        $indiBtn.append("<button type='button'><span></span></button>");
    }
    $indiBtn.find("button").eq(0).addClass("active");

    if(_imgLength <= 1){
        $goSoundRolling.find(".nav_btn").hide();
    }
    Object.defineProperty(goSoundCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            _index = _index % _imgLength;
            TweenMax.to($imgLi, .7, {opacity: 0, display: "none", ease: esStep});
            TweenMax.to($imgLi.eq(_index), .5, {opacity: 1, display: "block", ease: esStep});

            TweenMax.to($txtLi, .7, {opacity: 0, display: "none", ease: esStep});
            TweenMax.to($txtLi.eq(_index), .5, {opacity: 1, display: "block", ease: esStep});

            $indiBtn.find("button").removeClass("active");
            $indiBtn.find("button").eq(_index).addClass("active");
            this.num = _index;
        }
    });
    $nextBtn.click(function () {
        goSoundCrr.number++;
    });
    $prevBtn.click(function () {
        goSoundCrr.number--;
    });
    $indiBtn.find("button").click(function () {
        var _this = $(this);
        var _index = _this.index();

        goSoundCrr.number = _index;
    });
}
function pn() {


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
}
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
function cinemaJS() {
    var $cinemaSlide = $(".cinema_contents .slide_wrap");
    var $cinemaImg = $cinemaSlide.find(".slide_img ul"),
        $cinemaImgLi = $cinemaImg.find("li"),
        _cinemaImgLength = $cinemaImgLi.length;

    var $cinemaPrevBtn = $cinemaSlide.find(".prev_btn"),
        $cinemaNextBtn = $cinemaSlide.find(".next_btn");

    var $cinemaCrrNum = $cinemaSlide.find(".crr_num"),
        $cinemaMaxNum = $cinemaSlide.find(".max_num");

    $cinemaImgLi.each(function (i) {
        $(this).css({"left": i * 110 + "%"});
    });
    $cinemaMaxNum.text(_cinemaImgLength);

    var cinemaSlideCrr = {};
    Object.defineProperty(cinemaSlideCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            if(_index < 0 ) return false;
            if(_index > _cinemaImgLength - 1 ) return false;
            $cinemaPrevBtn.removeClass("off").addClass("on");
            $cinemaNextBtn.removeClass("off").addClass("on");
            if(_index === 0) {
                $cinemaPrevBtn.removeClass("on").addClass("off")
            }
            if(_index === _cinemaImgLength - 1){
                $cinemaNextBtn.removeClass("on").addClass("off")
            }
            TweenMax.to($cinemaImg, .3, {x: _index * -110 + "%"});
            $cinemaCrrNum.text(_index + 1);
            this.num = _index;
        }
    });
    $cinemaPrevBtn.click(function () {
        cinemaSlideCrr.number--;
    });
    $cinemaNextBtn.click(function () {
        cinemaSlideCrr.number++;
    });
}
function gamingJS() {
    if (!$(".monitor_compare").length) return false;
    var $movingBtn = $(".moving_btn");
    var _lcdScreenW = null;
    var _movingMouse = true;

    $movingBtn.mousedown(function (e) {
        _movingMouse = true;
        e.preventDefault();
        var _this = $(this),
            _lcdScreen = _this.parent(),
            _lcdScreenW = _lcdScreen.width();
        var _mouseStart= e.clientX;

        $(document).mousemove(function (e) {
            if(_movingMouse === false) return false;
            var _movingMax = e.clientX - _mouseStart + _lcdScreenW;
            if(_movingMax < 65){ return false;}
            if(_compareBoxW + 64 > _movingMax){
                _lcdScreen.css({width: _movingMax});
            }
        });
    });
    $(document).mouseup(function () {
        _movingMouse = false;
    });
}
function gx() {
    if (!$gxHtml.length) return false;
    var $footer = $("#footer"),
        $footerLink = $("#footerLink");
    $(window).scroll(function(e){
        $(".screen_img").each(function(i){
            var _this = $(this);
            if(_this.parent().parent().index() === 6) {
                if(_this.offset().left <= 800){
                    TweenMax.to(_this, 2, {x:50, ease:esOut});
                } else {
                    TweenMax.to(_this, 2, {x:-50, ease:esOut});
                }
            } else {
                if(_this.offset().left <= 1400){
                    TweenMax.to(_this, 2, {x:-50, ease:esOut});
                } else {
                    TweenMax.to(_this, 2, {x:50, ease:esOut});
                }
            }
        });

        TweenMax.to($leftToRight, .5, {transform:"translateX(" + -winSc  + 'px' + ")", ease:esOut});
        $leftToRight.find("> section").each(function(i){
            var _this = $(this);
            var con6imgPer = parseInt(((conPosLeft[5] - winSc - winW) / (winW/2 + conWidth[5]/2) * 100));
            if(winW > conPosLeft[i] - winSc && conPosLeft[i] - winSc > -conWidth[i]){
                TweenMax.to(_this.find(".js-pall-con01"), .3, {x:(conPosLeft[i] - winSc) * .15, ease:esOut});
                TweenMax.to(_this.find(".js-pall-con02"), .3, {x:(conPosLeft[i] - winSc) * .35, ease:esOut});
                TweenMax.to(_this.find(".js-pall-con03"), .3, {x:(conPosLeft[i] - winSc) * .45, ease:esOut});
                if(i === 5 && con6imgPer >= -110){
                    TweenMax.to($(".gx_contents06 .step_img img"), .3, {height:210 + con6imgPer + "%"});
                }
            }
        });
    });

    $(window).on("mousewheel", function(e) {
        if (e.originalEvent.wheelDelta <= 0) {
            TweenMax.to($footerLink, .5, {bottom:-200});
            TweenMax.to($footer, .5, {bottom:-200});
        } else {
            TweenMax.to($footerLink, .5, {bottom:0});
            TweenMax.to($footer, .5, {bottom:"3.6rem"});
        }
    });
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
    var $cookieAll = $("#cookieAllPc"),
        $cookieTop = $cookieAll.find(".cookie_top"),
        $cookieBottom = $cookieAll.find(".cookie_bottom"),
        $cookieAllAgree = $cookieAll.find("#allAgreeBtn"),
        $cookieDetailOpen = $cookieAll.find("#detailOpenBtn"),
        $cookieChangeWrap = $cookieAll.find(".change_wrap"),
        $cookieChangeBtn = $cookieAll.find("#cookieChange");
    var $cookieClose = $cookieAll.find("#cookieClose");
    var $cookieSave = $cookieAll.find("#cookieSave");

    var $functionalAgree = document.getElementById("functionalAgree"),
        $socialAgree = document.getElementById("socialAgree"),
        $analysisAgree = document.getElementById("analysisAgree"),
        $advertisingAgree = document.getElementById("advertisingAgree");
    $cookieChangeBtn.click(function () {
        $cookieTop.css({display:"block"});
        TweenMax.to($cookieChangeWrap, .3, {height:0});
        TweenMax.to($cookieAll, .5, {height:110});
    });

    //SAVE PREFERENCES 버튼 클릭시
    $cookieDetailOpen.click(function () {
        var _this = $(this);
        if(!_this.hasClass("active")){
            _this.addClass("active");
            $cookieBottom.css({display:"block"});
            TweenMax.to($cookieAll, .5, {height:410});
        } else {
            _this.removeClass("active");
            $cookieBottom.css({display:"none"});
            TweenMax.to($cookieAll, .5, {height:110});
        }
    });

    $cookieClose.click(function () {
        $cookieBottom.css({display:"none"});
        $cookieTop.css({display:"none"});
        $cookieDetailOpen.removeClass("active");
        TweenMax.to($cookieAll, .3, {height:50});
        TweenMax.to($cookieChangeWrap, .5, {height:50});
    });

    $cookieAllAgree.click(function(){
        if(!$cookieAll.find(".cookie_bottom ol input[type=checkbox]").is(":checked")){
            $cookieAll.find(".cookie_bottom ol input[type=checkbox]").attr("checked", true);
        } else {
            $cookieAll.find(".cookie_bottom ol input[type=checkbox]").attr("checked", false);
        }
    });

    $cookieSave.click(function(){
        if($functionalAgree.checked === true){
            setCookie("functionalCookie", "Y", 365);
        } else {
            setCookie("functionalCookie", "N", 365);
        }
        if($socialAgree.checked === true){
            setCookie("socialCookie", "Y", 365);
        } else {
            setCookie("socialCookie", "N", 365);
        }
        if($analysisAgree.checked === true){
            setCookie("analysisCookie", "Y", 365);
        } else {
            setCookie("analysisCookie", "N", 365);
        }
        if($advertisingAgree.checked === true){
            setCookie("advertisingCookie", "Y", 365);
        } else {
            setCookie("advertisingCookie", "N", 365);
        }
        window.location.reload();
    });
    if(getCookie("functionalCookie") === "Y"){
        $functionalAgree.checked = true;
    }
    if(getCookie("socialCookie") === "Y"){
        $socialAgree.checked = true;
    }
    if(getCookie("analysisCookie") === "Y"){
        $analysisAgree.checked = true;
    }
    if(getCookie("advertisingCookie") === "Y"){
        $advertisingAgree.checked = true;
    }
}
function lifeJS() {
    var $lifeSlide = $(".life_contents .slide_wrap");
    var $lifeImg = $lifeSlide.find(".slide_img li"),
        $lifeImgLength = $lifeImg.length,
        $slideTxt = $lifeSlide.find(".slide_txt li");

    var $lifePrevBtn = $lifeSlide.find(".prev_btn"),
        $lifeNextBtn = $lifeSlide.find(".next_btn");

    var $lifeCrrNum = $lifeSlide.find(".crr_num"),
        $lifeMaxNum = $lifeSlide.find(".max_num");

    var lifeSlideCrr = {};
    var _lifeSlideDirection = null;
    var _lifeSlideDuration = .3;
    $lifeMaxNum.text($lifeImgLength);
    $lifePrevBtn.click(function () {
        if (!TweenMax.isTweening($lifeImg)) {
            _lifeSlideDirection = "prev";
            lifeSlideCrr.number--;
        }
    });
    $lifeNextBtn.click(function () {
        if (!TweenMax.isTweening($lifeImg)) {
            _lifeSlideDirection = "next";
            lifeSlideCrr.number++;
        }
    });
    Object.defineProperty(lifeSlideCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            if(_index < 0){
                _index = $lifeImgLength - 1;
            }
            _index = _index % $lifeImgLength;
            if(_lifeSlideDirection === "next"){
                TweenMax.to($lifeImg, _lifeSlideDuration, {y: 60, opacity: 0});
                TweenMax.fromTo($lifeImg.eq(_index), _lifeSlideDuration, {y: -60}, {y: 0, opacity: 1});
            } else {
                TweenMax.to($lifeImg, _lifeSlideDuration, {y: -60, opacity: 0});
                TweenMax.fromTo($lifeImg.eq(_index), _lifeSlideDuration, {y: 60}, {y: 0, opacity: 1});
            }
            TweenMax.to($slideTxt, .3, {opacity:0});
            TweenMax.to($slideTxt.eq(_index), .3, {opacity:1});
            $lifeCrrNum.text(_index + 1);
            this.num = _index;
        }
    });
}
function lineUpJS() {
    var $spec = $("#spec");
    if (!$spec.length) return false;
    var $specTable = $spec.find(".spec_table"),
        _specTableW = $specTable.innerWidth();

    var $detailTable = $spec.find(".detail_table"),
        _detailTableH = $detailTable.height();

    var $specBar = $("#productLine").find(".spec_bar"),
        $specBox = $specBar.find(".box"),
        _specBoxW = winW / _specTableW * 100;
        $specBox.width(_specBoxW.toFixed(2) + "%");
    var $productTable = $spec.find(".product_table");

    $window.on("resize", function () {
        _specBoxW = winW / _specTableW * 100;
        $specBox.width(_specBoxW.toFixed(2) + "%");
    });

    dragElement(document.querySelector(".box"));
    var tableMovingOff = 0;
    function dragElement(boxSelect) {
        var _movingLeft = 0;
        var _setLeft = 0;
        boxSelect.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            _setLeft = e.clientX;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            _movingLeft = _setLeft - e.clientX;
            _setLeft = e.clientX;
            var boxCrrPosition = boxSelect.offsetLeft - _movingLeft;
            tableMovingOff = boxSelect.offsetLeft * (_specTableW / winW);
            if (boxCrrPosition < 0 || boxCrrPosition > winW - $specBox.width() - 240) {
                e.preventDefault();
            } else {
                boxSelect.style.left = boxCrrPosition + "px";
                TweenMax.set($spec, {scrollLeft: boxSelect.offsetLeft * (_specTableW / winW)});
                if ($productTable.hasClass("fixed")) {
                    TweenMax.set($productTable, {x: -tableMovingOff});
                }
            }
        }
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    $window.scroll(function () {
        var _productOffset = $spec.offset().top;
        var _detailOffset = $spec.find(".detail_table").offset().top;
        if (_productOffset + 40 > winSc || winSc > _detailOffset + _detailTableH - 400) {
            $productTable.removeClass("fixed");
            TweenMax.set($productTable, {x: 0});
        } else if (_productOffset < winSc) {
            TweenMax.set($productTable, {x: -tableMovingOff});
            $productTable.addClass("fixed");
        }
        if (winSc + winH > _detailOffset) {
            $specBar.addClass("fixed");
        } else if (winSc + winH < _detailOffset) {
            $specBar.removeClass("fixed");
        }
        if (winSc + winH > _detailOffset + _detailTableH + 180) {
            $specBar.removeClass("fixed");
        }
    });
}
function main() {
    var $mainVisual = $("#mainVisual .img_wrap");
    TweenMax.to($mainVisual, 10, {scale:1.1, ease:esStep});
    TweenMax.to($mainVisual, .5, {opacity:1});
}
function scrollEvent() {
    var $subVisual = $("#subVisual");
    $(window).scroll(function () {
        $(".pall_bg").each(function () {
            var offset = $(this).offset();
            var offsetTop = offset.top;
            var _this_h = $(this).innerHeight();
            var _bg_p = (winSc - offsetTop) / _this_h * 100;
            $(this).css({"background-position-y": -_bg_p.toFixed(2) / 2 + "%"});
        });
        if (winSc < 820) {
            $subVisual.css({"background-position-y": winSc / 3});
        }
        headerFix();
    });

    function headerFix() {
        if (winSc > 0) {
            $header.addClass("fixed");
        } else {
            $header.removeClass("fixed");
        }
    }
    headerFix();

    var _containerTop = null;
    var $discoverBtn = $("#discoverBtn");
    $discoverBtn.click(function () {
        _containerTop = $("#container").offset().top - 70;
        TweenMax.to($("html"), .5, {scrollTop: _containerTop, ease: esStep});
    });

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
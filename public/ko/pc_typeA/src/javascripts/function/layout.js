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
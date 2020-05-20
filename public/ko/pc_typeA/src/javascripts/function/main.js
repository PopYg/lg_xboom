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
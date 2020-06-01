function main() {
    var $mainContainer = $("#container.main_container");
    if(!$mainContainer.length) return false;

    var $meridianTitle = $("#meridianTitle"),
        $meridianTxt = $meridianTitle.find("h3"),
        $meridianLogo = $meridianTitle.find("img");

    /*var openingScene = new TimelineLite();
    openingScene.to($meridianTxt, 1, {opacity:0, delay:1, ease:esStep})
                .to($meridianLogo, 1, {opacity:1, ease:esStep})
                .to($meridianTitle, 1, {opacity:0, display:"none", ease:esStep, onComplate:function(){$("html").removeClass("main_intro")}});*/

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
        plSceneTxt04 = TweenMax.to($plTxt03, 2, {fontSize:"4.8rem", top:"21%"});

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
        plSceneTxt03_end = TweenMax.to($pnTxt03, 2, {fontSize:"4.8rem", top:"16%"}); //scene3

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







































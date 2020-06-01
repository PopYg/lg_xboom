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

    //choose select
    var $choose = $("#choose");
    var $colorBtn = $choose.find(".color_btn button");

    $colorBtn.click(function(){
        var _this = $(this);
        var _index = _this.index();
        var $colorImg = _this.parent().parent().siblings().find("img");

        TweenMax.to($colorImg, .1, {opacity:0});
        TweenMax.to($colorImg.eq(_index), .1, {opacity:1});

        _this.siblings().removeClass("active");
        _this.addClass("active");
    });































}
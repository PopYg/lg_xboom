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
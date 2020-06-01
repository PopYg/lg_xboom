function meridian() {
    var $qualitySlide = $(".meri_content02 .slide_wrap");
    var $qualityImg = $qualitySlide.find(".slide_img ul"),
        $qualityImgLi = $qualityImg.find("li"),
        _qualityImgLength = $qualityImgLi.length;
    var $qualityindiBtn = $qualitySlide.find(".indi_btn");

    var $qualityPrevBtn = $qualitySlide.find(".prev_btn"),
        $qualityNextBtn = $qualitySlide.find(".next_btn");

    $qualityImgLi.each(function (i) {
        $(this).css({"left": i * 1280});
    });

    for(var i=0; i<_qualityImgLength; i++){
        $qualityindiBtn.append("<button type='button'><span></span></button>");
    }
    $qualityindiBtn.find("button").eq(0).addClass("active");

    if(_qualityImgLength <= 1){
        $qualitySlide.find(".nav_btn").hide();
    }

    var qualitySlideCrr = {};
    Object.defineProperty(qualitySlideCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            if(_index < 0 ) return false;
            if(_index > _qualityImgLength - 1 ) return false;
            $qualityPrevBtn.removeClass("off").addClass("on");
            $qualityNextBtn.removeClass("off").addClass("on");
            if(_index === 0) {
                $qualityPrevBtn.removeClass("on").addClass("off")
            }
            if(_index === _qualityImgLength - 1){
                $qualityNextBtn.removeClass("on").addClass("off")
            }
            TweenMax.to($qualityImgLi, .3, {opacity:.2});
            TweenMax.to($qualityImgLi.eq(_index), .3, {opacity:1});
            TweenMax.to($qualityImg, .3, {x: _index * -1280});

            $qualityindiBtn.find("button").removeClass("active");
            $qualityindiBtn.find("button").eq(_index).addClass("active");
            this.num = _index;
        }
    });
    $qualityPrevBtn.click(function () {
        qualitySlideCrr.number--;
    });
    $qualityNextBtn.click(function () {
        qualitySlideCrr.number++;
    });

    //goSoundRolling
    var $plRolling = $(".meri_content06 .slider_wrap");
    var $imgWrap = $plRolling.find(".img_wrap"),
        $imgLi = $imgWrap.find("li");
    var $txtWrap = $plRolling.find(".txt_wrap"),
        $txtLi = $txtWrap.find("li");
    var $indiBtn = $plRolling.find(".indi_btn");
    var $prevBtn = $plRolling.find(".prev_btn"),
        $nextBtn = $plRolling.find(".next_btn");
    var _imgLength = $imgLi.length;

    var plCrr = {};
    for(var i=0; i<_imgLength; i++){
        $indiBtn.append("<button type='button'><span></span></button>");
    }
    $indiBtn.find("button").eq(0).addClass("active");

    if(_imgLength <= 1){
        $plRolling.find(".nav_btn").hide();
    }
    Object.defineProperty(pl, 'number', {
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
        pl.number++;
    });
    $prevBtn.click(function () {
        pl.number--;
    });
    $indiBtn.find("button").click(function () {
        var _this = $(this);
        var _index = _this.index();

        pl.number = _index;
    });
}
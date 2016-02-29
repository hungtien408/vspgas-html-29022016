function pageLoad() {
}
(function ($) {
    $(window).load(function () {
    });
    $(function () {
        myfunload();
        mypageload();
    });
})(jQuery);
//function===============================================================================================
/*=============================fun=========================================*/
function myfunload() {
    //mymenure();
    if ($('#slider').size() == 1) {
        var $banner = $('#slider').imagesLoaded(function () {
            $banner.nivoSlider({
                pauseOnHover: false,
                directionNav: false,
                controlNav: true
            });
        });
    }
    jQuery('#menu, .header-menu').superfish({ delay: 300 });
    $(".fullbox-img").bgsizebox({
        fimg: true,
        imgcss: "hideo",
        attrname: "data-src"
    });
    if ($('#sliderParent').size() == 1) {
        $('#sliderParent').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
              {
                  breakpoint: 940,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      autoplay: true,
                      infinite: true
                  }
              },
              {
                  breakpoint: 720,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      autoplay: true,
                      infinite: true
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      autoplay: true,
                      infinite: true
                  }
              },
              {
                  breakpoint: 420,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: true,
                      infinite: true
                  }
              },
              {
                  breakpoint: 320,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true,
                      infinite: true
                  }
              }
            ]
        });
    }
    if ($('#sliderProject').size() == 1) {
        $('#sliderProject').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            prevArrow: $('.control-silder .prev'),
            nextArrow: $('.control-silder .next'),
            responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      autoplay: true,
                      infinite: true
                  }
              },
              {
                  breakpoint: 640,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: true,
                      infinite: true
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true,
                      infinite: true
                  }
              }
            ]
        });
    }
    if ($('#sliderAbout').size() == 1) {
        $('#sliderAbout').slick({
            fade: true,
            autoplaySpeed: 5000,
            autoplay: true
        });
    }
    if ($(".product-hexgon .product-boxs").size() > 0) {
        $(".product-hexgon .product-boxs:odd").addClass("even-box");
        $(".product-hexgon .product-boxs:nth-child(3n+2)").addClass("even-boxm");
        var numhex = $(".product-hexgon .product-boxs").size();
        var nummod = numhex % 6;
        if (nummod > 0) {
            var numm = numhex - nummod;
            for (var i = 0; i < nummod; i++) {
                var numl = numm + i;
                $(".product-hexgon .product-boxs:eq(" + numl + ")").addClass("last");
            }
            $(".product-hexgon .product-boxs:last").addClass("lastb");
        }
    }

    if ($("#jcarouselDetails").size() == 1) {
        var jacDe = $('#jcarouselDetails').imagesLoaded(function () {
            jacDe.jcarouselD({
                autos: false,
                pausehover: false,
                pager: false, //pager num
                timespees: 3000,
                thumswrap: false, // thums sroll
                shownum: 5, // show number thums
                usezoom: true
            });
        });
    }
    if ($("#colAside .slider-news").size() > 0) {
        $("#colAside .slider-news").clone().appendTo($("#mobideAside .box-slider"));
        var countd = $("#colAside .slider-news .slide").size();
        var countmax = 0;
        if (countd > 4) {
            countmax = 4
        } else {
            countmax = countd;
        }
        $("#colAside .slider-news").bxSlider({
            mode: 'vertical',
            minSlides: countmax,
            nextSelector: '#control .next',
            prevSelector: '#control .prev',
            nextText: '<span class="fa fa-caret-right"></span>',
            prevText: '<span class="fa fa-caret-left"></span>',
            moveSlides: 1,
            pager: false,
            slideMargin: 20
        });
        $("#mobideAside .slider-news").slick({
            dots: false,
            infinite: true,
            prevArrow: '#controlmo .prev',
            nextArrow: '#controlmo .next',
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            //autoplay: true,
            responsive: [
              {
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      //autoplay: true,
                      infinite: true
                  }
              },
              {
                  breakpoint: 639,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      //autoplay: true,
                      infinite: true
                  }
              },
              {
                  breakpoint: 420,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      //autoplay: true,
                      infinite: true
                  }
              }
            ]
        });
    }
    if ($(".list-nnl").size() > 0) {
        $(".list-nnl").each(function () {
            var nums = $(this).find("li").size();
            var numli = 5;
            if (nums < 5) {
                numli = nums
            }
            $(this).find(".name").before('<span class="iconl"></span>');
            for (var i = 0; i < numli; i++) {
                $(this).find("li:eq(" + i + ")").addClass("libg-" + (i + 1));
            }
        });
    }
    myfunsroll();
    var controller = $.superscrollorama();
    controller.addTween('#fade-it', TweenMax.from($('#fade-it'), .5, { css: { opacity: 0 } }));
}
/*=========================================================================*/
function mypageload() {
    $(".select").uniform();
    $('#mainContent').imagesLoaded(function () {
        myListTb();
    });
}
/*========================================================================*/
function myListTb() {
    if ($('#isotopelist').size() == 1) {
        $('#isotopelist').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
    }
    if ($('.product-tb').size() > 0) {
        $('.product-tb').textHeight({
            activetit: true,
            listcss: [{ cssname: ".product-img" }, { cssname: ".product-name" }],
            wpointb: true,
            //widthpont: 479,
            desbool: true,
            listpos: [{ cssnamepos: ".description", cssheightnum: "3" }],
            tbrow: true,
            csstr: ".element-item",
            max: true
        }).isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
    }
    if ($('.news-tb').size() > 0) {
        $('.news-tb').textHeight({
            activetit: true,
            listcss: [{ cssname: ".news-img" }, { cssname: ".news-name" }],
            wpointb: true,
            //widthpont: 479,
            desbool: true,
            listpos: [{ cssnamepos: ".desription", cssheightnum: "3" }],
            tbrow: true,
            csstr: ".element-item",
            max: true
        }).isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
    }
    if ($('.project-tb').size() > 0) {
        $('.project-tb').textHeight({
            activetit: true,
            listcss: [{ cssname: ".project-img" }, { cssname: ".project-name" }],
            wpointb: true,
            //widthpont: 479,
            desbool: true,
            listpos: [{ cssnamepos: ".desription", cssheightnum: "3" }],
            tbrow: true,
            csstr: ".element-item",
            max: true
        }).isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
    }
    if ($('.product-tbser').size() > 0) {
        $('.product-tbser').textHeight({
            activetit: true,
            listcss: [{ cssname: ".product-box" }],
            wpointb: true,
            //widthpont: 479,
            desbool: false,
            listpos: [{ cssnamepos: ".desription", cssheightnum: "3" }],
            tbrow: true,
            csstr: ".element-item",
            max: true
        }).isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
    }
    if ($('.tb-newsb').size() > 0) {
        $('.tb-newsb').textHeight({
            activetit: true,
            listcss: [{ cssname: ".news-img" }, { cssname: ".news-name" }],
            wpointb: true,
            //widthpont: 479,
            desbool: true,
            listpos: [{ cssnamepos: ".desription", cssheightnum: "5" }],
            tbrow: true,
            csstr: ".element-item",
            max: true
        }).isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
    }
    if ($('.base-tb').size() > 0) {
        $('.base-tb .element-item:first-child').removeClass("col-md-4 col-xs-6").addClass("col-md-8 col-xs-12 first");
        var basetb = $('.base-tb').textHeight({
            activetit: true,
            listcss: [{ cssname: ".base-img" }, { cssname: ".base-name" }],
            wpointb: true,
            //widthpont: 639,
            desbool: true,
            listpos: [{ cssnamepos: ".desription", cssheightnum: "3" }],
            tbrow: true,
            csstr: ".element-item",
            max: true
        });
        var clearmy;
        clearTimeout(clearmy);
        clearmy = setTimeout(function () {
            basetb.isotope({
                itemSelector: '.element-item',
                layoutMode: 'fitRows'
            });
        }, 100);
    }
}
/*=============================*/
function mymenure() {
    mymenue();
    $(window).resize(function () {
        mymenue();
    });
}
function mymenue() {
    var pal = 2;
    $("#menu > li").width("auto");
    var countm = $("#menu > li").size();
    var wm = $("#menu").width();
    var wlia = 0;
    $("#menu > li").each(function (e) {
        wlia += $(this).outerWidth();
    });
    var wli = parseInt(((wm - wlia) / countm));
    var wto = 0;
    $("#menu > li").each(function (e) {
        var wlis = $(this).width() + wli;
        if (e == countm - 1) {
            var we = (wm - wto - (pal * e) - pal) - pal;
            $(this).width(we);
        } else {
            wto += wlis;
            $(this).width(wlis);
        }
    });
}
/*===============================*/
function myfunsroll() {
    menusroll();
    mysroll();
    $("#sroltop a").click(function () {
        $("html, body").stop(true, true).animate({ scrollTop: 0 }, 500);
        return false;
    });
}
function mysroll() {
    mysrol();
    $(window).scroll(function () {
        mysrol();
    });
}
function mysrol() {
    var topsroll = $(window).scrollTop();
    if (topsroll > 100) {
        $("#sroltop").stop(true, true).animate({ "opacity": 1 }, 500);
    } else {
        $("#sroltop").stop(true, true).animate({ "opacity": 0 }, 500);
    }
}
function menusroll() {
    var htop = $("#header").height();
    srollmenu(htop);
    $(window).scroll(function () {
        srollmenu(htop);
    });
}
function srollmenu(htop) {
    if ($(window).scrollTop() > htop) {
        $("#header").addClass("header-sroll");
    } else {
        $("#header").removeClass("header-sroll");
    }
}
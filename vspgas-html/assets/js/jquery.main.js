﻿function pageLoad() {
}
(function ($) {
    $(window).load(function () {
    });
    $(function () {
        myfunload();
        mypageload();
        resizemenu();
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
    
    myfunsroll();
    
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
    $('.wrapper-service').textHeight({
        activetit: true,
        listcss: [{ cssname: ".description"}],
        wpointb: false,
        widthpont: 420,
        desbool: true,
        listpos: [{ cssnamepos: ".description", cssheightnum: "5"}],
        max: true
    });
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

function resizemenu() {
    alert("aaa");
    var countm = $("#menu > li").size();
    $("#menu > li").each(function (e) {
        if (e == countm - 1) {
            var width = $("#menu > li").width();
            var total = 106 * 85 / width;
            $("#menu > li > a > .menu-down").css("border-left", total + " solid transparent");
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
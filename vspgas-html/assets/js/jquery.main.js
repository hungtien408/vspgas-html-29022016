function pageLoad() {
}
(function ($) {
    $(window).load(function () {
    });
    $(function () {
        mymenue();
        myfunload();
        mypageload();
        resizemenu();
    });
})(jQuery);
//function===============================================================================================
/*=============================fun=========================================*/
function myfunload() {
    //mymenure();
    $(".panel-a").mobilepanel();
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
    if ($("#contactus").size() == 1) {
        mymap();
        $(window).resize(function () {
            mymap();
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
    $('.row-project').textHeight({
        activetit: true,
        listcss: [{ cssname: ".title-sui a"}],
        wpointb: false,
        widthpont: 420,
        desbool: true,
        listpos: [{ cssnamepos: ".title-sui a", cssheightnum: "1"}],
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
    //$("#menu > li > a").width("auto");
    var countm = $("#menu > li > a").size();
    var wm = $("#menu").outerWidth();
    var wlia = 0;
    $("#menu > li > a").each(function (e) {
        wlia += $(this).outerWidth();
    });
    var wli = Math.round(((wm - wlia) / countm)) - pal;
    var wto = 0;
    $("#menu > li > a").each(function (e) {
        var wlis = $(this).width() + wli;
        var wlisa = 0;
        if (e == countm - 1) {
            var we = (wm - wto - (pal * e) - pal) - pal;
            wlisa = we;
        } else {
            wto += wlis;
            wlisa = wlis;
        }
        var blr = Math.round(wlisa / 2);
        $(this).width(wlisa);
        $(this).find(".menu-down").css({ "border-left-width": blr + "px", "border-right-width": blr + "px" });
    });
}
/*==test==*/
function resizemenu() {
    var countm = $("#menu > li").size();
    $("#menu > li").each(function (e) {
        if (e == countm - 1) {
            var width = $("#menu > li").width();
            var total = 106 * 85 / width;
            $("#menu > li > a > .menu-down").css("border-left", total + " px solid transparent");
        }
    });
}
/*===============================*/
function mymap() {
    $("#contactus #mapwrap").remove();
    if ($(window).width() > 767) {
        $("#contactus .mapw").append('<div id="mapwrap"><iframe id="iframe" src="map.aspx" frameborder="0" height="100%" width="100%"></iframe></div>');
    } else {
        $("#contactus #mapwrap").remove();
    }
}
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
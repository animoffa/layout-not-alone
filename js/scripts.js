
const width = $(window).width();

$(document).ready(function () {
    $("#js-phone-mask").mask("+7 ( 999 ) 999 - 99 - 99");
});

$(document).ready(function () {
    $(".trigger-toggle-text").click(function () {
        $(this).toggleClass("hide");
        if ($('.trigger-toggle-text').hasClass('hide'))
            $(".hide + .toggle-text").toggleClass("mob-hide");
    })
});
$(document).ready(function () {
    $("#menu").click(function () {
        $(".header__navigation").toggleClass("active");
        $("#menu__closed").toggleClass("hide");
        $("#menu .menu__opened").toggleClass("hide");

    })
});
$(document).ready(function () {
    $(".main-nav__item").click(function () {
        $(".main-nav__sublist").toggleClass("hide");
    })
});
$(document).ready(function () {
    $(".header__navigation-list").click(function () {
        let v = $('.main-nav__sublist').css("display");
        if (v !== "none") {
            $(".plus").toggleClass('minus');
        }
        if (v === "none") {
            $(".plus").removeClass('minus');
        }
    })
});

$(document).ready(function () {
   $(".modal-region li").click(function(){
       let r =$(this).text();
       $(".modal-region-click input").val(r);
   })
});

$(document).ready(function () {

    // оставить заявку (модалка 1)
    $('.js-modal-callback').click(function (evt) {
        openModal('.modal-call', '.modal__input-phone');
    });

    $('.modal-comment-btn').click(function (evt) {
        openModal('.modal-comment', '.modal__input-phone');
    });
    $('.modal-region-click').click(function (evt) {
        $('.modal-region').addClass('active');
    });
    // открыть модальное окно
    function openModal(modalClass, focusClass) {
        $('.overlay').fadeIn();
        $('body').addClass('noscroll');
        $(modalClass).addClass('active');    // класс модального окна
        $(focusClass).focus();               // класс для фокуса
    }

    // закрыть модальное окно
    function closeModal() {
        if ($('.modal').hasClass('active')) {
            $('.modal').removeClass('active');
            $('.overlay').fadeOut();
            $('body').removeClass('noscroll');
        }
    }

    // клик/тач вне модального окна -> закрыть окно
    function clickOutsideModal(evt) {
        let modal = $('.modal');
        if (!modal.is(evt.target) && modal.has(evt.target).length === 0) {
            closeModal();
        }
    }

    // нажат esc -> закрыть окно
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            closeModal();
        }
    });

    // слушаем клик/тач вне модального окна
    $(document).on('mouseup touchstart', clickOutsideModal);

    // кнопка закрыть
    $('.modal__close').click(function (evt) {
        closeModal();
    });

});

$(document).ready(function () {
    $('.access-click').click(function () {
        $(".access-mod").css('display','flex');
if (width<=769){
    $(".modal-callback").css({"height": "23rem"})
}
    })
})

$(document).ready(function () {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        "positionFromTop":150,
        "maxWidth":600,
        "maxHeight":600,
    })
});
//swiper
$(document).ready(function () {

    var swiper = new Swiper('.swiper-woman', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination.pagination-fraction',
            clickable: true,
            type: 'fraction'
        }
    });
    let count = $(".swiper-banner .swiper-slide:last-child").index();
    count = count + 1;
    $("#total").text("0" + count);




    $("#slide1").css({"background-color": "#bec737"});
    $("#slide2").css({"background-color": " #999999"});
    $("#slide3").css({"background-color": " #999999"});
    $("#slide4").css({"background-color": " #999999"});

    swiper.on('slideChangeTransitionEnd', function () {

        if ($('.slide-1').hasClass('swiper-slide-active'))
            $("#slide1").css({"background-color": "#bec737"});
        else $("#slide1").css({"background-color": " #999999"});
        if ($('.slide-2').hasClass('swiper-slide-active'))
            $("#slide2").css({"background-color": "#bec737"});
        else $("#slide2").css({"background-color": " #999999"});
        if ($('.slide-3').hasClass('swiper-slide-active'))
            $("#slide3").css({"background-color": "#bec737"});
        else $("#slide3").css({"background-color": " #999999"});
        if ($('.slide-4').hasClass('swiper-slide-active'))
            $("#slide4").css({"background-color": "#bec737"});
        else $("#slide4").css({"background-color": " #999999"});
    })

    $("#slide4").on("click",function(){
        swiper.slideTo(3, 10);
    })
    $("#slide3").on("click",function(){
        swiper.slideTo(2, 10);
    })
    $("#slide2").on("click",function(){
        swiper.slideTo(1, 10);
    })
    $("#slide1").on("click",function(){
        swiper.slideTo(0, 10);
    })
});


$(document).ready(function () {

    var swiper = new Swiper('.doctor-swiper', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination.pagination-fraction',
            clickable: true,
            type: 'fraction'
        }
    });
    let count = $(".swiper-banner .swiper-slide:last-child").index();
    count = count + 1;
    $("#total").text("0" + count);




    $("#slide41").css({"background-color": "#bec737"});
    $("#slide42").css({"background-color": " #999999"});
    $("#slide43").css({"background-color": " #999999"});
    $("#slide44").css({"background-color": " #999999"});

    swiper.on('slideChangeTransitionEnd', function () {

        if ($('.slide-41').hasClass('swiper-slide-active'))
            $("#slide41").css({"background-color": "#bec737"});
        else $("#slide41").css({"background-color": " #999999"});
        if ($('.slide-42').hasClass('swiper-slide-active'))
            $("#slide42").css({"background-color": "#bec737"});
        else $("#slide42").css({"background-color": " #999999"});
        if ($('.slide-43').hasClass('swiper-slide-active'))
            $("#slide43").css({"background-color": "#bec737"});
        else $("#slide43").css({"background-color": " #999999"});
        if ($('.slide-44').hasClass('swiper-slide-active'))
            $("#slide44").css({"background-color": "#bec737"});
        else $("#slide44").css({"background-color": " #999999"});
    })

    $("#slide44").on("click",function(){
        swiper.slideTo(3, 10);
    })
    $("#slide43").on("click",function(){
        swiper.slideTo(2, 10);
    })
    $("#slide42").on("click",function(){
        swiper.slideTo(1, 10);
    })
    $("#slide41").on("click",function(){
        swiper.slideTo(0, 10);
    })
});

$(document).ready(function () {

    var swiper = new Swiper('.salt-swiper', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination.pagination-fraction',
            clickable: true,
            type: 'fraction'
        }
    });




    $("#slide51").css({"background-color": "#bec737"});
    $("#slide52").css({"background-color": " #999999"});
    $("#slide53").css({"background-color": " #999999"});
    $("#slide54").css({"background-color": " #999999"});

    swiper.on('slideChangeTransitionEnd', function () {
        if ($('.slide-51').hasClass('swiper-slide-active'))
            $("#slide51").css({"background-color": "#bec737"});
        else $("#slide51").css({"background-color": " #999999"});
        if ($('.slide-52').hasClass('swiper-slide-active'))
            $("#slide52").css({"background-color": "#bec737"});
        else $("#slide52").css({"background-color": " #999999"});
        if ($('.slide-53').hasClass('swiper-slide-active'))
            $("#slide53").css({"background-color": "#bec737"});
        else $("#slide53").css({"background-color": " #999999"});
        if ($('.slide-54').hasClass('swiper-slide-active'))
            $("#slide54").css({"background-color": "#bec737"});
        else $("#slide54").css({"background-color": " #999999"});

    })

    $("#slide54").on("click",function(){
        swiper.slideTo(3, 10);
    })
    $("#slide53").on("click",function(){
        swiper.slideTo(2, 10);
    })
    $("#slide52").on("click",function(){
        swiper.slideTo(1, 10);
    })
    $("#slide51").on("click",function(){
        swiper.slideTo(0, 10);
    })
});

$(document).ready(function () {
    var swiper = new Swiper('.centers-swiper-s', {
        slidesPerView: '2',
        spaceBetween: 10,
        touchRatio: 1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        pagination: {
            el: '.swiper-pagination.pagination-fraction',
            clickable: true,
            type: 'fraction'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            756: {
                slidesPerView: '4',
                spaceBetween: 30,
            },
        }
    });
    console.log(swiper);
    $("#slide111").css({"background-color": "#bec737"});
    $("#slide112").css({"background-color": " #999999"});
    $("#slide113").css({"background-color": " #999999"});
    $("#slide114").css({"background-color": " #999999"});
    swiper.on('slideChangeTransitionEnd', function () {
        if ($('.slide-111').hasClass('swiper-slide-active'))
            $("#slide111").css({"background-color": "#bec737"});
        else $("#slide111").css({"background-color": " #999999"});
        if ($('.slide-112').hasClass('swiper-slide-active'))
            $("#slide112").css({"background-color": "#bec737"});
        else $("#slide112").css({"background-color": " #999999"});
        if ($('.slide-113').hasClass('swiper-slide-active'))
            $("#slide113").css({"background-color": "#bec737"});
        else $("#slide113").css({"background-color": " #999999"});
        if ($('.slide-114').hasClass('swiper-slide-active'))
            $("#slide114").css({"background-color": "#bec737"});
        else $("#slide114").css({"background-color": " #999999"});
    })
    $("#slide21").css({"background-color": "#bec737"});
    $("#slide22").css({"background-color": " #999999"});
    $("#slide23").css({"background-color": " #999999"});
    $("#slide24").css({"background-color": " #999999"});
    swiper.on('slideChangeTransitionEnd', function () {
        if ($('.slide-21').hasClass('swiper-slide-active'))
            $("#slide21").css({"background-color": "#bec737"});
        else $("#slide21").css({"background-color": " #999999"});
        if ($('.slide-22').hasClass('swiper-slide-active'))
            $("#slide22").css({"background-color": "#bec737"});
        else $("#slide22").css({"background-color": " #999999"});
        if ($('.slide-23').hasClass('swiper-slide-active'))
            $("#slide23").css({"background-color": "#bec737"});
        else $("#slide23").css({"background-color": " #999999"});
        if ($('.slide-24').hasClass('swiper-slide-active'))
            $("#slide24").css({"background-color": "#bec737"});
        else $("#slide24").css({"background-color": " #999999"});
    })
    $("#slide24").on("click",function(){
        swiper.slideTo(3, 10);
    })
    $("#slide23").on("click",function(){
        swiper.slideTo(2, 10);
    })
    $("#slide22").on("click",function(){
        swiper.slideTo(1, 10);
    })
    $("#slide21").on("click",function(){
        swiper.slideTo(0, 10);
    })

    $("#slide114").on("click",function(){
        swiper.slideTo(3, 10);
    })
    $("#slide113").on("click",function(){
        swiper.slideTo(2, 10);
    })
    $("#slide112").on("click",function(){
        swiper.slideTo(1, 10);
    })
    $("#slide111").on("click",function(){
        swiper.slideTo(0, 10);
    })
});


$(document).ready(function () {
    let slidedot=["#slide31","#slide32","#slide33","#slide34"];
    let sliden=['.slide-31','.slide-32','.slide-33','.slide-34'];
    var swiper = new Swiper('.videos-swiper', {
        slidesPerView: '1',
        spaceBetween: 10,
        touchRatio: 1,
        pagination: {
            el: '.swiper-pagination.pagination-fraction',
            clickable: true,
            type: 'fraction'
        },
        breakpoints: {
            756: {
                slidesPerView: '4',
                spaceBetween: 40,
            },
        }
    });
    $("#slide31").css({"background-color": "#bec737"});
    $("#slide32").css({"background-color": " #999999"});
    $("#slide33").css({"background-color": " #999999"});
    $("#slide34").css({"background-color": " #999999"});
    swiper.on('slideChangeTransitionEnd', function () {
        if ($('.slide-31').hasClass('swiper-slide-active'))
            $("#slide31").css({"background-color": "#bec737"});
        else $("#slide31").css({"background-color": " #999999"});
        if ($('.slide-32').hasClass('swiper-slide-active'))
            $("#slide32").css({"background-color": "#bec737"});
        else $("#slide32").css({"background-color": " #999999"});
        if ($('.slide-33').hasClass('swiper-slide-active'))
            $("#slide33").css({"background-color": "#bec737"});
        else $("#slide33").css({"background-color": " #999999"});
        if ($('.slide-34').hasClass('swiper-slide-active'))
            $("#slide34").css({"background-color": "#bec737"});
        else $("#slide34").css({"background-color": " #999999"});
    })

    $("#slide34").on("click",function(){
        swiper.slideTo(3, 10);
    })
    $("#slide33").on("click",function(){
        swiper.slideTo(2, 10);
    })
    $("#slide32").on("click",function(){
        swiper.slideTo(1, 10);
    })
    $("#slide31").on("click",function(){
        swiper.slideTo(0, 10);
    })
});

$(document).ready(function () {
    var swiper = new Swiper('.rehab-swiper', {
        slidesPerView: '2',
        spaceBetween: 10,
        touchRatio: 1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        pagination: {
            el: '.swiper-pagination.pagination-fraction',
            clickable: true,
            type: 'fraction'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            756: {
                slidesPerView: '4',
                spaceBetween: 30,
            },
        }
    });
    $("#slide21").css({"background-color": "#bec737"});
    $("#slide22").css({"background-color": " #999999"});
    $("#slide23").css({"background-color": " #999999"});
    $("#slide24").css({"background-color": " #999999"});
    swiper.on('slideChangeTransitionEnd', function () {
        if ($('.slide-21').hasClass('swiper-slide-active'))
            $("#slide21").css({"background-color": "#bec737"});
        else $("#slide21").css({"background-color": " #999999"});
        if ($('.slide-22').hasClass('swiper-slide-active'))
            $("#slide22").css({"background-color": "#bec737"});
        else $("#slide22").css({"background-color": " #999999"});
        if ($('.slide-23').hasClass('swiper-slide-active'))
            $("#slide23").css({"background-color": "#bec737"});
        else $("#slide23").css({"background-color": " #999999"});
        if ($('.slide-24').hasClass('swiper-slide-active'))
            $("#slide24").css({"background-color": "#bec737"});
        else $("#slide24").css({"background-color": " #999999"});
    })

});

$(document).ready(function () {
    var swiper = new Swiper('.comments-swiper', {
        slidesPerView: '1',
        spaceBetween: 10,
        touchRatio: 1,
        pagination: {
            el: '.swiper-pagination.pagination-fraction',
            clickable: true,
            type: 'fraction'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            756: {
                slidesPerView: '3',
                spaceBetween: 35,
            },
        }
    });
    $("#slide121").css({"background-color": "#bec737"});
    $("#slide122").css({"background-color": " #999999"});
    $("#slide123").css({"background-color": " #999999"});
    $("#slide124").css({"background-color": " #999999"});

    $("#slide21").css({"background-color": "#bec737"});
    $("#slide22").css({"background-color": " #999999"});
    $("#slide23").css({"background-color": " #999999"});
    $("#slide24").css({"background-color": " #999999"});
    swiper.on('slideChangeTransitionEnd', function () {
        if ($('.slide-21').hasClass('swiper-slide-active'))
            $("#slide21").css({"background-color": "#bec737"});
        else $("#slide21").css({"background-color": " #999999"});
        if ($('.slide-22').hasClass('swiper-slide-active'))
            $("#slide22").css({"background-color": "#bec737"});
        else $("#slide22").css({"background-color": " #999999"});
        if ($('.slide-23').hasClass('swiper-slide-active'))
            $("#slide23").css({"background-color": "#bec737"});
        else $("#slide23").css({"background-color": " #999999"});
        if ($('.slide-24').hasClass('swiper-slide-active'))
            $("#slide24").css({"background-color": "#bec737"});
        else $("#slide24").css({"background-color": " #999999"});

        if ($('.slide-121').hasClass('swiper-slide-active'))
            $("#slide121").css({"background-color": "#bec737"});
        else $("#slide121").css({"background-color": " #999999"});
        if ($('.slide-122').hasClass('swiper-slide-active'))
            $("#slide122").css({"background-color": "#bec737"});
        else $("#slide122").css({"background-color": " #999999"});
        if ($('.slide-123').hasClass('swiper-slide-active'))
            $("#slide123").css({"background-color": "#bec737"});
        else $("#slide123").css({"background-color": " #999999"});
        if ($('.slide-124').hasClass('swiper-slide-active'))
            $("#slide124").css({"background-color": "#bec737"});
        else $("#slide124").css({"background-color": " #999999"});
    })
});
var swiper = new Swiper('.swiper-rehabs-multyrow', {
    slidesPerView: 2,
    slidesPerColumn: 6,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        756: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 30,

        },
    }
});
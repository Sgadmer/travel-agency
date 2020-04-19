$(document).ready(function () {

    /*******************************Parallax****************************/
    $(window).on('scroll', function () {
        let s = $(this).scrollTop();
        let w = $(this).outerWidth();
        let h = $('.content__LA').outerHeight();

        if (s >= 1100) {
            $('.parallax__hills_2').css('display', 'none');
            $('.parallax__hills_3').css('display', 'none');
            $('.parallax__fog').css('display', 'none');
            return;
        }
        else {
            $('.parallax__hills_2').css('display', '');
            $('.parallax__hills_3').css('display', '');
            $('.parallax__fog').css('display', '');

            let parallax__height = $('.parallax').outerHeight();
            let scroll__percent__all = s / h * 100;
            let scroll__percent__up = s / parallax__height * 100;
            let opacity = 1 - 1 / 100 * scroll__percent__up;

            let zoom_1 = 1 + (w / 10000 * scroll__percent__up);

            $('.parallax__fog').css('transform', 'scale(' + zoom_1 + ')');
            $('.parallax__fog').css('opacity', opacity);

            let zoom_2 = 1 + (w / 5000000 * scroll__percent__all);
            $('.parallax__hills_1').css('transform', 'scale(' + zoom_2 + ')');

            let hr = w / 120 * scroll__percent__up;
            let zoom_3 = 1 + (w * 0.000005 * scroll__percent__up)
            $('.parallax__hills_3').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + zoom_3 + ')');


            let hr_2 = w / 4000 * scroll__percent__up;
            let zoom_4 = 1 + (w * 0.000021 * scroll__percent__up)
            $('.parallax__hills_2').css('transform', 'translate3d(' + hr_2 + 'px,0,0) scale(' + zoom_4 + ')');
        }
    });

    /**************************Slider*********************************/

    let slid;

    function is_paused_slider_LA() {
        if (!$('.play__pauseLA').hasClass('paused')) {
            clearInterval(slider_interval);
            slider_interval = setInterval(function () {
                plus_Slides(1);
            }, 5000);
        }
    }

    document.querySelector('.prevLA')
        .addEventListener('click', function () {
            plus_Slides(-1);
            is_paused_slider_LA();
        });

    document.querySelector('.nextLA')
        .addEventListener('click', function () {
            plus_Slides(1);
            is_paused_slider_LA();
        });

    document.querySelectorAll('.dot')
        .forEach(function (dot) {
            dot.addEventListener('click', function (e) {
                currentSlide(e.target.attributes[1].value);
                is_paused_slider_LA();
            })
        });

    let slide_index = 1;
    showSlides(slide_index);

    let slider_interval = setInterval(function () {
        plus_Slides(1);
    }, 3000);


    $('.play__pauseLA').on('click', function () {
        $(this).toggleClass('paused');
        if ($(this).hasClass('paused')) {
            clearInterval(slider_interval);
        }
        else {
            plus_Slides(1);
            slider_interval = setInterval(function () {
                plus_Slides(1);
            }, 5000);
        }
    });

    function plus_Slides(n) {
        showSlides(slide_index += n);
    }

    function currentSlide(n) {
        showSlides(slide_index = +n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll('.figures');
        let dots = document.querySelectorAll('.dot');

        if (n > slides.length) {
            slide_index = 1
        }
        if (n < 1) {
            slide_index = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add('hide');
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }

        slides[slide_index - 1].classList.replace('hide', 'show');
        dots[slide_index - 1].classList.toggle('active');

        slid = slides[slide_index - 1];

        position_btn_dots_slider(slid);

    }

    /************Position of dots and slider buttons*******/

    position_btn_dots_slider(slid);

    $(window).on('resize', function () {
        position_btn_dots_slider(slid);
    });

    function position_btn_dots_slider(slid) {
        let h2_h = slid.querySelector('h2').clientHeight;
        let img_h = slid.querySelector('img').clientHeight;
        let btns_h = $('.sliderLA .button_box').outerHeight();
        let btns__next__prev_pos = h2_h + (img_h / 2) - (btns_h / 2);
        $('.sliderLA .button_box').css('top', btns__next__prev_pos);
        $('.sliderLA .dot_slider_box').css('top', btns__next__prev_pos + (img_h / 2) - 10);


    }
});



/*************Anc_intersting_places*****************/

$('.anc_intersting_places figure').on('mouseenter', function () {
    $('.anc_intersting_places figure').css('z-index', 0);
    $(this).css('z-index', 100);
});

$('.anc_intersting_places figure').on('mouseleave', function () {
    $(this).css('z-index', 100);
});

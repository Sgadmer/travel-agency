$(document).ready(function () {

    /*******************************Phone burger menu****************************/
    $('.phone_menu-btn').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('nav').toggleClass('nav_phone_active');
    })

    /*******************************Scroll to element****************************/


    $(".nav_citys_hover_block p").on("click", function () {

        let get_class = $(this).attr("item");
        let target = $("." + get_class).offset().top;

        $('.phone_menu-btn').toggleClass('menu-btn_active');
        $('nav').toggleClass('nav_phone_active');

        $("html, body").animate({ scrollTop: target }, 800);

    });


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


    /*************Anc intersting places*****************/

    $('.anc_intersting_places figure').on('mouseenter', function () {
        $('.anc_intersting_places figure').css('z-index', 0);
        $(this).css('z-index', 100);
    });


    $('.anc_intersting_places figure').on('mouseenter', add_hidden_class_to_p_Anchorage);


    function add_hidden_class_to_p_Anchorage() {
        $('.hover_atraction_anc').addClass('hidden');
        $('.anc_intersting_places figure').off('mouseenter', add_hidden_class_to_p_Anchorage);
    }


    /**********************  MIAMI  *************************/

    let miami_bg_counter = 1;

    document.addEventListener('scroll', check_event_to_start_slide);


    function check_event_to_start_slide() {

        if (document.querySelector('.content__Miami')
            .getBoundingClientRect().top <= 150) {
            start_bg_slide_and_neon();
            document.removeEventListener('scroll', check_event_to_start_slide);
        }
    }

    function start_bg_slide_and_neon() {

        setInterval(function () {

            if (miami_bg_counter < 10) { miami_bg_counter++ } else { miami_bg_counter = 1 }

            let miami_bg_way = 'url(/src/pictures/MIAMI/MIAMI_BG/' + miami_bg_counter + '.jpg)';
            $('.content__Miami').css('backgroundImage', miami_bg_way);

        }, 8000);


        $('.content__Miami h1').addClass('neon_started_h1');
        $('.content__Miami h2').addClass('neon_started_h2');


    }

    $('.miami_attractions figure').on('click', add_hidden_class_to_p_Miami);


    function add_hidden_class_to_p_Miami() {
        $('.hover_atraction_miami').addClass('hidden');
        $('.miami_attractions figure').off('click', add_hidden_class_to_p_Miami);
    }

    $('.miami_attractions figure').on('click', toggle_class_miami_selected);


    function toggle_class_miami_selected() {
        $('.miami_attractions').toggleClass('miami_atrr_smth_selected');
        $(this).toggleClass('miami_selected');
    }



    /*********************    CALCULATOR    ****************** */

    let arr_LA_hotels = [
        {
            name: 'VICEROY L’ERMITAGE BEVERLY HILLS',
            stars_raiting: 5,
            price: 45000,
        },
        {
            name: 'The Peninsula Beverly Hills',
            stars_raiting: 5,
            price: 55000,
        },
        {
            name: 'Four Seasons Hotel',
            stars_raiting: 5,
            price: 52000,
        },
        {
            name: 'Bel-Air',
            stars_raiting: 5,
            price: 60000,
        },
        {
            name: 'Residence Inn by Marriott',
            stars_raiting: 5,
            price: 38000,
        },
        {
            name: 'Residence Inn by Marriott Boulevard',
            stars_raiting: 5,
            price: 29000,
        },
        {
            name: 'Omni Hotel',
            stars_raiting: 5,
            price: 43000,
        },
        {
            name: 'The Redbury',
            stars_raiting: 5,
            price: 33000,
        },
        {
            name: 'Sheraton',
            stars_raiting: 5,
            price: 26000,
        },

    ];

    let arr_ANC_hotels = [
        {
            name: 'Homewood Suites',
            stars_raiting: 3,
            price: 15000,
        },
        {
            name: 'HOME 2 Suites by Hilton',
            stars_raiting: 4,
            price: 25000,
        },
        {
            name: 'TownePlace Suites',
            stars_raiting: 4,
            price: 20000,
        },
        {
            name: 'Embassy Suites by Hilton',
            stars_raiting: 5,
            price: 41000,
        },
        {
            name: 'SpringHill Suites',
            stars_raiting: 5,
            price: 31500,
        },
        {
            name: 'My Place Hotel-Anchorage',
            stars_raiting: 5,
            price: 35000,
        },
        {
            name: 'Residence Inn by Marriott',
            stars_raiting: 2,
            price: 10000,
        },
        {
            name: 'Hilton Garden Inn',
            stars_raiting: 1,
            price: 5000,
        },
        {
            name: 'Hampton Inn',
            stars_raiting: 5,
            price: 50000,
        },
    ];

    let arr_MIAMI_hotels = [
        {
            name: 'First Hotel South Beach',
            stars_raiting: 5,
            price: 31000,
        },
        {
            name: 'Eden Roc Miami Beach Hotel',
            stars_raiting: 3,
            price: 15500,
        },
        {
            name: 'Shore Club South Beach',
            stars_raiting: 4,
            price: 16000,
        },
        {
            name: 'Mondrian South Beach Hotel',
            stars_raiting: 4,
            price: 20000,
        },
        {
            name: 'Nobu Hotel Miami Beach',
            stars_raiting: 5,
            price: 27000,
        },
        {
            name: 'Parisian Hotel & Suites',
            stars_raiting: 5,
            price: 127000,
        },
        {
            name: 'Delano South Beach Hotel',
            stars_raiting: 5,
            price: 170000,
        },
        {
            name: 'W South Beach',
            stars_raiting: 5,
            price: 41000,
        },
        {
            name: 'Clevelander South Beach Hotel',
            stars_raiting: 5,
            price: 57500,
        },
    ];


    $('.city_selection li').on('click', find_hotel_add_class_for_form);


    function find_hotel_add_class_for_form(e) {
        let hotel = e.target.attributes.city.value;
        (hotel == "arr_LA_hotels") ? fill_options(arr_LA_hotels) :
            (hotel == "arr_ANC_hotels") ? fill_options(arr_ANC_hotels) :
                fill_options(arr_MIAMI_hotels);

        $(this).siblings().removeClass('selected_li').addClass('unselected_li');
        $(this).removeClass('unselected_li').addClass('selected_li');

        let border_color = $(this).css('border-color');
        $('.city_selector_wrapper').css('border-color', border_color);
        $('.main_calculator').css('border-color', border_color);
        $('.hotel_days_selector__and_final_summ').removeClass('hotel_Hidden');
        find_summ();
        sort_hotels_up();
    }

    let hotel_to_show = {};

    function fill_options(hotel_arr) {
        $('#hotel_select option').remove();
        hotel_to_show.hotel1 = hotel_arr;
        $.each(hotel_arr, function (index, value) {
            let current_hotel = `<option value = "${value.price}">${index + 1}) ${value.name}
        ${value.stars_raiting} звёзд
        от ${value.price} руб/сутки
        </option>`;
            $('#hotel_select').append(current_hotel);
        });
    }




    $('#days_input').on('input', function () {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё\s\-,.;:'"_\[\]\{\}]/, ''));

        if (+($(this).val()) > 365) {
            $(this).val(365);
        }

        if (+($(this).val()) === 0) {
            $(this).val('');
        }
        find_summ();
    });
    $("#hotel_select").on('change', find_summ);


    $('#peoples_input_quintity').on('input', function () {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё\s\-,.;:'"_\[\]\{\}]/, ''));

        if (+($(this).val()) > 10) {
            $(this).val(10);
        }

        if (+($(this).val()) === 0) {
            $(this).val('');
        }
        find_summ();
    });





    const currency_url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    function send_currency_request(method, url) {
        return new Promise((resolve, reject) => {
            const currency_xhr = new XMLHttpRequest;
            currency_xhr.open(method, url);
            currency_xhr.responseType = 'json';
            currency_xhr.onload = () => {
                if (currency_xhr.status >= 400) {
                    reject(currency_xhr.response)
                } else {
                    resolve(currency_xhr.response);
                }
            }
            currency_xhr.send();
        })
    }
    let valute;
    let current_USD;
    let current_EUR;

    send_currency_request('GET', currency_url)
        .then(currency => {
            valute = currency.Valute;
            current_USD = valute.USD.Value;
            current_EUR = valute.EUR.Value;
        })
        .catch(currency => {
            console.error(currency);
        });





    function find_summ() {
        let hotel_day_price = +($('#hotel_select option:selected').val());
        let days_quantity = +($('#days_input').val());
        let people_quantity = +($('#peoples_input_quintity').val());
        if (people_quantity != 0 && days_quantity != 0) {
            let current_sum = hotel_day_price * days_quantity * people_quantity;
            $('.sum_rub').text(`₽ = ${current_sum}`);
            $('.sum_usd').text(`$ = ${Math.ceil(current_sum / current_USD)}`);
            $('.sum_euro').text(`€ = ${Math.ceil(current_sum / current_EUR)}`);
            fill_other_valutes(current_sum, valute);
        }
    }


    function fill_other_valutes(current_sum, valute) {
        $('.other_valutes option').remove();

        $.each(valute, function (index, value) {
            let current_valutes = `<option> ${Math.ceil((current_sum / value.Value) * value.Nominal)}||| ${value.CharCode}</option>`;
            $('.other_valutes').append(current_valutes);
        });
    }


    $('#hotel_filter').on('change', sort_hotels_up);
    function sort_hotels_up() {

        let sorted_arr;

        let value = $('#hotel_filter option:selected').val();
        let filter = $('#hotel_filter option:selected').attr('filter');


        if (value == 'price') {
            sorted_arr = hotel_to_show.hotel1.sort((a, b) => a.price - b.price);
        } else {
            sorted_arr = hotel_to_show.hotel1.sort((a, b) => a.stars_raiting - b.stars_raiting);
        }

        if (filter == 'down') {
            sorted_arr.reverse();
        }
        fill_options(sorted_arr);
        find_summ();
    }


    $(".main_calculator").on('submit', function (e) {
        e.preventDefault();
        $('.thanks').addClass('show_thanks');

    });

});
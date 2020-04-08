$(document).ready(function(){

    $(window).on('scroll', function(){

        let s= $(this).scrollTop();
        let w= $(this).outerWidth();
        let h= $('.content__LA').outerHeight();
        let parallax__height = $('.parallax').outerHeight();
        let scroll__percent__all = s/h * 100;
        let scroll__percent__up = s/parallax__height * 100;
        let opacity = 1 - 1/100*scroll__percent__up;

        let zoom_1 = 1 + (w/10000*scroll__percent__up);

        $('.parallax__fog').css('transform','scale('+zoom_1+')');
        $('.parallax__fog').css('opacity', opacity);

        let zoom_2 = 1 + (w/5000000*scroll__percent__all);
        $('.parallax__hills_1').css('transform','scale('+zoom_2+')');

        let hr = w/120 * scroll__percent__up;
        let zoom_3 = 1+(w*0.000005*scroll__percent__up)
        $('.parallax__hills_3').css('transform','translate3d('+hr+'px,0,0) scale('+zoom_3+')');


        let hr_2 = w/4000 * scroll__percent__up;
        let zoom_4 = 1+(w*0.000021*scroll__percent__up)
        $('.parallax__hills_2').css('transform','translate3d('+hr_2+'px,0,0) scale('+zoom_4+')');
    });

    // let slider_LA_img = document.querySelector('.sliderLA img');
    // let sliderLA_fagcaption = document.querySelectorAll('.sliderLA figcaption');
    // let counter =1;
    // let img_LA_src = '/src/pictures/LA/LA_CONTENT/';
    
    // setInterval(function(){

    //     if (counter > 10) counter =1;
    //     final_img_way = img_LA_src + counter +'.jpg';
    //     slider_LA_img.setAttribute('src', final_img_way);
    //     sliderLA_fagcaption[counter - 1].classList.toggle('show');
    //     console.log(sliderLA_fagcaption.classList);
    //     counter++;
    //     debugger
    // }, 3000)

});



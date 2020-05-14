$(document).ready(function(){

    /*******************************Параллакс****************************/
    $(window).on('scroll', function(){
        let s= $(this).scrollTop();
        let w= $(this).outerWidth();
        console.log($(this).width());
        let h= $('.content__LA').outerHeight();

        if (s >= 1100){
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
        }
    });

    /**************************Слайдер*********************************/

    let slid;

    document.querySelector('.prevLA')
    .addEventListener('click', function(){
            plus_Slides(-1);
        });

        document.querySelector('.nextLA')
    .addEventListener('click', function(){
            plus_Slides(1);
        });

        document.querySelectorAll('.dot')
        .forEach(function(dot){
            dot.addEventListener('click',function(e){
                currentSlide(e.target.attributes[1].value);
            })
        });

    let slide_index = 1;
    showSlides(slide_index);


    
    function plus_Slides(n){
        showSlides(slide_index += n);
    }
    
    function currentSlide(n){
        showSlides(slide_index = n);
    }

    function showSlides (n){
        let i;
        let slides = document.querySelectorAll('.figures');
        let dots = document.querySelectorAll('.dot');
 
        if(n > slides.length){
            slide_index = 1
        }
        if ( n < 1){
            slide_index = slides.length;
        }

        for (i=0; i < slides.length; i++){
            slides[i].classList.add('hide');
        }

        for (i =0; i < dots.length; i++){
            dots[i].classList.remove('active');
        }

        slides[slide_index-1].classList.replace('hide', 'show');
        dots[slide_index-1].classList.toggle('active');

        slid = slides[slide_index-1];

        position_btn_dots_slider(slid);
        
    }

    /************Позиционирование кнопок и дотов слайдера*******/

    position_btn_dots_slider(slid);

    $(window).on('resize', function(){
        position_btn_dots_slider(slid);
    });

    function position_btn_dots_slider(slid){
          let h2_h = slid.querySelector('h2').clientHeight;
          let img_h= slid.querySelector('img').clientHeight;
          let btns_h = $('.sliderLA .button_box').outerHeight();
          let btns__next__prev_pos = h2_h +  (img_h/2) - (btns_h/2);
          $('.sliderLA .button_box').css('top', btns__next__prev_pos);
          $('.sliderLA .dot_slider_box').css('top', btns__next__prev_pos + (img_h/2) - 10);


    }
});



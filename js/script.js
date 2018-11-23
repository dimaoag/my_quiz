
//hide finale page
$('.final-page').hide();




//insert percents in span and width
var cournSlides = $('#slides .slide').length - 1;
var currentCount = 0;
$('.quiz__progress').each(function (el) {
    $(this).find('.progress-bar__label span').html(currentCount + '%');
    $(this).find('.progress-bar__field span').css('width',currentCount + '%');
    currentCount += Math.round(100 / cournSlides);
});
currentCount = 0;
$('.progress-bar_mobile').each(function (el) {
    $(this).find('.progress-bar__label span').html(currentCount + '%');
    $(this).find('.progress-bar__field span').css('width',currentCount + '%');
    currentCount += Math.round(100 / cournSlides);
});




//next slide
function nextSlide(currentSlide2) {
    var slides2 = $('#slides .slide');
    if (currentSlide2 == (slides2.length - 2)){
        $('.final-page').show();
    }
    var currentSlide = $('#slides').children().eq(currentSlide2);
    var buttonNext = currentSlide.find('.quiz-buttons__button_next');
    if(buttonNext.is('[disabled=disabled]')){
        return false;
    } else {
        currentSlide.removeClass('showing');
        var nextSlide = (currentSlide2 + 1) % slides2.length;
        $('#slides').children().eq(nextSlide).addClass("showing");
    }
}




//next prev slide
function prewSlide(currentSlide2) {
    var slides2 = $('#slides .slide');
    var currentSlide = $('#slides').children().eq(currentSlide2);
    currentSlide.removeClass('showing');
    var prevSlide = currentSlide2 = (currentSlide2 - 1) % slides2.length;
    $('#slides').children().eq(prevSlide).addClass("showing");
}




//click on answer
function diss(current, variantGroupId, variandId) {


    //is checkbox
    if ($('#'+variandId+' input').is(':checkbox')){


        //is disabled
        if (typeof $(current).data('disabled') !== 'undefined') {

            if (!$('#'+variandId+' input').is(":checked")) {
                $('#'+ variandId).removeClass('answer-variants__textVariant_selected');
                $(current).attr('disabled', 'disabled');
            } else {
                $('#'+ variandId).addClass(" answer-variants__textVariant_selected");
            }

            $('#'+variantGroupId).find("input[type='checkbox']").each(function(){
                if ($(this).is(":checked")){
                    $(current).removeAttr("disabled");
                }
            });

        //is not disabled
        } else {

            if (!$('#'+variandId+' input').is(":checked")) {
                $('#'+ variandId).removeClass('answer-variants__textVariant_selected');
            } else {
                $('#'+ variandId).addClass(" answer-variants__textVariant_selected");
            }

        }

    //is radio
    } else {

        //is disabled
        if (typeof $(current).data('disabled') !== 'undefined') {
            $(current).removeAttr("disabled");
        }

        if (typeof $('#'+variandId).data('img') !== 'undefined'){
            var src = $('#'+variandId).data('src');
            $('#'+variantGroupId+' img').attr("src", src);
        }

        //is not disabled and is not gallery

        if (typeof $('#'+variantGroupId).data('gallery') == 'undefined'){
            $('#'+variantGroupId + ' .answer-variants__textVariant').each(function (el) {
                $(this).removeClass('answer-variants__textVariant_selected');
            });
            $('#'+ variandId).addClass(" answer-variants__textVariant_selected");
        }



    }


}



//open pop up
$('.open-popup-link').magnificPopup({
    type:'inline',
    closeOnBgClick: false,
});




var mySwiper = new Swiper ('.sw-wrap-radio', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    navigation: {
        nextEl: '.sw-next',
        prevEl: '.sw-prev',
    },
    scrollbar: {
        el: '.sw-scroll',
    },
    breakpoints: {
        // when window width is <= 320px
        380: {
            slidesPerView: 1

        },
        // when window width is <= 480px
        500: {
            slidesPerView: 2,

        },
        // when window width is <= 640px
        700: {
            slidesPerView: 3,

        },
        // when window width is <= 992
        992: {
            slidesPerView: 4,

        },
        // when window width is <= 1199
        1199: {
            slidesPerView: 5,
        },
    }
});



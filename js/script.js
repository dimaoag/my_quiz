
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
    $(current).removeAttr("disabled");

    $('#'+variantGroupId + ' .answer-variants__textVariant').each(function (el) {
        $(this).removeClass('answer-variants__textVariant_selected');
    });

    $('#'+ variandId).addClass(" answer-variants__textVariant_selected");

}




//open pop up
$('.open-popup-link').magnificPopup({
    type:'inline',
    closeOnBgClick: false,
});
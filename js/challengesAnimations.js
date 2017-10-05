/**
 * Created by Razso on 04-Oct-17.
 */
$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.modal').modal();


    $(".clickthis").click(function(){
        $(this).closest('.challenge').find('.showthis').slideToggle('slow')});

    $(".clickthis").click(function(){
        var clicks = $(this).data('clicks');
        if (clicks) {
            $(this).find('i').html('arrow_drop_down');
        } else {
            $(this).find('i').html('arrow_drop_up');
        }
        $(this).data("clicks", !clicks);
    });

    $( ".copyButton" ).click(function() {
        var $element = $(this).closest('.example').find('.textToCopy');
        console.log($element);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($element.text()).select();
        document.execCommand("copy");
        $temp.remove();
    });

});
/**
 * Created by Razso on 04-Oct-17.
 */
$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('.modal1reverse') .modal();
    $('.modalLongest') .modal();

    $(".clickthis").click(function(){
        $(this).closest('.challenge').find('.showthis').slideToggle('slow')});

    $("a").click(function(){
        var clicks = $(this).data('clicks');
        if (clicks) {
            $(this).find('i').html('arrow_drop_down');
        } else {
            $(this).find('i').html('arrow_drop_up');
        }
        $(this).data("clicks", !clicks);
    });
});
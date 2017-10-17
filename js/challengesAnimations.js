/**
 * Created by Razso on 04-Oct-17.
 */
$(document).ready(function() {
    $('.button-collapse').sideNav();
    $('.modal').modal();

    $('.clickthis').click(function() {
        var currentButton = this;
        $(currentButton)
            .closest('.challenge')
            .find('.showthis')
            .slideToggle('slow');
        var icon = $(currentButton).find('i');
        if (icon.text() === 'arrow_drop_down') {
            icon.text('arrow_drop_up');
        } else {
            icon.text('arrow_drop_down');
        }
    });

    $( ".copyButton" ).click(function() {
        var $element = $(this).closest('.example').find('.textToCopy');
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($element.text()).select();
        document.execCommand("copy");
        $temp.remove();
    });

});

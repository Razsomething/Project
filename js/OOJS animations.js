/**
 * Created by Razso on 08-Oct-17.
 */
$(document).ready(function() {
    $('.button-collapse').sideNav();


    $('.clickthis').click(function() {
        var currentButton = this;
        $(currentButton)
            .closest('.example')
            .find('.showthis')
            .slideToggle('slow');
        var icon = $(currentButton).find('i');
        if (icon.text() === 'arrow_drop_down') {
            icon.text('arrow_drop_up');
        } else {
            icon.text('arrow_drop_down');
        }
    });
});
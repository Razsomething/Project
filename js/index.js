/**
 * Created by Razso on 02-Oct-17.
 */
$(document).ready(function () {
    $('.slider').slider();
    $(".button-collapse").sideNav();
});
$( ".clickthis" ).click(function() {
    $( ".showthis" ).slideToggle( "slow" );
    $( ".secondButton" ).slideToggle(0);
    $( ".firstButton" ).slideToggle(0);

});

/**
 * Created by Razso on 02-Oct-17.
 */
$(document).ready(function () {
    $('.slider').slider();
    $(".button-collapse").sideNav();
    $('.modal').modal();

$( ".clickthis" ).click(function() {
    $( ".showthis" ).slideToggle( "slow" );
    $( ".secondButton" ).slideToggle(0);
    $( ".firstButton" ).slideToggle(0);
});
$( ".palindromeclickthis" ).click(function() {
    $( ".palindromeshowthis" ).slideToggle( "slow" );
    $( ".palindromesecondButton" ).slideToggle(0);
    $( ".palindromefirstButton" ).slideToggle(0);
});
});
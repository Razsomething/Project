/**
 * Created by Razso on 04-Oct-17.
 */
$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('.modal1reverse') .modal();
    $('.modalLongest') .modal();

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
    $( ".reverseclickthis" ).click(function() {
        $( ".reverseshowthis" ).slideToggle( "slow" );
        $( ".reversesecondButton" ).slideToggle(0);
        $( ".reversefirstButton" ).slideToggle(0);
    });
    $( ".titleclickthis" ).click(function() {
        $( ".titleshowthis" ).slideToggle( "slow" );
        $( ".titlesecondButton" ).slideToggle(0);
        $( ".titlefirstButton" ).slideToggle(0);
    });
    $( ".longestclickthis" ).click(function() {
        $( ".longestshowthis" ).slideToggle( "slow" );
        $( ".longestsecondButton" ).slideToggle(0);
        $( ".longestfirstButton" ).slideToggle(0);
    });
});
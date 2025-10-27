/* zazu.berlin – FILM+DIGITAL (c) JavaScript 20190509/05012024
author: Thomas Hezel, Berlin
main site JS
modules are here on commonJS
*/

/*avoid conflicting general variables with other scripts*/

export{ };


/*
*
*  sitepackage site js inside JQuery
*
*  $( document ).ready(function() {
*  short hand for the above:
*  $(function () {
*/

$(function () {



    /*==== cookies ======
    $('#tx_cookies_accept input').click(
        function () {
            setTimeout(
                function () {
                    location.reload();
                },
                500);
        });

*/

//end document ready
});


//opt-out-link Datenschutzerklärung bei Google / only if you use Google Analytics

/*

// GOOGLE OPT_OUT_COOKIE  Set to the same value as the web property used on the site
var gaProperty = 'UA-XXXXXXX-X';

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
    window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[disableStr] = true;

    //zazu.berlin addition to work with cookie Extension and set it through this link off
    document.cookie = 'tx_cookies_accepted=1; path=/';
    location.reload();
}

*/
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://online.auchan.hu/shop/cart
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @grant        GM_addStyle
// ==/UserScript==




(function() {
    'use strict';
    // Your code here...

    function checkDay() {

    setTimeout(function () {

        jQuery('div#deliveryAppointmentModal').on('shown.bs.modal', function () {
            console.log('1');
        });

        jQuery('a.basket__summary-appointment-range-text').trigger('click');



        setTimeout(function () {
           console.log(jQuery('div.day.last-visible > div.day__inner > div.day__number').text());
           var cd = jQuery('div.day.last-visible > div.day__inner > div.day__lowest-price').text();
            if ((cd.trim() !== '-' )) {
                console.log('new day');

            } else {
                console.log('no');
              // close modal
                jQuery('div.time-table ~ div.button-container > button.btn-link.pull-right').trigger('click');
                checkDay();



            }


        }, 4000);


    }, 4000);
    }

    checkDay();

})();
(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        //------------ Hero slider -------------

        $('.product__main__slider').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
            dot: false,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        })





    }); //---document-ready-----

}(jQuery));
(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open, .mob__category').click(function () {
            $('.offcanvas-area, .offcanvas-overlay').addClass('active');
        });
        $('.menu-close, .offcanvas-overlay').click(function () {
            $('.offcanvas-area, .offcanvas-overlay').removeClass('active');
        });


        //------------ Profile Sidebar -------------

        $('.profile-open').click(function () {
            $('.profile__wrap, .profile__overlay').addClass('active');
        });
        $('.profile__close, .profile__overlay').click(function () {
            $('.profile__wrap, .profile__overlay').removeClass('active');
        });


        //------------ Setting Sidebar -------------

        $('.profile-setting').click(function () {
            $('.setting__wrap').addClass('active');
        });
        $('.setting__close, .profile__overlay').click(function () {
            $('.setting__wrap').removeClass('active');
        });


        //------------ Login -------------

        $('.login__btn, .already_have_acc').click(function () {
            $('.login__all, .login__overlay').addClass('active');
        });
        $('.login__close, .dont_have_acc, .reset__acc').click(function () {
            $('.login__all, .login__overlay').removeClass('active');
        });


        //------------ Signup -------------

        $('.signup__btn, .dont_have_acc, .dont_have_acc2').click(function () {
            $('.signup__all, .signup__overlay').addClass('active');
        });
        $('.signup__close, .already_have_acc').click(function () {
            $('.signup__all, .signup__overlay').removeClass('active');
        });


        //------------ Forgot Pass -------------

        $('.reset__acc').click(function () {
            $('.forgot__all, .forgot__overlay').addClass('active');
        });
        $('.forgot__close, .dont_have_acc2').click(function () {
            $('.forgot__all, .forgot__overlay').removeClass('active');
        });


        //------------ Cart Sidebar -------------

        $('.cart__box, .mob__cart, .header-cart').click(function () {
            $('.cart__wrapper, .cart__overlay').addClass('active');
        });
        $('.cart__close__main, .cart__overlay').click(function () {
            $('.cart__wrapper, .cart__overlay').removeClass('active');
        });


        //------------ Cart Min Box -------------

        $(".cart__box__min").click(function () {
            $(".cart__box, .cart__box__min").toggleClass("active");
        });



        //------------ Product slider -------------

        $('.product__main__slider').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
            dot: false,
            items: 7,
            slideToScroll: 1,
            smartSpeed: 700,
            responsive: {
                320: {
                    items: 2,
                    margin: 10,
                },
                450: {
                    items: 3,
                    margin: 10,
                },
                575: {
                    items: 3,
                },
                768: {
                    items: 5,
                },
                992: {
                    items: 5,
                },
                1100: {
                    items: 5,
                },
                1200: {
                    items: 7,
                },
            }
        })


        //------------ Related Product slider -------------

        $('.re__product__main__slider').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
            dot: false,
            items: 7,
            slideToScroll: 1,
            smartSpeed: 700,
            responsive: {
                320: {
                    items: 2,
                    margin: 10,
                },
                450: {
                    items: 3,
                    margin: 10,
                },
                575: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 4,
                },
                1100: {
                    items: 5,
                },
                1200: {
                    items: 6,
                },
            }
        })


        //------------ Category slider -------------

        $('.cat__main__slider').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
            dot: false,
            items: 14,
            slideToScroll: 1,
            smartSpeed: 500,
            responsive: {
                320: {
                    items: 4,
                    margin: 10,
                },
                450: {
                    items: 4,
                    margin: 10,
                },
                575: {
                    items: 5,
                },
                768: {
                    items: 6,
                },
                992: {
                    items: 7,
                },
                1100: {
                    items: 7,
                },
                1200: {
                    items: 12,
                },
            }
        })




        //------------ Nice Number -------------

        $('input[type="number"]').niceNumber();




    }); //---document-ready-----

}(jQuery));
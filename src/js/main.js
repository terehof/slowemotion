var app = app || {};

app.main = {
    init: function() {
        this.events();
        this.slider();
        this.reviewsHeight();
        this.menuLinks();
        this.bgVideo();
        this.parallax();
    },
    events: function () {
        $('.jsPopupPrice').on('click', function () {
            app.popup.openPrice();
        });
        $('.jsPopupCallback').on('click', function () {
            app.popup.openCallback();
        });
        $('.popup-close, .popup-bg').on('click', function () {
            app.popup.close();
        });
        $('.menu-toggle').on('click', function() {
            $(this).toggleClass('active');
            $('.main-menu').toggleClass('active');
        });
    },
    slider: function() {
        $('#slider').rotateSlider({});
    },
    reviewsHeight: function () {
        var $reviewText = $('.review-text');
        if ($reviewText.length > 0) {
            var maxHeight = 0;
            $reviewText.each(function(){
                if ( $(this).height() > maxHeight ) {
                    maxHeight = $(this).height();
                }
            });
            $reviewText.height(maxHeight);
        }
    },
    menuLinks: function () {
        $("a.ancLink").click(function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            $('html,body').animate( { scrollTop: destination }, 1500, 'swing' );
            return false;
        });
    },
    bgVideo: function() {
        if ($(window).width() > 640) {
            $('.bg-video').tubular({videoId: '5X3DUQBssh4'});
        }
    },
    parallax: function () {
        $('#scene-1').parallax({
            'calibrate-y': true,
            'calibrate-x': true
        });
    }
};
app.popup = {
    close: function () {
        var $bg = $('.popup-bg'),
            $popup = $('.popup');
        $bg.fadeOut(300);
        $popup.fadeOut(200);
    },
    openCallback: function () {
        var $bg = $('.popup-bg'),
            $popupCallback = $('.popup-callback');
        $bg.fadeIn(200);
        $popupCallback.fadeIn(400);
    },
    openPrice: function () {
        var $bg = $('.popup-bg'),
            $popupPrice = $('.popup-price');
        $bg.fadeIn(200);
        $popupPrice.fadeIn(400);
    }
};

var App = (function($, app){
    function init () {
        app.main.init();
    }
    return {
        init: init
    };
})(jQuery, app);
$(function () {
    App.init();
});
var app = app || {};

app.main = {
    init: function() {
        this.events();
        this.slider();
        this.reviewsHeight();
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
        })
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
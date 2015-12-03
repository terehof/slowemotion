var app = app || {};

app.main = {
    init: function() {
        this.events();
        this.slider();
        this.reviewsHeight();
        this.menuLinks();
        this.bgVideo();
        this.parallax();
        this.formSend();
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

        $('.masked-input').mask("+38(999) 999-9999");
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
        	if ($(window).width() <= 1180) {
        		$('.menu-toggle').click();
        	}
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            $('html,body').animate( { scrollTop: destination }, 1500, 'swing' );
            return false;
        });
    },
    bgVideo: function() {
        if ($(window).width() > 640) {
            $('.bg-video').tubular({
            	//videoId: '5X3DUQBssh4',
            	videoId: 'Aj8xUuGB2Q8',
            	ratio: 4/3
            });
        }
    },
    parallax: function () {
		$(window).enllax();
    },
    formSend: function () {
        $('.form-callback').validate({
            rules: {
                'name': {
                    required: true
                },
                'phone': {
                    required: true
                }
            },
            messages: {
                'name': 'Укажите свое имя',
                'phone': 'Укажите свой телефон'
            },
            submitHandler: function(form) {
                var formData = $(form).serialize();
                $.ajax({
                    type: "POST",
                    url: "send.php",
                    data: formData,
                    success: function (data) {
                        console.log(data);
                        $('.form-callback .message-text').removeClass('error').addClass('success').html('Спасибо. Ожидайте наш звонок!').fadeIn();
                        $('.form-callback').find('input').val('');
                    },
                    error: function (data) {
                        console.log('error');
                        console.log(data);
                        $('.form-callback .message-text').addClass('error').html('Произошла ошибка').fadeIn();
                    }
                });
            }
        })
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
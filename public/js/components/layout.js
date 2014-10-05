var layout = (function(window, document, $) {

    'use strict';

    var init = function() {

            stickOnScroll();

        },

        stickOnScroll = function() {

            window.setTimeout(function() {
                var ele = $('.project-content-left');
                ele.css('height', ele.outerHeight()).stickOnScroll({
                    topOffset: 10
                });
            }, 100);

        };

    return {
        init: init
    };

})(window, document, $);

window.googlefonts = window.googlefonts || {};

(function(window, document, $) {

    "use strict";

    googlefonts.LoadFonts = (function() {

        var apiKey = "AIzaSyCVaukYgO4yQkwxcUNAMu6-L2-EhyszPsA",
            dropdown = $('#fonts'),
            preview = $('#preview'),
            fonts;

        function _display() {
            dropdown.css('visibility', 'visible');
            for (var i = 0, l = fonts.length; i < l; i++) {
                dropdown.append('<option value="' + fonts[i].family + '">' + fonts[i].family + '</option>');
            }
        }

        function _updateFont(font) {
            WebFont.load({
                google: {
                    families: [font]
                }
            });
            preview.css('font-family', font);
        }

        function _setupAPI() {
            gapi.client.setApiKey(apiKey);
            gapi.client.load('webfonts', 'v1', function() {
                var request = gapi.client.webfonts.webfonts.list();
                request.execute(function(resp) {
                    fonts = resp.items;
                    _display();
                });
            });
        }

        function _bindEvents() {
            dropdown.on('change', function() {
                _updateFont($(this).val().toString());
            });
        }

        function init() {
            _setupAPI();
            _bindEvents();
        }

        return {
            init: init
        };

    })();

})(window, document, $);

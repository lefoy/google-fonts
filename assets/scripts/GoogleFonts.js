window.googlefonts = window.googlefonts || {};

(function(window, document, $) {

    "use strict";

    googlefonts.LoadFonts = (function() {

        var apiKey = "AIzaSyCVaukYgO4yQkwxcUNAMu6-L2-EhyszPsA",
            dropdown = $('#fonts'),
            preview = $('#preview'),
            currentFont,
            fonts;

        function _updateHash() {

            window.location.hash = currentFont.replace(/\s/g, '');

        }

        function _loadHash() {

            var hash = window.location.hash.substring(1),
                fontIndex;

            $.each(fonts, function(index, item) {
                if (item.family.replace(/\s/g, '') === hash) {
                    currentFont = item.family;
                    fontIndex = index;
                    return false;
                }
            });

            dropdown.find('option').eq(fontIndex).attr('selected', 'selected');

            _updateFont();

        }

        function _display() {

            $('body').addClass('is-loaded');

            for (var i = 0, l = fonts.length; i < l; i++) {
                dropdown.append('<option value="' + fonts[i].family + '">' + fonts[i].family + '</option>');
            }

            _loadHash();

        }

        function _updateFont() {

            WebFont.load({
                google: {
                    families: [currentFont]
                }
            });

            preview.css('font-family', currentFont);

            _updateHash();
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
                currentFont = $(this).val().toString();
                _updateFont();
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

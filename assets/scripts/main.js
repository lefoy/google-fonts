jQuery(document).ready(function($) {

    window.setTimeout(function() {
        gapi.client.setApiKey("AIzaSyDVNqRssIkY835WoykHBq2XVgO1WRb-mLo");
        gapi.client.load('webfonts', 'v1', function() {
            var request = gapi.client.webfonts.webfonts.list();
            request.execute(function(resp) {
                console.log(resp);
            });
        });
    }, 500);

});

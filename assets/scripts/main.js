jQuery(document).ready(function($) {

    $.getJSON("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDVNqRssIkY835WoykHBq2XVgO1WRb-mLo", function(data) {
        var items = [];
        $.each(data, function(key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });

});

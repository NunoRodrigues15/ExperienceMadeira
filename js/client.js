$(window).ready(
    function() {
        createTiles();

    }
);

function createTiles() {

    var url = "http://experiencemadeira.jpborges.pt/public/experiences";
    if (isNumeric(window.location.search.substring(1)))
        url = "http://experiencemadeira.jpborges.pt/public/categories/" + window.location.search.substring(1);

    $.getJSON(url,
        function(data) {
            $(data).each(function(i, item) {
                var imageURL = data[i].experience_images_cover;
                imageURL = imageURL.replace('\\', '');

                $("#experienceTiles").append("<li onclick=navigatetoDetails('" + data[i].id + "') class='pointer' id='exp" + i + "'> <div class='boxes__text-wrapper'>" +

                    "<h2 >" + data[i].name + "</h2>" + "<p>" + data[i].description + "</p> </div> </li>");
                $("#exp" + i).css('background-image', 'url(' + data[i].experience_images_cover + ')');
            });

        });
}

function navigatetoDetails(id) {
    var pathname = window.location.pathname;
    var splitPath = pathname.split("/");
    var path = "";
    for (var i = 0; i < splitPath.length - 1; i++) path = path + splitPath[i] + "/";
    path = path + "detail.html?" + id;
    window.location.href = path;
}
$(function() {
    // See if this is a touch device

});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

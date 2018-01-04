$(window).ready(
    function() {
        createTiles();

    }
);

function createTiles() {

    var url = "http://experiencemadeira.jpborges.pt/public/experiences";
    if(Number.isInteger(window.location.search.substring(1)))
        url = "http://experiencemadeira.jpborges.pt/public/categories/" + window.location.search.substring(1);

    $.getJSON(url,
        function(data) {
            $(data).each(function(i, item) {

                $("#experienceTiles").append("<li onclick=navigatetoDetails('" + data[i].id + "') class='pointer' id='exp"+i+"'> <div class='boxes__text-wrapper'>" +

                    "<h2 >" + data[i].name + "</h2>" + "<p>" + data[i].description + "</p> </div> </li>");
                    $("#exp"+i).css('background-image', 'url(' + /*data.Experiences[i].photo*/ + ')');
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

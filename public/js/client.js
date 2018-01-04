$(window).ready(
    function() {
        createTiles();

    }
);

function createTiles() {

    $.getJSON('http://localhost/projetoACR/ACR%20Code/public/mockdata/experiences.json',
        function(data) {
            $(data.Experiences).each(function(i, item) {

                $("#experienceTiles").append("<li onclick=navigatetoDetails('" + data.Experiences[i].id + "') class='pointer' id='exp"+i+"'> <div class='boxes__text-wrapper'>" +

                    "<h2 >" + data.Experiences[i].header + "</h2>" + "<p>" + data.Experiences[i].subheader + "</p> </div> </li>");
                    $("#exp"+i).css('background-image', 'url(' + data.Experiences[i].photo + ')');
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

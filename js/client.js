$(window).ready(
    function() {
        createTiles();

    }
);

function createTiles() {
    $.getJSON('http://localhost/projetoACR/ACR%20Code/mockdata/experiences.json',
        function(data) {
            $(data.Experiences).each(function(i, item) {
                $("#experienceTiles").append("<li> <div class='boxes__text-wrapper'>" +
                    "<h2 onclick=navigatetoDetails('" + data.Experiences[i].id + "')>" + data.Experiences[i].header + "</h2>" + "<p>" + data.Experiences[i].subheader + "</p> </div> </li>");
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

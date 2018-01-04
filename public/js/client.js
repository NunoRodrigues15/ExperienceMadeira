$(window).ready(
    function() {
        createTiles();

    }
);

function createTiles() {
    $.getJSON('http://localhost/projetoACR/ACR%20Code/public/mockdata/experiences.json',
        function(data) {
            $(data.Experiences).each(function(i, item) {
                $("#experienceTiles").append("<li onclick=navigatetoDetails('" + data.Experiences[i].id + "') class='pointer'> <div class='boxes__text-wrapper'>" +
                    " <img class= 'tilesPhoto' src='" +
                    data.Experiences[i].photo +"' > </img>" +
                    "<h2 >" + data.Experiences[i].header + "</h2>" + "<p>" + data.Experiences[i].subheader + "</p> </div> </li>");
            });
        }) ;
}

function navigatetoDetails(id) {
    var pathname = window.location.pathname;
    var splitPath = pathname.split("/");
    var path = "";
    for (var i = 0; i < splitPath.length - 1; i++) path = path + splitPath[i] + "/";
    path = path + "detail.html?" + id;
    window.location.href = path;
}

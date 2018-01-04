$(window).ready(
    function() {
        createFilters();
    }
);

function createFilters() {
    $("#welcomeTitle").append("<h1 id='welcomeText'> Escolha a sua próxima aventura com a Experience Madeira </h1>");

    $.getJSON('http://experiencemadeira.jpborges.pt/public/categories',
        function(data) {

            $(data).each(function(i, item) {
                $("#categories").append("<button class='categoryButton flexButton' onClick='redirect()'>" +
                "<i class='fa "+data[i].description+"' aria-hidden='true'></i>"+ data[i].name + "</button>");
            });
            $("#search").append("<button class='searchButton' onClick='redirect()'>"+ "<i class='fa fa-search iconSearch' aria-hidden='true'></i>" + "Pesquisar" +"</button>");
});
}

function redirect(){
    var pathname = window.location.pathname;
    var splitPath = pathname.split("/");
    var path = "";
    for (var i = 0; i < splitPath.length - 1; i++) path = path + splitPath[i] + "/";
    path = path + "main.html?";
    window.location.href = path;
}

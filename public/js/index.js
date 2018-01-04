$(window).ready(
    function() {
        createFilters();

    }
);

function createFilters() {

    $.getJSON('http://localhost/projetoACR/ACR%20Code/public/mockdata/categories.json',
        function(data) {
            $("#welcomeTitle").append("<h1 id='welcomeText'> Escolha a sua próxima aventura com a Experience Madeira </h1>");
            $(data.Experiences).each(function(i, item) {
                $("#categories").append("<button class='categoryButton flexButton' onClick='redirect()'>" +
                "<i class='fa "+data.Experiences[i].icon+"' aria-hidden='true'></i>"+ data.Experiences[i].name + "</button>");
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

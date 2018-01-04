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
                $("#categories").append("<button class='categoryButton flexButton' onClick='selectedCategorie'>" +
                "<i class='fa "+data.Experiences[i].icon+"' aria-hidden='true'></i>"+ data.Experiences[i].name + "</button>");
            });
            $("#search").append("<button class='searchButton'>"+ "<i class='fa fa-search iconSearch' aria-hidden='true'></i>" + "Pesquisar" +"</button>");
});
}

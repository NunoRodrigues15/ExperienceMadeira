$(window).ready(
    function() {
        createExperiences();
        // myMap();

    }
);

function createExperiences() {

    $.getJSON('http://localhost/projetoACR/ACR%20Code/public/mockdata/' + window.location.search.substring(1) + '.json',
        function(data) {

            var experienceTitle = $("#experienceDetailsHeader");
            experienceTitle.append("<h1 id='experienceDetailTitle'>" + data.header + "</h1>");
            experienceTitle.append("<p id='experienceShortDescr'>" + data.shortDescription + "</p>");

            $("#experienceAtributes").append("<ul class='atributesList fa-ul'>" +
                "<li><i class='fa-li fa fa-map-signs'></i>" + data.Atributs.location + "</li>" +
                "<li><i class='fa-li fa fa-line-chart'></i>" + data.Atributs.level + "</li>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.Atributs.category + "</li>" +
                "<li><i class='fa-li fa fa-clock-o'></i>" + data.Atributs.duration + "</li>" +
                "</ul>");

            $("#experienceDescription").append("<h2>O que iremos fazer:</h2>" +
                "<p>" + data.longDescription + "</p>");

            $("#experienceRequirements").append("<h2>Observações:</h2>" +
                "<ul class='fa-ul requirementsList'>" +
                "<li><i class='fa-li fa fa-exclamation-triangle'></i>" + data.requirements.equipment + "</li>" +
                "<li><i class='fa-li fa fa-user-o'></i>" + data.requirements.age + "</li>" +
                "</ul>");



        $("#priceSection").append("<div class='price'>" + "<p>" + data.price.value + data.price.unit + " por pessoa</p>" + "<//div>");
        $("#priceSection").append("<div class='dateButton'> " + "<button class='button buttonPos' onclick=navigatetoCheckout('"+window.location.search.substring(1)+"')>Ver datas</button>" + "</div");

        var carousel = $('.carouselItems');

        $(data.image.others).each(function(i, item) {
            carousel.append("<div>" + " <img src='" + data.image.others[i].image + "'></img>" + "</div>");
        });

        carousel.slick({
            slidesToShow: 1,
            dots: true,
            arrows: true
        });

        $(".fb-comments").attr("data-href", window.location.href); $(".fb-comments").attr("data-width", $(".col-right").width());
    });

}
function navigatetoCheckout(id) {
    var pathname = window.location.pathname;
    var splitPath = pathname.split("/");
    var path = "";
    for (var i = 0; i < splitPath.length - 1; i++) path = path + splitPath[i] + "/";
    path = path + "checkout.html?" + id;
    window.location.href = path;
}

$(window).ready(
    function() {
        createExperiences();

    }
);

function createExperiences() {

    $.getJSON('http://localhost/projetoACR/ACR%20Code/mockdata/' + window.location.search.substring(1) + '.json',
        function(data) {

            var experienceTitle = $("#experienceDetailsHeader");
            experienceTitle.append("<h1>" + data.header + "</h1>");

            $("#experienceAtributes").append("<ul class='atributesList fa-ul fa-2x'>" +
                "<li><i class='fa-li fa fa-map-signs'></i>" + data.Atributs.location + "</li>" +
                "<li><i class='fa-li fa fa-line-chart'></i>" + data.Atributs.level + "</li>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.Atributs.category + "</li>" +
                "<li><i class='fa-li fa fa-clock-o'></i>" + data.Atributs.duration + "</li>" +
                "</ul>");

            $("#experienceDescription").append("<h2>O que iremos fazer:</h2>" +
                "<p>" + data.longDescription + "</p>");

            $("#experienceRequirements").append("<h2>Observações:</h2>" +
                "<ul class='fa-ul fa-1x'>" +
                "<li><i class='fa-li fa fa-exclamation-triangle'></i>" + data.requirements.equipment + "</li>" +
                "<li><i class='fa-li fa fa-user-o'></i>" + data.requirements.age + "</li>" +
                "</ul>");
            $("#priceSection").append("<span class='price'>" + data.price.value + data.price.unit + "&emsp;por pessoa</span>");
            $("#priceSection").append("<button class='button buttonDate'>Ver datas</button>");

            var carousel = $('.carouselItems');



            $(data.image.others).each(function(i, item) {
                carousel.append("<div>" + " <img src='" + data.image.others[i].image + "'></img>" + "</div>");
            });

            carousel.slick({
                slidesToShow: 1,
                dots: true,
                arrows: true
            });

            $(".fb-comments").attr("data-href", window.location.href);
            $(".fb-comments").attr("data-width", $(".col-right").width());
        });

}

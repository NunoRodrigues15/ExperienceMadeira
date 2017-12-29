$(window).ready(
    function() {

        createExperiences();

    }
);

function createExperiences() {

    $.getJSON('http://localhost/projetoACR/ACR%20Code/mockdata/experienceDetails.json',
        function(data) {
            var experienceTitle = $("#experienceDetailsHeader");
            experienceTitle.append("<h1>" + data.header + "</h1>");

            $("#experienceAtributes").append("<ul class='atributesList fa-ul fa-2x'>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.Atributs.location + "</li>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.Atributs.level + "</li>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.Atributs.category + "</li>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.Atributs.duration + "</li>" +
                "</ul>");

            $("#experienceDescription").append("<h2>O que iremos fazer:</h2>" +
                "<p>" + data.longDescription + "</p>");

            $("#experienceRequirements").append("<h2>Observações:</h2>" +
                "<ul class=''>" +
                "<li>" + data.requirements.equipment + "</li>" +
                "<li>" + data.requirements.age + "</li>" +

                "</ul>");

            var carousel = $('.carouselItems');

            carousel.append("<div> <img src='" + data.image.cover + "'></img></div>");

            $(data.image.others).each(function(i, item) {
                carousel.append("<div> <img src='" + data.image.others[i].image + "'></img></div>");
            });

            carousel.slick({
                dots: true,
                arrows: true
            });

        });


}

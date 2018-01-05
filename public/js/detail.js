$(window).ready(
    function() {
        createExperiences();
        // myMap();

    }
);

function createExperiences() {
    var url;
    if (isNumeric(window.location.search.substring(1)))
        url = "http://experiencemadeira.jpborges.pt/public/experiences/" + window.location.search.substring(1);
    else
        url = "http://experiencemadeira.jpborges.pt/public/experiences/";
    $.getJSON(url,
        function(data) {
            data = data[0];
            var experienceTitle = $("#experienceDetailsHeader");
            experienceTitle.append("<h1 id='experienceDetailTitle'>" + data.name + "</h1>");
            experienceTitle.append("<p id='experienceShortDescr'>" + data.short_description + "</p>");

            $("#experienceAtributes").append("<ul class='atributesList fa-ul'>" +
                "<li><i class='fa-li fa fa-map-signs'></i>" + data.locations_name + "</li>" +
                "<li><i class='fa-li fa fa-line-chart'></i>" + data.level + "</li>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.categories_name + "</li>" +
                "<li><i class='fa-li fa fa-clock-o'></i>" + data.duration + "</li>" +
                "</ul>");

            $("#experienceDescription").append("<h2>O que iremos fazer:</h2>" +
                "<p>" + data.description + "</p>");

            $("#experienceRequirements").append("<h2>Observações:</h2>" +
                "<ul class='fa-ul requirementsList'>" +
                "<li><i class='fa-li fa fa-exclamation-triangle'></i>" + data.requirements_equipment + "</li>" +
                "<li><i class='fa-li fa fa-user-o'></i>" + data.requirements_age + "</li>" +
                "</ul>");

            $("#priceSection").append("<div class='price'>" + "<p>" + data.price + data.price_unit + " por pessoa</p>" + "<//div>");
            $("#priceSection").append("<div class='dateButton'> " + "<button class='button buttonPos' onclick=navigatetoCheckout('" + window.location.search.substring(1) + "')>Ver datas</button>" + "</div");

            var carousel = $('.carouselItems');
            carousel.append("<div>" + " <img src='" + data.experience_images_cover + "'></img>" + "</div>");
            carousel.append("<div>" + " <img src='" + data.experience_images_img1 + "'></img>" + "</div>");
            carousel.append("<div>" + " <img src='" + data.experience_images_img2 + "'></img>" + "</div>");
            carousel.slick({
                slidesToShow: 1,
                dots: true,
                arrows: true
            });

            myMap(data.locations_coord_x, data.locations_coord_y);

        });


    $(".fb-comments").attr("data-href", window.location.href);
    $(".fb-comments").attr("data-width", $(".col-right").width());

}

function navigatetoCheckout(id) {
    var pathname = window.location.pathname;
    var splitPath = pathname.split("/");
    var path = "";
    for (var i = 0; i < splitPath.length - 1; i++) path = path + splitPath[i] + "/";
    path = path + "checkout.html?" + id;
    window.location.href = path;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function myMap(x, y) {
    var mapOptions = {
        center: new google.maps.LatLng(x, y),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

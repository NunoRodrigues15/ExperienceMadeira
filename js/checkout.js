$(window).ready(
    function() {
        createCheckout();

    }
);

function createCheckout() {

    $.getJSON('http://localhost/projetoACR/ACR%20Code/mockdata/' + window.location.search.substring(1) + '.json',
        function(data) {
            var carousel = $('.carouselItems');

            $(data.image.others).each(function(i, item) {
                carousel.append("<div>" + " <img src='" + data.image.others[i].image + "'></img>" + "</div>");
            });

            carousel.slick({
                slidesToShow: 1,
                dots: true,
                arrows: true
            });

            var experienceTitle = $("#experienceDetailsHeader");
            experienceTitle.append("<h3 id='experienceDetailTitle'>" + data.header + "</h3>");
            experienceTitle.append("<p id='experienceShortDescr'>" + data.shortDescription + "</p>");

            $("#experienceAtributes").append("<ul class='atributesList fa-ul'>" +
                "<li><i class='fa-li fa fa-map-signs'></i>" + data.Atributs.location + "</li>" +
                "<li><i class='fa-li fa fa-line-chart'></i>" + data.Atributs.level + "</li>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.Atributs.category + "</li>" +
                "<li><i class='fa-li fa fa-clock-o'></i>" + data.Atributs.duration + "</li>" +
                "</ul>");
        });
    $.getJSON('http://localhost/projetoACR/ACR%20Code/mockdata/' + window.location.search.substring(1) + 'Availability.json',
        function(data) {
            $(".dateSelectionTitle").append("<h1> Selecione o dia a reservar: </h1>");

            var availableDates;
            $(data.availability).each(function(i, item) {
                availableDates.append(data.availability[i].date);
            });
            var $j = jQuery.noConflict();
            $j("#datepicker").datepicker({
                beforeShowDay: function(date) {
                    // check if date is in your array of dates
                    if ($.inArray(date, availableDates)) {
                        // if it is return the following.
                        return [true, 'highlightAvailableDates'];
                    } else {
                        // default
                        return [true, ''];
                    }
                }
            });
            
            $(".hourSelectionTitle").append("<h1> Selecione a hora a reservar: </h1>");


            $("#hourPicker").append("<div class=''> " + "<button class='hourButton '>" + "</button>" + "</div");
        }
    );


}

function updateHour() {
    if
}
// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.12),
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.HYBRID
//     }
//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }

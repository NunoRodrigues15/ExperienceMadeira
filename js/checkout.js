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
            var availableDates = new Array();
            $(data.availability).each(function(i, item) {
                availableDates.push(data.availability[i].date);
            });
            var $j = jQuery.noConflict();
            // Initialize datepicker
            var today = new Date();
            $j('#datepicker').datepicker({

                minDate: today,
                defaultDate: +1,
                beforeShowDay: function(date) {
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();
                    var day = date.getDate();

                    // Change format of date
                    var newdate = day + "/" + month + "/" + year;

                    // Check date in Array
                    if (jQuery.inArray(newdate, availableDates) != -1) {
                        return [true, "highlightAvailableDates"];
                    }
                    return [true];
                }
            });
            $j(".hourSelectionTitle").append("<h1> Selecione a hora a reservar: </h1>");
            var unformatedDate = $j("#datepicker").datepicker("getDate");
            var month = unformatedDate.getMonth() + 1;
            var year = unformatedDate.getFullYear();
            var day = unformatedDate.getDate();

            // Change format of date
            var selectedDate = day + "/" + month + "/" + year;

            $j(data.availability).each(function(i, item) {
                if (data.availability[i].date == selectedDate) {
                    $j(data.availability[i].time).each(function(j, item) {
                        $j("#hourPicker").append("<button class='hourButton '>" + data.availability[i].time[j].start + "</button>");
                    });
                }
            });

            $j(".nReservationSelectionTitle").append("<h1> Selecione o número de pessoas participantes: </h1>");
            $j("#nReservationPicker").append("<i class='fa fa-male iconPerson' aria-hidden='true'></i>");
            $j("#nReservationPicker").append("<input type='number' class='nReservation' min='1' max'5' value='1'>");


        });
}

// function updateHour() {
//     if
// }
// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.12),
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.HYBRID
//     }
//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }

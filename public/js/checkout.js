$(window).ready(
    function() {
        createCheckout();

    }
);
var $j = jQuery.noConflict();

function createCheckout() {

    isNumeric()

    var url = "http://experiencemadeira.jpborges.pt/public/";
    var expId;

    if (isNumeric(window.location.search.substring(1)))
        expId = window.location.search.substring(1);
    else
        expId = "1";

    var detailsUrl = url + "experiences/" + expId;
    $j.getJSON(detailsUrl,
        function(data) {
            data = data[0];

            var carousel = $j('.carouselItems');
            carousel.append("<div>" + " <img src='" + data.experience_images_cover + "'></img>" + "</div>");
            carousel.append("<div>" + " <img src='" + data.experience_images_img1 + "'></img>" + "</div>");
            carousel.append("<div>" + " <img src='" + data.experience_images_img2 + "'></img>" + "</div>");
            carousel.slick({
                slidesToShow: 1,
                dots: true,
                arrows: true
            });

            var experienceTitle = $j("#experienceDetailsHeader");
            experienceTitle.append("<h3 id='experienceCheckoutTitle'>" + data.name + "</h3>");
            experienceTitle.append("<p id='experienceCheckoutShortDescr'>" + data.short_description + "</p>");

            $j("#experienceCheckoutAtributes").append("<ul class='atributesList fa-ul'>" +
                "<li><i class='fa-li fa fa-map-signs'></i>" + data.locations_name + "</li>" +
                "<li><i class='fa-li fa fa-line-chart'></i>" + data.level + "</li>" +
                "<li><i class='fa-li fa fa-check-square'></i>" + data.categories_name + "</li>" +
                "<li><i class='fa-li fa fa-clock-o'></i>" + data.duration + "</li>" +
                "</ul>");

            $j(".dateSelectionTitle").append("<h1> Selecione o dia a reservar: </h1>");
            var availableDates = getDates(new Date(data.start_date), (new Date(data.end_date)));
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

            $j(".checkoutSelectionTitle").append("<h1> Reserve já o seu pedido: </h1>");
            $j("#checkoutPicker").append("<h3>" + data.price * ($j("#quantity").val()) + data.price_unit + "</h3>");
            $j("#checkoutPicker").append("<button class='checkoutButton' onclick='confirmCheckout()'>" + "Reserve já" + "</button>");

            $j(".nReservationSelectionTitle").append("<h1> Selecione o número de pessoas participantes: </h1>");
            $j("#nReservationPicker").append("<i class='fa fa-male iconPerson' aria-hidden='true'></i>");
            $j("#nReservationPicker").append("<input type='number' id='quantity' class='nReservation' min='1' max'" + data.max_people + "' value='1'>");
        });


    var timeUrl = url + "time_schedules/" + expId;
    $j.getJSON(timeUrl,
        function(data) {
            $j(".hourSelectionTitle").append("<h1> Selecione a hora a reservar: </h1>");
            $j(data).each(function(j, item) {
                $j("#hourPicker").append("<button class='hourButton'>" + "<input type='radio' class='radioHour' id='button_" + data[j].id + "' value='" + data[j].start_time + "'>" +
                    data[j].start_time + "</button>");
            });

            $j("#button_0").attr("checked", "checked");


        });
}

function confirmCheckout() {
    var modal = document.getElementById('confirmModal');
    var span = document.getElementsByClassName("close")[0];
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        modal.style.display = "block";
    }
    var selectedDay = $j("#datepicker").datepicker("getDate");
    var month = selectedDay.getMonth() + 1;
    var year = selectedDay.getFullYear();
    var day = selectedDay.getDate();

    // Change format of date
    var selectedDate = day + "/" + month + "/" + year;
    var stringReserveDate = "Efetuou a sua Reserva para a data de "
    document.getElementById("reserveDate").innerHTML = stringReserveDate + selectedDate;
    var hour = document.getElementsByClassName('radioHour');
    var selectedHour;
    for (var i = 0; i < hour.length; i++) {
        if (hour[i].checked) {
            selectedHour = hour[i].value;
        }
    }
    var stringReserveHour = "Às "
    document.getElementById("reserveHour").innerHTML = stringReserveHour + selectedHour;
    var info = "O seu pagamento deverá ser efetuado no próprio local"
    var info2 = "Tenha uma aventura fantástica. Obrigada pela sua escolha!"
    document.getElementById("infoReservation").innerHTML = info;
    document.getElementById("infoReservation2").innerHTML = info2;

}

function redirect() {
    var pathname = window.location.pathname;
    var splitPath = pathname.split("/");
    var path = "";
    for (var i = 0; i < splitPath.length - 1; i++) path = path + splitPath[i] + "/";
    path = path + "index.html?";
    window.location.href = path;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}









function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate.toISOString().split('T')[0])
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}
Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

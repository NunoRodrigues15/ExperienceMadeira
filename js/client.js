$(window).ready(
    function() {
        createExperiences();
    }
);

function createExperiences() {
 $.getJSON('/Users/marianarodrigues/Desktop/ACR Code/mockdata/experiencDetails.json',
    function(data){
        var experienceTitle = $("#experienceDetailsHeader");
        experienceTitle.empty();
        experienceTitle.append("<h1>" + data.header + "</h1>");
    });


}

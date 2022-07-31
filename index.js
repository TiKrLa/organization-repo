$(document).ready(function () {
  $(".dropdown-menu a").on("click", function () {
    const selText = $(this).text();
    $("#display")
      .removeClass("none")
      .html("<p>" + selText + "</p>");
    if (selText == "Get All Repo") {
      $("#display").getAll();
    }
  });
})

$.fn.getAll = function () {
  $.getJSON("https://api.github.com/organizations", function (data) {
    $("#display").append("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
  });
};


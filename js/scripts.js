$(document).ready(function() {

  $("form").submit(function(event) {
  event.preventDefault();
    var quest1 = $("#q1").val().toLowerCase();
    var quest2 = $("#q2").val().toLowerCase();
    var quest3 = $("#q3").val().toLowerCase();
    var quest4 = $("#q4").val().toLowerCase();
    var quest5 = $("#q5").val().toLowerCase();

    if (quest1 === "yes" && quest2 === "no" && quest3 === "no" && quest4 === "no" && quest5 === "no") {
      $(".php, .java, .css, .csharp, .notsure").hide();
      $(".ruby").show();
    } else if (quest1 === "no" && quest2 === "yes" && quest3 === "no" && quest4 === "no" && quest5 === "no") {
      $(".ruby, .java, .css, .csharp, .notsure").hide();
      $(".php").show();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "yes" && quest4 === "no" && quest5 === "no") {
      $(".php, .ruby, .css, .csharp, .notsure").hide();
      $(".java").show();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "no" && quest4 === "yes" && quest5 === "no") {
      $(".php, .java, .ruby, .csharp, .notsure").hide();
      $(".css").show();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "no" && quest4 === "no" && quest5 === "yes") {
      $(".php, .java, .css, .ruby, .notsure").hide();
      $(".csharp").show();
    } else {
      $(".php, .java, .css, .csharp, .ruby").hide();
      $(".notsure").show();
    }

  });
});

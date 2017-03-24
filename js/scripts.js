$(document).ready(function() {

  $("form").submit(function(event) {
  event.preventDefault();
    var quest1 = $("#q1").val().toLowerCase();
    var quest2 = $("#q2").val().toLowerCase();
    var quest3 = $("#q3").val().toLowerCase();
    var quest4 = $("#q4").val().toLowerCase();
    var quest5 = $("#q5").val().toLowerCase();
    var nameInput = $("input#name").val();

    if (quest1 === "yes" && quest2 === "no" && quest3 === "no" && quest4 === "no" && quest5 === "no") {
      $(".php, .java, .css, .csharp, .notsure").hide();
      $(".ruby").fadeIn();
    } else if (quest1 === "no" && quest2 === "yes" && quest3 === "no" && quest4 === "no" && quest5 === "no") {
      $(".ruby, .java, .css, .csharp, .notsure").hide();
      $(".php").fadeIn();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "yes" && quest4 === "no" && quest5 === "no") {
      $(".php, .ruby, .css, .csharp, .notsure").hide();
      $(".java").fadeIn();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "no" && quest4 === "yes" && quest5 === "no") {
      $(".php, .java, .ruby, .csharp, .notsure").hide();
      $(".css").fadeIn();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "no" && quest4 === "no" && quest5 === "yes") {
      $(".php, .java, .css, .ruby, .notsure").hide();
      $(".csharp").fadeIn();
    } else {
      $(".php, .java, .css, .csharp, .ruby").hide();
      $(".notsure").fadeIn();
    }
      $(".name").text(nameInput);

    });
  });

//   $("#form2").submit(function(event) {
//   event.preventDefault();
//     var nameInput = $("input#name").val();
//
//     $(".name").text(nameInput);
//
// });

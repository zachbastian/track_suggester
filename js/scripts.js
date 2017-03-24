$(document).ready(function() {

  $("form").submit(function(event) {
  event.preventDefault();
    var question1 = $("#q1").val();
    var question2 = $("#q2").val();
    var question3 = $("#q3").val();
    var question4 = $("#q4").val();
    var question5 = $("#q5").val();


if (question1 === "yes") {
  $(".ruby").show();
} else if (question2 === "yes") {
  $(".php").show();
} else if (question3 === "yes") {
  $(".java").show();
} else if (question4 === "yes") {
  $(".css").show();
} else if (question5 === "yes") {
  $(".csharp").show();
} else {
  $(".notsure").show();
}

});

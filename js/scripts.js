$(function() {

  $("form").submit(function(event) {
  event.preventDefault();
var question1 = $("#q1").val();
var question2 = $("#q2").val();
var question3 = $("#q3").val();
var question4 = $("#q4").val();
var question5 = $("#q5").val();


if (logic) {
  $(".ruby").show();
} else if (logic) {
  $(".php").show();
} else if (logic) {
  $(".java").show();
} else if (logic) {
  $(".css").show();
} else if (logic) {
  $(".csharp").show();
} else {
  $(".error").show();
}

});

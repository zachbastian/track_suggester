$(document).ready(function() {

  $("form").submit(function(event) {
  event.preventDefault();
    var quest1 = $("#q1").val().toLowerCase();
    var quest2 = $("#q2").val().toLowerCase();
    var quest3 = $("#q3").val().toLowerCase();
    var quest4 = $("#q4").val().toLowerCase();
    var quest5 = $("#q5").val().toLowerCase();
    var nameInput = $("input#name").val();

    if (quest1 === "yes" && quest2 === "no" && quest3 === "no" && quest4 === "no" && quest5 === "no" || quest1 === "maybe" && quest3 === "maybe") {
      $(".php, .java, .css, .csharp, .notsure").hide();
      $(".ruby").fadeIn();
    } else if (quest1 === "no" && quest2 === "yes" && quest3 === "no" && quest4 === "no" && quest5 === "no" || quest2 === "maybe" && quest5 === "maybe") {
      $(".ruby, .java, .css, .csharp, .notsure").hide();
      $(".php").fadeIn();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "yes" && quest4 === "no" && quest5 === "no" || quest3 === "maybe" && quest4 === "maybe") {
      $(".php, .ruby, .css, .csharp, .notsure").hide();
      $(".java").fadeIn();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "no" && quest4 === "yes" && quest5 === "no" || quest4 === "maybe" && quest1 === "maybe") {
      $(".php, .java, .ruby, .csharp, .notsure").hide();
      $(".css").fadeIn();
    } else if (quest1 === "no" && quest2 === "no" && quest3 === "no" && quest4 === "no" && quest5 === "yes" || quest5 === "maybe" && quest2 === "maybe") {
      $(".php, .java, .css, .ruby, .notsure").hide();
      $(".csharp").fadeIn();
    } else {
      $(".php, .java, .css, .csharp, .ruby").hide();
      $(".notsure").fadeIn();
    }
      $(".name").text(nameInput);
    });

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }




  });

$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  $("form").submit(function(event){
  //   2- prevent the default action for that event from happening
    event.preventDefault();

  //   4- use jQuery to submit an AJAX post to the form's acti
  //   3- generate a random number between 1 and 6 using JavaScript
    $.post( "/rolls", $("form").serialize(), function(data){
  // //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
      $("img").attr("src", data + ".png");
      $("img").attr("title", data + ".png");
    });
  });
});//END

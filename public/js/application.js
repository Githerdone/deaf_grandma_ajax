$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  //#inputform is the id I assigned to the form.
  //.submit is the input type field of the sheet.
  //event is a random variable like do |i|
$('#inputForm').submit(function(event) {
  //event variable which is the submit event
  // for the #inputform is held by 
  //preventDefault below
  event.preventDefault();
  
  //the #input_type form user_input is assigned 
  // to a variable and made into a string by using
  //.serialize.  Otherwise javascript would just
  /// see "#input_type" as a string and print it out
  // like #input_type in the console.
  var requestData = $("#input_type").serialize();
  // Here is ajax request.  .post runs a background
  // worker to the route /grandma and also
  // sends data of the above varialbe requestData.
  var request = $.post("/grandma", requestData);
  // now the request variable is asked if .done
  // then process the following block with 
  // the returned responseData like do |i| again
  //
  request.done(function(responseData) {
    $("#grandma_says").text(responseData);
    // the html tag id "#grandma_says"
    // is then asked to receive and place .text
    // in the form of variable data.
  });  
});
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});









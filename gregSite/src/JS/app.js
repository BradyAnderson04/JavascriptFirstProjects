
$(document).ready(function(){
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbz3k7hQo9dQXgZpJ8gijR9VqNxuBdudiR2f58YKiz4PNaIGA0lL/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
});
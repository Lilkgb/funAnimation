import $ from 'jquery';

$("document").ready(function() {
  $(".push").click(function(event) {
    event.preventDefault();
    $(".information").toggle();
  });
});

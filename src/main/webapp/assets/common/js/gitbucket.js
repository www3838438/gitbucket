$(function(){
  $.ajaxSetup({ cache: false });

  $('#repository-url').click(function(){
    this.select(0, this.value.length); 
  });

  $('img[data-toggle=tooltip]').tooltip();

  prettyPrint();
});

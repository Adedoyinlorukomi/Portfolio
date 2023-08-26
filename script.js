
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

    
// $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
// window.on('load', function(){
//   setTimeout(removeLoader, 200); //wait for page load PLUS two seconds.
// });
// function removeLoader(){
//     $( "#loadingDiv" ).fadeOut(500, function() {
//       // fadeOut complete. Remove the loading div
//       $( "#loadingDiv" ).remove(); //makes page more lightweight 
//   });  
// }
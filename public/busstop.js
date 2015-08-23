// Now start the code when the document is loaded and ready
$( document ).ready(function() {
// First to pick up the desired bus from the user input
busSelected = document.getElementById("usr").value;
console.log("and the selected bus is " + busSelected);
console.log( "ready!" );
$( "#clickBus1" ).click(function() {
  console.log("Handler for busSelected.click() called." );
  busSelected = document.getElementById("usr").value;
  console.log("Bus selected is "+busSelected);
  busUrl="https://api.tfl.gov.uk/line/"+busSelected+"/arrivals";
  console.log("and URL is",busUrl);
  $.getJSON(busUrl, function(data){
    console.log("ran the ajax function");
    console.log (data);
    for (i=0; i<data.length; i++) {
     $("#station").append('<div class="row"><div class="col-sm-3"><div class="form-group"><p>'+data[i].stationName+'</p></div></div><div class="col-sm-2"><div class="form-group"><p>'+data[i].vehicleId+'</p></div></div><div class="col-sm-4"><div class="form-group"><p>'+data[i].towards+'</p></div></div><div class="col-sm-2"><div class="form-group"><p>'+data[i].timeToStation+'</p></div></div>     </div>');
   }
 });





});








});









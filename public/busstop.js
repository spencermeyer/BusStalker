// Now start the code when the document is loaded and ready
$( document ).ready(function() {
// First to pick up the desired bus from the user input
busSelected = document.getElementById("usr").value;
console.log("and the selected bus is " + busSelected);
console.log( "ready!" );
busStopsArray=[];

$( "#clickBus1" ).click(function() {
  console.log("Handler for busSelected.click() called." );
  busSelected = document.getElementById("usr").value;
  console.log("Bus selected is "+busSelected);
  busUrl="https://api.tfl.gov.uk/line/"+busSelected+"/arrivals";
  console.log("and URL is",busUrl);

  $.getJSON(busUrl, function(data){
    console.log("ran the ajax function");
    // console.log (data);

    // Here I create the string of html for appending as an option list
    // using the station names in data from TFL then append it and 
    // ajax it into the view.
    appendHtmlString='<select id="stationName">'
    for (i=0; i<data.length; i++) {
      if(($.inArray(data[i].stationName, busStopsArray))>0){
        // console.log("not adding");
      }else{
        busStopsArray.push(data[i].stationName);
        appendHtmlString = appendHtmlString + '<option value="'+data[i].stationName + '">' + data[i].stationName + '</option>';
      }
    }
    appendHtmlString = appendHtmlString + '</select>'
    $("#station").append(appendHtmlString);

    for (i=0; i<data.length; i++) {
      $("#station").append('<div class="row"><div class="col-sm-3"><div class="form-group"><p>'+data[i].stationName+'</p></div></div><div class="col-sm-2"><div class="form-group"><p>'+data[i].vehicleId+'</p></div></div><div class="col-sm-4"><div class="form-group"><p>'+data[i].towards+'</p></div></div><div class="col-sm-2"><div class="form-group"><p>'+data[i].timeToStation+'</p></div></div>     </div>');
    }
  });

  


});

// Now trying to attach an event listener to the new drop down box
$('#stationName').on('change', function() {
  console.log("select box change detect" ); // this.value or $(this).val()
});



});









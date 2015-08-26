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
    // console.log("ran the ajax function");
    // console.log (data);

    // Here I create the string of html for appending as an option list
    // using the station names in data from TFL then append it and 
    // ajax it into the view.
    appendHtmlString='<select id="stationSelector">'
    for (i=0; i<data.length; i++) {
      if(($.inArray(data[i].towards, busStopsArray))>0){
        // console.log("not adding");
      }else{
        busStopsArray.push(data[i].towards);
        appendHtmlString = appendHtmlString + '<option value="'+data[i].towards + '">' + data[i].towards + '</option>';
      }
    }
    appendHtmlString = appendHtmlString + '</select>'
    $("#station").append(appendHtmlString);


      // Now attach an event listener to the new drop down box
      $('#stationSelector').on('change', function() {
        console.log("select box change detect" );
        myStation = this.value;
        // AJAX in the table title
        $("#station").append('<div class="row"><div class="col-sm-3"><div class="form-group"><p><b>StationName</p></div></div><div class="col-sm-2"><div class="form-group"><p>VehicleId</p></div></div><div class="col-sm-4"><div class="form-group"><p>Towards</p></div></div><div class="col-sm-2"><div class="form-group"><p>Time To Station (mins)</b></p></div></div>     </div>');

        // now to customise the AJAX of the busstops for a specific stop
        //  *** here want to customise **

        // writing this in git branch sort
        console.log(data);
        var dat = eval(data);

        data.sort(function(a,b){
          if(a.attributes.timeToStation == b.attributes.timeToStation)
            return 0;
          if(a.attributes.timeToStation < b.attributes.timeToStation)
            return -1;
          if(a.attributes.timeToStation < b.attributes.timeToStation)
            return 1;
        });
        // console.log(data);


        for (i=0; i<data.length; i++) {
          if(data[i].towards == myStation){
            $("#station").append('<div class="row"><div class="col-sm-3"><div class="form-group"><p>'+data[i].stationName+'</p></div></div><div class="col-sm-2"><div class="form-group"><p>'+data[i].vehicleId+'</p></div></div><div class="col-sm-4"><div class="form-group"><p>'+data[i].towards+'</p></div></div><div class="col-sm-2"><div class="form-group"><p>'+parseInt((data[i].timeToStation)/60)+'</p></div></div>     </div>');
            }
        }
        // the end of the selector box listener is here.
      });
    //the end of the click handler is here.
  });

});

});









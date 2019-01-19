//GPS INFO
ON('load-record', function(event) {
  var updateLocationInfo = function() {
    // get the current device location
    var location = CURRENTLOCATION();

    // if there is no location, display a special message
    if (!location) {
      SETLABEL('gps_info', 'No Location Available');
      return;
    }

    // format the display of the location data
    var message = [
      //'Latitude: ' + location.latitude,
      //'Longitude: ' + location.longitude,
      'Accuracy: ' + location.accuracy+ ' m',
      //'Altitude: ' + location.altitude,
      //'Course: ' + location.course,
      //'Speed: ' + location.speed,
      //'Time: ' + new Date(location.timestamp * 1000).toLocaleString()
    ].join('\n');

    // set the label property of the label on the form
    SETLABEL('gps_info', message);
  };

  // go ahead and update it now...
  updateLocationInfo();

  // ... and every 3 seconds
  SETINTERVAL(updateLocationInfo, 3000);
// The latitude and longitude of the record
 }
  
  );
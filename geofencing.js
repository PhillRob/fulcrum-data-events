function validateLocation() 
  {
  lat = LATITUDE();
  lng = LONGITUDE();
  var location = CURRENTLOCATION();
    if (!location) 
    {
      ALERT('No Location Available');
      return;
    }
  var buffer = 0.000300
  var latitude = location.latitude;
  var longitude = location.longitude;
  var minLatitude = lat - buffer;
  var maxLatitude = lat + buffer;
  var minLongitude = lng - buffer;
  var maxLongitude = lng + buffer;

  if (!(latitude <= maxLatitude && latitude >= minLatitude && longitude <= maxLongitude && longitude >= minLongitude)) {
    INVALID("It looks like you are not close to the tree to make changes.");
    SETSTATUSREADONLY(true);
  }
}

ON('validate-record', validateLocation);
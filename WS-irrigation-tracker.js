var config = {
  //auto_sync_enabled: true,
  //auto_location_enabled: false,
  auto_location_minimum_accuracy: 20,
  //manual_location_enabled: true,
  //media_gallery_enabled: false
  //media_capture_enabled: true,
  //photo_quality: '2048',
  //video_quality: '720p',
  drafts_enabled: false,
  edit_locations_enabled: false
  //edit_durations_enabled: true
  };

SETFORMATTRIBUTES(config);

// roles
var supervisor = ['[BP] Inspector','Owner'];
var watertruck = ['[AMN][WS] Truck'];


ON('validate-record', function(event) {

  // if current role is inspector
  if (ISROLE(watertruck)) {

    // set fields to read-only
    var fieldArray = ['species','transplanting_yearc','height_m','spread_m','health','structure_','comments','photos']
    fieldArray.forEach(function(dataName) 
    {
      SETREADONLY(dataName, true);
    })

    //validate loaction
        lat = LATITUDE();
        lng = LONGITUDE();
        var location = CURRENTLOCATION();
        if (!location) 
        
          {
          //ALERT('No Location Available');
          return;
          }
        var latitude = location.latitude;
        var longitude = location.longitude;
        var minLatitude = lat - 0.000300;
        var maxLatitude = lat + 0.000300;
        var minLongitude = lng - 0.000300;
        var maxLongitude = lng + 0.000300;
        
        if (!(latitude <= maxLatitude && latitude >= minLatitude && longitude <= maxLongitude && longitude >= minLongitude)) 
          {
            INVALID("It looks like you are not close enough to the issue to make changes. - لست بقرب الموقع لإضافة ملاحظة");
          }
     };


  // if the current role is admin
  if (ISROLE(supervisor)) {
    // Do nothing
    } 

});


ON('edit-record', function(event) {

  // if current role is inspector
  if (ISROLE(watertruck)) {
    // set fields to read-only
    var fieldArray = ['species','transplanting_yearc','height_m','spread_m','health','structure_','comments','photos']
    fieldArray.forEach(function(dataName) 
    {
    SETREADONLY(dataName, true);
    })
  };


  // if the current role is admin
  if (ISROLE(supervisor)) {
    // Do nothing
    }
  });


ON('new-record', function(event) {

  // if current role is inspector
  if (ISROLE(watertruck)) {
    // set fields to read-only
    
    var fieldArray = ['species','transplanting_yearc','height_m','spread_m','health','structure_','comments','photos']
    fieldArray.forEach(function(dataName) 
      { 
        SETREADONLY(dataName, true);
      })
    INVALID('Sorry! You are not allowed to create records in this app.');
    };


  // if the current role is admin
  if (ISROLE(supervisor)) 
    {
    // Do nothing
    }
});

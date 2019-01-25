  var adminRoles = ['Owner','[BP] Inspector'];
  var contractorRoles = ['[CON][WS] Tree Inspector','[CON][WS] Inspector'];
  var managementRoles = ['[AMN][WS] Site Office'];


ON('new-record', function(event) {

  if (ISROLE(managementRoles)) {
      // set fields to read-only
      var fieldArray = [ 'species', 'transplanting_yearc','height_m','spread_m','health','structure_','comments','photos','ID','date_of_boxing','date_of_planting']
      fieldArray.forEach(function(dataName) {
        SETREADONLY(dataName, true);
    });

    SETSTATUSHIDDEN(true)
    INVALID('Sorry! You are not allowed to create records in this app.');
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: false,
      //auto_location_minimum_accuracy: 20,
      manual_location_enabled: false
      //media_gallery_enabled: false
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      //drafts_enabled: false,
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
    };

    SETFORMATTRIBUTES(config);
  };

  if (ISROLE(contractorRoles)) {
    // set fields to read-only
    var fieldArray = [ 'species', 'transplanting_yearc','height_m','spread_m','health','structure_','comments','photos','ID']
    fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, false);
      });

    //SETSTATUSHIDDEN(true)
    SETSTATUSFILTER(['Surveyed','Box transplanted','Transplanted - original location']);
    INVALID('Sorry! You are not allowed to create records in this app.');
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: false,
      //auto_location_minimum_accuracy: 20,
      manual_location_enabled: false
      //media_gallery_enabled: false
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      //drafts_enabled: false,
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
    };
    SETFORMATTRIBUTES(config);
  };


  if (ISROLE(adminRoles)) 
  {
  //do nothing
  }
});


ON('edit-record', function(event) {

  if (ISROLE(managementRoles)) {
    // set fields to read-only
    var fieldArray = [ 'species', 'transplanting_yearc','height_m','spread_m','health','structure_','comments','photos','ID','date_of_boxing','date_of_planting']
    fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
    SETSTATUSHIDDEN(true)
    INVALID('Sorry! You are not allowed to edit records in this app.');
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: false,
      //auto_location_minimum_accuracy: 20,
      manual_location_enabled: false
      //media_gallery_enabled: false
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      //drafts_enabled: false,
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
    };
    SETFORMATTRIBUTES(config);
  };
  
if (ISROLE(contractorRoles)) {
  // set fields to read-only
  var fieldArray = [ 'species', 'transplanting_yearc','height_m','spread_m','health','structure_','comments','photos','ID']
    fieldArray.forEach(function(dataName) 
    {
      SETREADONLY(dataName, true);
    });
    //SETSTATUSHIDDEN(true)
    //SETSTATUSFILTER(['Surveyed','Box transplanted','Transplanted - original location']);
    SETSTATUSHIDDEN(true)
    INVALID('Sorry! You are not allowed to edit records in this app.');
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: false,
      //auto_location_minimum_accuracy: 20,
      manual_location_enabled: false
      //media_gallery_enabled: false
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      //drafts_enabled: false,
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
    };
  SETFORMATTRIBUTES(config);
  };

if (ISROLE(adminRoles)) {
  //do nothing
  }
});


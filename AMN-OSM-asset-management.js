      var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      auto_location_minimum_accuracy: 20,
      //manual_location_enabled: false,
      //media_gallery_enabled: false,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      drafts_enabled: false
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
      };
      SETFORMATTRIBUTES(config);

///[ADA] Site Inspector is used for AMN too
//allow user [ADA] Site Inspector to NOT create records
ON('new-record', function(event) {
  var adminRoles = ['Inspector','Owner','[AMN][OS] admin'];
    var rangerRoles = ['[AMN] Inspector','[ADA] Site Inspector','[AMN] [OS] Contractor Inspector'];
  
  // if current role is not admin, inspector but [ADA] Site
  if (rangerRoles.indexOf(ROLE()) !== -1) 
    {
      // ranger fields
      var fieldArray = [ 'os_name_text','photos','photos_caption','photos_url','videos','videos_caption','videos_url','os_name','os_name_other','secret_os_name','os_name_2','start_digitizing','stop_digitizing','line','os_class','os_type','os_type_other','area_m2','lu','lu_other','ser_all','object_id','district','district_other','sub_municipality','sub_municipality_other','walkway','walkway_m2','asphalt','asphalt_m2','paving','paving_m2','gravel','gravel_m2','sand','sand_m2','wall_m','curbstone_m','dam','bridge','toilet','shade','guard_room','office','mosque','fence_m','light_pole','light_bollard','underwater','traffic','information','fountain','channel','lake','irrigation_type','irrigation_type_other','irrigation_former','electric','greywater','drinking_water','culvert','manhole','septic_tank','pump_station','borehole','tree','lost_tree','shrub','ground_cover','lawn','hedge_m','date_palm','washingtonia','lost_palm','dustbin','bench','single_playground','multi_playground','playground_total','football_field','field_length','field_width','comments','surveyor','length_m']
      fieldArray.forEach(function(dataName) 
      {
      SETHIDDEN(dataName, true);
      SETSTATUSHIDDEN(true);
      });
      var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      auto_location_minimum_accuracy: 20,
      manual_location_enabled: false,
      media_gallery_enabled: false,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      drafts_enabled: false
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
      };
      SETFORMATTRIBUTES(config);

      //waring popups
      ALERT('Sorry!', 'You cannot create a record in this app. ');
      INVALID('Sorry! You are not allowed to create records in this app.');
    }
  
    // if the current role is one of the designated admin roles...
    if (adminRoles.indexOf(ROLE()) !== -1) 
    {
      SETSTATUSFILTER(['Not inspected','Planning','On Hold','Design','Construction','Completed']);
      // The rough bounds of Riyadh
      var minLatitude = 23.700;
      var maxLatitude = 25.700;
      var minLongitude = 45.600;
      var maxLongitude = 47.900;

      // The latitude and longitude of the record
      lat = LATITUDE();
      lng = LONGITUDE();

      //make sure that the record is in Riyadh
      if (!(lat <= maxLatitude && lat >= minLatitude && lng <= maxLongitude && lng >= minLongitude)) {
        INVALID("It looks like this record isn't within the Municipality of Riyadh. Please adjust the record's location to be within Colorado.");
      }
    }
});

//allow [ADA] Site Inspector to NOT change anything
ON('validate-record', function(event) 
   {
  var adminRoles = ['Inspector','Owner','[AMN][OS] admin'];
    var rangerRoles = ['[AMN] Inspector','[ADA] Site Inspector','[AMN] [OS] Contractor Inspector'];
  
  // if current role is not admin, inspector but [ADA] Management
  if (rangerRoles.indexOf(ROLE()) !== -1) {
      // ranger fields
      var fieldArray = [ 'os_name_text','photos','photos_caption','photos_url','videos','videos_caption','videos_url','os_name','os_name_other','secret_os_name','os_name_2','start_digitizing','stop_digitizing','line','os_class','os_type','os_type_other','area_m2','lu','lu_other','ser_all','object_id','district','district_other','sub_municipality','sub_municipality_other','walkway','walkway_m2','asphalt','asphalt_m2','paving','paving_m2','gravel','gravel_m2','sand','sand_m2','wall_m','curbstone_m','dam','bridge','toilet','shade','guard_room','office','mosque','fence_m','light_pole','light_bollard','underwater','traffic','information','fountain','channel','lake','irrigation_type','irrigation_type_other','irrigation_former','electric','greywater','drinking_water','culvert','manhole','septic_tank','pump_station','borehole','tree','lost_tree','shrub','ground_cover','lawn','hedge_m','date_palm','washingtonia','lost_palm','dustbin','bench','single_playground','multi_playground','playground_total','football_field','field_length','field_width','comments','surveyor','length_m']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
      //SETSTATUSHIDDEN(true);
     SETSTATUSFILTER(['Completed','Not inspected']);
      var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      auto_location_minimum_accuracy: 20,
      manual_location_enabled: false,
      media_gallery_enabled: false,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      drafts_enabled: false
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
      };
      SETFORMATTRIBUTES(config);
    //Warning popups
      //ALERT('Sorry!', 'You only change the status!');
      INVALID('Sorry! You are not allowed to make changes here.');
      
}
  // if the current role is one of the designated admin roles...
  if (adminRoles.indexOf(ROLE()) !== -1) 
    {

    SETSTATUSFILTER(['Not inspected','Planning','On Hold','Design','Construction','Completed']);
    // The rough bounds of Riyadh
    var minLatitude = 23.700;
    var maxLatitude = 25.700;
    var minLongitude = 45.600;
    var maxLongitude = 47.900;

    // The latitude and longitude of the record
    lat = LATITUDE();
    lng = LONGITUDE();

    if (!(lat <= maxLatitude && lat >= minLatitude && lng <= maxLongitude && lng >= minLongitude)) {
      INVALID("It looks like this record isn't within the Municipality of Riyadh. Please adjust the record's location to be within Colorado.");
    }
  }
});


//allow [ADA] Site Inspector to not make any changes
ON('edit-record', function(event) 
   {
  var adminRoles = ['Inspector','Owner','[AMN][OS] admin'];
    var rangerRoles = ['[AMN] Inspector','[ADA] Site Inspector','[AMN] [OS] Contractor Inspector'];
  
  // if current role is not admin, inspector but [ADA] Management
  if (rangerRoles.indexOf(ROLE()) !== -1) {
      // ranger fields
      var fieldArray = [ 'os_name_text','photos','photos_caption','photos_url','videos','videos_caption','videos_url','os_name','os_name_other','secret_os_name','os_name_2','start_digitizing','stop_digitizing','line','os_class','os_type','os_type_other','area_m2','lu','lu_other','ser_all','object_id','district','district_other','sub_municipality','sub_municipality_other','walkway','walkway_m2','asphalt','asphalt_m2','paving','paving_m2','gravel','gravel_m2','sand','sand_m2','wall_m','curbstone_m','dam','bridge','toilet','shade','guard_room','office','mosque','fence_m','light_pole','light_bollard','underwater','traffic','information','fountain','channel','lake','irrigation_type','irrigation_type_other','irrigation_former','electric','greywater','drinking_water','culvert','manhole','septic_tank','pump_station','borehole','tree','lost_tree','shrub','ground_cover','lawn','hedge_m','date_palm','washingtonia','lost_palm','dustbin','bench','single_playground','multi_playground','playground_total','football_field','field_length','field_width','comments','surveyor','length_m']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
      //SETSTATUSHIDDEN(true);
    SETSTATUSFILTER(['Completed','Not inspected']);
      var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      auto_location_minimum_accuracy: 20,
      manual_location_enabled: false,
      //media_gallery_enabled: false,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      drafts_enabled: false
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
      };
      SETFORMATTRIBUTES(config);
    
	
      //ALERT('Sorry!', 'You only change the status!');
      INVALID('Sorry! You are not allowed to make any changes here.');
      }
  // if the current role is one of the designated admin roles...
  if (adminRoles.indexOf(ROLE()) !== -1) 
    {

    SETSTATUSFILTER(['Completed','Not inspected','Planning','On Hold','Design','Construction']);
    // The rough bounds of Riyadh
    var minLatitude = 23.700;
    var maxLatitude = 25.700;
    var minLongitude = 45.600;
    var maxLongitude = 47.900;

    // The latitude and longitude of the record
    lat = LATITUDE();
    lng = LONGITUDE();

    if (!(lat <= maxLatitude && lat >= minLatitude && lng <= maxLongitude && lng >= minLongitude)) {
      INVALID("It looks like this record isn't within the Municipality of Riyadh. Please adjust the record's location to be within Colorado.");
    }
  }
});
var config = {
  //auto_sync_enabled: true,
  //auto_location_enabled: true,
  auto_location_minimum_accuracy: 20
  //manual_location_enabled: false,
  //media_gallery_enabled: false,
  //media_capture_enabled: true,
  //photo_quality: '2048',
  //video_quality: '720p',
  //drafts_enabled: false,
  //edit_locations_enabled: true,
  //edit_durations_enabled: true
  };
SETFORMATTRIBUTES(config);

// Action required Re-inspection required, Request for approval, Completed, On Hold

var admin = ['[BP] Inspector','Owner'];
var inspector = ['[ADA] Site Office'];
var contractor = ['[ADA] Site Inspector'];


//allow user [ADA] Site Inspector to NOT create record
ON('new-record', function(event) {
 	//var adminRoles = ['Inspector','Owner'];
  //var rangerRoles = ['[ADA] Site Inspector'];
  
	// if current role is not contractor
	if (ISROLE(contractor)) {
    // ranger fields
		//SETHIDDEN('km', true);
  	//SETHIDDEN('tree_no', true);
   	//SETHIDDEN('status', true);
    //SETHIDDEN('species', true);
    //SETHIDDEN('planted_tree', true);
    //SETHIDDEN('height_m', true);
  	//SETHIDDEN('spread_m', true);
  	//SETHIDDEN('height_m', true);
  	//SETHIDDEN('dbh_cm', true);
		//SETHIDDEN('health',true);
    //SETHIDDEN('indicator',true);
		//SETHIDDEN('health_re_inspection',true);
    //SETHIDDEN('irrigation_present',true);
  	//SETHIDDEN('structure',true);
  	SETSTATUSFILTER(['Re-inspection required']);
  	//SETHIDDEN('impact_of_ground_water',true);
   	//SETHIDDEN('maintenance_action',true);
    //SETHIDDEN('comments',true);
		//SETHIDDEN('photos', true);

		ALERT('Sorry!', 'You cannot create a record in this app. ');
    INVALID('Sorry! You are not allowed to create records in this app.');

   };

  if (ISROLE(inspector)) {
    // ranger fields
    //SETHIDDEN('km', true);
    //SETHIDDEN('tree_no', true);
    //SETHIDDEN('status', true);
    //SETHIDDEN('species', true);
    //SETHIDDEN('planted_tree', true);
    //SETHIDDEN('height_m', true);
    //SETHIDDEN('spread_m', true);
    //SETHIDDEN('height_m', true);
    //SETHIDDEN('dbh_cm', true);
    //SETHIDDEN('health',true);
    //SETHIDDEN('indicator',true);
    //SETHIDDEN('health_re_inspection',true);
    //SETHIDDEN('irrigation_present',true);
    //SETHIDDEN('structure',true);
    SETSTATUSFILTER(['Re-inspection required']);
    //SETHIDDEN('impact_of_ground_water',true);
    //SETHIDDEN('maintenance_action',true);
    //SETHIDDEN('comments',true);
    //SETHIDDEN('photos', true);

    ALERT('Sorry!', 'You cannot create a record in this app. ');
    INVALID('Sorry! You are not allowed to create records in this app.');

   };

  if (ISROLE(admin)) {
	   //do nothing
  	};
});


//allow [ADA] Site Inspector to only change status to orange if near record location
ON('validate-record', function(event) {

	// if current role is not admin, inspector but [ADA] Management

	if (ISROLE(contractor)) {
    // ranger fields
		//SETREADONLY('km', true);
  	//SETREADONLY('tree_no', true);
   	//SETREADONLY('status', true);
    //SETREADONLY('species', true);
    //SETREADONLY('planted_tree', true);
    //SETREADONLY('height_m', true);
  	//SETREADONLY('spread_m', true);
  	//SETREADONLY('height_m', true);
  	//SETREADONLY('dbh_cm', true);
  	//SETREADONLY('dbh2_cm', true);
  	//SETREADONLY('health_re_inspection',true);
		//SETREADONLY('health',true);
    //SETREADONLY('indicator',true);
   	//SETREADONLY('dbh_2_cm', true);
  	//SETREADONLY('dbh_3_cm', true);
    //SETREADONLY('structure',true);
  	//SETSTATUSHIDDEN(true);
  	//SETREADONLY('impact_of_ground_water',true);
  	//SETREADONLY('maintenance_action',true);
    //SETREADONLY('maintenance_required',true);
  	//SETREADONLY('status_of_maintenance_action',true);
   	//SETREADONLY('date',true);
   	//SETREADONLY('maintenance_action',true);
    // SETREADONLY('irrigation_present',true);
    //SETREADONLY('comments',true);
    //SETREADONLY('photos', true);

  	SETSTATUSFILTER(['Action required', 'Request for approval']);
  	
    //set accuracy to a minimum of 20m
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      //auto_location_minimum_accuracy: 20,
      manual_location_enabled: false
      //media_gallery_enabled: false,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      //drafts_enabled: false,
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
    };

    SETFORMATTRIBUTES(config);
		//ALERT('Sorry!', 'You only change the status!');
    //INVALID('Sorry! You are not allowed to create records in this app.');
    
    //validate loaction
    lat = LATITUDE();
    lng = LONGITUDE();
    var location = CURRENTLOCATION();

    if (!location) 
    {
      // ALERT('No Location Available');
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
        INVALID("It looks like you are not close to the tree to make changes.");
        SETSTATUSREADONLY(true);
      }
  };


  if (ISROLE(inspector)) {

    // inspector
    SETREADONLY('issue_type_', true);
    SETREADONLY('hazard_', true);
    //SETREADONLY('status', true);
    //SETREADONLY('species', true);
    SETREADONLY('km_', true);
    SETREADONLY('group_', true);
    SETREADONLY('unit_', true);
    SETREADONLY('work_order_', true);
    SETREADONLY('recording_date_', true);
    SETREADONLY('responsibility_', true);
    SETREADONLY('comments',true);
    SETREADONLY('location_description_',true);
    SETREADONLY('photos',true);
    SETREADONLY('videos_', true);
    SETREADONLY('Wadi - ', true);
    SETSTATUSFILTER(['Action required','Request for approval', 'Completed', 'On Hold']);
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      //auto_location_minimum_accuracy: 20,
      manual_location_enabled: false
      //media_gallery_enabled: false,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      //drafts_enabled: false,
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
      };

    SETFORMATTRIBUTES(config);
    //ALERT('Sorry!', 'You only change the status!');
    //INVALID('Sorry! You are not allowed to create records in this app.');
      
      };

  if (ISROLE(admin)) {
    //do nothing
  };
});



ON('edit-record', function(event) {
  
	// if current role is not admin, inspector but [ADA] Management
	if (ISROLE(contractor)) {
    // ranger fields
    //SETREADONLY('km', true);
  	//SETREADONLY('tree_no', true);
   	//SETREADONLY('status', true);
    // SETREADONLY('species', true);
    // SETREADONLY('planted_tree', true);
    //SETREADONLY('height_m', true);
  	//SETREADONLY('spread_m', true);
  	//SETREADONLY('height_m', true);
  	//SETREADONLY('dbh_cm', true);
  	//SETREADONLY('dbh2_cm', true);
    //SETREADONLY('health_re_inspection',true);
    //SETREADONLY('health',true);
    // SETREADONLY('indicator',true);
   	//SETREADONLY('dbh_2_cm', true);
  	//SETREADONLY('dbh_3_cm', true);
    //SETREADONLY('structure',true);
		//SETSTATUSHIDDEN(true);
    //	SETREADONLY('impact_of_ground_water',true);
    // 	SETREADONLY('maintenance_action',true);
    //  SETREADONLY('maintenance_required',true);
    //	SETREADONLY('status_of_maintenance_action',true);
    //	SETREADONLY('date',true);
    // SETREADONLY('irrigation_present',true);
    // SETREADONLY('comments',true);
    // SETREADONLY('photos', true);

    SETSTATUSFILTER(['Action required', 'Request for approval']);
		var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      //auto_location_minimum_accuracy: 20,
      manual_location_enabled: false,
      //media_gallery_enabled: false,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      //drafts_enabled: false,
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
      };

    SETFORMATTRIBUTES(config);
		
    //ALERT('Sorry!', 'You only change the status!');
    //INVALID('Sorry! You are not allowed to create records in this app.');
      
    };

    if (ISROLE(inspector)) {

      // inspector
      SETREADONLY('issue_type_', true);
      SETREADONLY('hazard_', true);
      //SETREADONLY('status', true);
      //SETREADONLY('species', true);
      SETREADONLY('km_', true);
      SETREADONLY('group_', true);
      SETREADONLY('unit_', true);
      SETREADONLY('work_order_', true);
      SETREADONLY('recording_date_', true);
      SETREADONLY('responsibility_', true);
      SETREADONLY('comments',true);
      SETREADONLY('location_description_',true);
      SETREADONLY('photos',true);
      SETREADONLY('videos_', true);
      SETREADONLY('Wadi - ', true);

      SETSTATUSFILTER(['Action required','Request for approval', 'Completed', 'On Hold']);

      var config = {
        //auto_sync_enabled: true,
        //auto_location_enabled: true,
        //auto_location_minimum_accuracy: 20,
        manual_location_enabled: false,
        //media_gallery_enabled: false,
        //media_capture_enabled: true,
        //photo_quality: '2048',
        //video_quality: '720p',
        //drafts_enabled: false,
        //edit_locations_enabled: true,
        //edit_durations_enabled: true
      };
      SETFORMATTRIBUTES(config);

      //ALERT('Sorry!', 'You only change the status!');
      //INVALID('Sorry! You are not allowed to create records in this app.');
      
    };
    if (ISROLE(admin)) {
      //do nothing
    };
});




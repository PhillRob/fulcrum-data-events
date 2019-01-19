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

//change status to 'action required' when maintenance action is not empty
//function changeStatus(event) {
//  if (event.value) {
//    // There is a value, so set the status
//    SETSTATUS('1')
//  } else {
//   // There is no value. It could have been cleared from the field.
//    // Revert status to 'created'.
//    SETSTATUS('2')
//  }
//}
//ON('change', 'maintenance_action', changeStatus);


var admin = ['[BP] Inspector','Owner'];
var inspector = ['[ADA] Site Office'];
var contractor = ['[ADA] Site Inspector'];


//allow user [ADA] Site Inspector to NOT create record
ON('new-record', function(event) {
//  var adminRoles = ['Inspector','Owner'];
//  var rangerRoles = ['[ADA] Site Inspector'];
  
	// if current role is contractor
	if (ISROLE(contractor))
    {
      // contractor fields
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
      //SETSTATUSHIDDEN(true);
    	//SETHIDDEN('impact_of_ground_water',true);
     	//SETHIDDEN('maintenance_action',true);
      //SETHIDDEN('comments',true);
  		//SETHIDDEN('photos', true);
  		//ALERT('Sorry!', 'You cannot create a record in this app. ');
     	//INVALID('Sorry! You are not allowed to create records in this app.');
    
      SETSTATUSFILTER(['3']);
    }

  if (ISROLE(inspector))
    {
      SETHIDDEN('km', true);
      SETHIDDEN('tree_no', true);
      SETHIDDEN('status', true);
      SETHIDDEN('species', true);
      SETHIDDEN('planted_tree', true);
      SETHIDDEN('height_m', true);
      SETHIDDEN('spread_m', true);
      SETHIDDEN('height_m', true);
      SETHIDDEN('dbh_cm', true);
      SETHIDDEN('health',true);
      SETHIDDEN('health_re_inspection',true);
      SETHIDDEN('indicator',true);
      SETHIDDEN('irrigation_present',true);
      SETHIDDEN('structure',true);
      SETHIDDEN('impact_of_ground_water',true);
      SETHIDDEN('maintenance_action',true);
      SETHIDDEN('comments',true);
      SETHIDDEN('photos', true);

      SETSTATUSHIDDEN(true);
      ALERT('Sorry!', 'You cannot create a record in this app. ');
      INVALID('Sorry! You are not allowed to create records in this app.');

    }

  	// if the current role is one of the designated admin roles...
  if (ISROLE(admin)) 
    {
      //do nothing
  	}

});

//allow [ADA] Site Inspector to only change status to orange if near record location
ON('validate-record', function(event) {
  
	// if current role is not admin, inspector but [ADA] Management
	if (ISROLE(contractor))
    {
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
		  //SETREADONLY('irrigation_present',true);
      //SETREADONLY('comments',true);
      //SETREADONLY('photos', true);

      //ALERT('Sorry!', 'You only change the status!');
      //INVALID('Sorry! You are not allowed to create records in this app.');
      SETSTATUSFILTER(['1','4']);
      
      //do not allow manual location edits
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
    		INVALID("It looks like you are not close to the tree to make changes.");
    		SETSTATUSREADONLY(true);
      	} 
      }


  if (ISROLE(inspector))
    // if ada site office
    {
      SETREADONLY('km', true);
      SETREADONLY('tree_no', true);
      //SETREADONLY('status', true);
      //SETREADONLY('species', true);
      SETREADONLY('planted_tree', true);
      SETREADONLY('height_m', true);
      SETREADONLY('spread_m', true);
      SETREADONLY('height_m', true);
      SETREADONLY('dbh_cm', true);
      SETREADONLY('dbh2_cm', true);
      SETREADONLY('health_re_inspection',true);
      SETREADONLY('health',true);
      SETREADONLY('indicator',true);
      SETREADONLY('dbh_2_cm', true);
      SETREADONLY('dbh_3_cm', true);
      SETREADONLY('structure',true);
      SETREADONLY('impact_of_ground_water',true);
      SETREADONLY('maintenance_action',true);
      SETREADONLY('maintenance_required',true);
      SETREADONLY('status_of_maintenance_action',true);
      SETREADONLY('date',true);
      SETREADONLY('maintenance_action',true);
      SETREADONLY('irrigation_present',true);
      SETREADONLY('comments',true);
      SETREADONLY('photos', true);

      SETSTATUSFILTER(['1','2']);
      //ALERT('Sorry!', 'You only change the status!');
      //INVALID('Sorry! You are not allowed to create records in this app.');
      

      // prevent manual location changes
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
          INVALID("It looks like you are not close to the tree to make changes.");
          SETSTATUSREADONLY(true);
        }
    }

	   // if the current role is one of the designated admin roles...
    if (ISROLE(admin))  
      {
       SETSTATUSFILTER(null);
  	   }
});

ON('edit-record', function(event) {
    
	// if current role is contractor
	if (ISROLE(contractor))
    {

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
		  //SETREADONLY('impact_of_ground_water',true);
		  //SETREADONLY('maintenance_action',true);
		  //SETREADONLY('maintenance_required',true);
		  //SETREADONLY('status_of_maintenance_action',true);
      //SETREADONLY('date',true);
		  //SETREADONLY('irrigation_present',true);
		  //SETREADONLY('comments',true);
		  //SETREADONLY('photos', true);

      SETSTATUSFILTER(['1','4']);
      //ALERT('Sorry!', 'You only change the status!');
      //INVALID('Sorry! You are not allowed to create records in this app.');

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
		
      
      }

    if (ISROLE(inspector))
    {
      // ranger fields
      SETREADONLY('km', true);
      SETHIDDEN('tree_no', true);
      //SETREADONLY('status', true);
      //SETREADONLY('species', true);
      SETREADONLY('planted_tree', true);
      SETREADONLY('height_m', true);
      SETREADONLY('spread_m', true);
      SETREADONLY('height_m', true);
      SETREADONLY('dbh_cm', true);
      SETREADONLY('dbh2_cm', true);
      SETREADONLY('health_re_inspection',true);
      SETREADONLY('health',true);
      SETREADONLY('indicator',true);
      SETREADONLY('dbh_2_cm', true);
      SETREADONLY('dbh_3_cm', true);
      SETREADONLY('structure',true);
      SETREADONLY('impact_of_ground_water',true);
      SETREADONLY('maintenance_action',true);
      SETREADONLY('maintenance_required',true);
      SETREADONLY('status_of_maintenance_action',true);
      SETREADONLY('date',true);
      SETREADONLY('irrigation_present',true);
      SETREADONLY('comments',true);
      SETREADONLY('photos', true);
      
      SETSTATUSFILTER(['1','2']);
      
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
    }


  	// if the current role is one of the designated admin roles...
  	if (ISROLE(admin))
    {
      //do nothing
      SETSTATUSFILTER(null);
  	}
});

// the end




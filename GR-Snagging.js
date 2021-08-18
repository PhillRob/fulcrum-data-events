// data events for fulcrum app [GR] Snagging (ae9c99e0-0f90-4439-8094-1a9f9943171c)
// version 0.5

var admin = ['[BP] Inspector','Owner'];
var inspector = ['[CON] Site Inspector'];

var storage = STORAGE();

// Auto-increment feature: when saving the record, save the value to storage to use next time. 
ON('save-record', function(event) {
  
	storage.setItem('ref_value', $id);

	if (ISROLE(admin))	
		{
		var fieldArray = ['contractor_photos','contractor_remarks']
		fieldArray.forEach(function(dataName) 
			{
			SETREADONLY(dataName, true);
			})
		}
});

ON('new-record', function(event) {
  var idStorage = NUM(storage.getItem('ref_value'))+1
  SETVALUE('id', idStorage)

  if (ISROLE(admin))	
		{
        var fieldArray = ['contractor_photos','contractor_remarks']
		fieldArray.forEach(function(dataName) 
			{
			SETREADONLY(dataName, true);
			})
		}
});


ON('validate-record', function(event) {

	if (ISROLE(inspector))
		//  if contractor
		{
			var fieldArray = ['id','road','roadside','station_from','station_to','discipline','element','photos','defect','remakrs']
		    fieldArray.forEach(function(dataName) 
			{
				SETREADONLY(dataName, true);
		    })
						
			SETSTATUSFILTER(['High','Low', 'Re-inspection required']);
			//SETHIDDEN('item_description', false)
			//SETHIDDEN('phase', true)
			
			//  prevent manual location changes
			var config = {
				// auto_sync_enabled: true,
				// auto_location_enabled: true,
				// auto_location_minimum_accuracy: 20,
				manual_location_enabled: false
				// media_gallery_enabled: false,
				// media_capture_enabled: true,
				// photo_quality: '2048',
				// video_quality: '720p',
				// drafts_enabled: false,
				// edit_locations_enabled: true,
				// edit_durations_enabled: true
				};

			SETFORMATTRIBUTES(config);
			
			// lat = LATITUDE();
			// lng = LONGITUDE();
			// var location = CURRENTLOCATION();

			// if (!location) 
			// 	{
			// 		// ALERT('No Location Available');
			// 		return;
			// 	}

			// var latitude = location.latitude;
			// var longitude = location.longitude;
			// var minLatitude = lat - 0.000300;
			// var maxLatitude = lat + 0.000300;
			// var minLongitude = lng - 0.000300;
			// var maxLongitude = lng + 0.000300;
			
			// if (!(latitude <= maxLatitude && latitude >= minLatitude && longitude <= maxLongitude && longitude >= minLongitude)) 
			// 	{
			// 		INVALID("It looks like you are not close to the tree to make changes.");
			// 		SETSTATUSREADONLY(true);
			// 	}
		}

		 //  admin permissions
		if (ISROLE(admin))	
			{
				var fieldArray = ['contractor_photos','contractor_remarks']
				fieldArray.forEach(function(dataName) 
				{
					SETREADONLY(dataName, true);
		    	})

			 SETSTATUSFILTER(null);
			 //if (!PROJECTNAME()) {
    			//INVALID('Please select a project before saving.');
  				//};
			 }
});

ON('edit-record', function(event) {
		
	//  contractor permissions
		if (ISROLE(inspector))
		{
			var fieldArray = ['id','road','roadside','station_from','station_to','discipline','element','photos','defect','remakrs']
			fieldArray.forEach(function(dataName) 
			{
				SETREADONLY(dataName, true);
		    })
						
			SETSTATUSFILTER(['High','Low', 'Re-inspection required']);
			//SETHIDDEN('item_description', false)
			//SETHIDDEN('phase', true)
			

			//if((admin.indexOf($updated_by_role)!== -1) && 'no'.indexOf($3rd_party_damage)!== -1)
       		//{
			//	ALERT('Client and Consultant have agreed that this item is not a 3rd party damage. You cannot change the 3rd party damage field anymore.');
			//	SETREADONLY('3rd_party_damage', true);
			//}

			//  prevent manual location changes
			var config = {
				// auto_sync_enabled: true,
				// auto_location_enabled: true,
				// auto_location_minimum_accuracy: 20,
				manual_location_enabled: false
				// media_gallery_enabled: false,
				// media_capture_enabled: true,
				// photo_quality: '2048',
				// video_quality: '720p',
				// drafts_enabled: false,
				// edit_locations_enabled: true,
				// edit_durations_enabled: true
				};

			SETFORMATTRIBUTES(config);


			// lat = LATITUDE();
			// lng = LONGITUDE();
			// var location = CURRENTLOCATION();

			// if (!location) 
			// 	{
			// 		// ALERT('No Location Available');
			// 		return;
			// 	}

			// var latitude = location.latitude;
			// var longitude = location.longitude;
			// var minLatitude = lat - 0.000300;
			// var maxLatitude = lat + 0.000300;
			// var minLongitude = lng - 0.000300;
			// var maxLongitude = lng + 0.000300;
			
			// if (!(latitude <= maxLatitude && latitude >= minLatitude && longitude <= maxLongitude && longitude >= minLongitude)) 
			// 	{
			// 		INVALID("It looks like you are not close to the tree to make changes.");
			// 		SETSTATUSREADONLY(true);
			// 	}
		}

		 //  admin permissions
		if (ISROLE(admin))	
			 {
				var fieldArray = ['contractor_photos','contactor_remarks']
				fieldArray.forEach(function(dataName) 
				{
					SETREADONLY(dataName, true);
		    	})
			 
			 SETSTATUSFILTER(null);
			 }
});

//  the end
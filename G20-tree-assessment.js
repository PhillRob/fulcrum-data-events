var admin = ['[BP] Inspector','Owner'];
var inspector = ['[CON] Site Inspector'];


var storage = STORAGE();

// when saving the record, save the value to storage to use next time
ON('save-record', function(event) {
  
	storage.setItem('ref_value', $number);

});

ON('new-record', function(event) {
  var idStorage = NUM(storage.getItem('ref_value'))+1
  SETVALUE('ref', idStorage)
});



//  allow [ADA] Site Inspector to only change status to orange if near record location
ON('validate-record', function(event) {
	
	if (ISROLE(inspector))
		//  if RCA site office
		{
			// var fieldArray = ['number','species','id','transplanting_method','size_of_box','height_m','spread_m','health','structure_','comments','photos']
		    // fieldArray.forEach(function(dataName) 
			// {
			// 	SETREADONLY(dataName, true);
		    // })
						
			//SETSTATUSFILTER(['Road','RAC Approved']);
			
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

		 //  if the current role is one of the designated admin roles...
		if (ISROLE(admin))	
			{
			 SETSTATUSFILTER(null);
			 }
});

ON('edit-record', function(event) {
		
	//  if RAC site office
		if (ISROLE(inspector))
		{var fieldArray = ['number','species','id','transplanting_method','size_of_box','height_m','spread_m','health','structure_','comments','photos']
			fieldArray.forEach(function(dataName) 
			{
				SETREADONLY(dataName, true);
		    })
						
			// SETSTATUSFILTER(['Road','RAC Approved']);
			
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

		 //  if the current role is one of the designated admin roles...
		if (ISROLE(admin))	
			{
			 SETSTATUSFILTER(null);
			 }
});

//  the end
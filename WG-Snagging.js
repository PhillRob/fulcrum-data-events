// data events for fulcrum app [WG] Snagging
// version 0.5

var BP = ['[GR] Road Site Inspector','[BP] Inspector','Owner','[BP] admin L2']; 
var MC = ['[CON-M] Site Inspector'];
var CON = ['[CON] Site Inspector'];

var storage = STORAGE();

// // require portrait image
// ON('add-photo', 'photos', function(event) {
//   if (event.value.width > event.value.height) {
//     INVALID('Please retake the photo in portrait orientation.');
//   }
// });


// // Auto-increment feature: when saving the record, save the value to storage to use next time. 
// ON('save-record', function(event) {
  
// 	storage.setItem('ref_value', $id);

// 	if (ISROLE(admin))	
// 		{
// 		var fieldArray = ['contractor_photos','contractor_remarks']
// 		fieldArray.forEach(function(dataName) 
// 			{
// 			SETREADONLY(dataName, true);
// 			})
// 		}
// });

ON('new-record', function(event) {
//   var idStorage = NUM(storage.getItem('ref_value'))+1
//   SETVALUE('id', idStorage)

//   if (ISROLE(admin))	
// 		{
//         var fieldArray = ['contractor_photos','contractor_remarks']
// 		fieldArray.forEach(function(dataName) 
// 			{
// 			SETREADONLY(dataName, true);
// 			})
// 		}
if (ISROLE(MC))	
			{
				var fieldArray = ['contractor_photos','contractor_remarks']
				fieldArray.forEach(function(dataName) 
				{
					SETREADONLY(dataName, true);
		    	})

			 SETSTATUSFILTER(['Snag identified','Action required','Re-inspection required','Snag lifted']);
			 //if (!PROJECTNAME()) {
    			//INVALID('Please select a project before saving.');
  				//};
			 }
});




ON('validate-record', function(event) {

	if (ISROLE(CON))
		//  if contractor
		{
			var fieldArray = ['id','discipline','remarks','recommended_actions','photos']
		    fieldArray.forEach(function(dataName) 
			{
				SETREADONLY(dataName, true);
		    })
					
			SETSTATUSFILTER(['Action required','Works in progress','Re-inspection required']);
			
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
			
			var lat = LATITUDE();
			var lng = LONGITUDE();
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
					INVALID("You are not close enough to the records to make changes.");
					SETSTATUSREADONLY(true);
				}
		}

		 //  admin permissions
		if (ISROLE(MC))	
			{
				var fieldArray = ['contractor_photos','contractor_remarks']
				fieldArray.forEach(function(dataName) 
				{
					SETREADONLY(dataName, true);
		    	})

			 SETSTATUSFILTER(['Snag identified','Action required','Re-inspection required','Snag lifted']);
			 //if (!PROJECTNAME()) {
    			//INVALID('Please select a project before saving.');
  				//};
			 }
});



ON('edit-record', function(event) {
		
	//  contractor permissions
		if (ISROLE(CON))
		{
			var fieldArray = ['id','discipline','remarks','recommended_actions','photos']
			fieldArray.forEach(function(dataName) 
			{
				SETREADONLY(dataName, true);
		    })
						
			SETSTATUSFILTER(['Action required','Works in progress','Re-inspection required']);
			
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


			var lat = LATITUDE();
			var lng = LONGITUDE();
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
		}

		 //  admin permissions
		if (ISROLE(MC))	
			 {
				var fieldArray = ['contractor_photos', 'contractor_remarks']
				fieldArray.forEach(function(dataName) 
				{
					SETREADONLY(dataName, true);
		    	})
			 
			 SETSTATUSFILTER(['Snag identified','Action required','Re-inspection required','Snag lifted']);
			 }
});

//  the end
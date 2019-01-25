var config = {
        //auto_sync_enabled: true,
        auto_location_enabled: false,
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

//change status to 'action required' when maintenance action is not empty
//function changeStatus(event) {
//  if (event.value) {
//    // There is a value, so set the status
//    SETSTATUS('Action Required - عمل')
//  } else {
    // There is no value. It could have been cleared from the field.
    // Revert status to 'created'.
//    SETSTATUS('No Action Required - نجز')
//  }
//}
//ON('change', 'maintenance_action', changeStatus);

var admin = ['[BP] Inspector','Owner'];
var inspector = ['[[ADA] Site Office'];
var contractor = ['[ADA] Site Inspector'];

//allow user [ADA] Site Inspector to NOT create record

ON('new-record', function(event) {
  // if current role is not admin, inspector but [ADA] Site
  if (ISROLE(contractor)) {
    // restrict contractor access to fields
    // contractor can set status and fill general data
    //var fieldArray = ['issue_type_','hazard_','area_code_','location_description_','group_','unit_','quantity_surface_length_','required_action_','material','unit_action','quantity_surface_length_action','recording_date_','responsibility_','comments','photos','videos_','id']
    //fieldArray.forEach(function(dataName) 
    //{
    //SETREADONLY(dataName, true);
    //});

    SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Hazard Action - عمل']);
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      //auto_location_minimum_accuracy: 20,
      manual_location_enabled: true
      //media_gallery_enabled: false,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      //drafts_enabled: false,
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
      };
    SETFORMATTRIBUTES(config);
   };

   if (ISROLE(inspector))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      //var fieldArray = ['issue_type_','hazard_','area_code_','location_description_','group_','unit_','quantity_surface_length_','required_action_','material','unit_action','quantity_surface_length_action','recording_date_','responsibility_','comments','photos','videos_','id']
      //fieldArray.forEach(function(dataName) 
      //{
      //SETREADONLY(dataName, true);
      //});
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Hazard Action - عمل','Hardscape Action - ','Janitorial Action - ','Landscape Action -','Irrigation Action - ','Lighting Action - ','Re-inspection - إعادة التفتيش','On Hold - في الانتظار']);
    }
   
   if (ISROLE(admin)) {
  	 // if the current role is one of the designated admin roles...
	   //do nothing
  	}
});

ON('validate-record', function(event) {

  // if current role is not admin, inspector but [ADA] Site
  
  if (ISROLE(contractor)) {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['issue_type_','hazard_','area_code_','location_description_','group_','unit_','quantity_surface_length_','required_action_','material','unit_action','quantity_surface_length_action','recording_date_','responsibility_','id']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });

      // limit status selection
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','On Hold - في الانتظار','Request for approval - طلب موافقة']);
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
        edit_locations_enabled: false
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
        INVALID("It looks like you are not close enough to the issue to make changes. - لست بقرب الموقع لإضافة ملاحظة");
      }
   }

   if (ISROLE(inspector))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['issue_type_','hazard_','area_code_','location_description_','group_','unit_','quantity_surface_length_','required_action_','material','unit_action','quantity_surface_length_action','recording_date_','responsibility_','id']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });

      // limit status selection
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Hazard Action - عمل','Hardscape Action - ','Janitorial Action - ','Landscape Action -','Irrigation Action - ','Lighting Action - ','Re-inspection - إعادة التفتيش','On Hold - في الانتظار']);
      
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
    }  
   if (ISROLE(admin))
   {
       // if the current role is one of the designated admin roles...
       //do nothing
    }
});

ON('edit-record', function(event) {
  // if current role is not admin, inspector but [ADA] Site
  if (ISROLE(contractor))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['issue_type_','hazard_','area_code_','location_description_','group_','unit_','quantity_surface_length_','required_action_','material','unit_action','quantity_surface_length_action','recording_date_','responsibility_','id']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });

      // limit status selection
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','On Hold - في الانتظار','Request for approval - طلب موافقة']);
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
        edit_locations_enabled: false
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
        INVALID("It looks like you are not close enough to the issue to make changes. - لست بقرب الموقع لإضافة ملاحظة");
      }
   };

   if (ISROLE(inspector))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['issue_type_','hazard_','area_code_','location_description_','group_','unit_','quantity_surface_length_','required_action_','material','unit_action','quantity_surface_length_action','recording_date_','responsibility_','id']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });

      // limit status selection
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Hazard Action - عمل','Hardscape Action - ','Janitorial Action - ','Landscape Action -','Irrigation Action - ','Lighting Action - ','Re-inspection - إعادة التفتيش','On Hold - في الانتظار']);
      
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

   if (ISROLE(admin))
   {
       // if the current role is one of the designated admin roles...
       //do nothing
    };
});
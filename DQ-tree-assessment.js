var config = {
        //auto_sync_enabled: true,
        auto_location_enabled: false,
        auto_location_minimum_accuracy: 20,
        //manual_location_enabled: false,
        //media_gallery_enabled: false,
        //media_capture_enabled: true,
        //photo_quality: '2048',
        //video_quality: '720p',
        drafts_enabled: false,
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
var inspector = ['[ADA] Site Office'];
var contractor = ['[CON] Site Inspector'];
var treenumber = ['[ADA][DQ] Tree Number']

//allow user [ADA] Site Inspector to NOT create record
ON('new-record', function(event) {
  // if current role is not admin, inspector but [ADA] Site
  if (ISROLE(contractor))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['tree_id_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_',
      'responsible_team_',
      'detected_by_ml',
      'special_irrigation']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Surveyed - شجرة فحص']);
      var config = {
        //auto_sync_enabled: true,
        //auto_location_enabled: true,
        //auto_location_minimum_accuracy: 20,
        manual_location_enabled: true,
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
if (ISROLE(treenumber))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['species','photos','dbh_cm_','height_m','spread_m','tree_age_','comments','health','structure_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_',
      'responsible_team_',
      'detected_by_ml',
      'special_irrigation']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
      SETSTATUSHIDDEN(true);
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
   }


   if (ISROLE(inspector))
    {
      // restrict inspector access to fields
      // inspector can set status and fill general data
      var fieldArray = ['tree_id_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_',
      'responsible_team_',
       'detected_by_ml',
      'special_irrigation']
      
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Surveyed - شجرة فحص','Action Required - عمل','No Action Required - نجز','Request for approval - طلب موافقة','Hazard Action - فعل خطر','On Hold - تحت الانتظار','Irrigation check needed - فحص الري مطلوب']);
    }
   if (ISROLE(admin))
   {
       // if the current role is one of the designated admin roles...
       //do nothing
    }
});

ON('validate-record', function(event) {
  // if current role is not admin, inspector but [ADA] Site
  if (ISROLE(contractor))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['tree_id_','area_code_','species','photos','dbh_cm_','height_m','spread_m','tree_age_','comments','health','structure_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_',
      'responsible_team_', 'detected_by_ml',
      'special_irrigation']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });

      // limit status selection
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Surveyed - شجرة فحص','Request for approval - طلب موافقة','Irrigation check needed - فحص الري مطلوب']);
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
        edit_locations_enabled: false,
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
   if (ISROLE(treenumber))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['species','photos','dbh_cm_','height_m','spread_m','tree_age_','comments','health','structure_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_', 'detected_by_ml',
      'special_irrigation',
      'responsible_team_']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
      SETSTATUSHIDDEN(true);
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
   }
   if (ISROLE(inspector))
    {
      // restrict inspector access to fields
      // inspector can set status and fill general data
      var fieldArray = ['tree_id_','area_code_','species','photos','dbh_cm_','height_m','spread_m','tree_age_','comments','health','structure_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_', 'detected_by_ml',
      'special_irrigation',
      'responsible_team_']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });

      // limit status selection
      SETSTATUSFILTER(['Irrigation check needed - فحص الري مطلوب','Re-inspection - إعادة التفتيش','Surveyed - شجرة فحص','Action Required - عمل','No Action Required - نجز','Request for approval - طلب موافقة','Hazard Action - فعل خطر','On Hold - تحت الانتظار']);
      
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
      var fieldArray = ['tree_id_','area_code_','species','photos','dbh_cm_','height_m','spread_m','tree_age_','comments','health','structure_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_',
      'responsible_team_', 'detected_by_ml',
      'special_irrigation']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
      // limit status selection
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Surveyed - شجرة فحص','Request for approval - طلب موافقة','Irrigation check needed - فحص الري مطلوب']);

      //turn location editing off
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
        edit_locations_enabled: false,
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
if (ISROLE(treenumber))
    {
      // restrict contractor access to fields
      // contractor can set status and fill general data
      var fieldArray = ['species','photos','dbh_cm_','height_m','spread_m','tree_age_','comments','health','structure_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_', 'detected_by_ml',
      'special_irrigation',
      'responsible_team_']
      fieldArray.forEach(function(dataName) 
      {
      SETREADONLY(dataName, true);
      });
      SETSTATUSHIDDEN(true);
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
   }
   if (ISROLE(inspector))
    {
      // restrict inspector access to fields
      // inspector can set status and fill general data
      var fieldArray = ['tree_id_','area_code_','species','photos','dbh_cm_','height_m','spread_m','tree_age_','comments','health','structure_','type_of_treatment_',
      'product_',
      'product__other',
      'pest_control_date_',
      'fertiliser_',
      'fertiliser__other',
      'fertiliser_date_',
      'decompacted_date_',
      'decompacted_',
      'irrigation_present_',
      'irrigation_sufficient_',
      'work_order_',
      'maintenance_date_',
      'responsible_team_', 'detected_by_ml',
      'special_irrigation']
      fieldArray.forEach(function(dataName) 

      {
      SETREADONLY(dataName, true);
      });

      // limit status selection
      SETSTATUSFILTER(['Re-inspection - إعادة التفتيش','Surveyed - شجرة فحص','Action Required - عمل','No Action Required - نجز','Request for approval - طلب موافقة','Hazard Action - فعل خطر','On Hold - تحت الانتظار','Irrigation check needed - فحص الري مطلوب']);
      
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

var config = {
  //auto_sync_enabled: true,
  auto_location_enabled: false,
  auto_location_minimum_accuracy: 20,
  manual_location_enabled: true,
  media_gallery_enabled: true,
  //media_capture_enabled: true,
  //photo_quality: '2048',
  //video_quality: '720p',
  drafts_enabled: false
  //edit_locations_enabled: true,
  //edit_durations_enabled: true
  };

SETFORMATTRIBUTES(config);

//fill phototime field with difference in minutes between last pic and now

ON('add-photo', 'photos', function (event) {
  //ALERT(INSPECT(event.value.timestamp));
  SETVALUE('phototime', INSPECT(Math.round((new Date().getTime() - new Date(event.value.timestamp.replace(/-/g, '/')).getTime()) / 60000)))
});


var adminRoles = ['Owner'];
var supervisorRoles = ['[BP] Inspector'];
var inspectorRoles = ['[CON][WS] Inspector'];
var managementRoles = ['[AMN][WS] Site Office'];

ON('validate-record', function(event) {

  // if current role is inspector
  if (ISROLE(inspectorRoles)) {
    
    // set fields to read-only
    var fieldArray = ['item','station_km','station_m','defect','action','responsibility','uid','document_reference']
    fieldArray.forEach(function(dataName) {
      SETREADONLY(dataName, true);
    });
    
    //filter status field
    SETSTATUSFILTER(['Query - استعلام','Work in progress - تقدم العمل','Request for Inspection - طلب للفحص']);
    //ALERT('Sorry!', 'You can only change the status!');
    //INVALID('Sorry! You are not allowed to create records in this app.');

    //request updated image
    // if ($phototime > 15) 
    // {
    // INVALID('This photo was taken over 15 minutes ago. Please update the photo to show the completed works. - أخذت هذه الصورة منذ أكثر من ١٥ دقيقة. يرجى تحديث الصورة  لتوضيح الأعمال المنجزة .')
    // };

    //prevent location changes
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      //auto_location_minimum_accuracy: 20,
      //manual_location_enabled: false,
      media_gallery_enabled: true,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      drafts_enabled: false
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
      };

    SETFORMATTRIBUTES(config);

    // set the geofencing
    lat = LATITUDE();
    lng = LONGITUDE();

    var location = CURRENTLOCATION();
      if (!location) 
      {
        //ALERT('No Location Available. - لا يوجد موقع متاح. يرجو السماح لفولكروم بالوصول إلى موقع جهازك.');
        return;
      }
    var buffer = 0.000300
    var latitude = location.latitude;
    var longitude = location.longitude;
    var minLatitude = lat - buffer;
    var maxLatitude = lat + buffer;
    var minLongitude = lng - buffer;
    var maxLongitude = lng + buffer;

    if (!(latitude <= maxLatitude && latitude >= minLatitude && longitude <= maxLongitude && longitude >= minLongitude)) {
      INVALID("It looks like you are not close to the issue to make changes. - لست بقرب الموقع لإضافة ملاحظة");
      SETSTATUSREADONLY(true);
    }
  };

  // if the current role is bp supervisor
  if (ISROLE(supervisorRoles)) {
    SETSTATUSFILTER(['Documentation','Work Request - طلب عمل','Instruction draft - مسودة التعليمات ','Query - استعلام','Work in progress - تقدم العمل','Approved - موافق عليه','Disapproved - غير موافق عليه']);
  }
  
  if (ISROLE(managementRoles)) {
    SETSTATUSFILTER(['Documentation','Site instruction - تعليمات الموقع','Query - استعلام','Superseded - حل محل ','Request for Inspection - طلب للفحص']);
  }
  // if current role
  if (ISROLE(adminRoles)) {
    SETSTATUSFILTER(null);
  }
});


ON('edit-record', function(event) {

  if (ISROLE(inspectorRoles)) {

    // set fields to read-only
    var fieldArray = ['item','station_km','station_m','defect','action','responsibility','uid','document_reference']
    fieldArray.forEach(function(dataName) {
      SETREADONLY(dataName, true);
    });

    //filter status field
    SETSTATUSFILTER(['Work in progress - تقدم العمل','Request for Inspection - طلب للفحص']);
    //ALERT('Sorry!', 'You only change the status!');
    //INVALID('Sorry! You are not allowed to create records in this app.');
    
    //request updated image
    // if ($phototime > 15) 
    //         {
    //         INVALID('This photo was taken over 15 minutes ago. Please update the photo to show the completed works. - أخذت هذه الصورة منذ أكثر من ١٥ دقيقة. يرجى تحديث الصورة  لتوضيح الأعمال المنجزة .')
    //         };

    //prevent location changes
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      //auto_location_minimum_accuracy: 20,
      //manual_location_enabled: false,
      media_gallery_enabled: true,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      drafts_enabled: false
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
    };

  SETFORMATTRIBUTES(config);
  };

  
  if (ISROLE(supervisorRoles)) {
    SETSTATUSFILTER(['Documentation','Work Request - طلب عمل','Instruction draft - مسودة التعليمات ','Query - استعلام','Work in progress - تقدم العمل','Approved - موافق عليه','Disapproved - غير موافق عليه']);
  }

  if (ISROLE(managementRoles)) {
    SETSTATUSFILTER(['Documentation','Site instruction - تعليمات الموقع','Query - استعلام','Superseded - حل محل ','Request for Inspection - طلب للفحص']);
  }
  if (ISROLE(adminRoles)) {
    SETSTATUSFILTER(null);
  }
});

ON('new-record', function(event) {

  if (ISROLE(inspectorRoles)) {

    // set fields to read-only
    // var fieldArray = ['item','station_km','station_m','defect','action','responsibility','uid','document_reference']
    // fieldArray.forEach(function(dataName) 
    // {
    // SETREADONLY(dataName, true);
    // });
    //filter status field
    SETSTATUSFILTER(['Query - استعلام','Work in progress - تقدم العمل','Request for Inspection - طلب للفحص']);
    //ALERT('Sorry!', 'You only change the status!');
    //INVALID('Sorry! You are not allowed to create records in this app.');
    
    //request updated image
    // if ($phototime > 15) 
    //         {
    //         INVALID('This photo was taken over 15 minutes ago. Please update the photo to show the completed works. - أخذت هذه الصورة منذ أكثر من ١٥ دقيقة. يرجى تحديث الصورة  لتوضيح الأعمال المنجزة .')
    //         };

    //prevent location changes
    var config = {
      //auto_sync_enabled: true,
      //auto_location_enabled: true,
      //auto_location_minimum_accuracy: 20,
      //manual_location_enabled: false,
      media_gallery_enabled: true,
      //media_capture_enabled: true,
      //photo_quality: '2048',
      //video_quality: '720p',
      drafts_enabled: false
      //edit_locations_enabled: true,
      //edit_durations_enabled: true
    };

  SETFORMATTRIBUTES(config);
  };

  // if the current role is bp supervisor
  if (ISROLE(supervisorRoles)) {
    SETSTATUSFILTER(['Documentation','Work Request - طلب عمل','Instruction draft - مسودة التعليمات ','Query - استعلام','Work in progress - تقدم العمل','Approved - موافق عليه','Disapproved - غير موافق عليه']);
  };

  if (ISROLE(managementRoles)) {
    SETSTATUSFILTER(['Documentation','Site instruction - تعليمات الموقع','Query - استعلام','Superseded - حل محل ','Request for Inspection - طلب للفحص']);
  };

  if (ISROLE(adminRoles)) {
    SETSTATUSFILTER(null);
  };
});
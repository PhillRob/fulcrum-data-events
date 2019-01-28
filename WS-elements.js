//WS Construction Elements Form v0.1
// global
// Set attributes: accuracy to a minimum of 20m
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


// define roles
// TODO: update role list
var admin = ['Owner'];
var supervisor = ['[BP] Inspector']; // supervision team
var contractor = ['[CON][WS] Inspector'];
var management = ['[AMN][WS] Site Office'];


// 3 actions need to be defined
// new records, edit and validate

// NEW RECORD rules
ON('new-record', function(event) 
{
// put roles here when global roles do not work

  // if current role is supervisor (DAR, BP, etc.)
  if (ISROLE(supervisor))
  {
    // supervisor can create records with some status and add all fields

    // set fields to read-only
    //var fieldArray = ['contractor_comments_']
    //fieldArray.forEach(function(dataName) 
    //{
    //  SETREADONLY(dataName, true);
    //});

    // filter status field
    SETSTATUSFILTER(['Planned','Construction','Inspection']);
  }

  // if the current role is contractor
  if (ISROLE(contractor))
  {
    // contractor can create records with some status and add all fields
    // the comment fields is reserved for supervisor comments
    // set fields to read-only
    //var fieldArray = ['comments']
    //fieldArray.forEach(function(dataName) 
    //{
    //  SETREADONLY(dataName, true);
    //});

    // filter status field
    SETSTATUSFILTER(['Planned','Construction','Inspection']);
  }

  // if the current role is project management (PO, PM, RE)
  if (ISROLE(management))
  {
    // contractor can create records with some status and add all fields
    
    // set fields to read-only
    //var fieldArray = ['contractor_comments_']
    //fieldArray.forEach(function(dataName) 
    //{
    //  SETREADONLY(dataName, true);
    //});

    // filter status field
    //SETSTATUSFILTER(['Documentation - توثيق','Site instruction - تعليمات الموقع','Query - استعلام','Request for Inspection - طلب للفحص','Work Request - طلب عمل']);
    }
});


// EDIT RECORD rules
ON('edit-record', function(event) {

  // if current role is supervisor (DAR, BP, etc.)
  if (ISROLE(supervisor))
  {
    // supervisor can create records with some status and add all fields

    // set fields to read-only
    //var fieldArray = ['contractor_comments_']
    //fieldArray.forEach(function(dataName) 
    //{
    //  SETREADONLY(dataName, true);
    //});

    // filter status field
    SETSTATUSFILTER(['Planned','Construction','Inspection']);
  }

  // if the current role is contractor
  if (ISROLE(contractor))
  {
    // contractor can edit records with some status and add all fields
    // the comment fields is reserved for supervisor comments

    // prevent location changes
      var config = {
      // auto_sync_enabled: true,
      // auto_location_enabled: true,
      // auto_location_minimum_accuracy: 20,
      // manual_location_enabled: false,
      media_gallery_enabled: true,
      // media_capture_enabled: true,
      // photo_quality: '2048',
      // video_quality: '720p',
      drafts_enabled: false
      // edit_locations_enabled: true,
      // edit_durations_enabled: true
      };
      SETFORMATTRIBUTES(config);

    // set fields to read-only
    //var fieldArray = ['element_','activity_','defect','action','responsibility','document_reference','comments','photos_','videos_']
    //fieldArray.forEach(function(dataName) 
    //{
    //  SETREADONLY(dataName, true);
    //});

    // filter status field
    SETSTATUSFILTER(['Planned','Construction','Inspection']);
  }

  // if the current role is project management (PO, PM, RE)
  if (ISROLE(management))
  {
    // contractor can edit records with some status and add all fields
    
    // set fields to read-only
    //var fieldArray = ['contractor_comments_']
    //fieldArray.forEach(function(dataName) 
    //{
    //  SETREADONLY(dataName, true);
    //});

    // filter status field
    //SETSTATUSFILTER(['Documentation - توثيق','Site instruction - تعليمات الموقع','Instruction draft - مسودة التعليمات ','Query - استعلام','Request for Inspection - طلب للفحص','Work Request - طلب عمل','Approved - موافق عليه','Rejected - مرفوض','Revise and resubmit - مراجعة و إعادة تقديم','Final approval - الموافقة النهائية']);
  }
});





// VALIDATE RECORD roles
ON('validate-record', function(event) {

// if current role is supervisor (DAR, BP, etc.)
  if (ISROLE(supervisor))
  {
    // supervisor can create records with some status and add all fields

    // set fields to read-only
    var fieldArray = ['contractor_comments_']
    fieldArray.forEach(function(dataName) 
    {
      SETREADONLY(dataName, true);
    });

    // filter status field
    SETSTATUSFILTER(['Documentation - توثيق','Work Request - طلب عمل','Query - استعلام','Work in progress - تقدم العمل','Request for Inspection - طلب للفحص','Instruction draft - مسودة التعليمات ','Approved - موافق عليه','Rejected - مرفوض','Revise and resubmit - مراجعة و إعادة تقديم','Revision in progress - قيد المراجعة']);
  }

  // if the current role is contractor
  if (ISROLE(contractor))
  {
    // contractor can edit records with some status and add all fields
    // the comment fields is reserved for supervisor comments

    // prevent location changes
      var config = {
      // auto_sync_enabled: true,
      // auto_location_enabled: true,
      // auto_location_minimum_accuracy: 20,
      // manual_location_enabled: false,
      media_gallery_enabled: true,
      // media_capture_enabled: true,
      // photo_quality: '2048',
      // video_quality: '720p',
      drafts_enabled: false
      // edit_locations_enabled: true,
      // edit_durations_enabled: true
      };
      SETFORMATTRIBUTES(config);

    // set fields to read-only
    var fieldArray = ['element_','activity_','defect','action','responsibility','document_reference','comments','photos_','videos_']
    fieldArray.forEach(function(dataName) 
    {
      SETREADONLY(dataName, true);
    });

    // filter status field
    SETSTATUSFILTER(['Query - استعلام','Work in progress - تقدم العمل','Request for Inspection - طلب للفحص','Revision in progress - قيد المراجعة']);
  }

  // if the current role is project management (PO, PM, RE)
  if (ISROLE(management))
  {
    // contractor can edit records with some status and add all fields
    
    // set fields to read-only
    var fieldArray = ['contractor_comments_']
    fieldArray.forEach(function(dataName) 
    {
      SETREADONLY(dataName, true);
    });

    // filter status field
    SETSTATUSFILTER(['Documentation - توثيق','Site instruction - تعليمات الموقع','Instruction draft - مسودة التعليمات ','Query - استعلام','Request for Inspection - طلب للفحص','Work Request - طلب عمل','Approved - موافق عليه','Rejected - مرفوض','Revise and resubmit - مراجعة و إعادة تقديم','Final approval - الموافقة النهائية']);
  }
});




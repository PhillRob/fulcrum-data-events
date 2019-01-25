ON('new-record', function(event) {
  var adminRoles = ['Inspector','Owner'];
    var rangerRoles = ['[THM] Ranger'];
  
  // if current role is not admin, inspector but ranger
  if (rangerRoles.indexOf(ROLE()) !== -1) {
    // ranger fields
  SETCHOICEFILTER('issue_type', ['Fence damage - (اضرار السياج (الشبك','Illegal Hunters - الصيد غير القانوني','Wildlife -  الحيوانات البرية','Speeding - السرعه','Wildlife disturbance - ازعاج (اضطراب )الحياة البرية','Waste Dumping - إلقاء النفايات','Flying - طيران']);
    SETHIDDEN('issue_status', true);
    SETHIDDEN('action_required_in_weeks', true);
    SETHIDDEN('recording_date', true);
    SETHIDDEN('responsibility', true);
    SETHIDDEN('location_description', true);
    SETHIDDEN('videos', true);
    SETSTATUS('Ranger Issue');
    SETSTATUSFILTER('Ranger Issue');
    }
  // if the current role is one of the designated admin roles...
    if (adminRoles.indexOf(ROLE()) !== -1) {
    SETCHOICEFILTER('issue_type', ['Road & trails','Natural area & outdoor','Fence','Water tank','Campsite','Buildings & structures']);
      SETSTATUSFILTER(null);
  }
  
});

ON('edit-record', function(event) {
  var adminRoles = ['Inspector','Owner'];
    var rangerRoles = ['[THM] Ranger'];
  
  // if current role is not admin, inspector but ranger
  if (rangerRoles.indexOf(ROLE()) !== -1) {
    // ranger fields
    ON('validate-record', function (event) {
      // Do something to validate the record and call INVALID('message') if there is an error.
      if ('issue_type' == 'Buildings & structures' || 'Campsite'  || 'Fence'  || 'Natural area'  || 'Road & trails');
      ALERT('Issue submitted', 'This record has alread been submitted. Your changes will not be saved. Please create a new record');    
        INVALID('This record has alread been submitted. Your changes will not be saved. Please create a new record. ');});
  SETCHOICEFILTER('issue_type', ['Fence damage - (اضرار السياج (الشبك','Illegal Hunters - الصيد غير القانوني','Wildlife -  الحيوانات البرية','Speeding - السرعه','Wildlife disturbance - ازعاج (اضطراب )الحياة البرية','Waste Dumping - إلقاء النفايات','Flying - طيران']);
    SETHIDDEN('issue_status', true);
    SETHIDDEN('action_required_in_weeks', true);
    SETHIDDEN('recording_date', true);
    SETHIDDEN('responsibility', true);
    SETHIDDEN('location_description', true);
    SETHIDDEN('videos', true);
    SETSTATUS('Ranger Issue');
    SETSTATUSFILTER('Ranger Issue');
    }
  // if the current role is one of the designated admin roles...
  if (adminRoles.indexOf(ROLE()) !== -1) {
      SETSTATUSFILTER(null);
}
  
});
// limit field specific editing to certain user groups (roles) using data events in fulcrumapp

ON('load-repeatable','repeatable field name', function(event) {
  var adminRoles = ['user role name'];
  // if user is part of user role name mentioned above than the following rules apply...
  SETREADONLY('field name in repeatable section', true);
  if (adminRoles.indexOf(ROLE()) !== -1) {
    // if not part of the roles above
  SETREADONLY('field name in repeatable section', false);
  }
});
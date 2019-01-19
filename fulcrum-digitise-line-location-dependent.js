// create line feature dependent on time and distance between points
var lineCoords = [],
  digitizeLine;

ON('click', 'start_digitizing', function(event){
	lineCoords = [];
	digitizeLine = SETINTERVAL(function() {
		if (CURRENTLOCATION()) {
			if (lineCoords.length > 0){
			var buffer = 0.0003;
			var latitude = CURRENTLOCATION().latitude;
			var longitude = CURRENTLOCATION().longitude;
			var lng = lineCoords[lineCoords.length-1].split(" ")[0];
			var lat = lineCoords[lineCoords.length-1].split(" ")[1];	
			var minLatitude = lat - buffer;
			var maxLatitude = lat + buffer;
			var minLongitude = lng - buffer;
			var maxLongitude = lng + buffer;
			if (latitude >= maxLatitude || latitude <= minLatitude || longitude >= maxLongitude || longitude <= minLongitude){
				lineCoords.push(CURRENTLOCATION().longitude + ' ' + CURRENTLOCATION().latitude)
				}
				else
				{ //do nothing
				}
			}
			else
			{
			lineCoords.push(CURRENTLOCATION().longitude + ' ' + CURRENTLOCATION().latitude)
			}
		}
	SETVALUE('line', 'LINESTRING (' + lineCoords + ')');
	}, 1000);
});

ON('click', 'stop_digitizing', function(event) {
  CLEARINTERVAL(digitizeLine);
});
// calclulation field to be filled based on nearest point ID

var location = CURRENTLOCATION()

// set points (geojson)
data = {
    "type": "FeatureCollection",
    "name": "g",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "ID": "1200" }, "geometry": { "type": "Point", "coordinates": [ 46.727646053286058, 24.819572517016688 ] } },
    { "type": "Feature", "properties": { "ID": "1300" }, "geometry": { "type": "Point", "coordinates": [ 46.737249623490186, 24.818736079671677 ] } },
    { "type": "Feature", "properties": { "ID": "1400" }, "geometry": { "type": "Point", "coordinates": [ 46.730604728955001, 24.811251915298982 ] } }
    ]
}
var result = data.features

// function to calculate distance in KM
// source: https://www.geodatasource.com/developers/javascript

function findDistance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }



// this is for testing only
//var testlon = result[1].geometry.coordinates[1]
//var testlat = result[1].geometry.coordinates[0]

var array = []; // create an empty array

for (var i = 0; i < result.length; i++) {
  var lon = result[i].geometry.coordinates[1]
  var lat = result[i].geometry.coordinates[0]
  var id = result[i].properties.ID
  var kilometers = findDistance(LATITUDE(), LONGITUDE(), lat, lon, 'K');
  //var kilometers = findDistance(testlat, testlon, lat, lon, 'K');
  array.push({
    key: id,
    value: kilometers
});
};

var arraySorted = array.sort((a, b) => (a.value > b.value) ? 1 : -1)
SETRESULT(arraySorted[0].key) // return the first item (shortest distance)


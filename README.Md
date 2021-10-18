# Fulcrum Data Events
This is a list of `js` files that control data events in [fulcrumapp.com](https://www.fulcrumapp.com/). 

Files with uppercase abbreviations are project specific:
- DQ (tree, issue)
- OSM AMN (asset)
- WS (irrigation, construction, tree)
- WH (tree, issue)
- ~~KFR (tree, issue)~~
- KAR (tree, ~~issue)~~
- THM (issue, ~~elements)~~
- GR tree assessment
- GR Snagging
- BRT CBS Snagging v1.5 (including data events for station lookup)
- BRT Streetscape v1.5 (including data events for station lookup)

Files with lower case file names provide general solutions based on the [fulcrum documentation](https://developer.fulcrumapp.com/data-events/examples/).

- geofencing.js
- gps-info.js
- repeatable-fields-access-restrictions.js
- fulcrum-digitise-line-location-dependent.js
- populate-by-distance.js: returns ID of the closed geoJSON feature (included in script)

# Batch scripts for file naming
As fulcrum permits to batch export PDF reports only with the internal id as a name a couple of file management toys come in handy. 

- fulcrum-file-rename.sh
- fulcrum-file-delete.sh

# Custom Report Code
Those are customised report files based ton the fulcum documentation. 

## GR Snagging Report Badan
- body
- header
- footer
- styles
- script
## GR Snagging Report Zaid
- body
- header
- footer
- styles
- script    
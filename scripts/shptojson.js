"use strict"

var mapshaper = require('mapshaper')

mapshaper data/gadm36_BGD_shp/gadm36_BGD_2.shp -simplify dp 20% -o format=geojson data/gadm36_BGD_shp/gadm36_BGD_2.json

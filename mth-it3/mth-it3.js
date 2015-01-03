google.maps.event.addDomListener(window, 'load', initialize);
var streetView;
function initialize() {

var panoOptions = {
	pano: 'C',
	panoProvider: getCustomPanorama,
	zoomControlOptions: {
		position: google.maps.ControlPosition.TOP_LEFT,
		style:google.maps.ZoomControlStyle.SMALL
	}
}

	streetView = new google.maps.StreetViewPanorama(document.getElementById('map_canvas'),panoOptions);
	google.maps.event.addListener(streetView, "links_changed", createCustomLink);

}

function getCustomPanoramaTileUrl(panoID, zoom, tileX, tileY) {
	return "streetviews/mth-it3/" +panoID+ '/' + tileX + '-' +tileY + '.jpg';
}

function getCustomPanorama(panoID) {
var streetViewPanoramaData;

switch(panoID) {
	
	case "C":
	return {
 		location: {
		pano: "C",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
		copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 305,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	case "LL":
	return {
 		location: {
		pano: "LL",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 260,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	case "LR":
	return {
 		location: {
		pano: "LR",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
   		 copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 300,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	case "FR":
	return {
 		location: {
		pano: "FR",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
   		 copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 300,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	case "FL":
	return {
 		location: {
		pano: "FL",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 170,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	}
	
}

function createCustomLink() {

var links = streetView.getLinks();
var panoID = streetView.getPano();
  
switch(panoID) {
	
	
	case "C":
		links.push({
		description : "FR",
		pano : "FR",
		heading : 45
		});
		links.push({
		description : "LR",
		pano : "LR",
		heading : 135
		});
		links.push({
        	description : "LL",
        	pano : "LL",
        	heading : 225
		});
		links.push({
        	description : "FL",
        	pano : "FL",
		heading : 315
		})
	break;


	case "LL":
		links.push({
        	description : "C",
        	pano : "C",
        	heading : 50
		});
		links.push({
        	description : "LR",
        	pano : "LR",
        	heading : 90
		});
		links.push({
        	description : "FL",
        	pano : "FL",
        	heading : 0
		});
	break;


	case "LR":
		links.push({
        	description : "C",
        	pano : "C",
        	heading : 310
		});
		links.push({
        	description : "LL",
        	pano : "LL",
        	heading : 270
		});
		links.push({
        	description : "FR",
        	pano : "FR",
        	heading : 0
		});
	break;


	case "FR":
		links.push({
        	description : "C",
        	pano : "C",
        	heading : 225
		});
		links.push({
		description : "LR",
		pano : "LR",
        	heading : 180
		});
		links.push({
        	description : "FL",
        	pano : "FL",
        	heading : 270
		});
	break;


	case "FL":
		links.push({
		description : "C",
       		pano : "C",
        	heading : 130
		});
		links.push({
        	description : "LL",
        	pano : "LL",
        	heading : 180
		});
		links.push({
        	description : "FR",
        	pano : "FR",
        	heading : 90
		});
	break;


  }

}
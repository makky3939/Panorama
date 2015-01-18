google.maps.event.addDomListener(window, 'load', initialize);
var streetView;
function initialize() {

var panoOptions = {
	pano: 'w1',
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
	return "streetviews/outlet/" +panoID+ '/' + tileX + '-' +tileY + '.jpg';
}

function getCustomPanorama(panoID) {
  var streetViewPanoramaData;

switch(panoID) {
	case "w1":
	return {
 		location: {
		pano: "w1",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
			copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 320,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	case "w2-c":
	return {
 		location: {
		pano: "w2-c",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
   			 copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 310,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	case "w2-fl":
	return {
 		location: {
		pano: "w2-fl",
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

	case "w2-fr":
	return {
 		location: {
		pano: "w2-fr",
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

	case "w2-rc":
	return {
 		location: {
		pano: "w2-rc",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
    			copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 290,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	case "w2-rl":
	return {
 		location: {
		pano: "w2-rl",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
    			copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 345,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};

	case "w2-rr":
	return {
 		location: {
		pano: "w2-rr",
		latLng: new google.maps.LatLng(0, 0)
		},
		links: [],
    			copyright: 'Imagery(c)@_Makky_',
		tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		centerHeading: 290,
		getTileUrl: getCustomPanoramaTileUrl
		}
	};
  }
}

function createCustomLink() {

  var links = streetView.getLinks();
  var panoID = streetView.getPano();
  
  switch(panoID) {
    case "w1":
      links.push({
        description : "w2-rc",
        pano : "w2-rc",
        heading : 0
      })

      break;


    case "w2-rc":
      links.push({
        description : "w1",
        pano : "w1",
        heading : 180
      });
      links.push({
        description : "w2-rr",
        pano : "w2-rr",
        heading : 90
      });
      links.push({
        description : "w2-rl",
        pano : "w2-rl",
        heading : 270
      });
      links.push({
        description : "w2-c",
        pano : "w2-c",
        heading : 0
      })
      break;


      
    case "w2-rr":
      links.push({
        description : "w2-c",
        pano : "w2-c",
        heading : 315
      });
     links.push({
        description : "w2-fr",
        pano : "w2-fr",
        heading : 0
      });
     links.push({
        description : "w2-rc",
        pano : "w2-rc",
        heading : 270
      })
      break;


   case "w2-rl":
      links.push({
        description : "w2-c",
        pano : "w2-c",
        heading : 45
      });
      links.push({
        description : "w2-fl",
        pano : "w2-fl",
        heading : 0
      });
      links.push({
        description : "w2-rc",
        pano : "w2-rc",
        heading : 90
      })
      break;


   case "w2-c":
      links.push({
        description : "w2-fl",
        pano : "w2-fl",
        heading : 315
      });
      links.push({
        description : "w2-fr",
        pano : "w2-fr",
        heading : 45
      });
      links.push({
        description : "w2-rr",
        pano : "w2-rr",
        heading : 135
      });
      links.push({
        description : "w2-rc",
        pano : "w2-rc",
        heading : 180
      });
      links.push({
        description : "w2-rl",
        pano : "w2-rl",
        heading : 225
      })
      break;

   case "w2-fl":
      links.push({
        description : "w2-c",
        pano : "w2-c",
        heading : 135
      });
      links.push({
        description : "w2-fr",
        pano : "w2-fr",
        heading : 90
      });
      links.push({
        description : "w2-rl",
        pano : "w2-rl",
        heading : 180
      })
      break;

   case "w2-fr":
      links.push({
        description : "w2-c",
        pano : "w2-c",
        heading : 225
      });
      links.push({
        description : "w2-fl",
        pano : "w2-fl",
        heading : 270
      });
      links.push({
        description : "w2-rr",
        pano : "w2-rr",
        heading : 180
      })
      break;
  }
}
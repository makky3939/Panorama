window.onload = initialize;

function initialize() {

var panoOptions = {
	pano: 'mth-ground',
	panoProvider: getCustomPanorama,
	zoomControlOptions: {
		position: google.maps.ControlPosition.TOP_LEFT,
		style:google.maps.ZoomControlStyle.SMALL
	}
}

	var panorama = new google.maps.StreetViewPanorama(document.getElementById('map_canvas'),panoOptions);

}

function getCustomPanoramaTileUrl(panoID, zoom, tileX, tileY) {
	return "streetviews/" +panoID+ '/' + tileX + '-' +tileY + '.jpg';
}

function getCustomPanorama(panoID) {
	var streetViewPanoramaData = {
	links: [],
	copyright: 'Imagery (c) Makky',
	tiles: {
		tileSize: new google.maps.Size(256, 256),
		worldSize: new google.maps.Size(4096, 2048),
		getTileUrl: getCustomPanoramaTileUrl
	}
	};

	switch(panoID) {
		case "mth-ground":
		return streetViewPanoramaData;
	}

}
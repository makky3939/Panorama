app.controller 'PanoramaController', ($rootScope, $scope,
                                      $interval, Panorama) ->
  $scope.panoramaID = undefined
  $scope.touched = false

  unless $rootScope.panoramaID == undefined
    $scope.panoramaID = $rootScope.panoramaID
    $rootScope.panoramaID = undefined
  else
    $scope.panoramaID = Panorama.randomPanoramaId()

  $scope.zoomLevel = ->
    if document.documentElement.clientWidth > 1024
      return 0
    else
      return 2

  $scope.checkHasPosts = (panoramaID) ->
    panorama = Panorama.get panoramaID
    if panorama.spots?
      return "#{panoramaID}/#{panorama.spots[0]}"
    else
      return panoramaID

  $scope.initialize = ->
    panoOptions =
      pano: $scope.checkHasPosts($scope.panoramaID),
      panoProvider: $scope.getCustomPanorama,
      scrollwheel: false,
      zoomControl: false,
      pov:
        zoom: $scope.zoomLevel(),
        heading: 0,
        pitch: 0

    $scope.panorama = new google.maps.StreetViewPanorama(
      document.getElementById('panorama_canvas'), panoOptions
    )

    $scope.touchedDelay = ->
      $scope.touched = true
      setTimeout ->
        $scope.touched = false
      , 5000
      return

    document.getElementById('panorama_canvas')
      .addEventListener 'click', $scope.touchedDelay
    document.getElementById('panorama_canvas')
      .addEventListener 'touchstart', $scope.touchedDelay
    document.getElementById('panorama_canvas')
      .addEventListener 'touchmove', $scope.touchedDelay

    return

  $scope.setPov = ->
    if $scope.touched == false
      pov = $scope.panorama.getPov()
      pov.heading += 0.015
      pov.zoom = $scope.zoomLevel()
      $scope.panorama.setPov(pov)
    return

  $scope.getCustomPanoramaTileUrl = (panoID, zoom, tileX, tileY) ->
    return "/image/panorama/" +panoID+ '/' + tileX + '-' +tileY + '.jpg'

  $scope.getCustomPanorama = (panoID) ->
    streetViewPanoramaData =
      links: [],
      copyright: 'Imagery (c) Makky',
      tiles:
        tileSize: new google.maps.Size(256, 256),
        worldSize: new google.maps.Size(4096, 2048),
        getTileUrl: $scope.getCustomPanoramaTileUrl
    return streetViewPanoramaData

  google.maps.event.addDomListener(window, 'load', $scope.initialize())

  $interval($scope.setPov, 1)
  return 0
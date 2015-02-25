app.controller 'ChooseController', ($rootScope, $scope,
                                    $state, $location, Panorama) ->
  
  $scope.panorama = Panorama.all

  $scope.thumbnailPath = (panoramaID) ->
    return "/image/panorama/#{panoramaID}/#{panoramaID}.png"

  $scope.choice = (panoramaID) ->
    $rootScope.panoramaID = panoramaID
    $state.go 'panorama'

  unless $location.search()['panorama_id'] == undefined
    $scope.choice $location.search()['panorama_id']

  return
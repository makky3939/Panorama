app.config ($stateProvider) ->
  $stateProvider
    .state 'panorama',
      controller: 'PanoramaController'
      templateUrl: '/view/panorama.html'
      url: '/'

    .state 'choose',
      controller: 'ChooseController'
      templateUrl: '/view/choose.html'
      url: '/choose'
  return

app.config ($locationProvider) ->
  $locationProvider.html5Mode {
    enabled: true
    requireBase: false
  }
  return 0

  $urlRouterProvider.otherwise ($injector) ->
    $injector.get('$state').go 'panorama'
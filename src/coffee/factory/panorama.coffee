app.factory 'Panorama', ($rootScope) ->
  panorama =
    'ashikaga-institute-of-technology': {}
    'ibaraki-prefectural-library': {}
    'kairakuen-1': {}
    'kairakuen-2': {}
    'kasuga_4': {}
    'kasuga-ground-night': {}
    'mito-station': {}
    'mth-e-autum': {}
    'mth-e-spring': {}
    'mth-e-summer': {}
    'mth-e-winter': {}
    'mth-ground': {}
    'mth-it3':
      'spots': ['C']
    'mth-library':
      'spots': ['a_1']
    'outlet':
      'spots': ['w2-c']
    'ritumeikan-dormitory': {}
    'ritumeikann': {}
    'senba-lake-sunset': {}
    'senba-lake': {}
    'senba-lake2': {}
    'tukuba-bunkyo': {}
    'tukuba-center': {}
    'tukuba-centerlib': {}

  all: panorama
  ids: Object.keys panorama
  get: (panoramaID) ->
    panorama[panoramaID]
  randomPanoramaId: ->
    ids = Object.keys panorama
    length = ids.length - 1
    id = Math.floor(Math.random() * length)
    ids[id]
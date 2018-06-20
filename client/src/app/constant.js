var app = angular.module('ace.Constant', [])
    .constant('GENERAL_CONFIG', {
        'api_url': '/',
        'theme': 'graspr',
        'preferredLanguage': 'en',
    })
    .constant('ImgLazyLoad', {
        'AnimateVisible': "true",
        'AnimateSpeed': '0.3s'
    });

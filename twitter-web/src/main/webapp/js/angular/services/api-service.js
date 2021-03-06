var twitterAPIService = angular.module('twitterWeb.APIService', ['ngResource']);

twitterAPIService.factory('SimpleUser', ['$resource', function($resource) {
	return $resource(SETTINGS.apiHostName + 'get-simple-user', { }, {
						get: { isArray: false, method: 'get'}
	});
}]);

twitterAPIService.factory('User', ['$resource', function($resource) {
	return $resource(SETTINGS.apiHostName + 'get-user', { }, {
						get: { isArray: false, method: 'get'}
	});
}]);

twitterAPIService.factory('Document', ['$resource', function($resource) {
	return $resource(SETTINGS.apiHostName + 'get-document', { }, {
						post: { isArray: false, method: 'post'}
	});
}]);

twitterAPIService.factory('FollowersList', ['$resource', function($resource) {
	return $resource(SETTINGS.apiHostName + 'get-followers-list', { }, {
						list: { isArray: true, method: 'get'}
	});
}]);

twitterAPIService.factory('KeywordUserList', ['$resource', function($resource) {
	return $resource(SETTINGS.apiHostName + 'get-keyword-user-list', { }, {
						list: { isArray: true, method: 'get'}
	});
}]);
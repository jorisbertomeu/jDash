'use strict';

angular.module('jDash.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $sce, $compile) {
	var ctrl = this;

	$scope.trustHtml = trustHtml;
	$scope.compileHtml = compileHtml;

	$scope.plugins = [];

	onInit();

	function trustHtml(html) {
		return $sce.trustAsHtml(html);
	}

	function compileHtml(html, scope) {
		return $compile(html)($scope);
	}

	function loadPlugins() {
		$scope.plugins.push({
			content: {
				title: 'Infos',
				html: '{{plugins}}'
			},
			author: {
				name: 'Joris Bertomeu',
				email: 'joris.bertomeu@gmail.com'
			},
			release: {
				date: '2017/02/01',
				license: 'MIT'
			}
		});
		console.log($scope.plugins);
	}

	function onInit() {
		console.log('Ici');
		$('#pinBoot').pinterest_grid({
	        no_columns: 4,
	        padding_x: 10,
	        padding_y: 10,
	        margin_bottom: 50,
	        single_column_breakpoint: 700
	    });
	    loadPlugins();
    };

});
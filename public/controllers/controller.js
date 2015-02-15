var kamiApp = angular.module('kamiApp', ['ngSanitize']);

kamiApp.controller('AppCtrl', ['$scope', '$http',function($scope, $http){
	console.log("Hello from controller!");

	var refresh = function(){
		$http.get("/kamilist/").success(function (res){
			console.log("Data received");

			$scope.kamilist = res;
			$scope.kami = "";
		});
	};

	var num = 0;
	var total = parseInt(num);
	
	refresh();

	$scope.addEvent = function(){
		console.log($scope.kami);
		$http.post('/kamilist/', $scope.kami).success(function (res){
			console.log(res);
			total = total + parseInt($scope.kami.hours);
			console.log(total)
			refresh();
		});
	};

	$scope.total = total;

	$scope.remove = function (id){
		console.log(id);
		$http.delete('/kamilist/' + id).success(function (res){
			refresh();
		});
	};


	$scope.deselect = function(){
		$scope.kami = "";
	};

}]);
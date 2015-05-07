var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, MyService) {
	
	$scope.getData = function() {
		$scope.quotes = MyService.getData();
	}

	$scope.getData();

	$scope.addData = function() {
		var newOne = {
			text: $scope.text,
			author: $scope.author
		}
		$scope.newQuote = MyService.addData(newOne);
	}

	$scope.addData();

	$scope.removeData = function() {
		$scope.deleted = MyService.removeData($scope.text);
	}

	$scope.removeData();

	$scope.remove = function(quote) {
		MyService.removeData(quote.text);
	}
	
})
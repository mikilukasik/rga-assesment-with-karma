		var appModule = angular.module("app", ['ng','ngMock']);
		appModule.controller("ApplicationController", ApplicationController);

		function ApplicationController($scope, $http) {

			$scope.genders = ['Male', 'Female']
			$scope.percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
			$scope.genderStats = []
			$scope.viewName = './mainPage.html'

            var resetChosen = function() {
				$scope.chosen = {
					gender: 'Chose a gender',
					percentage: 'Chose a percentage'
				}
			}

			$scope.removeGender = function(index) {
				$scope.genderStats.splice(index, 1)
			}

			$scope.addGender = function(data) {
				if (data.gender != 'Chose a gender' && data.percentage != 'Chose a percentage') {

					$scope.genderStats.push( {
						gender: data.gender,
						percentage: data.percentage,
						isData: true
					})
					resetChosen()
				}
			}

			$scope.showView = function(viewName) {
				$scope.viewName = viewName
				switch (viewName) {
					case 'demo1.html':
						$http.get('https://data.gov.uk/data/api/service/health/pharmacies/partial_postcode?partial_postcode=TW8').then(function(res) {
							$scope.pharmacies = res.data.result
							$scope.pharmacyIndex = 0
						}, function(err) {
							throw new Error('GET failed:', err)
							//try jsonp here

						})
						break;
					case 'demo2.html':
						resetChosen()
						break;
				}
			}
		}

describe('sorting the list of users', function() {
   beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('App loads up percentages collection', function(done) {
    var $scope = {}
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    var appController = $controller("ApplicationController", {$scope:$scope})
    
    
    
    expect($scope.percentages.length).toBe(11)
    //console.log("@@@@", $scope)
    $scope.showView("demo1.html")

    setTimeout( function() {
      expect($scope.viewName).toBe("demo1.html")
      done()
    }, 1000)
    // your test assertion goes here
  });
});
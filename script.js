
var myApp=angular
                .module("myModule",[])
                .controller("myController",function($scope){
	                  var country={
		                      name:"Canada",
	                          capital:"Ottawa",
		                      flag:"img/canada.png"
	                  };
	                  $scope.country=country;
				 
				      $scope.message="hello Angular!!!";
					  
					  var employee={
						  firstName:"ozan",
						  lastName:"ocak",
						  gender:"male"
					  }
					  $scope.employee=employee;
               });
			   

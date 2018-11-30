var app = angular.module( 'websiteApp', [] );

app.controller('emailController', ['$scope','$http',
	function($scope,$http){
		$scope.flag = false;
		$scope.error = "";
		$scope.data = {};
		$scope.response = "";
		$("#submitButton").prop("disabled", true);

		$scope.calcAge = function(){
			var birthday = new Date();
			birthday.setFullYear(1994, 7, 13);
			var ageDifMs = Date.now() - birthday.getTime();
		    var ageDate = new Date(ageDifMs);
		    $scope.age = Math.abs(ageDate.getUTCFullYear() - 1970);
		}

		$scope.validateForm = function() {
			$scope.data.fname = $scope.fname;
			$scope.data.lname = $scope.lname;
			$scope.data.email = $scope.email;
			$scope.data.phone = $scope.phone;
			$scope.data.comments = $scope.comments;
			
			$scope.sendEmail();
		}

		$scope.validForm = function(){
			if($scope.fname == undefined || $scope.lname == undefined || $scope.email == undefined || $scope.comments == undefined)
				return false;
			
			var data1 = $scope.fname.replace(/\s/g, '');
			var data2 = $scope.lname.replace(/\s/g, '');
			var data3 = $scope.email.replace(/\s/g, '');
			var data4 = $scope.comments.replace(/\s/g, '');
			
			if(data1 == "" || data2 == "" || data3 == "" || data4 == "")
				return false;
			
			return true;
		}

		$scope.validateFeild = function(val, id){
			var data;
			if(val == undefined){
				$("#"+id).addClass('errorClass');
				data = "";
			}
			else
				data = val.replace(/\s/g, '');
			if(data == "")
				$("#"+id).addClass('errorClass');
			else
				$("#"+id).removeClass('errorClass');
			if($scope.validForm())
				$("#submitButton").prop("disabled", false);
			else
				$("#submitButton").prop("disabled", true);
		}

		$scope.sendEmail = function(){
			console.log($scope.data);
			$http({
				url : "send.php",
				method : 'POST',
				headers : {	"Content-Type": "application/json"	},
				data : $scope.data
			})
			.then(function(response, status, headers, config) {
				console.log(response);
				$scope.response = "Email Sent Successfully";
			});
		}
	}
]);
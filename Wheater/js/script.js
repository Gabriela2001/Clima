/*01000111 01100001 01100010 01110010 01101001 01100101 01101100 01100001 00100000 01010010 01101111 01100011 01100001*/
var p = angular.module("p",[])
p.controller("ClimaCtrl",function($scope,$rootScope,$http){

	$scope.Listado = [];

	$scope.ObtenerClima = function(y) {
		$http({
			method: "GET",
			url: "http://api.openweathermap.org/data/2.5/forecast?q="+y+",GT&APPID=f74006d77c6256a75842bc2ede1dda31"
		}).then(function Datos(variable) {
			console.log(variable)
			$scope.Listado = [];
			$scope.PaisIngresado="";
			$scope.Listado.push(variable);
		})
	}


})


	

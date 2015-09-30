(function(){
    
    var app = angular.module('demon-rpg');
    app.controller('combat-controller', function ($scope) {

        $scope.$on('beginCombat', function(event, combatInfo){

            $scope.player = combatInfo.player;
            $scope.enemies = combatInfo.enemies;
        });

        $scope.selectAbility = function(ability){

        	if(!ability.isReady())
        		return;

        	$scope.resetSelection();
        	$scope.currentAbility = ability;

        	if(ability.targets == 'single_enemy')
        		$scope.targettingMode = 'single_enemy';
        	else 
        		$scope.resolveAbility();
        };

        $scope.selectTarget = function(target){

            if($scope.targettingMode != 'single_enemy')
                return;
            
        	$scope.currentTarget = target;
        	$scope.resolveAbility();
        };

        $scope.resetAbility = function(){

        	$scope.resetSelection();

        };

        $scope.resolveAbility = function(){

        	$scope.resetSelection();
        };
    });

}).call();
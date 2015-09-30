var $GAMESCOPE;

(function(){
    
    var app = angular.module('demon-rpg');
    app.controller('game-controller', function ($scope) {

    	$GAMESCOPE = $scope;

        $scope.SCREEN_NAMES = [
            'combat',
            'init'
        ];

        $scope.beginCombat = function(){

            $scope.game.beginCombat();
	        $scope.screen = 'combat';
	        $scope.$broadcast('beginCombat', $scope.game.combatInfo);
        };

        $scope.screen = 'init';
        $scope.game = new Game();
    });

}).call();
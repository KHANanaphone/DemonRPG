var Demon = {

	defs: {},
	init: function(obj){

		obj.name = '[NAME NEEDED]';
		obj.level = 1;
		obj.exp = 0;
		obj.expScaling = 100;
		obj.nextExp = 100;
		obj.ap = 100;
		obj.maxAp = 100;
		obj.baseStats = {
			attack: 4,
			defense: 4,
			intelligence: 4
		};

		obj.items = [null, null, null, null];

		obj.recalculate = function(){

			
		};
	}
};
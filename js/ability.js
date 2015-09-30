var Ability = {
	defs: {},
	init: function(obj, demon){

		obj.demon = demon;
		obj.name = 'NAME MISSING',
		obj.targets = 'single_enemy',
		obj.type = null,
		obj.ap = 999;

		obj.description = function(){
			return 'DESCRIPTION MISSING';
		};

		obj.isReady = function(){

			if(this.demon.ap < this.ap)
				return false;

			return true;
		};
	}
};
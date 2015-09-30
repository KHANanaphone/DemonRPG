var EnemyAbility = {

	defs: {},

	init: function(obj, enemy){

		obj.enemy = enemy;
		obj.name = 'NAME MISSING';
		obj.type = null;

		obj.cooldown = 3; //-1 for only once or triggered
		obj.startup = 3;
		obj.ticks = 0;

		obj.isActive = function(){

			return true;
		};

		obj.resolve = function($combatscope){

			return [];
		};

		obj._isReady = function(){

			if(!this.isActive())	
				return false;

			if(this.ticks - this.startup >= 0 && 
			   this.ticks % this.cooldown == 0)
				return true;
		};

		obj._tick = function(){

			if(!this.isActive())
				return;

			this.ticks++;
		};

		obj._dealDamage = function($combatScope){

			var damage = this.power;
			$combatScope.damagePlayer(damage);			
		};
	}
};
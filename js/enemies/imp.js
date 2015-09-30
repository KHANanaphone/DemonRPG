Enemy.defs.Imp = function(){

	Enemy.init(this);
	this.level = 1;
	this.exp = 30;
	this.maxHp = 50;

	this.attack = 5;
	this.defense = 2;

	this.abilities = [

	];
};

EnemyAbility.defs.imp = {

	Firebolt : function(enemy){

		EnemyAbility.init(this, enemy);
		this.name = 'Firebolt';
		this.type = 'fire';

		this.cooldown = 3;
		this.startup = 3;
		this.power = 5

		this.resolve = function($combatScope){

			this._dealDamage($combatScope);
		};
	}
};
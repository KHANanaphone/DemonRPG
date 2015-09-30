Demon.defs.Slasher = function(player){

	Demon.init(this);
	this.player = player;
	this.name = 'Slasher';
	this.expScaling = 100;
	this.baseStats = {
		attack: 5,
		defense: 3,
		intelligence: 3
	};

	this.items[0] = new Item({
		name: 'Generic Item',
		ability: new Ability.defs.slasher.Slash(this),
		bonuses: []
	});
};

Ability.defs.slasher = {
	Slash : function(demon){

		Ability.init(this, demon);
		this.name = 'Slash';
		this.type = 'fire';
		this.ap = 25;
		this.description = function(){
			'Slashes the enemy';
		};
	}
};
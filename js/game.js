function Game(){

	this.player = new Player();
	this.combatInfo = null;
};

Game.prototype.beginCombat = function(){

	this.combatInfo = {
		player: this.player,
		enemies: []
	};
};
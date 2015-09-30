function Player(){

	this.level = 1;
	this.exp = 0;
	this.nextExp = 100;
	
	this.health = 100;
	this.maxHealth = 100;

	this.demons = [new Demon.defs.Slasher(this), null, null];
};
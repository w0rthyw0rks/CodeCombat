// Use your cleverest programming tricks to outwit and overpower your opponent!
var enemies = hero.findEnemies();
var bigHealth = 0;
var i = 0;
var opponentHero = null;

while(i < enemies.length) {
    var enemy = enemies[i];
    if (enemy.health > bigHealth) {
        bigHealth = enemy.health;
        opponentHero = enemy;
    }
    i++;
}



hero.wait(1);

if (opponentHero) {
    while(opponentHero.health > 0) {
 
    var archers = hero.findByType("archer");
    var soldiers = hero.findByType("soldier");
    var friends = hero.findFriends();
    
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (friend) {
            hero.command(friend, "attack", opponentHero);
        }
    }
 
        if (hero.health > 600) {
            hero.attack(opponentHero);
        }
        else {
            break;
        }
    }
    hero.moveXY(opponentHero.pos.x - 15, opponentHero.pos.y);
    hero.wait(2);
    while(opponentHero.health > 0) {
            hero.attack(opponentHero);
        }
}

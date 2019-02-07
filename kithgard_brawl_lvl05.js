// Survive the waves of ogres.
// If you win, the level gets harder, and gives more rewards.
// If you lose, you must wait a day to re-submit.
// Each time you submit gives a new random seed.

while(true) {
    var nearestThrower = null;
    var minDistance = 9999;
    var bigHealth = 0;
    var bigBoy = null;
    var i = 0;
    var enemies = hero.findEnemies();

    while (i < enemies.length) {
        var target = enemies[i];
        i += 1;
        var distance = hero.distanceTo(target);
        if ((target.type == "thrower" || target.type == "shaman") && distance < minDistance) {
            minDistance = distance;
            nearestThrower = target;
        }
        if (target.health > bigHealth) {
            bigHealth = target.health;
            bigBoy = target;
        }
    }

    if (nearestThrower || bigBoy) {
            if (nearestThrower) {
                while (nearestThrower.health > 0) {
                    if (hero.health <= 1000) {
                        var item = hero.findNearestItem();
                        if (item) {
                            hero.moveXY(item.pos.x, item.pos.y);
                        }            
                    }
                    if (hero.isReady("cleave")) {
                        hero.cleave(nearestThrower);
                    }
                    else {
                        hero.attack(nearestThrower);
                    }
                }
            }
            else if (bigBoy) {
                while (bigBoy.health > 0) {
                    if (hero.health <= 1000) {
                        var item = hero.findNearestItem();
                        if (item) {
                            hero.moveXY(item.pos.x, item.pos.y);
                        }            
                    }
                    if (hero.isReady("cleave")) {
                        hero.cleave(bigBoy);
                    }
                    else {
                        hero.attack(bigBoy);
                    }
                }
            }
        }
}

// Stay alive for two minutes.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.

while(true) {
    var nearest = null;
    var minDistance = 9999;
    var i = 0;
    var enemies = hero.findEnemies();

    while (i < enemies.length) {
        var target = enemies[i];
        i += 1;
        var distance = hero.distanceTo(target);
        if (target.type != "sand-yak" && distance < minDistance) {
            minDistance = distance;
            nearest = target;
        }
    }

    if (nearest) {
        while(nearest.health > 0) {
            hero.attack(nearest);
        }
    }
}

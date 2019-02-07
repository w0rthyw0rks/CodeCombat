// Walk to a few points around the ogre camps, defeating any enemies along the way.
// Visit the statue to begin the event.
// Stand your ground and defeat the attacking ogres.

// Hint: fight close to the statue for it's assistance during the battle.

// After you defeat all of the waves, you will have to face off against the Ancient Cyclops!

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        while(enemy.health > 0) {
            hero.attack(enemy);
            if (hero.health < 800) {
                hero.moveXY(57, 77);
            }
        }
    }
    else {
        hero.moveXY(57, 77);
    }
}

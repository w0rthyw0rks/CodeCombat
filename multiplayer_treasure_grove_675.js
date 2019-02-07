// Be the first to 100 gold!
// If you are defeated, you will respawn at 67% gold.
while (true) {
    //  Find coins and/or attack the enemy.
    // Use flags and your special moves to win!
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
    }
    var item = hero.findNearestItem();
    if (item) {
        hero.move(item.pos);
    }
}

// Defend your towers in this replayable challenge level!
// Step on an X if you have 20 gold to build a soldier.

function valueOverDistance(item) {
    return item.value / hero.distanceTo(item);
}

function findBestItem(items) {
    var bestItem = null;
    var bestValue = 0;
    var itemsIndex = 0;

    while(itemsIndex < items.length) {
        var item = items[itemsIndex];
        if (valueOverDistance(item) > bestValue) {
            bestValue = valueOverDistance(item);
            bestItem = item;
        }
        itemsIndex += 1;
    }
    return bestItem;
}

while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy && enemy.pos.x > 44) {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
    }
    else {
        var coins = hero.findItems();
        var coin = null;
        coin = findBestItem(coins);
        if(coin) {
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
        if (hero.gold >= 20) {
            hero.moveXY(84, 51);
        }
    }
}

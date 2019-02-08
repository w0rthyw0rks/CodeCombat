// Collect 100 gold from two or three groves.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.

function valueOverDistance(item) {
    return item.value / hero.distanceTo(item);
}

// Return the item with the highest valueOverDistance(item)
function findBestItem(items) {
    var bestItem = null;
    var bestValue = 0;
    var itemsIndex = 0;
    
    // Loop over the items array.
    // Find the item with the highest valueOverDistance()
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
    if (enemy && hero.isReady("cleave")) {
            hero.cleave(enemy);
        }
    else {
        var coins = hero.findItems();
        var coin = null;
        coin = findBestItem(coins);
        if(coin) {
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
    }
}

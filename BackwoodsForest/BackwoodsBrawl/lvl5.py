while True:
    punk = hero.findNearestEnemy()
    if punk:    
        if hero.isReady("chain-lightning"):
            hero.cast("chain-lightning", punk)
        if punk.health > 0:
            hero.attack(punk)

# Stay alive longer than the enemy hero!

while True:
    punk = hero.findNearestEnemy()
    if punk:
        if punk.pos.x > 80:
            if hero.isReady("cleave"):
                hero.cleave(punk)
            if hero.isReady("throw") and hero.distanceTo(punk.pos) < hero.throwRange:
                hero.throw(punk)
            if hero.canCast("chain-lightning", punk) and hero.distanceTo(punk.pos) < 30:
                hero.cast("chain-lightning", punk)
            else:
                hero.attack(punk)

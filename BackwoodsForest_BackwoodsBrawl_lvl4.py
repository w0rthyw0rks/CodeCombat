# Stay alive for one minute.
# If you win, it gets harder (and more rewarding).
# If you lose, you must wait a day before you can resubmit.
# Remember, each submission gets a new random seed.
while True:
    punk = hero.findNearestEnemy()
    distance = hero.distanceTo(punk)
    if distance < 5:
        if hero.isReady("cleave"):
            hero.cleave(punk)
        else:
            hero.attack(punk)
    else:
        hero.attack(punk)

input.onSound(DetectedSound.Loud, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        music.stopMelody(MelodyStopOptions.All)
        music.setVolume(127)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
        music.setVolume(50)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
input.setSoundThreshold(SoundThreshold.Loud, 150)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(500)
    sprite.ifOnEdgeBounce()
})

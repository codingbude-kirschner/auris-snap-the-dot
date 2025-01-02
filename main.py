def on_sound_loud():
    if sprite.get(LedSpriteProperty.X) == 2:
        game.add_score(1)
    else:
        music.stop_melody(MelodyStopOptions.ALL)
        music.set_volume(127)
        music._play_default_background(music.built_in_playable_melody(Melodies.WAWAWAWAA),
            music.PlaybackMode.UNTIL_DONE)
        music.set_volume(50)
        music._play_default_background(music.built_in_playable_melody(Melodies.WEDDING),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        game.game_over()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

sprite: game.LedSprite = None
sprite = game.create_sprite(2, 2)

def on_forever():
    sprite.move(1)
    basic.pause(500)
    sprite.if_on_edge_bounce()
basic.forever(on_forever)

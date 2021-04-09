input.onButtonPressed(Button.A, function () {
    jugador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jugador.change(LedSpriteProperty.X, 1)
})
let obstacle_2: game.LedSprite = null
let obstacle: game.LedSprite = null
let jugador: game.LedSprite = null
jugador = game.createSprite(2, 4)
let puntuacio = 0
basic.forever(function () {
    basic.pause(randint(1000, 2000))
    obstacle = game.createSprite(randint(0, 4), 0)
    obstacle_2 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        obstacle.change(LedSpriteProperty.Y, 1)
        obstacle_2.change(LedSpriteProperty.Y, 1)
    }
    if (jugador.isTouching(obstacle) || jugador.isTouching(obstacle_2)) {
        game.pause()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
        led.plotBarGraph(
        0,
        25
        )
        basic.pause(500)
    }
    puntuacio = 0
    basic.pause(200)
    puntuacio += 1
    obstacle.delete()
    obstacle_2.delete()
})

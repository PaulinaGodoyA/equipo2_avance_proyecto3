input.onButtonPressed(Button.A, function () {
    serpiente.move(1)
})
input.onButtonPressed(Button.B, function () {
    serpiente.move(-1)
})
let serpiente: game.LedSprite = null
serpiente = game.createSprite(randint(0, 4), randint(0, 4))
let manzana = game.createSprite(randint(0, 4), randint(0, 4))
manzana.change(LedSpriteProperty.Brightness, -100)

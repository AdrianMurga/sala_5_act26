input.onPinPressed(TouchPin.P0, function () {
    short_people = 0
    medium_height = 0
    tall_people = 0
    for (let index = 0; index < 30; index++) {
        height = randint(100, 200)
        if (height <= 150) {
            basic.showNumber(height)
            basic.showString("Short person")
            height_sum += height
            short_people += 1
        } else if (height >= 151 && height <= 170) {
            basic.showNumber(height)
            basic.showString("Medium height")
            height_sum += height
            medium_height += 1
        } else if (height >= 171) {
            basic.showNumber(height)
            basic.showString("Tall person")
            height_sum += height
            tall_people += 1
        }
    }
    basic.showString("Short people=")
    basic.showNumber(short_people)
    basic.showString("Medium height=")
    basic.showNumber(medium_height)
    basic.showString("Tall people=")
    basic.showNumber(tall_people)
    basic.showString("Average height")
    basic.showNumber(height_sum / 2)
})
input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
    if (dice == 1 || dice == 3) {
        basic.showString("Team green")
        team_green += 1
    } else if (dice == 2 || dice == 5) {
        basic.showString("Team blue")
        team_blue += 1
    } else {
        basic.showString("Team red")
        team_red += 1
    }
    basic.showString("Team green")
    basic.showNumber(team_green)
    basic.showString("Team blue")
    basic.showNumber(team_blue)
    basic.showString("Team red")
    basic.showNumber(team_red)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        random = randint(1, 100)
        basic.showNumber(random)
        if (random % 2 == 0) {
            basic.showString("Even")
            even += 1
        } else {
            basic.showString("Odd")
            odd += 1
        }
    }
    basic.showString("Even numbers =")
    basic.showNumber(even)
    basic.showString("Odd numbers =")
    basic.showNumber(odd)
})
let random = 0
let dice = 0
let height_sum = 0
let height = 0
let tall_people = 0
let medium_height = 0
let short_people = 0
let team_red = 0
let team_blue = 0
let team_green = 0
let even = 0
let odd = 0
odd = 0
even = 0
team_green = 0
team_blue = 0
team_red = 0

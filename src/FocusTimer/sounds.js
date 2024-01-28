import { inputRange } from "./elements.js"

// construtor de áudio --> new Audio()

export const buttonPressAudio = new Audio("./assets/sounds/button-press.wav")
buttonPressAudio.volume = 0.2

export const kitchenTimer = new Audio("./assets/sounds/kitchen-timer.mp3")
kitchenTimer.volume = 0.01

export const forestAudio = new Audio("./assets/sounds/forest.wav")
forestAudio.volume = inputRange.value / 100
forestAudio.loop = true

export const rainAudio = new Audio("./assets/sounds/rain.wav")
rainAudio.volume = inputRange.value / 100
rainAudio.loop = true

export const coffeShopAudio = new Audio("./assets/sounds/coffe-shop.wav")
coffeShopAudio.volume = inputRange.value / 100
coffeShopAudio.loop = true

export const fireplaceAudio = new Audio("./assets/sounds/fireplace.wav")
fireplaceAudio.volume = inputRange.value / 100
fireplaceAudio.loop = true
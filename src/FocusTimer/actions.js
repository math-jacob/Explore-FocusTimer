import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"
import { isSoundAlreadyPlaying, isSoundUndefined } from "./utils.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()

  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus() // vai focar no <span>minutes</span>
}

export function increaseTimer() {
  let newMinutes = Number(el.minutes.textContent) + 5
  newMinutes = newMinutes > 60 ? 60 : newMinutes
  
  sounds.buttonPressAudio.play()
  timer.updateDisplay(newMinutes, el.seconds.textContent)
}

export function decreaseTimer() {
  let newMinutes = Number(el.minutes.textContent) - 5
  newMinutes = newMinutes < 0 ? 0 : newMinutes
  
  sounds.buttonPressAudio.play()
  timer.updateDisplay(newMinutes, el.seconds.textContent)
}

export function setSound(sound) {
  // Se musica clicada é a que já está tocando --> Pausar e sair
  if (isSoundAlreadyPlaying(sound)) {
    pauseMusic()
    return
  }

  // Pausando música atual caso não for undefined
  if (!isSoundUndefined()) pauseMusic()

  // Atualizando o bgAudio para nova música
  updateSound(sound)

  // Tocando o bgAudio atualizado
  playMusic()
}

function pauseMusic() {
  state.bgAudio.file.pause()
  document.documentElement.classList.remove("music-on")

  state.isMute = true
  state.bgAudio.file = undefined
  state.bgAudio.name = undefined
}

function playMusic() {
  state.isMute = false

  document.documentElement.classList.add("music-on")
  state.bgAudio.file.play()
}

function updateSound(sound) {
  state.bgAudio.name = sound

  switch (sound) {
    case "forest":
      state.bgAudio.file = sounds.forestAudio
      break
    case "rain":
      state.bgAudio.file = sounds.rainAudio
      break
    case "coffe-shop":
      state.bgAudio.file = sounds.coffeShopAudio
      break
    case "fireplace":
      state.bgAudio.file = sounds.fireplaceAudio
      break
    default:
      return
  }
}
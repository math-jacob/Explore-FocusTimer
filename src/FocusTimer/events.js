import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import state from "./state.js"
import { updateDisplay } from "./timer.js"
import { isSoundUndefined, isSoundAlreadyPlaying, checkButtonPressed } from "./utils.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    if (!checkButtonPressed(event.target)) return

    // event.target é o elemento que o mouse clicou
    // dataset.action retorna o que foi definido na HTML property data-action
    const action = event.target.dataset.action
    
    if (typeof actions[action]() != "function") {
      return
    }

    /*
      actions["toggleRunning"]() === actions.toggleRunning()
      actions["set"]() === actions.set()
      actions["toggleMusic"]() === actions.toggleMusic()
    */
    actions[action]()
  })

  el.soundControls.addEventListener("click", (event) => {
    if (!checkButtonPressed(event.target) || event.target.nodeName === "BUTTON") return

    if (!isSoundUndefined()) {
      const previousSound = state.bgAudio.name
      document.getElementById(previousSound).classList.remove("selected")
    }
    
    const sound = event.target.id
    if (!isSoundAlreadyPlaying(sound)) {
      document.getElementById(sound).classList.add("selected")
    }
    
    actions.setSound(sound)
  })

  el.inputRange.onchange = () => {
    if (!isSoundUndefined()) {
      state.bgAudio.file.volume = (el.inputRange.value / 100)
      state.bgAudio.lastVolume = state.bgAudio.file.volume
    }
  }
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })
  
  // Lógica para aceitar apenas números no <span>minutes</span> com expressão regular
  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  // Quando está em blur (saiu do focus), valiar a entrada do usuário
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0
    updateDisplay()

    el.minutes.removeAttribute("contenteditable")
  })
}
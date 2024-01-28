import state from "./state.js"

export function isSoundUndefined() {
  return Boolean(!state.bgAudio.file || !state.bgAudio.name)
}

export function isSoundAlreadyPlaying(sound) {
  return Boolean(state.bgAudio.name === sound)
}

export function checkButtonPressed(target) {
  const nodeName = target.nodeName
  const id = target.id

  const cardIds = ["forest", "rain", "coffe-shop", "fireplace"]
  
  const isButtonOrCard = (nodeName === "BUTTON" || cardIds.includes(id))

  return isButtonOrCard
}
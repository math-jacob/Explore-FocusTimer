let darkMode = true

const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener("click", (event) => {

  // Mudando modo da página
  // documentElement é a tag <html>
  document.documentElement.classList.toggle("light")

  // Acessibilidade

  const mode = darkMode ? "light" : "dark"
  // currentTarget pega o elemento atual (elemento alvo) --> buttonToggle
  event.currentTarget.querySelector("span").textContent = `${mode} ativado!`

  darkMode = !darkMode
})
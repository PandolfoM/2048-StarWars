let lightMode = localStorage.getItem('lightMode')
const lightModeToggle = document.getElementById('toggleDark')

const enableLightMode = () => {
  document.body.classList.add('lightMode')
  localStorage.setItem('lightMode', 'enabled')
}

const disableLightMode = () => {
  document.body.classList.remove('lightMode')
  localStorage.setItem('lightMode', null)
}

if (lightMode === 'enabled') {
  enableLightMode()
  lightModeToggle.classList.add('fa-sun')
  lightModeToggle.classList.remove('fa-moon')
}

lightModeToggle.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode')
  if (lightMode !== 'enabled') {
    enableLightMode()
    lightModeToggle.classList.add('fa-sun')
    lightModeToggle.classList.remove('fa-moon')
  } else {
    disableLightMode()
    lightModeToggle.classList.add('fa-moon')
    lightModeToggle.classList.remove('fa-sun')
  }
})
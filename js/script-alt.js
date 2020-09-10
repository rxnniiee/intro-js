const HOURHAND    = document.querySelector('#hour')
const MINUTEHAND  = document.querySelector('#minute')
const SECONDHAND  = document.querySelector('#second')

// clock's functionality
function tick() {
  const seconds = new Date() / 1000

  const deltaHours    = (360 / 60) * (seconds % (3600*24) / 3600)
  const deltaMinutes  = (360 / 60) * (seconds % 3600 / 60)
  const deltaSeconds  = (360 / 60) * (seconds % 60)

  HOURHAND.style.transform    = `rotate(${deltaHours}deg)`
  MINUTEHAND.style.transform  = `rotate(${deltaMinutes}deg)`
  SECONDHAND.style.transform  = `rotate(${deltaSeconds}deg)`

  // request a frame again
  requestAnimationFrame(tick)
}

// this function will run at the refresh rate of your monitor, typically 60 times a second (can be way higher on some monitors)
requestAnimationFrame(tick)
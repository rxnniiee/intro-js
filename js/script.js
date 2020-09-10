const HOURHAND    = document.querySelector('#hour')
const MINUTEHAND  = document.querySelector('#minute')
const SECONDHAND  = document.querySelector('#second')

// clock's functionality
function tick() {
  const date = new Date()

  const hours   = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const deltaHours    = (360 / 12) * (hours + (minutes / 60) + (minutes / 360))
  const deltaMinutes  = (360 / 60) * (minutes + (seconds / 60))
  const deltaSeconds  = (360 / 60) * (seconds)

  HOURHAND.style.transform    = `rotate(${deltaHours}deg)`
  MINUTEHAND.style.transform  = `rotate(${deltaMinutes}deg)`
  SECONDHAND.style.transform  = `rotate(${deltaSeconds}deg)`

  requestAnimationFrame(tick)
}

requestAnimationFrame(tick)
const HOURHAND    = document.querySelector('#hour')
const MINUTEHAND  = document.querySelector('#minute')
const SECONDHAND  = document.querySelector('#second')

// clock's functionality
function tick() {
  const date = new Date()

  const deltaHours    = (360 / 60) * date.getHours()
  const deltaMinutes  = (360 / 60) * date.getMinutes()
  const deltaSeconds  = (360 / 60) * date.getSeconds()

  HOURHAND.style.transform    = `rotate(${deltaHours}deg)`
  MINUTEHAND.style.transform  = `rotate(${deltaMinutes}deg)`
  SECONDHAND.style.transform  = `rotate(${deltaSeconds}deg)`
}

setInterval(tick, 1000)

// execute the tick function on page load unless we want to wait for setInterval to kick in (1000ms!!!)
tick()
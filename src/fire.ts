interface Fire {
  width: number
  height: number
  pixelArray: Array<number>
}

const fire: Fire = {
  width: 10,
  height: 10,
  pixelArray: [],
}

function start() {
  createFireDataStructure(fire)
  createFireSource(fire)
  renderFire(fire)
}

function createFireDataStructure(fire: Fire) {
  const numberOfPixels = fire.width * fire.height
  
  for (let i = 0; i < numberOfPixels; i++) {
    fire.pixelArray[i] = 0
  }
}

// function calculateFirePropagation() {
// }

function renderFire(fire: Fire) {
  let html = "<table>"
  
  for (let row = 0; row < fire.height; row++) {
    html += "<tr>"
    
    for (let column = 0; column < fire.width; column++) {
      const pixelIndex = column + fire.width * row
      const fireIntensity = fire.pixelArray[pixelIndex]
      
      html += "<td>"
      html += `<div class="pixel-index">${pixelIndex}</div>`
      html += fireIntensity
      html += "</td>"
    }
    
    html += "</tr>"
  }
  
  html += "</table>"
  
  document.querySelector("#fireCanvas")!.innerHTML = html
}

function createFireSource(fire: Fire) {
  for (let column = 0; column <= fire.width; column++) {
    const overflowPixelIndex = fire.width * fire.height
    const pixelIndex = (overflowPixelIndex - fire.width) + column
    
    fire.pixelArray[pixelIndex] = 36
  }
}

start()

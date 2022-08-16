interface Fire {
  width: number
  height: number
  pixelArray: Array<number>
}

const fire: Fire = {
  width: 2,
  height: 3,
  pixelArray: [],
}

function start() {
  createFireDataStructure(fire)
  renderFire(fire)
  console.log(fire.pixelArray)
}

function createFireDataStructure(fire: Fire) {
  const numberOfPixels = fire.width * fire.height
  
  for (let i = 0; i < numberOfPixels; i++) {
    fire.pixelArray[i] = 0
  }
}

function calculateFirePropagation() {
}

function renderFire(fire: Fire) {
  let html = "<table>"
  
  for (let row = 0; row < fire.height; row++) {
    html += "<tr>"
    
    for (let column = 0; column < fire.width; column++) {
      const pixelIndex = column + fire.width * row
      
      html += "<td>"
      html += pixelIndex
      html += "</td>"
    }
    
    html += "</tr>"
  }
  
  html += "</table>"
  
  document.querySelector("#fireCanvas")!.innerHTML = html
}

start()

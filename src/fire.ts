interface Fire {
  width: number
  height: number
  pixelArray: Array<number>
  colorPalette: Array<any>
}

const fire: Fire = {
  width: 45,
  height: 45,
  pixelArray: [],
  colorPalette: [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]
}

function start() {
  createFireDataStructure(fire)
  createFireSource(fire)
  
  setInterval(calculateFirePropagation, 50, fire)
}

function createFireDataStructure(fire: Fire) {
  const numberOfPixels = fire.width * fire.height
  
  for (let i = 0; i < numberOfPixels; i++) {
    fire.pixelArray[i] = 0
  }
}

function calculateFirePropagation(fire: Fire) {
  for (let column = 0; column < fire.width; column++) {
    for (let row = 0; row < fire.height; row++) {
      const pixelIndex = column + (fire.width * row)
      
      updateFireIntensityPerPixel(pixelIndex, fire)
    }
  }
  
  renderFire(fire)
}

function updateFireIntensityPerPixel(currentPixelIndex: number, fire: Fire) {
  const bellowPixelIndex = currentPixelIndex + fire.width
  
  if (bellowPixelIndex >= fire.width * fire.height) {
    return
  }
  
  const decay: number = Math.floor(Math.random() * 3)
  const belowPixelFireIntensity = fire.pixelArray[bellowPixelIndex]
  fire.pixelArray[currentPixelIndex - decay] =
    belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0
}

function renderFire(fire: Fire) {
  const debug: boolean = false
  let html = "<table>"
  
  for (let row = 0; row < fire.height; row++) {
    html += "<tr>"
    
    for (let column = 0; column < fire.width; column++) {
      const pixelIndex = column + fire.width * row
      const fireIntensity = fire.pixelArray[pixelIndex]
      
      if (debug) {
        html += "<td>"
        html += `<div class="pixel-index">${pixelIndex}</div>`
        html += fireIntensity
        html += "</td>"
      } else {
        const color = fire.colorPalette[fireIntensity]
        const colorString: string = `${color.r},${color.g},${color.b}`
        html += `<td class="pixel" style="background-color: rgb(${colorString})">`
        html += '</td>'
      }
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

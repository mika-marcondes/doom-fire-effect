const pixelArray: Array<number> = []

interface Fire {
  width: number
  height: number
}

function start() {
  createFireDataStructure({
    width: 3,
    height: 3,
  })
  
  console.log(pixelArray)
}

function createFireDataStructure(fire: Fire) {
  const numberOfPixels = fire.width * fire.height
  
  for (let i = 0; i < numberOfPixels; i++) {
    pixelArray[i] = 0
  }
}

function calculateFirePropagation() {
}

function renderFire() {
}

start()

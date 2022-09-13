function matrixGenerator(matrixSize, grassCount, grEatCount, predatorCount, wormCount, flowerCount) {
    let matrix = [];

    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < grassCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
        }

    }

    for (let i = 0; i < grEatCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
        }

    }
    for (let i = 0; i < predatorCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }

    }

    for (let i = 0; i < wormCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
        }
    }

    for (let i = 0; i < flowerCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
        }
    }

    return matrix;
}



let matrix = matrixGenerator(20, 20, 20, 25, 4, 3);
console.log(matrix);

var side = 35;

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var wormArr = []
var flowerArr = []


function setup() {
    frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)

                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)

                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y)

                predatorArr.push(pre)
            } else if (matrix[y][x] == 4) {
                var worm = new Worm(x, y)

                wormArr.push(worm)
            } else if (matrix[y][x] == 5) {
                var flower = new Flower(x, y)

                flowerArr.push(flower)
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("brown")
            } else if (matrix[y][x] == 5) {
                fill("pink")
            } else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (let j in grassEaterArr) {
        grassEaterArr[j].mul()
        grassEaterArr[j].eat()
    }

    for (let j in predatorArr) {
        predatorArr[j].mul()
        predatorArr[j].eat()
    }

    for (let j in wormArr) {
        wormArr[j].mul()

    }
    for (let j in flowerArr) {
        flowerArr[j].mul()
    }
}







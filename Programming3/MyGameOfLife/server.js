var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);




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


io.sockets('send matrix', matrix)


grassArr = []
grassEaterArr = []
predatorArr = []
wormArr = []
flowerArr = []

Grass = require("./grass");
GrassEater = require("./grassEater");
Predator = require("./predator");
Flower = require("./flower");
Worm = require("./worm");



function createObject(matrix) {
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

io.sockets.emit('send matrix', matrix)

function game() {
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

io.sockets.emit('send matrix', matrix)

setInterval(game(), 200)


io.on('connection', function (){
    createObject(matrix)
})
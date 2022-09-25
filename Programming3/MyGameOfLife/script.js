var socket = io();

var side = 35;
 function setup(){frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side);}



function nkarel(matrix) {
    console.log(matrix);
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
}
    setInterval(
        function () {
        socket.on('send matrix', nkarel)
        },200
    )

  







let LivingCreature = require("./LivingCreature")
module.exports = class Flower extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.multiply = 0;
        this.directions = [];
    }
    
    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(1);
        var newCell = emptyCell[Math.floor(Math.random()* emptyCell.length)]
        var emptyCells1 = super.chooseCell(0);
        var newCell0 = emptyCell[Math.floor(Math.random()* emptyCell.length)]
        console.log(emptyCells);
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var flower = new Flower(newX, newY);
            flowerArr.push(flower);
            this.multiply = 0;
        } else if (newCell0) {
            flowerArr.mul()
        }
    }

}

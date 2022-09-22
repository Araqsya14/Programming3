let LivingCreature = require("./Livingcreature")
module.exports = class Worm extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 8;
        this.multiply = 0;
        this.directions = [];
    }

    
    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(1);
        var newCell = emptyCell[Math.floor(Math.random()* emptyCell.length)]

        console.log(emptyCells);
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var worm = new Worm(newX, newY);
            wormArr.push(worm);
            this.multiply = 0;
        }
    }


}

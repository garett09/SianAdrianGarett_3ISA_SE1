class Vehicle {
    constructor(size, color, weight) {
        this.size = size;
        this.color = color;
        this.weight = weight;
        this.travel = function (distance) {
            return distance;
        }
    }
}
class Car extends Vehicle {
    constructor(model) {
        super(size, color, weight);
        this.model = model;
        this.provideDiscomfort = function () {
            return this.provideDiscomfort
        }
    }
}
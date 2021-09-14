let School = class {
    constructor(name, Location, population) {
        this.name = name;
        this.Location = Location;
        this.population = population;
    }
};


School.prototype.estYear = function(courses) {
    console.log("UST offers architecture, nursing, information systems...") ;
  };
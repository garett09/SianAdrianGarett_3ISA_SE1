let mySchool = {name: "UST", location: "Manila", population: "40000"}

function offer(courses) {
    console.log(`${this.name} offers ${courses}`)
}   

const bound = offer.bind(mySchool);

console.log(bound("architecture, nursing, information systems,"))
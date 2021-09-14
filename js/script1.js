function myself(firstname, lastname, age, subject) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.subject = subject;
    this.age = age;
    this.introduce = function () {
        console.log(`Hello I am${this.firstname} ${this.lastname}`)
    }
    this.enrolled = function(){
        console.log(`I am enrolled in ${this.subject}   `)
    }
}


let Adriann = new myself("Adrian" , "Sian", "20", "ICS2609");
console.log(Adriann)
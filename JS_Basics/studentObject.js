const student = {
    name: 'Darshan',
    age: 23,

    //This will print undefined
    // greet: () => {
    //     console.log("Hello, I am " + this.name);
    // }

    //This will print Darshan
    // greet: function() {
    //     console.log("Hello, I am " + this.name);
    // }

    //This will print Darshan
    greet(){
        console.log("Hello, I am " + this.name);
    }
};

console.log(student);
student.greet();
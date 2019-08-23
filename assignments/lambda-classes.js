// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.newName = attributes.name,
        this.newAge = attributes.age,
        this.newLocation = attributes.location
    } // Closes constructor and write methods below
    speak(){
        return (`Hello my name is ${this.newName}, I am from ${this.newLocation}`);
    }
}; // Closes Person

class Instructor extends Person{
    constructor(inAttributes){
        super(inAttributes);
        this.newSpecialty = inAttributes.specialty,
        this.newFavLanguage = inAttributes.favLanguage,
        this.newCatchPhrase = inAttributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(sdAttributes){
        super(sdAttributes);
        this.newPreviousBackground = sdAttributes.previousBackground,
        this.newClassName = sdAttributes.className,
        this.newFavSubjects = sdAttributes.favSubjects
    }

    listsSubjects(){
        return `${this.newName}'s favorite subjects are ${this.newFavSubjects}`;
    }
    PRAssignments(subject){
        return `${this.newName} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.newName} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName,
        this.favInstructor = pmAttributes.favInstructor
    }
    standUp(channel){
        return `${this.newName} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.newName} debugs ${student} code on ${subject}`;
    }
}

const jonathan = new Person({
    name: 'Jonathan',
    age: 32,
    location: 'San Diego'
})

const jim = new Instructor({
    name: 'Jim',
    location: 'Canada',
    age: 38,
    specialty: 'teaching',
    favLanguage: 'JS',
    catchPhrase: "Don't forget the homies"

})

const ray = new Student({
    name: 'Ray',
    location: 'USA',
    age: 26,
    previousBackground:'Chemist',
    className:'CS132',
    favSubjects:['Html', 'CSS', 'JS'],
})

const tim = new ProjectManager({
    name: 'Tim',
    location: 'England',
    age: 30,
    gradClassName:'CS1',
    favInstructor:'Sean',
})

console.log(jonathan.speak())
console.log(jim.demo('classes in JS'));
console.log(jim.grade('Jim','C++'));
console.log(ray.listsSubjects());
console.log(ray.PRAssignments('frontend design.'));
console.log(ray.sprintChallenge('javascript'));
console.log(tim.standUp('WEB23'));
console.log(tim.debugsCode("Jon's",'js'));
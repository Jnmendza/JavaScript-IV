// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.newName = attributes.name,
        this.newAge = attributes.age,
        this.newLocation = attributes.location
    } // Closes constructor and write methods below
    speak(){
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`);
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
        return (`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        return (`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(sdAttributes){
        super(sdAttributes);
        this.newPreviousBackground = sdAttributes.previousBackground,
        this.newClassName = sdAttributes.className,
        this.newFavSubjects = sdAttributes.favSubjects,
    }

    listsSubjects(favSubjects,cb){
        cb() 
    }
    PRAssignments(){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super.(pmAttributes);
        this.GradClassName = pmAttributes.gradClassName,
        this.FavInstructor = pmAttributes.favInstructor
    }
    standUp(channel){
        return `${name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student,subject){
        return `${name} debugs ${student.name} code on ${subject}`;
    }
}
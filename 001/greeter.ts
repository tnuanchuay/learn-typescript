class Student{
  fullname: string;
  constructor(public firstname, public middleInitial, public lastname: string){
    this.fullname = `${firstname} ${middleInitial} ${lastname}`
  }
}

interface Person{
  firstname:string;
  lastname:string;
}

function greeter(person : Person){
  return `Hello ${person.firstname} ${person.lastname}`;
}

var user = new Student("John", "M.", "Doe");
document.body.innerHTML = greeter(user);

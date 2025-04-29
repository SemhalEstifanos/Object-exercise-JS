const person= {
    age:20,
    name:"Semhal",
    gender:"Female",
    greet: function(){
    console.log("Hello world")
    console.log("inside",this)
    console.log(`Hello there ${this.name}`)
    }


}
console.log(person.age)
console.log(person[`name`])
person.country="Ethiopia"
console.log({person})
person.age=23
console.log(person)
// to delet a property
delete person.country;
console.log(person)
person.greet()


// arrow we use th eobject it self since this refers to global

person.introduction = () =>{
    console.log("inside arrow fn",this)
    console.log(`My name is ${person.name} and i am ${person.age} years old `)
}
person.introduction()


function identify(scores){


  let arr=scores.filter(i=>i.score>50)
  console.log(arr)
  

}


const scores= [{
    name:"Semhal",
    score:90},{
    name:"Elleni",
    score:50}
   
]
identify(scores);

function areAbove(values){
   values.filter(i=>i.score)

}
const values= [{
    name:"Semhal",
    score:90},{
    name:"Elleni",
    score:50}
   
]
identify(values)

// contructer function start naming using capital lettle

function Car(model,color,brand){
    this.model= model;
    this.color= color;
    this.brand=brand;

}

const car= new Car("Maybach","Black","Merecedes")
console.log(car)
console.log(car.color)
car.description =function(){
    console.log(`This is a ${this.brand}`)
}
car.description()
console.log(car)


const toyota = new Car("Corolla","black","Toyota")
console.log(toyota)


















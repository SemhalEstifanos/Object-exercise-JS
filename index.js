// 1
function Employee (name,position,salary){
    this.name=name
    this.position=position
    this.salary=salary
}

let employees=[
    new Employee("Semhal","Developer",100000),
    new Employee("Meron","Developer", 100000),
    new Employee("Elleni","Mechanic",100000),
    new Employee("Bruk", "Engineer", 100000),
    new Employee("Karen", "Developer",100000),
]


employees.forEach(employee=> {
    if(employee.position==="Developer"){
        employee.salary*=1.10
    }
})
console.log((employees))




// 2

function getavailableProducts(products){
    return products.filter(product=>product.inStock).sort((a,b)=>a.price-b.price)
}
const products=[
    {name:"Phone",price:15000,inStock:"true"},
    {name:"Laptop",price:105000,inStock:"true" },
    {name:"Desktop",price:55000,inStock:"false"  }
]
const availableProducts=getavailableProducts(products)
console.log(availableProducts)

// 3

function checkGrades(grades){
   for(let name in grades){
    let scores =grades[name]
    let sum=scores.reduce((acc,score)=>acc+score)
    let average=sum/scores.length
    let result =average > 70? "Pass":"Fail"
    console.log(`${name} has ${result}ed`)

   }

}
 const grades={
Abebe:[80,60,90],
Queen:[50,60,80],
Fiona:[85,66,97]

 }

checkGrades(grades)



// function checkresults(results){
//     for(i=0;i<results.length;i++){
//         let score=results[i].score
     
//         let sum=score.map(item=>sum+=9item)
//         let average=sum/results.length
//         console.log(score)
//     }
// }
// const results=[
//     {name:"Abebe",score:[80,60,90]},
// { name:"Queen" ,score:[50,60,80]},
// { name:"Fiona" ,score:[85,66,97]}

   
    
// ]

// checkresults(results)



// 4
function User(username,email,isActive){
    this.username=username
    this.email=email
    this.isActive=isActive
}

const users=[
new User ("Semhal","aberasemhal@gmail.com",true),
new User ("Helen","helen@gmail.com",false),
new User ("Titi","tirsot@gmail.com",true),
new User ("Arsu","arsu@gmail.com",false),

]



users.forEach(user=>{
   

    if (user.isActive=="false"){
        console.log(`users ${user.username }accout has been deactivated`)
    }
})


const activeusers=[]
users.forEach(user=>{
    if(user.isActive){
activeusers.push(user.username)
    }
}

)
console.log(activeusers)

// 5
https://github.com/SemhalEstifanos/Object-exercise-JS


function identifyDestination(destinations,maxDistance,budget){

    const affordableDestinations=destinations.filter(destination=>destination.distance<=maxDistance && destination.budgetRequired<=budget

    )
    if (affordableDestinations.length===0){
        return "No destinations uder your budget and distance"
    } else{
        return affordableDestinations
    }
    
}


const destinations=[
    { name:"Ethiopia",distance:2000,budgetRequired:50000},
    { name:"USA",distance:8000,budgetRequired:2000},
    { name:"Italy",distance:4000,budgetRequired:50000}

]

const maxDistance=10000
const budget=40000
 
const affordableDestinations= identifyDestination(destinations,maxDistance,budget)
console.log("These are the affordable destinations:" ,affordableDestinations)





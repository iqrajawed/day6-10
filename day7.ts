// Day 7: Task
// Question 13: OOP Related
// Create a TypeScript class Book that has properties for title, author, publicationYear, 
//and genre. The class should have methods to:
// Display the book details.
// Check if the book is a recent publication (within the last 5 years).
// Change the genre of the book.
// Check if the book's author matches a given author name.

class Book {
    title:string;
    author:string;
    publicationYear:number;
    genre:string
    constructor(title:string,
        author:string,
        publicationYear:number,
        genre:string)
   {
          this.title=  title,
         this.author=   author,
          this.publicationYear=  publicationYear,
           this.genre= genre
    }

displaydetails(){
console.log(`Title: ${this.title}`);
console.log(`publicationYear: ${this.publicationYear}`);
console.log(`Author: ${this.author}`);
console.log(`Genre: ${this.genre}`);
}
isRecent(){
    const currentyear =new
    Date().getFullYear()
    return currentyear-this.publicationYear<=3
}
changeGenre(newGenre:string){
    this.genre=newGenre
}
isAuthor(Author:string){
    return this.author===Author

}
} 
const myBook = new Book("Lahasil","Umaira Ahmed",2021,"fiction")
myBook.displaydetails()//Title: Lahasil
// publicationYear: 2021
// Author: Umaira Ahmed
// Genre: fiction
console.log(`${myBook.isRecent()}`);//true
console.log(`${myBook.changeGenre("")}`);//undefined
console.log(`${myBook.isAuthor("")}`);//false


// Question 14: Nested Object with Interfaces
// Create an interface Person that includes properties for name, age, email, phone, and addresses. 
//The addresses property should be an array of objects, each containing street, city, state, and zipcode.
// Write a function to find the first person living in a specific city and return their name and email.

interface Address{
    City:string;
    State:string;
    Street:string;
    Zipcode:number;
}
interface person{
name: string;
AGe :number;
email:string
phone :number;
address:Address[]

}
function firstperson(people:person[],city:string):{name:string;email:string}|undefined {
for (let i = 0; i < people.length; i++) {   //for(let person of people)
for (let j = 0; j < people[i].address.length; j++) { //{for(let addres of person.adres)
if (people[i].address[j].City===city) {    //{if(addres.city === city){return {name:person.name.email:person.email}}}}
    return{
        name:people[i].name,email:people[i].email
    }
}
    
}   
}
return undefined
}
let perSon :person []=[{
name:"MALIHA",
AGe :23,
email:"maliha@gmail.com",
phone:+923212420000,
address:[]=[
{
City:'Karachi',
Street:'Tariq Road',
Zipcode:74550,
State:'Saddar'
}
]   
},{
name:"ALIYA",
AGe :23,
email:"aliya@gmail.com",
phone:+923212420000,
address:[]=[
{
City:'Karachi',
Street:'M.A jinnah Road',
Zipcode:74550,
State:'Saddar'
}
]    
}
]
const result =firstperson(perSon,"Karachi")
console.log(result); //{ name: 'MALIHA', email: 'maliha@gmail.com' }

//day8
import { calculateArea,calculateperimeter }  from "./day8.js";
 

const Area = calculateArea(5,10)
  const perimeter = calculateperimeter(5,10)
  console.log(`Area :${Area}`); //50
  console.log(`Peimeter:${perimeter}`); //30

  import { shape } from "./day8.js";
import { reverse } from "dns";
export class Circle {
    name:string;
    radius:number;
 
    constructor(radius:number) {
       this.name="Circle";
       this.radius=radius;
    }
CalculateArea():number{
       return Math.PI * this.radius **2
    }
 
 
}

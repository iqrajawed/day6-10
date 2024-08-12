// Day 7: Task
// Question 13: OOP Related
// Create a TypeScript class Book that has properties for title, author, publicationYear, 
//and genre. The class should have methods to:
// Display the book details.
// Check if the book is a recent publication (within the last 5 years).
// Change the genre of the book.
// Check if the book's author matches a given author name.
class Book {
    title;
    author;
    publicationYear;
    genre;
    constructor(title, author, publicationYear, genre) {
        this.title = title,
            this.author = author,
            this.publicationYear = publicationYear,
            this.genre = genre;
    }
    displaydetails() {
        console.log(`Title: ${this.title}`);
        console.log(`publicationYear: ${this.publicationYear}`);
        console.log(`Author: ${this.author}`);
        console.log(`Genre: ${this.genre}`);
    }
    isRecent() {
        const currentyear = new Date().getFullYear();
        return currentyear - this.publicationYear <= 3;
    }
    changeGenre(newGenre) {
        this.genre = newGenre;
    }
    isAuthor(Author) {
        return this.author === Author;
    }
}
const myBook = new Book("Lahasil", "Umaira Ahmed", 2021, "fiction");
myBook.displaydetails(); //Title: Lahasil
// publicationYear: 2021
// Author: Umaira Ahmed
// Genre: fiction
console.log(`${myBook.isRecent()}`); //true
console.log(`${myBook.changeGenre("")}`); //undefined
console.log(`${myBook.isAuthor("")}`); //false
function firstperson(people, city) {
    for (let i = 0; i < people.length; i++) { //for(let person of people)
        for (let j = 0; j < people[i].address.length; j++) { //{for(let addres of person.adres)
            if (people[i].address[j].City === city) { //{if(addres.city === city){return {name:person.name.email:person.email}}}}
                return {
                    name: people[i].name, email: people[i].email
                };
            }
        }
    }
    return undefined;
}
let perSon = [{
        name: "MALIHA",
        AGe: 23,
        email: "maliha@gmail.com",
        phone: +923212420000,
        address: [] = [
            {
                City: 'Karachi',
                Street: 'Tariq Road',
                Zipcode: 74550,
                State: 'Saddar'
            }
        ]
    }, {
        name: "ALIYA",
        AGe: 23,
        email: "aliya@gmail.com",
        phone: +923212420000,
        address: [] = [
            {
                City: 'Karachi',
                Street: 'M.A jinnah Road',
                Zipcode: 74550,
                State: 'Saddar'
            }
        ]
    }
];
const result = firstperson(perSon, "Karachi");
console.log(result); //{ name: 'MALIHA', email: 'maliha@gmail.com' }
//day8
import { calculateArea, calculateperimeter } from "./day8.js";
const Area = calculateArea(5, 10);
const perimeter = calculateperimeter(5, 10);
console.log(`Area :${Area}`); //50
console.log(`Peimeter:${perimeter}`); //30
export class Circle {
    name;
    radius;
    constructor(radius) {
        this.name = "Circle";
        this.radius = radius;
    }
    CalculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

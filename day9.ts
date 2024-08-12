import { Circle } from "./day7.js";

let circle = new Circle(3)
console.log(`Name:${circle.name}`); //Circle
console.log(`Area:${circle.CalculateArea()}`); // 28.274333882308138

// Day 9: Task
// Question 17: Implement a Stack using TypeScript

// Problem Statement: Implement a stack using TypeScript. The stack should have the following methods:

// push(item: T): void - Adds an item to the top of the stack.
// pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
// peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
// isEmpty(): boolean - Returns true if the stack is empty, otherwise false.

class stack<T> {
    private items:T[]=[]
    push(item:T):void{
     this.items.push(item)
    } 
    pop():T|undefined{
     return this.items.pop()
    }
    peek():T|undefined{
     return this.items[this.items.length -1]
    }
    isEmpty():boolean{
     return this.items.length===0
    }
 }
 const Stack = new stack<number>()
 Stack.push(2)
 Stack.push(4)
 console.log(Stack.peek());//4
 console.log(Stack.pop());//4
 console.log(Stack.pop());//true
 
 console.log(Stack.isEmpty());
 
 
 
//  Implement a Queue using TypeScript

//  Problem Statement: Implement a queue using TypeScript. The queue should have the following methods:
 
//  enqueue(item: T): void - Adds an item to the end of the queue.
//  dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
//  peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
//  isEmpty(): boolean - Returns true if the queue is empty, otherwise false.

class Queue<T>{
    private items:T[]=[]
    enqueue(item:T):void{
        this.items.push(item)
    }
    dequeue():T|undefined{
        return this.items.pop()
    }
    peek():T|undefined{
        return this.items[0]
    }
    isEmpty():boolean{
        return this.items.length===0
    }
}
const queue = new Queue<string>()
queue.enqueue("a")
queue.enqueue("b")
console.log(queue.peek());
console.log(queue.dequeue());//a
console.log(queue.dequeue());//b
console.log(queue.isEmpty());//true
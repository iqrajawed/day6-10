// Day 8: Task
// Question 15: Exporting and Importing Multiple Function
// Question: Create two separate files. In the first file, define and export two
// functions: calculateArea (calculates the area of a rectangle given its width and height)
// and calculatePerimeter (calculates the perimeter of a rectangle given its width and height).
// In the second file, import both functions and use them to calculate the area and 
//perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.

export function calculateArea(width:number,height:number) :number{
    return width * height
 }  
 
 export function calculateperimeter(width:number,height:number) :number{
    return   2*(width + height)
 }

 export interface shape{
    name :string;
    area:number;
    calculateArea():number
 }
 
// Check for emptiness
//     importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
//
//     Should work like that:

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty (object) {

    let sumOfPropInObj = 0

    for (let prop in object) {
        sumOfPropInObj++;
    }

    return !sumOfPropInObj;
}
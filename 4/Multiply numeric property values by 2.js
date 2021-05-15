// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
//
// For instance:
//
// // before the call
//     let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//     };
//
// multiplyNumeric(menu);
//
// // after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
//
//     P.S. Use typeof to check for a number here.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(multiplyNumeric(menu));

function multiplyNumeric(object) {

    for (let prop in object) {
        if (object[prop] === +object[prop]) {
            object[prop] = object[prop]*2;
        }
    }

    return object;
}


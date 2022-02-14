const isEmpty = (object) => {
    return object.constructor === Object && Object.keys(object).length === 0
    // Check the data type of param object is Object and Check the length of object is 0
};

let schedule = {};
// console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); // false
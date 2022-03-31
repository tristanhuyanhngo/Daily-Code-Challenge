// ------------------------------------------------
const validateStringEndWith = (str, end) => {
    if (str.length < end.length) {
        return false;
    }

    let indexStr = str.length - 1;

    for (let i = end.length - 1; i >= 0; i--) {
        if (str[indexStr--] != end[i]) {
            return false;
        }
    }

    return true;
};

console.log(validateStringEndWith('abc', 'a')); // true

// ------------------------------------------------
// endsWith method
const solution = (str, end) => {
    return str.endsWith(end);
};
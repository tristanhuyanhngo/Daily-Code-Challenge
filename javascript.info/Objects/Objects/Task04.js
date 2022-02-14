let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

function multiplyNumeric (object) {
  for (let key in object) {
    if (typeof object[key] === "Number") {
      object[key] *= 2;
    }
  }
};

// after the call
console.log(menu);
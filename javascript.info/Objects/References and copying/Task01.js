let user = { name: "John" };

let admin = user;

admin.name = "Pete"; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

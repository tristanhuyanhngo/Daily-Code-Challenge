let user = new Object();
user.name = "John"; 
user.surename = "Smith";
user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);
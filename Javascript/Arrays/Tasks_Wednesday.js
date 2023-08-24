

// Adding Franafter Charlie.
const names_array = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names_array);
let target_index = names_array.indexOf("Charlie");
names_array.splice(target_index + 1, 0, "Frank");
console.log(names_array);

// Removing David.
names_array.splice(4,1);
console.log(names_array);


// Adding Helen & Garce.
names_array.push("Garce","Helen");
console.log(names_array);


// Replacing Bob with John.
target_index=names_array.indexOf("Bob");
names_array.splice(target_index,1, "John");


// PRinting All Names
console.log(names_array);




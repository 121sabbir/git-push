// মোট ৬টি মেশিন দিয়ে প্রতিদিন তৈরি করা পণ্যের সংখ্যা
let totalMachines = 6;
let totalProducts = 200;

// প্রতিটি মেশিনে প্রতিদিন তৈরি হওয়া পণ্যের সংখ্যা
let productsPerMachine = totalProducts / totalMachines;

// আরও ২টি মেশিন যোগ করলে মোট মেশিনের সংখ্যা
let addedMachines = totalMachines + 2;

// নতুন মোট উৎপাদন সংখ্যা
let newTotalProducts = productsPerMachine * addedMachines;

// ৩টি পণ্য বিক্রি না হলে অবশিষ্ট পণ্যের সংখ্যা
let unsoldProducts = 3;
let remainingProducts = newTotalProducts - unsoldProducts;

console.log("Total Product holo: " + newTotalProducts);
console.log("Obosisto Product holo: " + remainingProducts);
// উত্তর: মোট পণ্য হলো 266.6666667 টি। 
// উতর: ৩ পণ্য বিক্রি না হলে অবশিষ্ট পণ্য 263.6666667 টি।

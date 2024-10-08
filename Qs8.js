// দোকানদারের মোট চকলেট সংখ্যা
let totalChocolates = 120;

// প্রতিটি প্যাকেটে রাখা চকলেট সংখ্যা
let chocolatesPerPacket = 9;

// পূর্ণ প্যাকেটের সংখ্যা
let fullPackets = (totalChocolates / chocolatesPerPacket);

// অবশিষ্ট চকলেট সংখ্যা
let remainingChocolates = totalChocolates % chocolatesPerPacket;

console.log("Obosisto Chocolate Quantity: " + remainingChocolates);
// উত্তর: অবশিষ্ট চকলেট থাকবে ৩টি ।

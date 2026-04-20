// QUESTION 1
let score = 73;
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score <= 89):
        grade = "B";
        break;
    case (score >= 70 && score <= 79):
        grade = "C";
        break;
    case (score >= 60 && score <= 69):
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log("Grade:", grade);

// Ternary operator to check pass or fail
let result = (score >= 60) ? "Passed" : "Failed";

console.log("Result:", result);

// QUESTION 2
//2.1 String to number

let input = "25";
let output = parseInt(input);
console.log(output);

//2.2 Truthy & Falsy values
if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if ("") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if ("hello") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (null) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (undefined) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (NaN) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// QUESTION 3
function greetingBot(name, isMorning) {
    if(isMorning) {
        return (`Good morning, ${name}!`)
    } else {
        return (`Hello, ${name}!`)
    }
}
console.log(greetingBot("Nompilo", true));
console.log(greetingBot("Nompilo", false));
console.log(greetingBot("Khensani", false));
console.log(greetingBot("Khensani", true));

// QUESTION 4
const post = {
    username: "NompiloK123",
    caption: "JavaScript is so cool! If you told me 3 months ago I'd enjoy it, I wouldn't have believed you.",
    likes: 250,
    comments: ["It's a fun language to learn for sure", "Definitely cool and very powerful for beginner developers!", "Haha, I feel you girl! It truly does get better"
    ],
    addLike () {
        this.likes = this.likes + 1;
    }
};
console.log(post);

post.addLike();
console.log(post.likes)

//Object destructuring
 const { username, caption } = post;
 console.log(username)
 console.log(caption);

// QUESTION 5
//5.1 Using spread operator
const set1 = [1, 2, 3, 4, 5];
const set2 = [6, 7, 8, 9, 10];
const merged = [...set1, ...set2];
console.log(merged);

//5.2 Using for loop
for (let i = 1; i <= 5; i++) {    
   let row = "";  

   for (let j = 1; j <= 5 - i; j++) {
    row = row + "  ";
    }

   for (let k = 1; k <= i; k++) {   
    row = row + "*   ";      
   }
  
   console.log(row); 
 }

//5.3 Using while loop
let i = 10;
while(i >= 1) {
    console.log(i)
    i--;
}

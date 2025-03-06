const number = 11;
const no = number  ===1 ? console.log("Sunday") : 
           number === 2 ? console.log("Monday") : 
           number === 3 ? console.log("Tuesday") : 
           number === 4 ? console.log("Wednesday") : 
           number  === 5 ? console.log("Thursday") : 
           number === 6 ? console.log("Friday") : 
           number  === 7 ? console.log("Saturday") :  console.log("Out of bounds exception");
console.log(no);


const age =75;
const agenob = age <=2 ? console.log("toddler") : age <=13 ? "teenager" : age <=18 ? "adult" : age <=30 ? "youth" : age <= 65 ? "senior citizen" : "dead";
console.log(agenob);

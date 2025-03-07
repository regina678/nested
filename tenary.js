const nos = 11;
const nob = nos  ===1 ? console.log("Sunday") : 
           nos === 2 ? console.log("Monday") : 
           nos === 3 ? console.log("Tuesday") : 
           nos === 4 ? console.log("Wednesday") : 
           nos  === 5 ? console.log("Thursday") : 
           nos === 6 ? console.log("Friday") : 
           nos  === 7 ? console.log("Saturday") :  console.log("Out of bounds exception");
console.log(nob);


const age =75;
const agenob = age <=2 ? console.log("toddler") : age <=13 ? "teenager" : age <=18 ? "adult" : age <=30 ? "youth" : age <= 65 ? "senior citizen" : "dead";
console.log(agenob);

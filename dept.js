let Name;
let Dept;
let Year;

do{
    Name = window.prompt(`Enter your Name:`);
    Dept = window.prompt(`Enter your Dept`);
    Year = parseInt(window.prompt(`Enter your Year`));
    Continue = window.prompt(`Do you want to continue`);

    if (!Name || !Dept || isNaN(Year) || Year <= 0) { 
        console.log("Invalid input. Please fill in all details correctly.");
        continue; 
    }
    
    if (Dept === "SOC" && Year <= 3) {
        console.log("Attend 2 sem");
    } 
    else if (Dept === "Civil" && Year <= 2) {
        console.log("Attend College");
    } 
    else if (Dept === "Civil" && Year >= 3) {
        console.log("3 & 4th year field training");
    } 
    else if (Dept === "Petroleum" && Year <= 3) {
        console.log("Attend College");
    } 
    else if (Dept === "Petroleum" && Year >= 4) {
        console.log("Go to Dubai");
    } 
    else if(Dept ==="SOC" && Year===4) {
        console.log("Attend 1 sem and do 1 sem as an internship");
    }
    
    if (Continue.toLowerCase() !== "yes") {
        break;
    }
} while (true);



    // Name = window.prompt(`Enter your Name:`);
    // Dept = window.prompt(`Enter your Dept`);
    // Year = parseInt(window.prompt(`Enter your Year`));

    // (!Name || !Dept || isNaN(Year) || Year <= 0) ? 
    // console.log("Invalid input. Please fill in all details correctly.")
    // : (Dept === "SOC" && Year <= 3) ? console.log("Attend 2 sem") 
    // : (Dept === "Civil" && Year <= 2) ? console.log("Attend College")
    // : (Dept === "Civil" && Year >= 3) ? console.log("3 & 4th year field training")
    // : (Dept === "Petroleum" && Year <= 3) ? console.log("Go to Dubai")
    // : console.log("Attend 1 sem and do 1 sem as an internship");

// Nested Ternary
// condition1 ? expression1 
// : condition2 ? expression2
// : condition3 ? expression3
// : default_expression;    
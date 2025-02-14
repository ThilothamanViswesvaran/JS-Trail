//for loops

//increment
for(let i=0; i< 10; i++){
    console.log("Hello");
}

//increment by number
for(let i=0; i< 10; i+=2){
    console.log(i);
}

//decrement
for(let i=10; i>0; i--){
    console.log(i);
}
console.log("Happy New Year");

//continue
for(let i=1; i<=20; i++){
    if(i==13){
        continue;
    }
    else{
        console.log(i);
    }
}

//break

for(let i=1; i<=20; i++){
    if(i==13){
        break;
    }
    else{
        console.log(i);
    }
}

//while loops
let username = "";

do{
    username= window.prompt(`Enter Your Name:`)
}while(username === "" || username === null)

console.log(`Hello ${username}`)


//loggedin

let loggedIn = false;
let username;
let password;

do{
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password`);

    if(username === "myusername" && password==="mypassword"){
        loggedIn = true;
        console.log("you're logged in!")
    }
    else{
        console.log("Invalid Credentials")
    }
}while(!loggedIn)
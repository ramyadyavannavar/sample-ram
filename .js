//arrow function
let sub=(p,q)=>{
    return p-q;
}
let ans=sub(52,69);
console.log(num);

//anaonymous function
let div=function(t,r)
{
return t/r
}

//create an object
let person ={
    name: "Ramya",
    age:30
}
console.log(person);
console.log(person.name)
console.log(person['name'])
person.name ="Ramya";
console.log(person);
person=city="Hydrabad";
console.log(person);

//switch case
let day =1;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
        default:
            console.log("enter proper value")
}

//ternary operator
let age1=30;
let convote=age1>18? 'yes':'no';
console.log(conVote);

//for loop
for(let i=0;i<=20; i++){
    console.log(i)
}

//for loop with array
let colors=['red','green','blue'];
for(let i=0; i<colors.length; i++){
    console.log(colors[i])
}

//while loop
let i=0;
while(i<5){
    console.log(i);
    i++;
}

do while
let j=0;
do{
    console.log(j);
    j++;
}
while(j<5);
for(var i=0; i<5;i++){   
    console.log(i);
}
//Answer: 0,1,2,3,4

for(var i=0; i<5;i++){   
    console.log(i);
}
//Answer: 1,3,5

for(var i=0; i<5;i++){   
    console.log(i);
}
//Answer: 3,7

function y(num1, num2){   
    return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
//Answer: 5,8

function y(num1, num2){
    console.log(num1);   
    return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
//Answer: 2,5,3,8

a = 15;
console.log(a);
function y(a){
    console.log(a);   
    return a;
}
b = y(10);
console.log(b);
//Answer: 15,10,10

a = 15;
console.log(a);
function y(a){
    console.log(a);   
    return a;
}
b = y(10);
console.log(b);
//Answer:15,10,20
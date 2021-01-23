// Problem : 1

const prompt= require('prompt-sync')();
function f(a=prompt(`Enter the value:  ` )) {
    return (a/12);
}
function m(b) {
    return (b*0.000189394);
}

let c=m(f());
console.log(c); 






//  Problem : 2

function lok(c=prompt('Enter the amount of chair: ' ),t=prompt('Enter the amount of table: '),b=prompt('Enter the amount of bed: ')){
    return (c*1+b*5+t*3);
}
let result = lok();
console.log(`Total wood will be needed: ${result} cft`);



// Problem : 3

function home(a) {
    return (((10*15)+(10*12)+(a-20)*10)*1000);
}
let b=home(22);
console.log(b);



// Problem : 4 

let array = ["Sijan","Tans","Momen"];

   let p = [array[0].length,array[1].length,array[2].length];
   
function b(p) {
    let v = Math.min.apply(Math,p);
    if(p[0]==v) {
        console.log(array[0]);
    }
    else if (p[1]==v) {
        console.log(array[1]);
    }
    else if (p[2]==v) {
        console.log(array[2]);
    }
}
b(p);


// Problem : 5

let officeAJabo = false;
if(officeAJabo==true) {
    console.log("I'll Bring an Umbrella With Me");
}
else {
    let mail = "I'm sick today. So, I can't come to office today";
    let gorurMangso = true;
    if(gorurMangso==true) {
        console.log(`I'll send this mail [${mail}] in office and I'll cook Beef and khichuri`);
    }
    else {
        console.log(`I'll send this mail [${mail}] in office and I'll fry egg and cook khichuri`);
    }
}

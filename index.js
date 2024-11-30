//1
let num = [30,7,975];
num[1] = 10;
console.log(num);
//2
let strin = ["i","very","love"];
strin.push("js");
console.log(strin);
//3
let sum = 0;
for(let i = 0; i < num.length; i++){
    sum += num[i];
}
console.log(sum);
//4
const numb = [1,54,6,742,18];
for(let i = 0; i < numb.length; i++){
    console.log(numb[i]);
}
//5
const stri = ["i","i love ","i love js","js","i very love"];
for(let i = 0; i < stri.length; i++){
    if(stri[i].length >= 5){
        console.log(stri[i]);
    }
}
//6
const numbe = [1,5,3,6,4,9,7,8,0,2];
let max = 0;
for(let i = 0; i < numbe.length; i++){
    if(numbe[i] > max){
        max = numbe[i];
    }
}
console.log(max);
//7
for(let i = 0; i < numbe.length; i++){
    if(numbe[i] % 2 === 0){
        console.log(numbe[i]);
    }
}
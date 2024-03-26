let result1 = '';
let sum = 0;

for(let i=1;i<=10;i++){
    sum+=3;
    result1+=`3*${i}=`;
    for(let j=1;j<=i;j++){
        result1 += j === 1 ? '3' : '+3';
    }
    result1 += `=${sum}\n`;
}
console.log(result1);
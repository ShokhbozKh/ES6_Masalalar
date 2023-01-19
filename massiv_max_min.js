//#29Minimum
let n=[11,2,9,4,5,6,7,8,1];
m=[];
for(let i=0;i<n.length;i+=2){
    m.push(n[i]);
}
console.log(Math.min(...m));

//#29Maxsimum
// let n=new Array(2,1,3,8,4,7,11,11);
// let m=[];
// for(let i=1;i<n.length;i+=2){
//     m.push(n[i]);
// }
// console.log(Math.max(...m));
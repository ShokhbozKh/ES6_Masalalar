/// Qudrat Abduraximov for loop mavzu ichidagi masalalar


//#1///////////////////////////
// let n=12;
// let t=0;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(`${n} buluvchilari :${i}`);
//         t++;
//     }
// }console.log(`buluvchilari soni ${t} ta`);

//#2/////////////////////////////////////////////
// let n=15;
// let sum=0;
// for(let i=1;i<=n;i++){
//     if(n%i==0)
//     sum+=i;
// }console.log('natija: ',sum);

//#3///////////////////////////////////////////////
// let n=8128;
// sum=0;
// for(let i=1;i<n;i++){
//     if(n%i==0){
//        sum+=i;
//     } 
// }
// if(sum==n){
//     console.log("mukammal son: ",n);
// }else{
//     console.log("mukammal son emas: ",n);
// }

//#4/////////////////////////////////////////////////////////
// let n=10000;
// sum=0;
// for(let i=1;i<=n;i++){
//     sum=0; 
//     for(let j=1;j<i;j++){
//         if(i%j==0){
//             sum+=j;
//         }
//     }
//     if(i==sum){
//         console.log("mukammal son: ",i);
//     }
// }
//#5//////////////////////////////////////////////////
// let n=18;
// for(let i=1; i<=n;i++){
//     if(i%3==0 && i%5!=0){
//         console.log('sonlar: ',i);
//     }
// }

//#6/////////////////////////////////////////////////
// let n=679;
// k=0;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         k++;
//     }
// }
// if(k>2){
//     console.log('tub son emas: ',n);
// }else if(n==2){
//     console.log("tub ham murakkab ham son emas: ",n);
// }else{
//     console.log("tub son: ",n);
// }

// #7//////////////////////////////////////////////
// let n=39;
//     t=0;
// for(let j=1;j<=n;j++){
//     t=0;
//     for(let i=1;i<=j;i++){
//         if(j%i==0){
//             if(j==2){
//                 break;
//             }
//             t++;
//         }
//     }
//     if(t==2){
//         console.log('tub sonlar:',j);
//     }
// }

//#8////////////////////////////////////////////
// let n=2100;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         for(let k=1;k<=n;k++){
//             if(k**2==j**2+i**2){
//                 console.log(`a=${i} b=${j} c=${k}`);
//             }
//         }
//     } 
// }

//#9////////////////////////////////////////
// let n=24;
// sum1=0;
// sum2=0;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         sum1=sum1+i;
//     }
// }
// for(let j=1;j<=n;j++){
//     if(n%j==0){
//         sum2+=j;
//     }
// }

//#10.a/////////////////////////////////////////
// let n=2;
// y=0
// for(let i=1;i<=n;i++){
//     y+=Math.pow(2,i);
// }console.log('natija ',y);

//#10.b
// let n=4;
// let y=1;
// for(let i=1;i<=n;i++){
//     y*=i;
// }console.log(n,' faktaryal ',y,' ga teng');

//#10.c
// let n=4;
// y=1;
// for(let i=1;i<=n;i++){
//     y*=(1+(1/i**2));
// }console.log(y);


//#10.d
// let n=3;
// natija=0;
// for(let i=1;i<=n;i++){
//     natija=Math.sqrt(2+natija);
// }console.log(natija);

//#10.e
// let n=2;
// y=0;
// for(let i=1;i<=n;i++){
//     y=Math.sqrt(3*(i-1)+Math.sqrt(3*i) +y);
// }console.log(y);

//#10.f
// let n=4;
// sum=0;
// for(let i=1;i<=n;i++){
//     sum+=1/(Math.sin(1)+Math.sin(i));
// }console.log(sum);

//#10.g
// let n=4;
// sum=0;
// for(let i=1;i<=n;i++){
//     sum+=((Math.cos(1)+Math.cos(i))/(Math.sin(1)+Math.sin(i)));
// }console.log(sum);

//#11.a////////////////////////////////////////////
// let n=4;
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum+=1/(i**2);
// }console.log(sum);

//#11.b
// let n=4;
// sum=0;
// for(let i=1;i<=n;i++){
//     sum+=1/Math.pow(i,3);
// }console.log(sum);

//#11.c
// let n=2;
// y=1;
// N=0;
// for(let i=1;i<=n;i++){
//     y=y*i;
//     N+=1/y;
// }console.log(N);

//#11.d
// let n=4;
// sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+1/Math.pow(2*i,2) ;
// }console.log(sum);

//#11.e
// let n=4;
// y=1;
// for(let i=2;i<=n;i++){
//     y*=(i+1)/(i+2) ;
// }console.log(y);

//#11.f
// let n=2;
// y=1;
// fakt=1;
// for(let i=1;i<=n;i++){
//     fakt*=i;
//     y*=Math.pow((1+1/fakt),2);
// }console.log(y,);

//#12.a////////////////////////////////
// let a=2;
// let n=2;
// y=1;
// for (let i=1;i<=n;i++){
//     y=y*Math.pow(a,i);
// }console.log(y);

//#12.b
// let a=2;
// let n=2;
// y=1;
// for(let i=1;i<=n;i++){
//     y=y*(a+n-1);
// }console.log(y);

//#12.c
// let a=4,n=4;
// sum=0;
// for(let i=1;i<=n;i++){
//     sum+=1/(a*(a+i));
// }console.log(sum);

//#12.d
// let a=2,n=3;
// y=1;
// for(let i=0;i<=n;i++){
//     y*=a-i*i;
// }console.log(y);

//#13//////////////////////////////
// let n=10;
// sum=1;
// for(let i=1;i<=n;i++){
//     sum+=1+Math.sin(i/10);
// }console.log(sum);

//#14//////////////////////////
// let n=4,x=2,a=1;
// y=0;
// for(let i=1;i<=n;i++){
//     y=((x+a)**2 +a)+y;
// }console.log(y);

//#15
// let n=2;
// sum=0;
// for(let i=1;i<=n;i++){
//     sum+=n*(n+1);
// }console.log(sum);

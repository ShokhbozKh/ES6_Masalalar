// Shart operatorlari 30 ta misol

//#1
// let a=-23;
// if(a>0){
//     ++a;
// }else{
//     a;
// }
// console.log(a);

//#2
// let a=-11;
// if(a>0) ++a;
// else a-2;
// console.log(a);

//#3
// let a=2;
// if(a>0){
//     ++a;
// }else if(a==0){
//     a=10;
// }else{
//     a-2;
// }
// console.log(a);

//#4
// let a=1,b=3,c=5;
// t=0;
// if(a>0){
//     t++;
// }
// if(b>0){
//     t++;
// }
// if(c>0){
//     t++;
// }
// console.log(`Musbatlar ${t} ta`);

//#5
// const a=2,b=-9,c=-2;
// mus=0; man=0; 
// if(a>0){
//     mus++;
// }else{
//     man++;
// }
// if(b>0){
//     mus++;
// }else{
//     man++;
// }
// if(c>0){
//     mus++;
// }else{
//     man++;
// }
// console.log(`musbatlar ${mus} ta \n manfiylar ${man} ta`);

//#6
// let a=4,b=9;
// if(a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }

//#7
// let a=7,b=6;
// if(a<b){
//     console.log(1);
// }else{
//     console.log(2);
// }

//#8
// let a=9,b=89;
// if(a>b){
//     console.log(`${a},${b}`);
// }else{
//     console.log(`${b},${a}`);
// }

//#9
// let a=-21,b=-100;
// if(a<b){
//     console.log(`a=${a} va b=${b}`);
// }else {
//     b1=Math.abs(a)+Math.abs(b);
//     console.log(`a=${a} va b=${b1}`);
// }

//#10
// let a=2,b=3;
// let a1=a;

// if(a!==b){
//     a=a+b;
//     b=b+a1;
// }else if(a==b){
//     a=0;
//     b=0;
// }
// console.log("a=",a,'\n b=',b);

//#11
// let a=2,b=2;
// if(a==b){
//     console.log(0);
// }else if(a!=b){
//     if(a>b){
//         console.log("a=",a,'\n b=',a);
//     }else{
//         console.log("a=",b,'\nb=',b);
//     }
// }

//#12 ternry
// let a=2,b=0,c=1;
// (a>c&&b>c)?n=`kichigi:${c}`:(b>a&&c>a)?n=`kichigi:${a}`:n=`kichigi:${b}`;
// console.log(n);

//#13
// let a=7,b=4,c=3;
// if(a>c && a>b){
//     n=(a+b)/2;
// }else if(b>c && c>a){
//     n=(b+a)/2;
// }else if(a>b&&b>c){
//     n=(a+c)/2;
// }else if(c>b&&b>a){
//     n=(c+a)/2
// }else if(c>a&&a>b){
//     n=(c+b)/2;
// }else if(b>a&&a>c){
//     n=(b+c)/2;
// }
// console.log(Math.ceil(n));

//#14
// let a=7,b=4,c=3;
// if(a>c && a>b){
//     n=('katta:',a,' kichik: ',b);
// }else if(b>c && c>a){
//     n=('katta:',b,' kichik: ',a);
// }else if(a>b&&b>c){
//     n=('katta:',a,' kichik: ',c);
// }else if(c>b&&b>a){
//     n=('katta:',c,' kichik: ',a);
// }else if(c>a&&a>b){
//     n=('katta:',c,' kichik: ',b);
// }else if(b>a&&a>c){
//     n=('katta:',b,' kichik: ',c);
// }
// console.log((n));

//#15
// let a=1,b=2,c=3;
// if(a>b&& a>c){
//     console.log(a);
// }else if(b>a&&b>c){
//     console.log(b);
// }else if(c>a&&c>b){
//     console.log(c);
// }

//#16
// let a=2,b=3,c=1;
// if(a<b<c){
//     console.log(a*2,':',b*2,':',c*2);
// }else{
//     console.log(-a,':',-b,':',-c);
// }

//#17
// let a=7,b=5,c=3;
// if(a<b<c){
//     console.log(a*2,':',b*2,':',c*2);
// }else if(a>b>c){
//     console.log(a*2,':',b*2,':',c*2);
// }else{
//     console.log(-a,':',-b,':',-c);
// }

//#18
// let a=1,b=1,c=4;
// if(a==b){
//     console.log(3);
// }else if(a==c){
//     console.log(2);
// }else{
//     console.log(1);
// }

//#19
// let a=2,b=2,c=3,d=2;
// if(a==b && a==c){
//     console.log(4);
// }else if(a==b && a==d){
//     console.log(3);
// }else if(a==c && a==d){
//     console.log(2);
// }else{
//     console.log(1);
// }

//#20
// let a=1,b=-3,c=-5;
// if(Math.abs(b-a)<Math.abs(c-a)){
//     console.log(Math.abs(b-a));
// }else{
//     console.log(Math.abs(c-a));
// }

//#21
// let n=2;
// if(n==0){
//     natija="kordinata boshi";
// }else if(n>0){
//     natija='Ox uqida';
// }else if(n<0){
//     natija='Oy uqida';
// }else{
//     natija='kordinata uyida yotmaydi';
// }console.log(natija);

//#22
// let x1=-4,y1=3;
// if(x1>0 && y1>0){
//     natija="1 chorak";
// }else if(x1<0 && y1>0){
//     natija="2 chorak";
// }else if(x1<0 && y1>0){
//     natija='3 chorak';
// }else if(x1>0 && y1<0){
//     natija='4 chorak';
// }console.log(natija);

//#23
// let x1=1,x2=2,x3=3,y1=4,y2=5,y3=6;
// x4=x3;
// y4=y1;
// console.log('x4: ',x4,' y4: ',y4);

//#24
// let x=3.14;
// if(x>0){
//     fx=2*Math.sin(x);
// }else if(x<=0){
//     fx=x-6;
// }console.log(fx);

//#25
// let x=1;
// if(x<-2 || x>2){
//     fx=2*x;
// }else{
//     fx=-3*x;
// }console.log(fx);

//#26
// let x=3;
// if(x<=0){
//     fx=-x;
// }else if(0<x && x<2){
//     fx=x*x;
// }else if(x>=2){
//     fx=4;
// }console.log(fx);

//#27
// let x=3;
// if(x<0){
//     fx=0;
// }else if(parseInt(x)%2==0){
//     fx=1;
// }else if(parseInt(x)%2==1){
//     fx=-1;
// }
// console.log(fx);

//#28
// let y=1300;
// if(y%400==0){
//     n='kabisa yil';  
// }else if(y%4==0 && y%100!=0){
//     n='kabisa yili';
// }else{
//     n='kabisa emas';
// }
// console.log(n);

//#29
// let n=1;
// if(n==0){
//     natija='bu son 0';
// }else if(n>0){
//     if(n%2==0){
//         natija='juft musbat son';
//     }else{
//         natija="toq musbat son";
//     }
// }else if(n<0){
//     if(n%2==0){
//         natija='manfiy juft son';
//     }else{
//         natija="manfiy toq son";
//     }
// }console.log(natija);

//#30
// let n=15;
// if(n>0&&n<10){
//     if(n%2==0){
//         natija='1 xona juft';
//     }else{
//         natija='1 xonali toq';
//     }
// }else if(n>=10&&n<=99){
//     if(n%2==0){
//         natija='2 xona juft';
//     }else{
//         natija='2 xonali toq';
//     }
// }else if(n>99&&n<=999){
//     if(n%2==0){
//         natija='3 xona juft';
//     }else{
//         natija='3 xonali toq';
//     }
// }console.log(natija);

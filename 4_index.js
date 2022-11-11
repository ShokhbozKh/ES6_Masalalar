//////#1
// let a = 7;
// if (a>0){
//     console.log('berilgan son musbat: '+(a+1));

// }else {
//     console.log(a)
// }

//////#2
// let b=4;
// if(b>0){
//     console.log(b+1);
// }else{
//     console.log(b-2);
// }

//////#3
// let a=0;
// if(a<0){
//     console.log(a-2);
// }else if(a>0){
//     console.log(a+1);
// }else{
//     console.log(10)
// }

//////#4
// let a=-3, b=-9, c=-8;
// if(a>0 && b>0 && c>0){
//     console.log('3 ta');
// }else if(a>0 && b<0 && c<0){
//     console.log('1 ta');

// }else if(b>0 && a<0 && c<0){
//     console.log('1 ta');
// }else if(b>0 && a>0 && c<0){
//     console.log('2 ta');
// }else if(b>0 && c>0 && a<0){
//     console.log('2 ta');
// }else if(c>0 && a<0 && b<0){
//     console.log('1 ta');
// }else if(c>0 && a>0 && b<0){
//     console.log("2 ta");
// }else{
//     console.log('MUSBAT SON YUQ');
// }
//////#5
// let a=3,b=5,c=6;
// if(a>0 && b>0 && c>0){
//     console.log('3 ta musbat manfiy yuq');
// }else if(a>0 && b>0 && c<0){
//     console.log('2 ta musbat va 1 ta manfiy');
// }else if(a>0 && c>0 && b<0){
//     console.log('2 ta musbat va 1 ta manfiy');
// }else if(b>0 && a<0 && c<0){
//     console.log('1 ta musbat 2 ta manfiy');
// } else if(b>0 && c>0 & a<0){
//     console.log('2 ta musbat 1 ta manfiy');
// }else if(c>0 && a<0 && b<0){
//     console.log('1 ta musbat 2 ta manfiy');
// }else{
//     console.log('hammasi manfiy')
// }

//////#6
// let a=5;
// let b=8;
// if(a>b){
//     console.log('a son b sondan katta');
// }else{
//     console.log('b son katta a sonadan');
// }
//////#7
// let a=3,b=4;
// if (a>b){
//     console.log('tartib raqam 2 kichik');
// }else{
//     console.log('tartib raqam  1 kichik');
// }
//////#8
// let a=4,b=9;
// if(a<b){
//     console.log(b,a);
// }else{
//     console.log(a,b);
// }
//////#9
// a=5,b=4;
// if(a<b){
//     console.log('a:'+a +'b:'+b);
// }else{
//     console.log('b:'+a," a:"+b);
// }
//////#10
// let a=4;
// let b=4;
// if(a==b){
//     console.log(0);
// }
// else{
//     console.log(a+b);
// }
//////#11
// let a=11;
// let b=11;
// if(a!=b){
//     if(a>b){
//         console.log(a);
//     }else{
//         console.log(b);
//     }

// }else if(a==b){
//     console.log(0);
// }
// console.log('a: ',a,'b: ',b)
//////#12
// let a=1,b=2,c=3;
// if(a<b && a<c){
//     console.log(a);
// }else if(b<a && b<c){
//     console.log(b);
// }else if(c<a && c<b){
//     console.log(c);
// }
//////#13
//let a=4;
// let b=-8;
// let c=-4;
// if(a>b && b>c){
//     console.log(b);
// }else if(b>a && a>c){
//     console.log(a);
// }else if(a>c && c>b){
//     console.log(c);
// }
//////#14
// let a=3,b=-3,c=-4;
// if(a>b && b>c){
//     console.log('a=',a,' c=',c);//
// }else if(b>a && a>c){
//     console.log('b=',b,' c:',c);//
// }else if(c>a && a>b){
//     console.log('c=',c,' b=',b);//
// }else if(b>c && c>a){
//     console.log('b=',b,' a=',a);
// } else if(a>b && b>c){
//     console.log('a=',a,' c=',c);//
// }else if(a>c && c>b){
//     console.log('a=',a,'b=',b)
// }
////////////////////#15
// let a=3;
// let b=5;
// let c=4;
// if(a )

//////#16
// let a=4,b=15,c=9;
// if(a<b && b<c){
//     console.log(a*2,' ',b*2,' ',c*2);
// }else{
//     console.log((-a),' ',(-b),' ',(-c));
// }
// console.log('yigindi=',(a+b+c));
//////#17
// let a=2;
// let b=1;
// let c=0;
// if(a<b && b<c){
//     console.log(a*2,' ',b*2,' ',c*2);
// }else if(a>b && b>c){
//     console.log((a*2),' ',(b*2),' ',(c*2));
// }else{
//     console.log(-a,' ',-b,' ',-c);
// }
//////#18
// a=2;
// b=4;
// c=4;
// if(a==b){
//     console.log(3);
// }else if(a==c){
//     console.log(2);
// }else{
//     console.log(1);
// }
//////#19
// let a=2,b=1,c=2,d=2;
// if(a==b && a==c){
//     console.log(4);
// }else if(a==b && b==d){
//     console.log(3);
// }else if(a==c && c==d){
//     console.log(2);
// }else if(b==c && c==d){
//     console.log(1);
// }
//////#20
// let a=8,b=-4,c=-8;
// if((a-b)<(a-c)){
//     console.log(a-b,' b nuqta yaqin');// -3--------0---3----5
// }else{
//     console.log((a-c),' c nuqta yaqin');
// }
//////#21

//////#22

//////#23

//////#24
// let x=1,y;
// if(x<=0){
//     y=x-6;
//     console.log(y);
// }else if(x>0){
//     y=2*Math.sin(x);
//     console.log(y);
// }
//////#25
// let x=2,y;
// if(x<-2 || x>2){
//     y=2*x;
// }else{
//     y=-3*x;
// }
// console.log('natija:',y);

//#26
// let x=1.5,y;
// if(x<=0){
//     y=-x;
// }else if(0<x && x<2){
//     y=x**2;
// }else if(x>=2){
//     y=4
// }
// console.log('natija:',y);

//#27
// let x=3,y;
// if(x<0){
//     y=0;
// }else if(x%2==0){
//     y=1;
// }else if(x%2==1){
//     y=-1;
// }
// console.log('natija:',y);


//#28
// const years=604;
// if(years%400==0){
//     console.log('kabisa yili:',years);
// }else if(years%4==0 && years%100!=0){
//     console.log('kabisa yili:',years);
// }else{
//     console.log('Kabisa yili emas:',years);
// }

//#29
// const n=987;
// if(n>0){
//     if(n%2==0){
//         console.log('musbat juft son:',n);
//     }else{
//         console.log('musbat toq son:',n);
//     }
// }else if(n<0){
//     if(n%2==0){
//         console.log('manfiy juft son:',n);
//     }else{
//         console.log('manfiy toq son:',n);
//     }
// }else{
//     console.log('nol kiritildi!!!');
// }

//#30
// const n=999;
// if(n%2==0){
//     if(n>0 && n<10){
//         console.log('juft bir xonali son:',n);
//     }else if(n>=10 && n<=98){
//         console.log('juft son ikki xonali:',n);
//     }else if(n>=100){
//         console.log('uch xonali juft son:',n);
//     }

// }else{
//     if(n>0 && n<10){
//         console.log('bir xonali toq son:',n);
//     }else if(n<=99 && n>=11){
//         console.log('ikki xonali toq son:',n);
//     }else if(n>=101 && n<=999){
//         console.log('uch xonali toq son:',n);
//     }

// }





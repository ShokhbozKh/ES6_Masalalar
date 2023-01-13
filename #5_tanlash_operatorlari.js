//Tanlash operatorlari 20 ta masala
// switch(new Date().getDay()){
    
//     case 0:
//         day="Yakshanba";
//         break;
//     case 1:
//         day="Dushanba";
//         break;
//     case 2:
//         day="Seshanba";
//         break;
//     case 3:
//         day="Chorshaba";
//         break;
//     case 4:
//         day="Payshaba";
//         break;
//     case 5:
//         day="Juma";
//         break;
//     case 6:
//         day="Shanba";
//         break;
//     default:
//         day="not day";
//         break;
// }
// console.log(day);


//#1
// k=3;
// switch(k){
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Charshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juyma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//     default:
//         console.log("Bunday xafta kuni yuq");
//         //break;    
// }

//#2
// const k=0;
// switch(k){
//     default:
//         natija="xato kiritildi baho";
//         break;
//     case 1:
//         natija="yomon";
//         break;
//     case 2:
//         natija="Qoniqarsiz";
//         break;
//     case 3:
//         natija="qoniqarli";
//         break;
//     case 4:
//         natija="Yaxshi";
//         break;
//     case 5:
//         natija="A'lo";
//         break;
// }
// console.log(natija);

//#3
// month=3;
// switch(month){
//     case 1:
//     case 2:
//     case 12:
//         fasl=" Qish";
//         break;
//     case 3:
//     case 4:
//     case 5:
//         fasl="Bahor";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         fasl="Yoz";
//         break;
//     case 9:
//     case 10:
//     case 11:
//         fasl="Kuz";
//         break;
//     default:
//         fasl='Xato';
// }
// console.log(fasl);

//#4
// oy=3;
// switch(oy){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         kun="31 kun bor";
//         break;
//     case 4:
//     case 6:
//     case 11:
//     case 9:

//         kun="30 kun bor";
//         break;
//     case 2:
//         kun="28 yoki 29 kun bor";
//         break;
//     default:
//         kun="oy xato kiritildi";
//         break;

// }
// console.log(kun);

//#5
// let a=4,b=7;
// amal="buluv";
// switch(amal){
//     case "plus":
//         natija=a+b;
//         break;
//     case "minus":
//         natija=a-b;
//         break;
//     case "kupaytiruv":
//         natija=a*b;
//         break;
//     case "buluv":
//         natija=a/b;
//         break;
//     default:
//         natija="amal xato kiritildi";
//         break;
// }
// console.log(natija);

//#6
// let k=200;
// key =2;
// switch(key){
//     case 1:
//         n=k*10;
//         break;
//     case 2:
//         n=k*1000;
//         break;
//     case 3:
//         n=k;
//         break;
//     case 4:
//         n=k/100;
//         break;
//     default:
//         n='xatolik bor';
//         break;
// }console.log(n,' metr');

//#7
// let key='gr';
// let m=2400;
// switch(key){
//     case 'kg':
//         n=m; break;
//     case 'mg':
//         n=m*1000*1000;
//         break;
//     case 'gr':
//         n=m*1000;
//         break;
//     case 't':
//         n=m/1000;
//         break;
//     case 's':
//         n=m/10000;
//         break;
//     default:
//         n='xato';

// }console.log(n);

//#8////////////////////////
/*
d-kun--
m-oy-- kun topish
365 kun dan bir kun qaysi sanaga teng
*/
// let m=4,d=22;
// let y='';
// switch(m){
//     case 1:
//         y=`${d}-kun`;
//         break;
//     case 2:
//         y=`${d+31}- kun`;
//         break;
//     case 3:
//         y=`${d+31+29} -kun`;
//         break;
//     case 4:
//         y=`${d+31+29+31} -kun`;
//         break;
//     case 5:
//         y=`${d+31+29+31+30} kun`;
//         break;
//     case 6:////hamma oy lar kunilari qushiladi
//         y=`${d} kun`;
//         break;
//     case 7:
//         y=`${d} kun`;
//         break;
//     case 8:
//         y=`${d} kun`;
//         break;
//     case 9:
//         y=`${d} kun`;
//         break;
//     case 10:
//         y=`${d} kun`;
//         break;
//     case 11:
//         y=`${d} kun`;
//         break;
//     case 12:
//         y=`${d} kun`;
//         break;
// }console.log(y)

////////////////////////////// 

//#9
// let d=31;
// let m=3;
// switch(m){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         if(d==31){
//             y=`${m+1} oy ${1} kun`;
//         }else if(d>31){
//             y='xatolik bor';
//         }
//         else{
//             y=`${m} oy ${d+1} kun`;
//         }
//         break;
//     case 11:
//     case 6:
//     case 4:
//     case 9:
//         if(d==30){
//             y=`${m+1} oy ${1} kun`;
//         }else if(d>30){
//             y='xatolik bor';
//         }
//         else{
//             y=`${m} oy ${d+1} kun`;
//         }
//         break;
//     case 2:
//         if(d==28){
//             y=`${m+1} oy ${1} kun`;
//         }else if(d>28){
//             y='xatolik bor';
//         }
//         else{
//             y=`${m} oy ${d+1} kun`;
//         }
//         break;
// }console.log(y);

//#10
//y unalish 4 ta
//k kamanda 0-2
// let yu='q';
// let k=0;
// y='';
// switch(k){
//     case 0:
//         y+="harakatni davom ettir ";
//         break;
//     case 1:
//         y+="chapga buril ";
//         break;
//     case 2:
//         y+='o\'nga buril ';
//         break;

// }switch(yu){
//     case 'q':
//         y+='sharqga';
//         break;
//     case 'g':
//         y+='g\'arbga';
//         break;
//     case 's':
//         y+='shimolga';
//         break;
//     case 'j':
//         y+='janubga';
//     default:
//         y+=' xatolik bor';
// }
// console.log(y);

//#11
// let k1='j';
// let k2=2;
// y='';
// switch(k2){
//     case 0:
//         y+='o\'nga buril ';
//         break;
//     case 1:
//         y+='chapga buril ';
//         break;
//     case 2:
//         y+='burilish 180 gradus ';
//         break;
//     default:
//         y+="xatolik bor";
//         break;
// }switch(k1){
//     case 'q':
//         y+='sharq ga';
//         break;
//     case "s":
//         y+='shimolga';
//         break;
//     case "j":
//         y+='janubga';
//         break;
//     case 'g':
//         y+='g\'arbga';
//         break;
//     default:
//         y+='xatolik bor';
//         break;
// }console.log(y);

//#12
// let key=4;
// let s=3;
// switch(key){
//     case 1:
//         d=2*r;
//         l=2*Math.PI*r;
//         s=Math.PI*r*r;
//         break;
//     case 2:
//         r=d/2;
//         l=2*r*Math.PI;
//         s=Math.PI*r*r;
//         break;
//     case 3:
//         r=l/2*Math.PI;
//         d=2*r;
//         s=Math.PI*r*r;
//         break;
//     case 4:
//         r=Math.sqrt(s/Math.PI);
//         d=2*r;
//         l=2*r*Math.PI;
//         break;
//     default:
//         console.log("xato");
//         break;

// }console.log(`r=${r} \n d=${d}\n l=${l}\n s=${s}`);

//#13
// let k=4;
// let s=2;
// switch(k){
//     case 1:
//         c=a*Math.sqrt(2);
//         h=c/2;
//         s=c*h/2;
//         break;
//     case 2:
//         a=c/Math.sqrt(2);
//         h=c/2;
//         s=c*h/2;
//         break;
//     case 3:
//         c=2*h;
//         a=c/Math.sqrt(2);
//         s=c*h/2;
//         break;
//     case 4:
//         c=Math.sqrt(s*4);
//         a=c/Math.sqrt(2);
//         h=c/2;
//         break;
//     default:
//         console.log('xato');
//         break;
// }console.log(`a=${a}\nc=${c}\nh=${h}\ns=${s}`);

//#14
// let k=2;
// let r1=2;
// switch(k){
//     case 1:
//         r1=a*Math.sqrt(3)/6;
//         r2=2*r1;
//         s=a*a*Math.sqrt(3)/4;
//         break;
//     case 2:
//         a=r1/Math.sqrt(3)/6;
//         r2=2*r1;
//         s=a*a*Math.sqrt(3)/4;
//         break;
//     case 3:
//         r1=r2/2;
//         a=r1/Math.sqrt(3)/6;
//         s=a*a*Math.sqrt(3)/4;
//         break;
//     case 4:
//         a=Math.sqrt(s/Math.sqrt(3)/4);
//         r1=a*Math.sqrt(3)/6;
//         r2=2*r1;
//         break;
// }console.log(`a=${a}\nr1=${r1}\nr2=${r2}\n s=${s}`);

//#15
// let n=12;
// let m=3;
// y=' ';
// if(n>=6 && n<=14){
//     switch(n){
//         case 6:
//             y+="olti ";break;
//         case 7:
//             y+="yetti ";break;
//         case 8:
//             y+="sakkiz ";break;
//         case 9:
//             y+="tuqqiz ";break;
//         case 10:
//             y+="o\'n ";break;
//         case 11:
//             y+="valet ";break;
//         case 12:
//             y+="dama ";break;
//         case 13:
//             y+="qirol ";break;
//         case 14:
//             y+="tuz ";break;
//     }

// }else{
//     y='xatolik bor';
// }
// if(1<=m && m<=4){
//     switch(m){
//         case 1:
//             y+='g\'isht';break;
//         case 2:
//             y+='olma';break;
//         case 3:
//             y+='chillak';break;
//         case 4:
//             y+='qarg\'a';break; 
//     }
// }else{
//     y='xatolik bor';
// }console.log(y);

//#16
// let yosh=57;
// let b=yosh%10;
// let un=Math.trunc(yosh/10);
// y=' ';
// if(yosh>=20 && yosh<=69){
//     switch(un){
//         case 6:
//             y+="oltmish ";
//             break;
//         case 2:
//             y+="yigirma ";
//             break;
//         case 3:
//             y+='uttiz '; break;
//         case 4:
//             y+='qirq '; break;
//         case 5:
//             y+='ellik '; break;
//         default:
//             y='xatolik bor';
//     }
//     switch(b){
//         case 1:
//             y+='bir';
//             break;
//         case 2:
//             y+='ikki';
//             break;
//         case 3:
//             y+='uch';
//             break;
//         case 4:
//             y+='turt';
//             break;
//         case 5:
//             y+='besh';
//             break;
//         case 6:
//             y+='olti';
//             break;
//         case 7:
//             y+='yetti';
//             break;
//         case 8:
//             y+='sakkiz';
//             break;
//         case 9:
//             y+='tuqqiz'
//             break;
//         default:
//             y+='xatolik';
//             break;
//     }
// }else{
//     y='xato lik bu';
// }
// console.log(y);

//#17
/* 10--40== ta masala */
// let n=30;
// let y='';
// b=Math.trunc(n/10);
// un=n%10;
// switch(b){
//     case 1:
//         y+="un ";
//         break;
//     case 2:
//         y+='yigirma ';
//         break;
//     case 3:
//         y+='uttiz ';
//         break;
//     case 4:
//         y+='qirq ';
//         break;
//     default:
//         y+='xato ';
//         break
// }switch(un){
//     case 1:
//         y+="bir";
//         break;
//     case 2:
//         y+="ikki";
//         break;
//     case 3:
//         y+="uch";
//         break;
//     case 4:
//         y+="turt";
//         break;
//     case 5:
//         y+="besh";
//         break;
//     case 6:
//         y+="olti";
//         break;
//     case 7:
//         y+="yetti";
//         break;
//     case 8:
//         y+="sakkiz";
//         break;
//     case 9:
//         y+="tuqqiz";
//         break;
// }console.log(y,'ta masala');

//#18
//100--999 gacha
// let n=909;
// b=n%10;
// un=Math.trunc((n%100)/10);
// yuz=Math.floor(n/100);
// y=" ";
// if(n>=100 && n<=999){
//     switch(yuz){
//         case 1:
//             y+='bir yuzi ';
//             break;
//         case 2:
//             y+='ikki yuzi ';
//             break;
//         case 3:
//             y+='uch yuzi ';
//             break;
//         case 4:
//             y+='turt yuzi ';
//             break;
//         case 5:
//             y+='besh yuzi ';
//             break;
//         case 6:
//             y+='olti yuzi ';
//             break;
//         case 7:
//             y+='yetti yuzi ';
//             break;
//         case 8:
//             y+='sakkiz yuzi ';
//             break;
//         case 9:
//             y+='tuqqiz yuzi ';
//             break;
//     }switch(un){
//         case 0:
//             y+='';
//             break;
//         case 1:
//             y+='un ';
//             break;
//         case 2:
//             y+='yigirma ';
//             break;
//         case 3:
//             y+='uttiz ';
//             break;
//         case 4:
//             y+='qirq ';
//             break;
//         case 5:
//             y+='ellik ';
//             break;
//         case 6:
//             y+='oltmish ';
//             break;
//         case 7:
//             y+='yetmish ';
//             break;
//         case 8:
//             y+='sakson ';
//             break;
//         case 9:
//             y+='tuqson ';
//             break;
//     }switch(b){
//         case 0:
//             y+='';
//             break;
//         case 1:
//             y+='bir';
//             break;
//         case 2:
//             y+='ikki';
//             break;
//         case 3:
//             y+='uch';
//             break;
//         case 4:
//             y+='turt';
//             break;
//         case 5:
//             y+='besh';
//             break;
//         case 6:
//             y+='olti';
//             break;
//         case 7:
//             y+='yetti';
//             break;
//         case 8:
//             y+='sakkiz';
//             break;
//         case 9:
//             y+='tuqqiz';
//             break;
//     }
// }else{
//     y='xatolik bor';
// }console.log(y);

//#19
/*
sh==60
yil muchali 5 ta rang
va 12 ta hayvon
yil raqami---.> 1984-----davr boshi---- yashil sichqon yili
*/
// let year=1985;
// let color=Math.trunc(year%5);
// let animal=Math.trunc(year%12);
// y='';
// switch(color){
//     case 4:
//         y+='yashil ';break;
//     case 0:
//         y+='qizil ';break;
//     case 1:
//         y+='sariq '; break;
//     case 2:
//         y+="oq ";break;
//     case 3:
//         y+='qora ';break;
//     default:
//         y="xatoli rang da";
//         break;
// }switch(animal){
//     case 4:
//         y+='sichqon';break;
//     case 5:
//         y+='sigir';break;
//     case 6:
//         y+='yo\'lbars';break;
//     case 7:
//         y+='quyon';break;
//     case 8:
//         y+='ajdar';break;
//     case 9:
//         y+='ilon';break;
//     case 10:
//         y+='ot';break;
//     case 11:
//         y+='qo\'y';break;
//     case 0:
//         y+='maymun';break;
//     case 1:
//         y+='tovuq';break;
//     case 2:
//         y+='it';break;
//     case 3:
//         y+='to\'ng\'iz';break;
// }
// console.log(year,'-',y, ' yili');

//#20
// let Day=12,Month=12;
// switch (Month) {
//     case 1:
//             if(Day>=20){
//                 console.log('Qovg\'a');
//             }else{
//                 console.log("Echki");
//             }
//         break;
//     case 2: 
//             if(Day>=19){
//                 console.log("Baliq");
//             }else{
//                 console.log("Qovg'a");
//             }
//         break;
//     case 3:
//             if(Day>=21){
//                 console.log("Qo'y");
//             }else{
//                 console.log("Baliq");
//             }
//         break;
//     case 4:
//             if(Day>=20){
//                 console.log("Buzoq");
//             }else{
//                 console.log("Qo'y");
//             }
//         break;
//     case 5:
//             if(Day>=21){
//                 console.log("Egizaklar");
//             }else{
//                 console.log("Buzoq");
//             }
//         break;
//     case 6:
//             if(Day>=22){
//                 console.log("Qisqichbaqa");
//             }else{
//                 console.log("Egizaklar");
//             }
//         break;
//     case 7:
//             if(Day>=23){
//                 console.log("Arslon");
//             }else{
//                 console.log("Qisqichbaqa");
//             }
//         break;
//     case 8:
//             if(Day>=23){
//                 console.log("Parizod");
//             }else{
//                 console.log("Arslon");
//             }
//         break;
//     case 9:
//             if(Day>=23){
//                 console.log("Tarozi");
//             }else{
//                 console.log("Parizod");
//             }
//         break;
//     case 10:
//             if(Day>=23){
//                 console.log("Chayon");
//             }else{
//                 console.log("Tarozi");
//             }
//         break;
//     case 11:
//             if(Day>=23){
//                 console.log("Uq otar");
//             }else{
//                 console.log("Chayon");
//             }
//         break;
//     case 12:
//             if(Day>=22){
//                 console.log("Echki");
//             }else{
//                 console.log("Uq otar");
//             }
//         break;
//     default:
//         console.log('xatolik bor');
//         break;
//     }
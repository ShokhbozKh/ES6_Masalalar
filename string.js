///string
let email='Shohboztuit@gmail.com    ';
let name="      Shohboz";
let lastName="      Xurramov";
fullName=name+lastName;

console.log(fullName);
console.log(fullName[3]);//index buyicha chiqarish
console.log(lastName.length);//uzunlik
//methods funksiya ga uxshab ish bajaradi methdlarga qavs quyiladi()
console.log(lastName.toUpperCase());//hamma suzni katta qilish
console.log(lastName.toLowerCase());// ,toLowerCase()kichik
console.log(email.indexOf("@"));// birinchi kelgan belgini index buyicha qidiradi
console.log(email.lastIndexOf('o'));//oxiridann boshlab qidiradi
console.log(email.slice(0,7));// shu oraliqdagi texniqirqadi oxirdisi kesmaydi boshdan kesadi
console.log(email.substr(1,4)); //boshlanishidan boshlab nechta kerakligini kesadi 1 boshlab 4 ta belgi oberadi.
console.log(email.replace("Sh","SH")); //almashtirish birinchi topganini
console.log(email.charAt()); //CharAt() birinchi belgini olib beradi
console.log(email.trim()); //bosh dan va oxiridan bushliq olish
console.log(email.length,(email.trim()).length); 
console.log(email.split(' '));//stringni arry qilib beradi('" ") qilsak har bir elementni arry qilib beradi
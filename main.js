// let age = +prompt('yoshingizni kiriting');
// if(age <= 18) {
//   alert("yoshsiz. o'qishingiz kerak")
// }else if(age <= 50){
//   alert("ishlashingiz kerak")
// }else if(age <=59){
//   alert('Yaqinda pensiyaga chiqasiz')
// }else if(age <=150){
//   alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz")
// }else {
//   alert("Nimadir noto'g'ri ketti")
// }

// let ism = +prompt('Ismingizni kiriting')
// if( ism == 'Ezoza'){
//   alert('Hello boss')
// }else {
//   alert('Hello guest')
// }
var num1 = +prompt('birinchi sonni yozing')
var num2 = +prompt('ikkinchi sonni yozing')
var num3 = +prompt('uchinchi sonni yozing')

if(num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3) {
  alert('ortagi son ' + num1)
} else if(num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
  alert("o'rtadagi son " + num2)
}else{
  alert("o'rtadagi son " + num3)
}

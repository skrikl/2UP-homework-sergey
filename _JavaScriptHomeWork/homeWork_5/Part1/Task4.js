/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

  */
function returnCounter(i) {
   return function Fn() {
      return ++i;
   }
}
var f = returnCounter(10);
console.log(f());
console.log(f());
console.log(f());
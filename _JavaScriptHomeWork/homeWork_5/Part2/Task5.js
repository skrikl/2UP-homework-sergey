/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function mySlice(array, from, to) {
    var result = [];
    
    if (to > array.length || !to) {
        to = array.length;
    } 
    if (from + array.length < 0) {
        from = -array.length;
    } 
    if ( from < 0) {
        from = from + array.length;
    } 
    for (var i = from; i < to; i++) {
        result = result.concat(array[i]);
    }
    return result;
}

var arr = ["Я", "сижу", "тут", "снова", "в", "три", "часа", "ночи"];
console.log(mySlice(arr, -7));


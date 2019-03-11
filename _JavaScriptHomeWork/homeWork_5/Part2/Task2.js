/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, 
 который будет передан в параметре array
 */
function map(array, fn) {
    var result = [];
    for (var i = 0; i < array.lenght; i++) {
        result[i] = fn(array[i], i, array);
    }
    return result;
}

var arr = [1, 2, 3, 4, 5];
function tmpFun(param1, param2, param3) {
    return(param2); //Второй параметр - это номер элемента.
}
console.log(map(arr)); /*Я ожидаю получить [0, 1, 2] - массив номеров 
элементов исходного массива. А получаю ничего. Почему?*/


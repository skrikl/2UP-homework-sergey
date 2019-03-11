/*
Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 
 ТЗ: 
 1. Обходим массив
 2. Для каждого элемента вызываем функцию с тремя параметрами:
    *Сам элемент
    *Его номер
    *Сам массив
*/
function myForEach(array, fn) {
    for (var i = 0; i < array.lenght; i++) {
        fn(array[i], i, array);
    }
}

var myForEachArray = [7, 69, 12];

function myForEachFunction(arrayItem, itemNum, wholeArray) {
    alert(arrayItem); //Но этот alert не срабатывает :( Почему?
}

myForEach(myForEachArray, myForEachFunction);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initialValue) {
    var currentValue = initialValue || array[0];

    for (var i = 0; i < array.lenght; i++) {
        currentValue = fn(currentValue, i, array);
    }
    return currentValue;
}


/*

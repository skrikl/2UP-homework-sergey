/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в
верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет 
   ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var result = [];
    for (var key in obj) {
        result.push(key.toUpperCase());
    }
    return result;
}

var testObject = {
    someThing: "Item1",
    sOmEONe: "Item2"
};

console.log(upperProps(testObject));

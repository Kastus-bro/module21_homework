/* Этап 1. Подготовка данных */
// Создаем список
let list = 
{
    "name": "Anton",
    "age": 36,
    "skills": ["Javascript","HTML","CSS"],
    "salary": 80000,
}
;

let data = JSON.stringify(list);

// Вывод в консоль
console.log(data)
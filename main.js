// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = prompt("Выберите язык ru или en");
console.log(lang);

if (lang != "ru" && lang != "en") {
  alert("Неверное значение, попробуйте еще раз");
  location.reload();
}



// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу

//  a) через if,
if (lang == "ru") {
  alert("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Восресенье");
} else if (lang == "en") {
  alert("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} 

//  b) через switch-case
switch (true) {
  case lang == "ru":
    alert("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Восресенье");
    break
  case lang == "en":
    alert("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    break
}

//  c) через многомерный массив без ифов и switch.
let weekData = [['Понедельник',' Вторник',' Среда',' Четверг',' Пятница',' Суббота',' Восресенье'],[' Monday',' Tuesday',' Wednesday',' Thursday',' Friday','  Saturday',' Sunday']]
let result = lang == "ru" ? weekData[0] : weekData[1];
alert(result);



// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = prompt("Введите имя Артем, Александр либо любое другое");
console.log(namePerson);

result1 = namePerson == "Артем" ? "Директор" : namePerson == "Александр" ? "Преподаватель" : "Студент";
alert(result1);



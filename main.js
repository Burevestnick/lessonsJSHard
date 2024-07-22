"use strict"



let getDate = function() {
  document.body.style.fontSize = "36px"
  document.body.style.fontFamily = "Arial"

  let date = new Date()

  let messageA
  let messageB

  let year = date.getFullYear()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()

  const options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
  }

  let getSecEnd = function(value) {
    if (value % 10 == 1) {
      return value += " секунда"
    } else if (value % 10 > 1 && value % 10 < 5) {
      return value += " секунды"
    } else {
      return value += " секунд"
    }
  }

  let getMinEnd = function(value) {
    if (value % 10 == 1) {
      return value += " минута"
    } else if (value % 10 > 1 && value % 10 < 5) {
      return value += " минуты"
    } else {
      return value += " минут"
    }
  }

  let getHourEnd = function(value) {
    if (value % 10 == 1) {
      return value += " час"
    } else if (value % 10 > 1 && value % 10 < 5) {
      return value += " часа"
    } else {
      return value += " часов"
    }
  }

  let clear = function() {
    messageA = ""
    messageB = ""
  }
  
  messageA = ("a) Сегодня " + date.toLocaleString('ru', options) + " " + year + " года, " + getHourEnd(hour) + " " + getMinEnd(min) + " " + getSecEnd(sec) +"<br>")
  messageB = ("b) " + date.toLocaleString())

  document.write(messageA);
  document.write(messageB);

}

getDate()


setInterval(() => document.location.reload(), 1000)



// 1) Выведите на страницу текущую дату и время в 2-х форматах:
//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
//     б) '04.02.2020 - 21:05:33'

// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"

// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)

// 4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду


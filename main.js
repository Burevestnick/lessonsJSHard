let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
let date = new Date()
let weekDay = date.getDay()


// alert(week[0].toUpperCase());

let newWeek = week.map(function(item) {
  if (item === "Воскресенье" || item === "Суббота") {
    return item = "<i>" + item + "</i>"
  } else if (weekDay === week.indexOf(item)) {
    return item = "<b>" + item + "</b>"
  } else {
    return item
  }
})

newWeek.forEach(function(item) {
  document.write(item + '<br>')
})


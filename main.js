title = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, alias. Veritatis perferendis provident maiores voluptas!    "


const delSpace = function(str) {
  str = str.replace(/^\s+/, '')
  str = str.replace(/\s+$/, '')
  if (str.length > 30) {
    str = str.slice(0, 30) + "..."
  }
  return str
} 

console.log(delSpace(title));






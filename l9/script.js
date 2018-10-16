var para1 = document.getElementById('para1')
para1.innerHTML = "Coding is fun"


// getElementById
var btn = document.getElementById('btn')
btn.onclick = function() {
  var username = document.getElementById('username')
  alert(username.value)
}


// getElementsByClassName
var para = document.getElementsByClassName('para')
console.log(para)
para[2].innerHTML = "Blah blah blah"


// getElementsByTagName
var h1 = document.getElementsByTagName('h1')
h1[0].innerHTML = "New Title"


// querySelector
var para2 = document.querySelector('#para2')
para2.innerHTML = "New paragraph 2"
para2.style.color = "red"
para2.style.backgroundColor = "yellow"

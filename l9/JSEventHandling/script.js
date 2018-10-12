var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')
var box3 = document.querySelector('#box3')

box1.onclick = function() {
  box1.style.backgroundColor = "red"
}

box1.ondblclick = function() {
  box1.style.backgroundColor = "yellow"
}

// box1.onclick = function() {
//   box1.style.backgroundColor = "purple"
//   box1.innerHTML = "box1"
//   box1.style.fontSize = "30px"
// }





box2.onmouseover = function() {
  box2.style.backgroundColor = "purple"
  box2.innerHTML = "Box2"
  box2.style.fontSize = "40px"
  box2.style.color = "white"
}

box2.onmouseout = function() {
  box2.style.backgroundColor = "green"
}






box3.onmouseenter = function() {
  box3.style.backgroundColor = "blue"
  box3.style.display = "none"
}

box3.onmouseleave = function() {
  box3.style.backgroundColor = "maroon"
}



var pic = document.querySelector('#pic')
pic.onclick = function() {
  pic.innerHTML = "<img src='https://images.agoramedia.com/everydayhealth/cms/hc_allergies_living_with_cat_article.jpg' >"
}

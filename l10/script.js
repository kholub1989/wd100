var addbtn = document.querySelector("#add")

 addbtn.onclick = function() {
  var num1 = document.querySelector("#num1").value
  var num2 = document.querySelector("#num2").value

  var answer = parseInt(num1) + parseInt(num2)

  var result = document.querySelector("#result")
  result.innerHTML = answer

  if (answer < 0){
    result.style.color = "red"
  }else {
    result.style.color = "green"
  }

  var color = document.querySelector("#color")
  if(color.checked){
    document.body.style.backgroundColor = "skyblue"
  }
}

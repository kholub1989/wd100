var btn = document.querySelector("#login")

btn.onclick = function() {
  var username = document.querySelector("#username").value
  var pass = document.querySelector("#pass").value
  var result = document.querySelector("#result")
  var container = document.querySelector("#container")
  var heading = document.querySelector("#heading")

  console.log(pass)

  if (pass == "softball") {
    result.innerHTML = "You have seccessfully login in."
    result.style.color = "green"
    // window.location.href = "https://google.com"
    container.style.display = "none"
    heading.innerHTML = "Welcome to the Home Page"


  } else {
    result.innerHTML = "username/password is incorect."
    result.style.color = "red"
  }
}

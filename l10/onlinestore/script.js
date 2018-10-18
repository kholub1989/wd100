var buyBtn = document.querySelector("#buy")

buyBtn.onclick = function() {
  var item = document.querySelector("#jeans").innerHTML
  var price = document.querySelector("#jeansPrice").innerHTML
  var priceValue = parseFloat(price)
  var qty = document.querySelector("#qty").value
  var cost = parseInt(qty) * priceValue

  var result = document.querySelector("#result")
  result.innerHTML = "Here is your order: <br>" +
  qty + " " + item + " for $" + cost.toFixed(2)
}

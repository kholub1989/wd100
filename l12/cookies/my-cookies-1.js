var getNmae
$('#btn').on('click', function() {
  var name = $('#name').val()
  Cookies.set('cookieName', name)
  getName = Cookies.get('cookieName')
  $('#getName').html(getName)

  if ($('#female').is(':checked')) {
    Cookies.set('cookieGender', 'female')
    document.body.style.backgroundColor = 'pink'
    console.log(getGender);
    $('#message').html("We have women's shoes")
  }else {
    Cookies.set('cookieGender', 'male')
    document.body.style.backgroundColor = 'skyblue'
    console.log(getGender);
    $('#message').html("We have men's shoes")
  }
  getGender = Cookies.get('cookieGender')
  console.log(getGender);
})
getName = Cookies.get('cookieName')
$('#getName').html(getName)


getGender = Cookies.get('cookiename')
if (getGender == "female") {
  $('body').css('background-color', 'pink')
  $('#message').html("We have women's shoes.")
}else {
  $('body').css('background-color', 'pink')
  $('#message').html("We have men's shoes.")
}

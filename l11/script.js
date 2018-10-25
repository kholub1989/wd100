// var heading1 = document.querySelectorAll('#heading1')
// heading1.style.color = 'red'

$('#heading1').css('color', 'red')
$('#heading1').css('text-decoration', 'underline')

$('#heading1').html('My new paraghraph 1') //innerHTML

// $('#btn').click(function() {
//   var myName = $('#name').val()
//   $('#result').html(myName)
// })


$('#btn').click(function() {
  var myName = $('#name').val()
  $('#result').html(myName)
  $('#name2').val(myName)
})

// box
// hide()
$('#box1').hide(2000)
//show()
$('#box1').show(2000)

//fadeOut & fadeIn()
$('#box2').fadeOut(2000)
$('#box2').fadeIn(2000)

//slideUp & slideDown
$('#box3').slideUp(2000)
$('#box3').slideDown(2000)

//animate
$('#box4').animate( {
opacity: 0.25,
width: '70%',
height: '50px'
} , 2000);

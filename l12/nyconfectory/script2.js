var sugarCount = 0, chocoCount = 0, lemonCount = 0

// $('#add-sugar').on('click', function() {
//   sugarCount++
//   Cookies.set('sugarCookie', sugarCount)
//   getSugar = Cookies.get('sugarCookie')
//   $('#sugar-count').html(getSugar)
// })
//
// $('#add-choco').on('click', function() {
//   chocoCount++
//   Cookies.set('chocoCookie', chocoCount)
//   getChoco = Cookies.get('chocoCookie')
//   $('#choco-count').html(getChoco)
// })
//
// $('#add-lemon').on('click', function() {
//   lemonCount++
//   Cookies.set('lemonCookie', lemonCount)
//   getLemon = Cookies.get('lemonCookie')
//   $('#lemon-count').html(getLemon)
// })




  $('#add-sugar')||('#add-choco')||('#add-lemon').on('click', function() {
    sugarCount++
    chocoCount++
    lemonCount++
    Cookies.set('sugarCookie', sugarCount)
    Cookies.set('chocoCookie', chocoCount)
    Cookies.set('lemonCookie', lemonCount)
    getSugar = Cookies.get('sugarCookie')
    getChoco = Cookies.get('chocoCookie')
    getLemon = Cookies.get('lemonCookie')
    $('#sugar-count')||('#choco-count')||('#lemon-count').html(getSugar, getChoco, getLemon)
  })




// //sugar
// $('#add-sugar').on('click', function() {
//   sugarCount++
//   Cookies.set('sugarCookie', sugarCount)
//   getSugar = Cookies.get('sugarCookie')
//   $('#sugar-count').html(getSugar)
// })

//
//
//
// //choco
// $('#add-choco').on('click', function() {
//   chocoCount++
//   Cookies.set('chocoCookie', chocoCount)
//   getChoco = Cookies.get('chocoCookie')
//   $('#choco-count').html(getChoco)
// })
// //lemon
// $('#add-lemon').on('click', function() {
//   lemonCount++
//   Cookies.set('lemonCookie', lemonCount)
//   getLemon = Cookies.get('lemonCookie')
//   $('#lemon-count').html(getLemon)
// })
//
//
// getSugar = Cookies.get('sugarCount')
// $('#sugar-count').html(getSugar)
//
// $('#feel-guilty').on('click', function() {
//   sugarCount = 0
//   Cookies.set('sugarCookie', sugarCount)
//   getSugar = Cookies.get('sugarCookie')
//   $('#sugar-count').html(getSugar)
// })

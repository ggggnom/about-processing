let goAlert = document.getElementById('goAlert')
goAlert.onclick = function() {
  alert('Hello')
}

let goPrompt = document.getElementById('goPrompt')
goPrompt.onclick = function() {
  let age = prompt('Cколько тебе лет?', 100)
  alert(`Тебе ${age} лет!`)
}

let goConfirm = document.getElementById('goConfirm')
goConfirm.onclick = function() {
  let isBoss = confirm("Ты здесь главный?");
  alert( isBoss );
}

let showMenu = document.querySelector('.menu__burger')
showMenu.onclick = function() {
  let menuOnMobile = document.querySelector('.menuOnMobile')
  menuOnMobile.style.visibility = 'visible'
}

let cancelMenu = document.querySelector('.cancel')
cancelMenu.onclick = function() {
  let mobileMenu = document.querySelector('.menuOnMobile')
  mobileMenu.style.visibility = 'hidden';
}

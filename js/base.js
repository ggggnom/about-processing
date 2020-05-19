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

let goIf = document.getElementById('goIf')
goIf.onclick = function() {
  let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');
  if (year == 2015) alert( 'Вы правы!' );
}

let goElse = document.getElementById('goElse')
goElse.onclick = function() {
  let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

    if (year == 2015) {
      alert( 'Да вы знаток!' );
    } else {
      alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
    }
}


let goIfElse = document.getElementById('goIfElse')
goIfElse.onclick = function() {
  let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

    if (year < 2015) {
      alert( 'Это слишком рано...' );
    } else if (year > 2015) {
      alert( 'Это поздновато' );
    } else {
      alert( 'Верно!' );
    }
}

let goes = document.getElementById('goes')
goes.onclick = function() {
  let accessAllowed;
    let age = prompt('Сколько вам лет?', '');

    if (age > 18) {
     accessAllowed = true;
    } else {
     accessAllowed = false;
    }

    alert(accessAllowed);
}

const username = 'salom';
const password = 'salomm';



let userInput =   document.getElementsByTagName('input').value;
let userPassword = document.getElementsByTagName('input').value;

function checkUser() {
  console.log(userInput, userPassword );

  if (username === userInput && password === userPassword) {
    window.open('page/index.html');
    document.getElementById('alertMsg').innerHTML = userInput + userPassword;
} else {
alert('salom');
}
}


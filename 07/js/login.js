function salvarDadosNoLocalStorage() {
    localStorage.setItem('usuario', 'helena');
    localStorage.setItem('senha', 'helena');
}

window.onload = salvarDadosNoLocalStorage;

var botaoLogin = document.querySelector("#login");

botaoLogin.addEventListener('click', function(event) {
    event.preventDefault();
    
    var usuarioLS = localStorage.getItem('usuario');
    var senhaLS = localStorage.getItem('senha');

    var user = document.getElementById('username');
    var pwd = document.getElementById('password');

    console.log(user.value);
    console.log(pwd.value);
    console.log(usuarioLS);
    console.log(senhaLS);

    if ((user.value == usuarioLS) && (pwd.value == senhaLS)) {
        console.log("sucesso!");
    } else {
        console.log("ih, deu ruim.");
    }
});
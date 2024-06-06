auth();

function auth() {

    const user = localStorage.getItem("User");
    const pass = localStorage.getItem("Pass");

    if(!(user == undefined && pass == undefined)) {
        document.querySelector(".card-body").innerHTML = `<div><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-check-circle-fill" viewBox="0 0 16 16" style="margin-bottom: 1em;">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg><h2 class="login-text"><strong>Login Efetuado</strong></h2>
        <button class="dash" href="index.html">Acessar Dashboard</button>
        </div>`
    } else {

        $(".realizar-login").click(function () {

            const button = this.parentElement;
            const nome = $(button).children(".form").children(".user").val();
            const pass = $(button).children(".form").children(".pass").val();
            localStorage.setItem("User", nome);
            localStorage.setItem("Pass", pass);
    
            document.querySelector(".card-body").innerHTML = `<div><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-check-circle-fill" viewBox="0 0 16 16" style="margin-bottom: 1em;">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg><h2 class="login-text"><strong>Login Efetuado</strong></h2>
        <button class="dash" href="index.html">Acessar Dashboard</button>
        </div>`
    
        });

    }

}(jQuery);
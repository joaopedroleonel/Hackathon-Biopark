pegar();

async function pegar() {

    try {

        const response = await fetch("http://localhost:7000/alunos");
        const data = await response.json();
        const dados = data.alunos;

        for(let i = 0; i < dados.length; i++) {

            document.querySelector(".form").innerHTML += `
            
            <div class="card" style="width: 18rem; border-radius: 2em;">
            <div class="list-group list-group-flush">
                <p class="list-group-item" style="appearance: auto;">Nome: <strong>`+dados[i].nome+`</strong></p>
                <p class="list-group-item" style="appearance: auto;">Curso: <strong>`+dados[i].curso+`</strong></p>
                <p class="list-group-item" style="appearance: auto;">Progresso: <strong>`+dados[i].progresso+`%</strong></p>
            </div>
            </div>
            `

        }
        
    } catch (error) {
        console.log(error);
    }

    $('.excluir-faltante').click(function (){
        const exclu = $(".faltou")

        for(let j = 0; j < exclu.length; j++) {

            exclu[j].style.display = "none";

        }

        this.remove();
    });
    
}
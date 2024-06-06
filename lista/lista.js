pegar();

async function pegar() {

    try {

        const response = await fetch("http://localhost:7000/alunos");
        const data = await response.json();
        const dados = data.alunos;

        for(let i = 0; i < dados.length; i++) {

            if(dados[i].presente == "sim") {

            document.querySelector(".form").innerHTML += `
            
            <div class="card">
                    `+dados[i].nome+`
                    <i class="bi bi-check-circle-fill icon-right"></i>
            </div>
            
            `
            } else {

                document.querySelector(".form").innerHTML += `
            
                <div class="card faltou">
                        `+dados[i].nome+`
                        <i class="bi bi-x-circle-fill icon-wrong"></i>
                </div>
                
                `

            }

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
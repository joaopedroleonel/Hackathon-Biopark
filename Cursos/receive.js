pegar();

async function pegar() {

    try {

        const response = await fetch("http://localhost:7000/ciencia-de-dados-json");
        const data = await response.json();
        const dados = data.dados;

        localStorage.setItem("id", 1);

        let i = localStorage.getItem("id");

        console.log(data);

        document.querySelector("section").innerHTML += `
            
            <div class="card" style="width: 18rem; margin: 1em;">
            <div class="card-body">
                <h5 class="card-title">`+ dados[i].curso +`</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Semestre: `+dados[i].semestre+`</h6>
                <p class="card-text">`+dados[i].Objetivo+`</p>
                <h6 class="card-subtitle mb-2 text-body-secondary">Carga Horaria: `+dados[i].carga+`</h6>
            </div>
            </div>
            
            `



        // for(let i = 0; i < dados.length; i++) {
        //     document.querySelector("section").innerHTML += `
            
        //     <div class="card" style="width: 18rem; margin: 1em;">
        //     <div class="card-body">
        //         <h5 class="card-title">`+ dados[i].curso +`</h5>
        //         <h6 class="card-subtitle mb-2 text-body-secondary">Semestre: `+dados[i].semestre+`</h6>
        //         <p class="card-text">`+dados[i].Objetivo+`</p>
        //         <h6 class="card-subtitle mb-2 text-body-secondary">Carga Horaria: `+dados[i].carga+`</h6>
        //     </div>
        //     </div>
            
        //     `
        // }
        
    } catch (error) {
        console.log(error);
    }
    
}
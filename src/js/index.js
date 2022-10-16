
const abas = (document.querySelectorAll(".aba"));

abas.forEach(aba => {
    aba.addEventListener("click", function() {

         if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});


function selecionarAba(aba) {
    const abaselecionada = document.querySelector(".aba.selecionado");
    abaselecionada.classList.remove("selecionado");

    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba) {
    const informacaoselecionada = document.
        querySelector(".informacao.selecionado");
        informacaoselecionada.classList.remove("selecionado");
        
        const idDoElementoDeinformacaoDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeinformacaoDaAba)
        informacaoASerMostrada.classList.add("selecionado")
}
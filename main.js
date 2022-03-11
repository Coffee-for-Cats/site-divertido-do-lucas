const pato = document.querySelector("#Patoso");
console.log(pato);
let margin = 0;
let subtractor = -10;
function move() {
    margin += subtractor;
    if (margin < -40 || margin > 40) {
        subtractor *= -1;
    }

    pato.style["margin-left"] = (margin + 30) + "px";
}

const alimentado = document.querySelector("#alimentado");
const alimentarButton = document.querySelector("#alimentar");

const hoje = new Date();
const diaDeHoje = hoje.getDate()

function alimentar() {
    setInterval(move, 80);
    alimentado.textContent = "Seu pato está dançando de felicidade por ter sido alimentado hoje!";
    alimentarButton.textContent = "Já alimentou ele com amor e carinho!";
    localStorage.setItem("dia", diaDeHoje);
}

const ultimaVezAlimentado = localStorage.getItem("dia");

if (ultimaVezAlimentado == diaDeHoje) {
    alimentar();
}

setInterval(move, 100);

const pato = document.querySelector("#Patoso");

console.log(pato);

let margin = 0;

let subtractor = -10;

function move() {
    margin += subtractor;
    if (margin < -40 || margin > 40) {
        subtractor *= -1;
    }

    pato.style["margin-top"] = margin + "px";
}
const num_text = document.getElementById('num_text');
const res_text = document.getElementById('resultado');
const btn_calc = document.getElementById('btn');

async function buscar_resultado(){
    const numero = Number(num_text.value);
    const response = await fetch('/buscar-resultado', {
        method: "POST",
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({ numero })
    });

    const dados = await response.json();

    res_text.innerHTML = `<p>${dados.resultado}</p>`;
};

btn_calc.addEventListener("click", (event) => {
    buscar_resultado();
});
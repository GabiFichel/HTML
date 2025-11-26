const display = document.getElementById("num");

let primeiroValor = "";
let segundoValor = "";
let operador = "";
let resultadoMostrado = false;

// ----------------- Função de cálculo via backend -----------------
async function calcularBackend(a, b, op) {
    const url = `http://localhost:8080/api/calc?a=${a}&b=${b}&op=${op}`;
    const resposta = await fetch(url);
    return await resposta.text();
}

// ----------------- Botões numéricos -----------------
document.querySelectorAll(".button").forEach(btn => {
    btn.addEventListener("click", () => {
        const valor = btn.textContent;

        // Ignorar operadores, C e =
        if (btn.classList.contains("operator") || 
            btn.classList.contains("c") || 
            btn.classList.contains("equal")) return;

        if (resultadoMostrado) {
            display.value = valor;
            resultadoMostrado = false;
            return;
        }

        if (display.value === "0") {
            display.value = valor;
        } else {
            display.value += valor;
        }
    });
});

// ----------------- Operadores -----------------
document.querySelectorAll(".operator").forEach(btn => {
    btn.addEventListener("click", () => {

        primeiroValor = display.value;
        let op = btn.textContent.trim();

        // ---------- traduz símbolos para o backend ----------
        switch (op) {
            case "+": operador = "add"; break;
            case "-": operador = "sub"; break;
            case "x": operador = "mul"; break;
            case "/": operador = "div"; break;
        }

        display.value = "0";
    });
});

// ----------------- Botão C -----------------
document.querySelector(".c").addEventListener("click", () => {
    display.value = "0";
    primeiroValor = "";
    operador = "";
});

// ----------------- Botão = -----------------
document.querySelector(".equal").addEventListener("click", async () => {
    if (primeiroValor === "" || operador === "") return;

    segundoValor = display.value;

    const resultado = await calcularBackend(primeiroValor, segundoValor, operador);

    display.value = resultado;
    resultadoMostrado = true;
});
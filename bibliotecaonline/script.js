function pesquisarLivro() {
    const livrosFixos = [
        "Dom Casmurro",
        "1984",
        "O Hobbit",
        "Orgulho e Preconceito"
    ];

    const livrosCadastrados = JSON.parse(localStorage.getItem("livros")) || [];

    let busca = document.getElementById("campoPesquisa").value;
    let resultado = document.getElementById("resultadoPesquisa");

    if (busca.trim() === "") {
        resultado.innerHTML = "Digite o nome de um livro.";
        resultado.style.color = "red";
        return;
    }

    if (livrosFixos.includes(busca) || livrosCadastrados.some(l => l.titulo === busca)) {
        resultado.innerHTML = "📗 Livro encontrado!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Livro não encontrado.";
        resultado.style.color = "red";
    }
}

function cadastrarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;

    if (!titulo || !autor || !genero) {
        alert("Preencha todos os campos!");
        return;
    }

    const novoLivro = { titulo, autor, genero };

    let livros = JSON.parse(localStorage.getItem("livros")) || [];
    livros.push(novoLivro);

    localStorage.setItem("livros", JSON.stringify(livros));

    alert("Livro cadastrado com sucesso!");
    document.getElementById("formCadastro").reset();
}

function listarLivros() {
    let livros = JSON.parse(localStorage.getItem("livros")) || [];

    const area = document.getElementById("listaLivros");
    area.innerHTML = "";

    livros.forEach(l => {
        area.innerHTML += `
            <div class="card-livro">
                <h3>${l.titulo}</h3>
                <p>Autor: ${l.autor}</p>
                <p>Gênero: ${l.genero}</p>
            </div>
        `;
    });
}
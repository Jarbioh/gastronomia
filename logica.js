// Exemplo de função para exibir resultados
function clicar(isButtonClick = false) {
  let pesquisar = document.getElementById('resposta');
  let inputBusca = document.getElementById('buscar');
  let termoBusca = inputBusca.value.trim().toLowerCase();
  let errorMessage = document.getElementById('error-message');

  // Limpa a mensagem de erro e o conteúdo anterior
  errorMessage.textContent = "";
  pesquisar.innerHTML = "";

  // Se o campo de busca estiver vazio
  if (termoBusca === "") {
    if (isButtonClick) {
      errorMessage.textContent = "Por favor, digite um prato para buscar.";
      return;
    } else {
      // Exibe todos os pratos
      pesquisar.innerHTML = '<ul>';
      pratos.forEach(prato => {
        pesquisar.innerHTML += `
          <li class="resultados">
            <img src="${prato.imagem}" alt="${prato.nome}" class="prato-imagem">
            <div>
              <h2><a href="${prato.link}" target="_blank">${prato.nome}</a></h2>
              <p class="descricao">${prato.descricao}</p>
              <a href="${prato.link}" target="_blank">Veja mais detalhes aqui</a>
            </div>
          </li>
        `;
      });
      pesquisar.innerHTML += '</ul>';
      return;
    }
  }

  // Se o campo de busca não está vazio
  let pratosEncontrados = pratos.filter(prato => prato.nome.toLowerCase().includes(termoBusca));

  if (pratosEncontrados.length > 0) {
    // Exibe os resultados em uma lista
    pesquisar.innerHTML = '<ul>';
    pratosEncontrados.forEach(prato => {
      pesquisar.innerHTML += 
        `<li class="resultados">
          <img src="${prato.imagem}" alt="${prato.nome}" class="prato-imagem">
          <div>
            <h2><a href="${prato.link}" target="_blank">${prato.nome}</a></h2>
            <p class="descricao">${prato.descricao}</p>
            <a href="${prato.link}" target="_blank">Veja mais detalhes aqui</a>
          </div>
        </li>`;
    });
    pesquisar.innerHTML += '</ul>';
  } else {
    pesquisar.textContent = 'Prato não encontrado. Por favor, verifique a ortografia ou tente outro prato.';
  }

  // Limpa o campo de busca após a pesquisa
  inputBusca.value = "";
}

// Adiciona um ouvinte de evento para o botão "Pesquisar"
document.getElementById('search-button').addEventListener('click', function() {
  clicar(true); // Passa 'true' para indicar que o botão foi clicado
});

// Adiciona um ouvinte de evento para o ícone de busca
document.getElementById('search-icon').addEventListener('click', function() {
  clicar(); // Sem parâmetros, indicando que não foi clicado no botão
});

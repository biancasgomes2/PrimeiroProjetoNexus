document.getElementById('botao').addEventListener('click', buscarCEP);

function buscarCEP() {

    
  // Limpa o valor digitado pegando apenas números
  const cep = document.getElementById('cepInput').value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert('Por favor, digite um CEP válido com 8 dígitos.');
    return;
  }

  // Faz a requisição na API do ViaCEP
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        alert('CEP não encontrado!');
        return;
      }
console.log(dados)
      // Preenche os dados nos campos correspondentes
      document.getElementById('rua').textContent = dados.logradouro || 'Rua não informada';
      document.getElementById('bairro').textContent = dados.bairro || 'Não informado';
      document.getElementById('cidadeUF').textContent = dados.localidade +"/"+ dados.uf;
      document.getElementById('cepExibido').textContent = dados.cep;

      // Exibe o card de resultados
      document.getElementById('resultado').classList.remove('d-none');
    })
    .catch(error => {
      console.error('Erro ao buscar o CEP:', error);
      alert('Erro ao buscar o CEP. Tente novamente.');
    });
}


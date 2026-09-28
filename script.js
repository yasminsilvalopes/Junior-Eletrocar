function validarServicos(servicosSelecionados) {
  return servicosSelecionados.length > 0;
}
function validarNome(nome) { 
  const partes = nome.trim().split(/\s+/);
  return partes.length >= 2 && partes.every(p => p.length >= 2);
}
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function validarTelefone(telefone) {
  const apenasNumeros = telefone.replace(/\D/g, "");
  return apenasNumeros.length >= 10 && apenasNumeros.length <= 11;
}
// como armazenar as informações do formulário
function Enviar(event) {
    if (event) event.preventDefault(); //impede o recarregamento da pagina  
   //parte de validar a checkboxes que foi marcada
    const servicosSelecionados = document.querySelectorAll('input[name="servicos"]:checked');
       //primeiro, pegue os valores do formulario
    const inputData = document.getElementById("inputData");
    const inputNome = document.getElementById("inputNome");
    const inputEmail = document.getElementById("inputEmail");
    const inputTelefone = document.getElementById("inputTelefone");

    let dataSelecionada = inputData.value.trim();
    let nome = inputNome.value.trim();
    let email = inputEmail.value.trim();
    let telefone = inputTelefone.value.trim();
  console.log("Serviços Selecionados:", Array.from(servicosSelecionados).map(checkbox => checkbox.value));
  console.log("Data:", dataSelecionada);
  console.log("Nome:", nome); 
  console.log("Email:", email);
  console.log("Telefone:", telefone);

     
      const mensagem = document.getElementById("mensagem");
    //checar se algum campo esta vazio
    if (dataSelecionada === "" || nome ==="" || email ==="" || telefone ==="") {
      mensagem.textContent = "Por favor, preencha todos os campos.";
      return;
    }
  //condições para validar as respostas do formulário
  if (!validarServicos(servicosSelecionados)) {
    mensagem.textContent = "Por favor, selecione um dos serviços disponíveis." ;
    return;  }
  if (!validarNome(nome)) {
    mensagem.textContent = "Por favor, escreva seu nome corretamente." ;
    return;  }  
  if (!validarEmail(email)) {
    mensagem.textContent = "Por favor, escreva seu email corretamente." ;
    return;  }
  if (!validarTelefone(telefone)) {
    mensagem.textContent = "Por favor, escreva seu telefone corretamente." ;
    return;  }    
      
    //se todos os campos forem preenchidos
    const listaServicos = Array.from(servicosSelecionados).map(checkbox => checkbox.value);   
    console.log("Dados Validados:", {servicos: listaServicos, nome, email, telefone, data: dataSelecionada});
    
   //para o formulário ir para o console
   console.log("Agendamento efetuado com sucesso:", {
    servicos: listaServicos,
    data: dataSelecionada,
    nome: nome,
    email: email,
    telefone: telefone,
   });
  
   mensagem.textContent = "Seu agendamento foi enviado com sucesso!"; 
      //limpa apos o preenchimento de dados
    inputData.value = "";
    inputNome.value = "";  
    inputEmail.value = "";
    inputTelefone.value = "";
  //desmarca o checkbox selecionado 
  servicosSelecionados.forEach(item => item.checked = false);
  }

 

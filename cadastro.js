var cadastrar = document.querySelector('#cadastrar');
var divCadastrar = document.querySelector('#div-cadastrar');
var divCadastrarEndereco = document.querySelector('#div-cadastrar-endereco');
var nextCadastrar = document.querySelector('#next-cadastrar');
var enderecoConfirm = document.querySelector('#endereco-confirm');
var cadastroConfirm = document.querySelector('#cadastro-confirm');
const select = document.querySelectorAll('select');
const radio = document.getElementsByName('group1');

//variaveis valores input
var auxNome = '';
var auxIdade = '';
var auxCurso = '';
var auxRadio = '';
var auxSelect = '';
var auxCep = '';
var auxLogradouro = '';
var auxBairro = '';
var auxCidade = '';
var auxUnidadeFederal = '';
//final variaveis

function verificaRadio(){
    for(var i = 0, j = -1; i < radio.length ; i ++){
        if(radio[i].checked){
            j = i;
        }
    }
    if(j > -1 && j < 3){
        return radio[j].value;
    }else{
        return -1;
    }
}

function verificaSelect() {
    for(var i = 0 ; i < select.length ; i ++){
        if(select[i].value === 'desmarcado'){
            return -1;
        }else{
            return select[i].value;
        }
    }
}

function cadastrarAluno(){
    var nome = document.querySelector('#nome');
    var idade = document.querySelector('#idade');
    var curso = document.querySelector('#curso');

    if(nome.value.length < 10){
        M.toast({html: 'Nome curto, mínimo 10 caracteres'})
        return false;
    }else{
        if(duasPalavras(nome.value)==false){
            M.toast({html: 'Mínimo duas palavras'})
            return false;
        }else{
            auxNome = nome.value;
            if(idade.value < 1 || idade.value > 150){
                M.toast({html: 'Idade [ 0 , 150 ]'})
                return false;
            }else{
                auxIdade = idade.value;
                if(curso.value.length < 3){
                    M.toast({html: 'Nome do curso curto'})
                    return false;
                }else{
                    auxCurso = curso.value;
                    if(verificaRadio()==-1){
                        M.toast({html: 'É necessário que marque uma opção'})
                        return false;
                    }else{
                        auxRadio = verificaRadio();
                        if(verificaSelect()=== -1){
                            M.toast({html: 'É necessário que informe a situação do aluno'})
                            return false;
                        }else{
                            auxSelect = verificaSelect();
                            return true;
                        }
                    }
                }
            }
        }
    }
}

confirmaForm = function(){
    if(cep.value.trim() === ""){
        M.toast({html: 'Campo Cep vazio'})
        return false;
    }else{
        auxCep = cep.value;
        if(logradouro.value.trim() === ""){
            M.toast({html: 'Campo Logradouro vazio'})
            return false;
        }else{
            auxLogradouro = logradouro.value;
            if(bairro.value.trim() === ""){
                M.toast({html: 'Campo Bairro vazio'})
                return false;
            }else{
                auxBairro = bairro.value;
                if(cidade.value.trim() === ""){
                    M.toast({html: 'Campo Cidade vazio'})
                    return false;
                }else{
                    auxCidade = cidade.value;
                    if(unidadeFederal.value.trim() === ""){
                        M.toast({html: 'Campo UF vazio'})
                        return false;
                    }else{
                        auxUnidadeFederal = unidadeFederal.value;
                        return true;
                    }
                }
            }
        }
    }
}

enderecoConfirm.onclick = function(){
    var cep = document.querySelector('#cep');
    var logradouro = document.querySelector('#logradouro');
    var cidade = document.querySelector('#cidade');
    var bairro = document.querySelector('#bairro');
    var unidadeFederal = document.querySelector('#unidadeFederal');
    var requisicao = new XMLHttpRequest();

    requisicao.onloadend = function(){
        if(requisicao.status === 200){
            var resposta = requisicao.responseText;
            var respostaObject = JSON.parse(resposta);
            cep.value = respostaObject.cep;
            logradouro.value = respostaObject.logradouro;
            cidade.value = respostaObject.localidade;
            bairro.value = respostaObject.bairro;
            unidadeFederal.value = respostaObject.uf;
        }else{
            M.toast({html: 'Erro ao buscar o CEP, verifique se digitou corretamente'})
        }
    }
    requisicao.open('GET' , 'https://viacep.com.br/ws/' + cep.value + '/json');
    requisicao.send(null);
}

cadastroConfirm.onclick = function(){ // confirma formulario endereço
    if(confirmaForm()==true){
        if(cep.value === 'undefined'){
            M.toast({html: 'CEP inválido, Forneça um valor válido para cadastrar'})
            cep.value = '';
        }else{
            if(logradouro.value === 'undefined'){
                M.toast({html: 'Logradouro inválido, Forneça um valor válido para cadastrar'})
                logradouro.value = '';
            }else{
                if(bairro.value === 'undefined'){
                    M.toast({html: 'Bairro inválido, Forneça um valor válido para cadastrar'})
                    bairro.value = '';
                }else{
                    if(cidade.value === 'undefined'){
                        M.toast({html: 'Cidade inválida, Forneça um valor válido para cadastrar'})
                        cidade.value = '';
                    }else{
                        if(unidadeFederal.value === 'undefined'){
                            M.toast({html: 'Unidade Federal inválida, Forneça um valor válido para cadastrar'})
                            unidadeFederal.value = '';
                        }else{
                            deslistarAlunos();
                            listaAlunos.alunos.push({'nome': auxNome, 'idade': auxIdade, 'curso': auxCurso, 'turno': auxRadio, 'matriculado': auxSelect, 'cep': auxCep,
                                'logradouro': auxLogradouro, 'bairro': auxBairro, 'localidade': auxCidade, 'uf': auxUnidadeFederal});
                            listarAlunos();
                            cep.value = '';
                            logradouro.value = '';
                            cidade.value = '';
                            bairro.value = '';
                            unidadeFederal.value = '';
                            nome.value = '';
                            idade.value = '';
                            curso.value = '';
                            radio.value = '';
                            select.value = '';
                            M.toast({html: 'Aluno Efetivado'})
                            divCadastrarEndereco.style.display = 'none';
                            divListar.style.display = 'block';
                        }
                    }
                }
            }
        }
    }
}

cadastrar.onclick = function(){
    if(divListar.style.display === 'block' || divLixeira.style.display === 'block'){ //remove a div de listagem se estiver aberta
        divListar.style.display = 'none';
        divLixeira.style.display = 'none';
        deslistarAlunos();
    }
        if(divCadastrarEndereco.style.display === 'block'){
            divCadastrarEndereco.style.display = 'none';
        }
        if(divCadastrar.style.display === 'block'){
            divCadastrar.style.display = 'none';
        }else{
            divCadastrar.style.display = 'block';
            uncheckRadios();
        }
            
        }

nextCadastrar.onclick = function(){
    if(cadastrarAluno()==true){
        divCadastrar.style.display = 'none';
        divCadastrarEndereco.style.display = 'block';
        cadastrarAluno();
    }
}

function uncheckRadios() {
var radios = document.getElementsByName('group1');
        for (var i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }
  }


function duasPalavras(texto) {
    const palavras = texto.trim().split(/\s+/); // Remove espaços extras e divide o texto em palavras
  
    if (palavras.length < 2) {
      return false; // Retorna false se houver menos de duas palavras
    } else {
      return true; // Retorna true se houver duas ou mais palavras
    }
  }
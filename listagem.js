listar = document.querySelector('#listar');
var colapsible = document.querySelector('.collapsible');
var divListar = document.querySelector('#div-listar');
var html = '';
var deleteAll2 = document.querySelector('#deleteAll2');


function deslistarAlunos(){
    html = '';
    colapsible.innerHTML = html;
}

function listarAlunos(){
    deslistarAlunos();
    for(var i = 0 ; i < listaAlunos.alunos.length ; i++){
        let zebra_class = (i % 2) ? 'cor1' : 'cor2';
        html = `
        <li id="aluno${i}">
                <div class="collapsible-header ${zebra_class}" onclick="trocarSeta(${i})">
                    <p class="aluno">${listaAlunos.alunos[i].nome}</p>
                    <p class="aluno">${listaAlunos.alunos[i].curso}</p>
                    <p class="aluno">${listaAlunos.alunos[i].turno}</p>
                     <i class="material-icons" id="setaBaixo${i}" style="display: block;">arrow_drop_down</i>
                     <i class="material-icons" id="setaCima${i}" style="display: none;">arrow_drop_up</i>
                </div>
                <div class="collapsible-body ${zebra_class}">
                <p class="info-aluno">MATRICULADO:  ${listaAlunos.alunos[i].matriculado}</p>
                    <p class="info-aluno">IDADE:  ${listaAlunos.alunos[i].idade}</p>
                    <p class="info-aluno">CEP:  ${listaAlunos.alunos[i].cep}</p>
                    <p class="info-aluno">RUA:  ${listaAlunos.alunos[i].logradouro}</p>
                    <p class="info-aluno">BAIRRO:  ${listaAlunos.alunos[i].bairro}</p>
                    <p class="info-aluno">CIDADE:  ${listaAlunos.alunos[i].localidade}</p>
                    <i class="material-icons right colapsibleIcon" onclick ="f1(${i})" >delete</i>
                    <i class="material-icons right colapsibleIcon" onclick ="f2(${i})">create</i>
                </div>
        </li>`;
colapsible.innerHTML += html;
    };
    html = '';
}

listar.onclick = function(){
    if(divCadastrar.style.display === 'block' || divCadastrarEndereco.style.display === 'block' || divLixeira.style.display === 'block'){//remove a div ao listar os alunos
        divCadastrar.style.display = 'none';
        divCadastrarEndereco.style.display = 'none';
        divLixeira.style.display = 'none';
    }
        if(divListar.style.display === 'block'){
            divListar.style.display = 'none';
            deslistarAlunos();
        }
        else{
            divListar.style.display = 'block';
            listarAlunos();
        }
}

trocarSeta = function(index){
    var setaCima = document.querySelector('#setaCima' + index);
     var setaBaixo = document.querySelector('#setaBaixo' + index);

     if(setaBaixo.style.display === 'block'){
        setaBaixo.style.display = 'none';
        setaCima.style.display = 'block';
    }else{
        setaBaixo.style.display = 'block';
        setaCima.style.display = 'none';
    }
}

deleteAll2.onclick = function() {
    if (confirm('Deseja mesmo excluir todos os alunos?') === true) {
        while (listaAlunos.alunos.length > 0) {
            listaAlunosExcluidos.alunos.push({'nome': listaAlunos.alunos[0].nome,'matriculado': listaAlunos.alunos[0].matriculado,
                'idade': listaAlunos.alunos[0].idade,           'curso': listaAlunos.alunos[0].curso,
                'turno': listaAlunos.alunos[0].turno,           'cep': listaAlunos.alunos[0].cep,
                'logradouro': listaAlunos.alunos[0].logradouro, 'bairro': listaAlunos.alunos[0].bairro,
                'localidade': listaAlunos.alunos[0].localidade, 'uf': listaAlunos.alunos[0].uf});

            listaAlunos.alunos.splice(0, 1);
        }
        for (var i = 0; i <= listaAlunos.alunos.length; i++) {
            var li = document.getElementById('aluno' + i);
            if (li) {
                li.style.display = 'none';
            }
        }
        listarAlunos();
        M.toast({html: 'Alunos excluidos com sucesso!'});
    }
}

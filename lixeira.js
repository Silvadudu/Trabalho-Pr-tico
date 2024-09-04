lixeira = document.querySelector('#lixeira');
var colapsible2 = document.querySelector('.collapsible2');
var divLixeira = document.querySelector('#div-lixeira');
var html2 = '';
var deleteAll = document.querySelector('#deleteAll');
var restaurarAll = document.querySelector('#restaurarAll');


function deslistarAlunosExcluidos(){
    html2 = '';
    colapsible2.innerHTML = html2;
}

function listarAlunosExcluidos(){
    deslistarAlunosExcluidos();
    for(var i = 0 ; i < listaAlunosExcluidos.alunos.length ; i++){
        let zebra_class2 = (i % 2) ? 'cor1' : 'cor2';
        html2 = `
        <li id="alunoExcluido${i}">
                <div class="collapsible-header ${zebra_class2}" onclick="trocarSeta(${i})">
                    <p class="aluno">${listaAlunosExcluidos.alunos[i].nome}</p>
                    <p class="aluno">${listaAlunosExcluidos.alunos[i].curso}</p>
                    <p class="aluno">${listaAlunosExcluidos.alunos[i].turno}</p>
                    <i class="material-icons" id="setaBaixo${i}" style="display: block;">arrow_drop_down</i>
                    <i class="material-icons" id="setaCima${i}" style="display: none;">arrow_drop_up</i>
                </div>
                <div class="collapsible-body ${zebra_class2}">
                    <p class="info-aluno">MATRICULADO:  ${listaAlunosExcluidos.alunos[i].matriculado}</p>
                    <p class="info-aluno">IDADE:  ${listaAlunosExcluidos.alunos[i].idade}</p>
                    <p class="info-aluno">CEP:  ${listaAlunosExcluidos.alunos[i].cep}</p>
                    <p class="info-aluno">RUA:  ${listaAlunosExcluidos.alunos[i].logradouro}</p>
                    <p class="info-aluno">BAIRRO:  ${listaAlunosExcluidos.alunos[i].bairro}</p>
                    <p class="info-aluno">CIDADE:  ${listaAlunosExcluidos.alunos[i].localidade}</p>
                    <button id="restaurar" class="right" onclick ="f3(${i})">Restaurar</button>
                    <i class="material-icons right colapsibleIcon" onclick ="f4(${i})">delete</i>
                </div>
        </li>`;
colapsible2.innerHTML += html2;
    };
    html2 = '';
}

lixeira.onclick = function(){
    if(divCadastrar.style.display === 'block' || divCadastrarEndereco.style.display === 'block' || divListar.style.display === 'block'){
        divCadastrar.style.display = 'none';
        divCadastrarEndereco.style.display = 'none';
        divListar.style.display = 'none';
    }
    if(divLixeira.style.display === 'block'){
        divLixeira.style.display = 'none';
        deslistarAlunosExcluidos();
    }else{
        divLixeira.style.display = 'block';
        listarAlunosExcluidos();
    }
}

deleteAll.onclick = function() {
    if (confirm('Deseja mesmo esvaziar a lixeira?') === true) {
        while (listaAlunosExcluidos.alunos.length > 0) {
            listaAlunosExcluidos.alunos.splice(0, 1);
        }
        for (var i = 0; i <= listaAlunosExcluidos.alunos.length; i++) {
            var li = document.getElementById('alunoExcluido' + i);
            if (li) {
                li.style.display = 'none';
            }
        }
        listarAlunosExcluidos();
        M.toast({html: 'Lixeira esvaziada com sucesso!'});
    }
}

restaurarAll.onclick = function() {
    if (confirm('Deseja mesmo restaurar todos os alunos da lixeira?') === true) {
        while (listaAlunosExcluidos.alunos.length > 0) {
            listaAlunos.alunos.push({'nome': listaAlunosExcluidos.alunos[0].nome, 'matriculado': listaAlunosExcluidos.alunos[0].matriculado,
                'idade': listaAlunosExcluidos.alunos[0].idade,           'curso': listaAlunosExcluidos.alunos[0].curso,
                'turno': listaAlunosExcluidos.alunos[0].turno,           'cep': listaAlunosExcluidos.alunos[0].cep,
                'logradouro': listaAlunosExcluidos.alunos[0].logradouro, 'bairro': listaAlunosExcluidos.alunos[0].bairro,
                'localidade': listaAlunosExcluidos.alunos[0].localidade, 'uf': listaAlunosExcluidos.alunos[0].uf});

            listaAlunosExcluidos.alunos.splice(0, 1);
        }
        for (var i = 0; i <= listaAlunosExcluidos.alunos.length; i++) {
            var li = document.getElementById('alunoExcluido' + i);
            if (li) {
                li.style.display = 'none';
            }
        }
        listarAlunosExcluidos();
        M.toast({html: 'Alunos restaurados com sucesso!'});
    }
}
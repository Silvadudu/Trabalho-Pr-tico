function f1(index){
    if(confirm("deseja mesmo excluir este aluno?")==true){
        listaAlunosExcluidos.alunos.push({'nome': listaAlunos.alunos[index].nome,'matriculado': listaAlunos.alunos[index].matriculado,
            'idade': listaAlunos.alunos[index].idade,           'curso': listaAlunos.alunos[index].curso,
            'turno': listaAlunos.alunos[index].turno,           'cep': listaAlunos.alunos[index].cep,
            'logradouro': listaAlunos.alunos[index].logradouro, 'bairro': listaAlunos.alunos[index].bairro,
            'localidade': listaAlunos.alunos[index].localidade, 'uf': listaAlunos.alunos[index].uf});
        listaAlunos.alunos.splice(index, 1);
        var li = document.getElementById('aluno'+index);
        li.style.display = 'none';
        listarAlunos();
        M.toast({html: 'Aluno excluído com sucesso!'})
    }
}

function f2(index){
    if(confirm("deseja mesmo editar as informações deste aluno?")==true){
        let turno = listaAlunos.alunos[index].turno;
        cadastrar.click();
        document.getElementById("nome").value = listaAlunos.alunos[index].nome;
        document.getElementById("idade").value = listaAlunos.alunos[index].idade;
        document.getElementById("curso").value = listaAlunos.alunos[index].curso;
        document.getElementById(`${listaAlunos.alunos[index].turno}`).checked = 'true';
        document.querySelectorAll('select')[0].value = listaAlunos.alunos[index].matriculado;
        document.getElementById("cep").value = listaAlunos.alunos[index].cep;
        document.getElementById("logradouro").value = listaAlunos.alunos[index].logradouro;
        document.getElementById("bairro").value = listaAlunos.alunos[index].bairro;
        document.getElementById("cidade").value = listaAlunos.alunos[index].localidade;
        document.getElementById("unidadeFederal").value = listaAlunos.alunos[index].uf;
            if(confirmaForm() === true){
                listaAlunos.alunos.splice(index, 1);
            }
    }
}

function f3(index){
    if(confirm("deseja mesmo restaurar este aluno?")==true){
        listaAlunos.alunos.push({'nome': listaAlunosExcluidos.alunos[index].nome, 'matriculado': listaAlunosExcluidos.alunos[index].matriculado,
            'idade': listaAlunosExcluidos.alunos[index].idade,           'curso': listaAlunosExcluidos.alunos[index].curso,
            'turno': listaAlunosExcluidos.alunos[index].turno,           'cep': listaAlunosExcluidos.alunos[index].cep,
            'logradouro': listaAlunosExcluidos.alunos[index].logradouro, 'bairro': listaAlunosExcluidos.alunos[index].bairro,
            'localidade': listaAlunosExcluidos.alunos[index].localidade, 'uf': listaAlunosExcluidos.alunos[index].uf});
        listaAlunosExcluidos.alunos.splice(index, 1);
        var li = document.getElementById('alunoExcluido'+index);
        li.style.display = 'none';
        listarAlunosExcluidos();
        M.toast({html: 'Aluno restaurado com sucesso!'})
    }
}

function f4(index){
    if(confirm("deseja mesmo excluir este aluno permanentemente?")==true){
        listaAlunosExcluidos.alunos.splice(index, 1);
        var li = document.getElementById('alunoExcluido'+index);
        li.style.display = 'none';
        listarAlunosExcluidos();
    }
}

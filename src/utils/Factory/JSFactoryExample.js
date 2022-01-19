export class JSFactoryClass {

    constructor() {

    }

    criaObjeto = () => {
        let objeto = {};

        return objeto;
    }

    fabricarPessoa = (nome, sobrenome) => {
        let pessoa = {};
        pessoa.nome = nome;
        pessoa.sobrenome = sobrenome;

        // função privada com escopagem interna
        function nomeCompleto() {
            return `${pessoa.nome} ${pessoa.sobrenome}`;
        }

        // função interna sendo externada
        pessoa.nomeCompleto = nomeCompleto;

        console.log(pessoa.nomeCompleto(), " criado.");

        return pessoa;
    }


}





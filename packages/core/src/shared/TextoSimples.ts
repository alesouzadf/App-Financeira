import Validador from "./Validador"

export default class TextoSimples {
    constructor(
        readonly texto: string,
        minimo: number,
        maximo: number,
        atributo?: string,
        objeto?: string,
    ) {
        this.texto = texto?.trim() ?? ""
        Validador.valor(texto, atributo, objeto)
            .naoVazio()
            .tamanhoMaiorOuIgualQue(minimo)
            .tamanhoMenorOuIgualQue(maximo)
            .lancarSeErro()
    }
}
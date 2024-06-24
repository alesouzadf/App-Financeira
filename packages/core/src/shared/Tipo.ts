import Validador from "./Validador"

export default class Data {
    constructor(
        readonly tipo: string,
        atributo?: string,
        objeto?: string,        
    ) {
        this.tipo = tipo
        Validador.valor(tipo, atributo, objeto)
            .naoVazio()
            .tipoValido()
            .lancarSeErro()
    }
}
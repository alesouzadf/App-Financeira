import Validador from "./Validador"

export default class Status {
    constructor(
        readonly status: string,
        atributo?: string,
        objeto?: string,        
    ) {
        this.status = status
        Validador.valor(status, atributo, objeto)
            .naoVazio()
            .statusValido()
            .lancarSeErro()
    }
}
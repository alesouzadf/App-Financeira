import Validador from "./Validador"

export default class StatusTransacao {
    constructor(
        readonly status: string = "",
        atributo?: string,
        objeto?: string,
    ) {
        this.status = status?.trim() ?? ""
        Validador.valor(status, atributo, objeto)
            .status()
            .lancarSeErro()
    }
}
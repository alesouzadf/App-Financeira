import Validador from "./Validador"

export default class TipoTransacao {
    constructor(
        readonly tipo: string = "",
        atributo?: string,
        objeto?: string,
    ) {
        this.tipo = tipo?.trim() ?? ""
        Validador.valor(tipo, atributo, objeto)
            .tipo()
            .lancarSeErro()
    }
}
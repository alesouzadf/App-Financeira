import Validador from "./Validador"

export default class Data {
    constructor(
        readonly data: Date,
        atributo?: string,
        objeto?: string,        
    ) {
        this.data = data
        Validador.valor(data, atributo, objeto)
            .dataValida()
            .lancarSeErro()
    }
}
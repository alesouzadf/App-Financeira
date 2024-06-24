import Validador from "./Validador"

export default class Id {
    readonly valor: number

    constructor(valor?: number, atributo?: string, objeto?: string) {
        this.valor = valor ?? 0
        Validador.valor(this.valor, atributo, objeto).lancarSeErro()
    }

    igual(id: Id) {
        return this.valor === id.valor
    }

    diferente(id: Id) {
        return this.valor !== id.valor
    }
}
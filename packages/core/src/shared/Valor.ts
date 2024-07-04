import Validador from "./Validador"

export default class Valor {
    constructor(
        readonly valor: number,
        atributo?: string,
        objeto?: string,
    ) {
        this.valor = valor
        Validador.valor(this.valor, atributo, objeto)
            .naoNulo()
            .maiorOuIgualQue(0)
            .lancarSeErro()
    }

    formatado(padrao: string = "pt-BR", moeda: string = "BRL"): string {
        return Intl.NumberFormat(padrao, {
            style: "currency",
            currency: moeda,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(this.valor)
    }
}
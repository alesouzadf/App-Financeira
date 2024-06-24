import ErroValidacao from '../error/ErroValidacao'

export default class Validador {
    private constructor(
        readonly valor: any,
        readonly atributo: string | null,
        readonly objeto: string | null,
        readonly erros: ErroValidacao[] = []
    ) {}

    static valor(valor: any, atributo?: string, objeto?: string): Validador {
        return new Validador(valor, atributo ?? null, objeto ?? null)
    }
    
    dataValida(
        erro: string = "DATA_INVALIDA"
    ):Validador {
        const dataInvalida = isNaN(this.valor.getDate())
        const horaInvalida = isNaN(this.valor.getTime())

        return dataInvalida && horaInvalida
            ? this
            : this.adicionarErro(erro)
    }

    tipoValido(
        erro: string = "TIPO_INVALIDO"
    ):Validador {
        const tipoValido = this.valor === 'DESPESA' || this.valor === 'RECEITA'
        return tipoValido ? this : this.adicionarErro(erro)
    }

    statusValido(
        erro: string = "STATUS_INVALIDO"
    ):Validador {
        const statusValido = this.valor === 'PENDENTE' || this.valor === 'CONSOLIDADO' ||
             this.valor === 'CANCELADO'

        return statusValido ? this : this.adicionarErro(erro)
    }

    tamanhoMenorOuIgualQue(
        tamanhoMaximo: number,
        erro: string = "TAMANHO_GRANDE",
    ): Validador {
        if (!this.valor) return this
        return this.valor.length <= tamanhoMaximo
            ? this
            : this.adicionarErro({ codigo: erro, max: tamanhoMaximo })
    }

    tamanhoMaiorOuIgualQue(
        tamanhoMinimo: number,
        erro: string = "TAMANHO_PEQUENO",
    ): Validador {
        if (!this.valor) return this
        return this.valor.length >= tamanhoMinimo
            ? this
            : this.adicionarErro({ codigo: erro, min: tamanhoMinimo })
    }

    maiorOuIgualQue(min: number, erro: string = "MENOR"): Validador {
        return this.valor >= min ? this : this.adicionarErro({ codigo: erro, min })
    }

    naoVazio(erro: string = "VAZIO"): Validador {
        const validador = this.naoNulo(erro)
        if (Array.isArray(validador.valor)) {
            return validador.valor.length > 0 ? validador : validador.adicionarErro(erro)
        }
        return validador.valor?.trim() !== "" ? validador : validador.adicionarErro(erro)
    }

    naoNulo(erro: string = "NULO"): Validador {
        return this.valor !== null && this.valor !== undefined
            ? this
            : this.adicionarErro(erro)
    }

    regex(regex: RegExp, erro: string): Validador {
        return regex.test(this.valor) ? this : this.adicionarErro(erro)
    }

    lancarSeErro(): void | never {
        if (!this.erros.length) return
        throw this.erros
    }

    private adicionarErro(codigoOuErro: string | ErroValidacao): Validador {
        const erroBase = typeof codigoOuErro === 'string' ? { codigo: codigoOuErro } : codigoOuErro
        const erro = {
            ...erroBase,
            valor: this.valor,
            atributo: this.atributo ?? undefined,
            objeto: this.objeto ?? undefined,
        }

        if (this.jaTemErro(erro)) return this
        return new Validador(this.valor, this.atributo, this.objeto, [...this.erros, erro])
    }

    private jaTemErro(erro: ErroValidacao): boolean {
        return this.erros.some((e) => {
            return Object.keys(e).every((key) => {
                return e[key] === erro[key]
            })
        })
    }
}
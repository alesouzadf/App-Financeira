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

    static lancarErro(erro: string): never {
        throw [{ codigo: erro } as ErroValidacao]
    }

    static combinar(...validadores: Validador[]): ErroValidacao[] | null {
        const errosFiltrados = validadores
            .flatMap((v) => v.erros)
            .filter((erro) => erro !== null) as ErroValidacao[]
        return errosFiltrados.length > 0 ? errosFiltrados : null
    }

    nulo(erro: string = "NAO_NULO"): Validador {
        return this.valor === null || this.valor === undefined
            ? this
            : this.adicionarErro(erro)
    }

    naoNulo(erro: string = "NULO"): Validador {
        return this.valor !== null && this.valor !== undefined
            ? this
            : this.adicionarErro(erro)
    }

    naoVazio(erro: string = "VAZIO"): Validador {
        const validador = this.naoNulo(erro)
        if (Array.isArray(validador.valor)) {
            return validador.valor.length > 0 ? validador : validador.adicionarErro(erro)
        }
        return validador.valor?.trim() !== "" ? validador : validador.adicionarErro(erro)
    }

    status(erro: string = "STATUS_INVALIDO"): Validador {
        const validador = this.naoNulo(erro)
        if (Array.isArray(validador.valor)) {
            return validador.valor.length > 0 ? validador : validador.adicionarErro(erro)
        }
        return validador.valor?.trim() !== "PENDENTE" || "CONSOLIDADO" || "CANCELADO" 
        ? validador : validador.adicionarErro(erro)
    }

    tipo(erro: string = "TIPO_INVALIDO"): Validador {
        const validador = this.naoNulo(erro)
        if (Array.isArray(validador.valor)) {
            return validador.valor.length > 0 ? validador : validador.adicionarErro(erro)
        }
        return validador.valor?.trim() !== "DESPESA" || "RECEITA" 
        ? validador : validador.adicionarErro(erro)
    }

    tamanhoMenorQue(tamanhoMaximo: number, erro: string = "TAMANHO_GRANDE"): Validador {
        if (!this.valor) return this
        return this.valor.length < tamanhoMaximo
            ? this
            : this.adicionarErro({ codigo: erro, max: tamanhoMaximo })
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

    tamanhoMaiorQue(tamanhoMinimo: number, erro: string = "TAMANHO_PEQUENO"): Validador {
        if (!this.valor) return this
        return this.valor.length > tamanhoMinimo
            ? this
            : this.adicionarErro({ codigo: erro, min: tamanhoMinimo })
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

    menorQue(max: number, erro: string = "MAIOR"): Validador {
        return this.valor < max ? this : this.adicionarErro({ codigo: erro, max })
    }

    menorOuIgualQue(max: number, erro: string = "MAIOR"): Validador {
        return this.valor <= max ? this : this.adicionarErro({ codigo: erro, max })
    }

    maiorQue(min: number, erro: string = "MENOR"): Validador {
        return this.valor > min ? this : this.adicionarErro({ codigo: erro, min })
    }

    maiorOuIgualQue(min: number, erro: string = "MENOR"): Validador {
        return this.valor >= min ? this : this.adicionarErro({ codigo: erro, min })
    }

    url(erro: string = "URL_INVALIDA"): Validador {
        try {
            new URL(this.valor)
            return this
        } catch {
            return this.adicionarErro(erro)
        }
    }

    regex(regex: RegExp, erro: string): Validador {
        return regex.test(this.valor) ? this : this.adicionarErro(erro)
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

    get valido(): boolean {
        return this.erros.length === 0
    }

    get invalido(): boolean {
        return !this.valido
    }

    lancarSeErro(): void | never {
        if (!this.erros.length) return
        throw this.erros
    }

    private jaTemErro(erro: ErroValidacao): boolean {
        return this.erros.some((e) => {
            return Object.keys(e).every((key) => {
                return e[key] === erro[key]
            })
        })
    }
}
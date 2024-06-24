
import Id from "./Id"

export interface TransacaoProps {
    id?: number
}

export interface EntidadeProps {
    id?: number
}

export default abstract class Entidade<Tipo, Props extends TransacaoProps> {
    readonly id: Id
    readonly props: Props

    constructor(props: Props) {        
        this.id = new Id(props.id)
        this.props = { ...props, id: this.id.valor }
    }

    igual(entidade: Entidade<Tipo, Props>): boolean {
        return this.id.igual(entidade.id)
    }

    diferente(entidade: Entidade<Tipo, Props>): boolean {
        return this.id.diferente(entidade.id)
    }

    clone(novasProps: Props, ...args: any[]): Tipo {
        return new (this.constructor as any)(
            {
                ...this.props,
                ...novasProps,
            },
            ...args,
        )
    }
}
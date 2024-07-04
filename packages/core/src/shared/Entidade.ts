

export default abstract class Entidade<Tipo, Props> {
    readonly props: Props

    constructor(props: Props) {        
        this.props = { ...props }
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
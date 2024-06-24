import { PrismaClient } from '@prisma/client'

import Transacao from 'core/src/transacao/model/Transacao';
import RepositorioTransacao from '../../../../../packages/core/src/transacao/Provider/RepositorioTransacao'

export default class RepositorioTransacaoPrima implements RepositorioTransacao {
    
    private readonly prisma = new PrismaClient()
    
    async salvar(transacao: Transacao): Promise<Transacao> {
        const novaTransacao = await this.prisma.transacao.upsert({
            where: { id: transacao.id.valor ?? -1 },
            update: transacao.props as any,
            create: transacao.props as any,
        })
        return new Transacao(novaTransacao)
    }
        
    // async obterListaTransacao(): Promise<Transacao[] | null> {
    //     const transacoes = await this.prisma.transacao.findMany()
    //     const listaTransacao: Transacao[] = []
    //     if(transacoes != null){
    //         transacoes.forEach(t => listaTransacao.push(new Transacao(t))
            
    //     }
        
    // }

}
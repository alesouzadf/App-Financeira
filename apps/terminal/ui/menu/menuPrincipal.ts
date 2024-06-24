import registrarTransacao from "../transacao/registrarTransacao";
import Terminal from "../util/Terminal";

export default async function menuPrincipal(){
    while(true){
        const [_, resposta] = await Terminal.menu('Menu Principal', ['Registrar Transacao', 'Sair'])
        
        switch(resposta){
            case 'Registrar Transacao':
                await registrarTransacao()
                break
            case 'Sair':
                process.exit(0)
        }
    }
}
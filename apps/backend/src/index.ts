import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const todasTransacoes = await prisma.transacao.findMany()
  console.log(todasTransacoes)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
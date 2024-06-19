-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('DESPESA', 'RECEITA');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDENTE', 'CONSOLIDADO', 'CANCELADO');

-- CreateTable
CREATE TABLE "Transacao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" "Tipo" NOT NULL DEFAULT 'DESPESA',
    "valor" DECIMAL(15,2) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

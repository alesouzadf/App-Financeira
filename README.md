# Aplicação Financeira

## Índice

- [Aplicação Financeira](#aplicação-financeira)
  - [Índice](#índice)
  - [Executar o projeto](#executar-o-projeto)
    - [Sobre o turborepo](#sobre-o-turborepo)
      - [Build](#build)
      - [Develop](#develop)
      - [Remote Caching](#remote-caching)
      - [Links Úteis](#links-úteis)

## Executar o projeto

- Entrar na pasta do backend

```bash
cd apps/backend
```

- Rodar o comando do docker (me baseando no meu SO que é linux)

```bash
 sudo docker-compose up
```

- Gerar o Prisma Client e fazer a migration

```bash
 npx prisma generate --schema=./prisma/schema.prisma
 npx prisma migrate dev
```

Depois desses comandos, é só voltar para a raiz do projeto

```bash
 cd ..
 cd ..
```

- E rodar os comandos

```bash
 npm install
 npm run dev
```

<br><br>

### Sobre o turborepo

#### Build

Para compilar todos os aplicativos e pacotes, execute o seguinte comando:

```sh
 cd my-turborepo
 npm build
```

#### Develop

Para desenvolver todos os aplicativos e pacotes, execute o seguinte comando:

```bash
 cd my-turborepo
 npm dev
```

#### Remote Caching

O Turborepo pode usar uma técnica conhecida como [Cache Remoto](https://turbo.build/repo/docs/core-concepts/remote-caching) para compartilhar artefatos de cache entre máquinas, permitindo que você compartilhe caches de construção com sua equipe e pipelines de CI/CD.

Por padrão, o Turborepo armazenará em cache localmente. Para ativar o Cache Remoto, você precisará de uma conta no Vercel. Se você não possui uma conta, você pode [criar uma](https://vercel.com/signup), e depois inserir os seguintes comandos:

```bash
 cd my-turborepo
 npx turbo login
```

Isso autenticará a CLI do Turborepo com sua [conta Vercel](https://vercel.com/docs/concepts/personal-accounts/overview).

Em seguida, você pode vincular seu Turborepo ao Cache Remoto executando o seguinte comando na raiz do seu Turborepo:

```bash
 npx turbo link
```

#### Links Úteis

Saiba mais sobre o poder do Turborepo:

- [Tarefas](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Cache](https://turbo.build/repo/docs/core-concepts/caching)
- [Cache Remoto](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtragem](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Opções de Configuração](https://turbo.build/repo/docs/reference/configuration)
- [Uso da CLI](https://turbo.build/repo/docs/reference/command-line-reference)

# Etapa 1 - Manipulação Registros

- Dica: Desenvolva essa etapa executando o código diretamente pelo terminal, sem interface gráfica.

## Requisitos Funcionais

- Um usuário deve conseguir cadastrar um novo registro, com as seguintes propriedades:

- Descrição
- Data do registro
- Tipo do registro (que pode assumir apenas os valores despesa ou receita)
- Valor do registro
- Status do registro (que pode ser pendente, consolidado, ou cancelado)
- Id (deve ser gerado automaticamente)
- Um usuário deve conseguir editar um registro já inserido podendo alterar a descrição, data, tipo, valor e status do registro
- Um usuário deve conseguir excluir um registro já existente
- Um usuário deve conseguir filtrar seus registros por status, podendo escolher entre consolodidados, pendentes, cancelados ou todos.

# Etapa 2 - Interface

## Requisitos funcionais

- Ao entrar na aplicação o usuário deve ver todos seus registros com as inforamções de id, data, descrição, tipo, valor e status.
- Na tela inicial deve ser possível selecionar um filtro para os registros
- Ao clicar em um registro deve ser possível editá-lo
- Um usuário deve poder cancelar a edição de um registro
- O usuário deve poder criar um novo registro através de um botão
- Um usuário deve poder cancelar a criação de um novo registro
- O usuário deve poder excluir um registro

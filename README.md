# Boilerplate de back-end da Otterwise

## Tecnologias

Prisma
Fastify

## Utilização

### Instalando as dependências

`yarn` ou `npm install`

### Conectando ao seu banco de dados

Crie um novo arquivo chamado .env e copie o conteúdo do arquivo .env-example modificando os dados para conectar no seu banco local

### Rodando a aplicação

Antes de rodar a aplicação, certifique-se que o seu banco de dados está com as ultimas atualizações do prisma.schema. Para garantir que estejam, rode `yarn prisma:push`.
Após certificar que o banco reflete seu prisma.schema, utilize o comando `yarn dev` para rodar a aplicação localmente.

### Scripts

`yarn start`: para rodar a aplicação em modo produção.

`yarn dev`: para rodar a aplicação em modo desenvolvimento utilizando o nodemon.

`prisma:push`: roda o comando `npx prisma db push`, que atualiza seu banco de dados para a ultima versão do seu prisma.schema.

`prisma:migrate-dev`: espera um nome ao final para que crie uma nova migration com este nome.

`prisma:migrate-prod`: utilizado para aplicar as alterações de migrations em um ambientem de testes ou produção.

## Estrutura de pastas

`prisma`: arquivos gerados pelo prisma.

`config`: onde ficam as configurações do servidor fastify.

`controllers`: onde ficam os arquivos responsáveis por chamar o prisma e realizar as conexões com o banco de dados.

`helpers`: contém arquivos com funções auxiliares ao desenvolvimento e projeto.

`routes`: as rotas utilizando o padrão REST.

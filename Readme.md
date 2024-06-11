# Projeto de Aplicação Financeira

## Comandos usados para criar o projeto typescript
```bash
    npm init -y =>  criar o package.json

    npm i -D typescript ts-node-dev => instala o ts

    npx tsc --init => criar o arquivo tsconfig.json

 ```
 ## Configurações que foram setadas no tsconfig.json

```
    {
        "compilerOptions": {
            "target": "es2016",                                
            "module": "commonjs",                                
            "outDir": "dist", 
            "forceConsistentCasingInFileNames": true,            
            "strict": true, 
            "skipLibCheck": true 
        }
    }
```
## Configurando o Testes
```bash
    npm i -D jest ts-jest => instala o jest
    npm i -D @types/jest @types/node => ajuda a indentificar os tipos do jest 
```
Obs: Extensão que o Léo recomenda para ajudar com os testes 
- Jest Runner
  
## Scripts para executar e testar o código. No package.json 
```json
   "build":"tsc",
   "dev":"ts-node-dev --respawn src/index.ts",
   "test":"jest"
```

## Para rodar o projeto
- Clonar repositório
```bash
    git clone https://github.com/alesouzadf/App-Financeira/tree/main
```
- Instalar dependências
```bash
    npm install
```
- Rodar projeto
```bash
    npm run dev
```


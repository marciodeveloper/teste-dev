# **Rick and Morty Web Application**

[![PHP Version](https://img.shields.io/badge/php-%3E%3D%207.4-blue)](https://www.php.net/)
[![Node.js Version](https://img.shields.io/badge/node.js-%3E%3D%2014-brightgreen)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## **Descrição**

Aplicação web desenvolvida para listar e filtrar personagens da série **Rick and Morty**. O projeto é composto por uma API back-end construída com Laravel e um front-end desenvolvido com Next.js e React.

## **Índice**

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
  - [Back-End](#back-end)
  - [Front-End](#front-end)
- [Uso](#uso)
- [Testes](#testes)
  - [Back-End](#back-end-1)
  - [Front-End](#front-end-1)
- [Possíveis Problemas](#possíveis-problemas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## **Pré-requisitos**

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:

- **PHP** >= 7.4
- **Composer**
- **Node.js** >= 14
- **npm** ou **yarn**
- **MySQL** ou outro banco de dados compatível

## **Instalação**

### **Back-End**

1. **Clone o repositório:**

   ```bash
   git clone <repo-url>
   ```

2. **Navegue até o diretório do back-end:**

   ```bash
   cd rick-and-morty-api
   ```

3. **Instale as dependências do PHP:**

   ```bash
   composer install
   ```

4. **Copie o arquivo de exemplo .env e configure as variáveis de ambiente:**

   ```bash
   cp .env.example .env
   ```

   - Configure as informações de conexão com o banco de dados no arquivo `.env`.

5. **Gere a chave da aplicação:**

   ```bash
   php artisan key:generate
   ```

6. **Execute as migrações e seeders:**

   ```bash
   php artisan migrate --seed
   ```

7. **Inicie o servidor de desenvolvimento:**

   ```bash
   php artisan serve
   ```

   - A API estará disponível em http://localhost:8000.

## **Front-End**

1. **Navegue até o diretório do front-end:**

   ```bash
   cd ../rick-and-morty-frontend
   ```

2. **Instale as dependências do Node.js:**

   ```bash
   npm install
   ```

3. **Crie um arquivo de ambiente local:**

   ```bash
   cp .env.example .env.local
   ```

   - Configure a URL da API back-end no arquivo .env.local.

4. **Inicie a aplicação:**

   ```bash
   npm run dev
   ```

   - A aplicação estará disponível em http://localhost:3000.

## **Uso**

Acesse http://localhost:3000 em seu navegador para visualizar a aplicação. Você poderá listar, filtrar e visualizar detalhes dos personagens da série Rick and Morty.

## **Testes**

### **Back-End**

Para executar os testes do back-end, utilize:

```bash
php artisan test
```

### **Front-End**

Para executar os testes do front-end, utilize:

```bash
npm run test
```

## **Possíveis Problemas**

- Erro de conexão com o banco de dados:

  Verifique se o servidor do banco de dados está em execução e se as credenciais no arquivo `.env` estão corretas.

- Porta já em uso:

  Se as portas padrão (8000 para o back-end e 3000 para o front-end) estiverem em uso, você pode especificar portas diferentes ao iniciar os servidores.

- Problemas com dependências:

  Certifique-se de que todas as dependências foram instaladas corretamente e que suas versões atendem aos pré-requisitos.

## **Contribuição**

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.

## **Licença**

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.


# Projeto REST API com Express e Autenticação JWT

Este projeto é uma REST API construída com Express.js e utiliza autenticação JWT para fornecer segurança às suas operações.

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter o Docker e o Node.js instalados na sua máquina.

## Inicialização do Projeto
1. Certifique-se que você está na pasta correta do projeto após clonar o repositório, feito isso, instale todas as depêndencias do projeto:
	```bash
	  npm install
3. Inicie o container do PostgreSQL utilizando Docker Compose:

    ```bash
    docker-compose up -d
    ```

   Este comando iniciará um container com uma imagem do banco de dados PostgreSQL.

4. Execute as migrações para criar as tabelas no banco de dados:

    ```bash
    npm run migration:run
    ```

   Isso garantirá que as tabelas necessárias sejam criadas.

5. Inicie o servidor para estabelecer a conexão com o banco de dados:

    ```bash
    npm run dev
    ```

   Agora o servidor está pronto para ser utilizado, e você pode realizar os testes necessários.


# Endpoints da API 
A seguir estão os principais endpoints da API, juntamente com as informações necessárias para cada operação. 
1. Cadastro de Usuário (POST)  
 **URL:**  `http://localhost:3000/users/signup/`  
 **JSON :** 
	  ```
	 { 
	 "name": "Username", 
	 "email": "mail@mail.com", 
	 "password": "1234", 
	 "phone": { "number": "(19)99999-9999", "ddd": "12" } 
	 }
	 
2. Login de Usuário (POST)  
 **URL:**  `http://localhost:3000/users/signin/`  
 **JSON :** 
	  ```
	 { 
	 "name": "Username", 
	 "email": "mail@mail.com", 
	 }
	 
3. Informacoes de Usuário (GET)  
	**URL:**  `http://localhost:3000/users/`  
	Nessa rota você precisa apenas informar o ***Bearer Token** utilizando o JWT que foi fornecido no login
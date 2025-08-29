# 🛍️ Projeto Fullstack Louja

Uma aplicação completa de **loja virtual** com funcionalidades inspiradas em um mercado real, desenvolvida com **Spring Boot** no backend e **React** no frontend.

Esse projeto nasceu como um **desafio pessoal** para colocar minhas habilidades à prova e será continuamente atualizado com novas funcionalidades. 🚀

## ⚙️ Tecnologias Utilizadas

### 🔹 Backend

- **Java 17**
- **Spring Boot 3.4.4**
- **Spring Security**
- **JWT (JSON Web Token)**
- **PostgreSQL**

### 🔹 Frontend

- **React**
- **React Router DOM**
- **Swiper.js**

## 🛠️ Funcionalidades

### 👤 Usuário Padrão.

- Registro de usuário
- Login com autenticação via **JWT**
- Carrinho de compras
- Simulação de compras

### 🛡️ Administrador

- Login com autenticação via **JWT**
- Cadastro de produtos na loja
- Personalização do layout da página principal
- Acesso a todas as funcionalidades de usuário padrão

## 🚀 Como executar o projeto

1. Crie um banco de dados no **PostgreSQL**.
2. Acesse o arquivo: backend/src/main/resources/application.properties
   * e substitua o valor: spring.datasource.url={sua\_url}
3. Na pasta raiz do projeto, execute:
   * start\_backend.ps1
   * start\_frontend.ps1

## 🔮 Atualizações Futuras

- Enviar código de verificação por e-mail para novos usuários
- Cadastro de usuário **Admin**
- Página de detalhes do produto
- Edição de informações do usuário (Usuário)
- Edição de informações do produto (Admin)
- Exclusão de produto (Admin)
- Adição de tags (Admin)
- Filtro de buscas

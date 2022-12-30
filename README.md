# Cypress-SeuBarrigaReact
Projeto criado para automatizar os testes funcionais da aplicação "Seu Barriga"(https://barrigareact.wcaquino.me/login), que é uma aplicação que utiliza a tecnologia React. Serão utilizadas as tecnologias: JS + Node.js + Cypress, para a automatização dos testes funcionais.

Os cenários abordados serão: Inserir Conta, Alterar Conta, Inserir Conta repetida, Inserir Movimentação, Calculo de Saldo e Remover Movimentação.
Foi adicionado dois cenários como plus, que foram: a criação de usuário de forma aleatório utilizando a biblioteca "faker-br" e também a criação de um teste que valida se pode inserir o mesmo usuário com os mesmos dados por uma segunda vez.

Para poder instalar este projeto, é precisar instalar a versão 9.7.0 do Cypress.
Segue um pequeno tutorial para rodar o projeto:

1- Passo: Realizar um clone do projeto ou baixar o projeto;
2- Passo: Fazer a instalação do Cypress com o seguinte comando "NPM INSTALL cypress@9.7.0";
3- Passo: Utilizar o comando "NPX CYPRESS OPEN" para rodar o projeto.
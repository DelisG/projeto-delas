<h1 align="center">


<p align="center"><b>Projeto Delas</b><p>
 
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/132357619/244519633-631f0e09-1ba9-41b8-b1ec-9ee7f98e1229.png" >

<p align="center"> Senac | Porto Digital | Minas  <p>
 
## Este é um projeto Integrador do curso de aperfeiçoamento Backend | Turma 01  
[![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-9C27B0.svg)](https://github.com/seu-usuario/seu-repositorio)


- [:ledger:Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
- [:inbox_tray:Acesso ao Projeto](#acesso-ao-projeto)
- [:bookmark: Tecnologias Utilizadas](#-Tecnologias-e-Dependências-Utilizadas)
- [:on: Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)

### Como surgiu o nosso Projeto:

O DELAS foi pensado na carência e necessidade de um espaço feminino para incentivar o trabalho, empoderamento, comunidade, e independência profissional e financeira. Com objetivo de inclusão de comunidade feminina e não-binárie, o DELAS foi construído para ser um marketplace onde serão ofertados produtos e serviços para acomodar todos os públicos, mas que serão atendidos por mulheres, tendo ciência de que o público feminino e LGBTQIA+ é e será prioridade. Visamos então fornecer um ambiente virtual de fácil utilização para empreendedoras expandirem seus negócios e alcançarem sucesso em suas jornadas empreendedoras. A plataforma permite que as empreendedoras cadastrem seus serviços e divulguem os produtos com os quais trabalham. 
  Através da Plataforma, as empreendedoras terão acesso a uma gama de recursos e funcionalidades que visam aprimorar suas interações com os clientes e fortalecer suas estratégias de negócios. A plataforma busca criar um ambiente seguro e confiável para o desenvolvimento de relacionamentos profissionais e o crescimento das empreendedoras.
Com uma interface intuitiva e amigável, visamos simplificar o processo de expansão dos negócios das empreendedoras, permitindo que elas se concentrem em oferecer serviços de qualidade e alcançar resultados positivos em suas atividades empreendedoras. 

## Acesso ao Projeto

### Para acessar ao projeto:
### [Link de acesso:](https://github.com/DelisG/projeto-delas/blob/main/README.md)

## Funcionalidades e Demonstração da Aplicação

 <h3> 📁 Arquitetura do Projeto </h3>
:pushpin: Lembre-se que a arquitetura ao final do projeto precisa ficar exatamente dessa maneira. 

```
 📁projeto-delas
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 clientesController.js
   |  |    |- 📄 empreendedorasController.js  
   |  |
   |  |
   |  ||--📁 models
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |    |- 📄 index.js 
   |  |
   |  ||-📄 app.js
   |  |
   |  |
   |  | 
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 server.js
   |- 📄 README.md


```

## ⚗️ Interface Gráfica Para Realizar os Testes

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através de qualquer ferramenta cliente API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.

 <!---
▫️ Rota de criação de empreendedora

<img src= "#" width="70%" height="40%"/>
</p>


▫️ Rota que retorna todas as empreendedoras

<img src= "#" width="70%" height="40%"/>
</p>


▫️ Rota que retorna o empreendimento por categoria

<img src= "#" width="70%" height="40%"/>
</p>


▫️ Rota que altera algum dado do cadastro da empreendedora

<img src= "#" width="70%" height="40%"/>
</p>

-->
## :on: Testando Rotas
 📢 Todas as rotas existentes neste projeto:

 <h3> No usuário Empreendedora, os métodos e rotas serão:</h3>

| Verbo  |   EndPoint         |         Descrição da Rota                               | 
| ------ | ------------------ | --------------------------------------------------------| 
| GET    | /empreendedoras    | Listar todas as empreendedoras cadastradas              |   
| GET    | /:id               | Mostra o cadastro da empreendedora por ID               |  
| POST   | /                  | Registra uma nova empreendedora                         |   
| PUT    | /:id               | Altera dados da empreendedora identificada pelo id      |   
| DELETE | /:id               | Remove o cadastro da empreendedora identificada pelo id |   

 <h3> No usuário cliente, os métodos e rotas serão:</h3>

| Verbo  |   EndPoint         |         Descrição da Rota                               | 
| ------ | ------------------ | --------------------------------------------------------| 
| GET    | /cliente           | Listar todas os clientes cadastrados                    |   
| GET    | /:id               | Mostra o cadastro do cliente       por ID               |  
| POST   | /                  | Registra um novo cliente                                |   
| PUT    | /:id               | Altera dados do cliente identificado pelo id            |   
| DELETE | /:id               | Remove o cadastro do cliente identificado pelo id       |   


##  :ledger: Tecnologias Utilizadas


| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|

 ## :bookmark: Pacotes Utilizadas
 | Ferramenta | Descrição |
 | --- | --- |
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|

-------------------------------------------------------------------
# Clonar e Contribuir para o Projeto

Este documento fornece instruções técnicas sobre como  com o projeto. O processo de clonar e contribuir, envolve o uso de comandos do Git para clonar o repositório, criar uma ramificação, fazer alterações e enviar um pedido de pull. Siga as etapas abaixo para começar:

## Pré-requisitos

Antes de prosseguir, certifique-se de ter o Git instalado no seu sistema. Caso contrário, você pode baixá-lo e instalá-lo a partir do site oficial do Git (https://git-scm.com/).

## Clonar o Repositório

1. Abra o terminal ou prompt de comando.

2. Navegue até o diretório onde deseja clonar o repositório.

3. Execute o seguinte comando para clonar o repositório para o seu sistema local:

```git
git clone https://github.com/DelisG/projeto-delas.git
```

## Criar uma Ramificação (Branch)

1. Navegue para o diretório do projeto clonado usando o comando `cd projeto-delas`.

2. Execute o seguinte comando para criar uma nova ramificação (branch) para trabalhar nas suas alterações:

```git
git checkout -b <nome_da_branch>
```

Substitua `<nome_da_branch>` pelo nome descritivo da branch que você deseja criar.

## Fazer Alterações

1. Abra o projeto clonado em seu editor de código.

2. Faça as alterações desejadas nos arquivos.

## Commit das Alterações

1. Volte para o terminal ou prompt de comando.

2. Execute o seguinte comando para adicionar as alterações ao seu controle de versão:

```git
git add .
```

Esse comando adicionará todas as alterações feitas aos arquivos no diretório atual.

3. Em seguida, execute o seguinte comando para criar um commit com uma mensagem descritiva das alterações:

```git
git commit -m "Mensagem do commit"
```

## Enviar um Pedido de Pull

1. Execute o seguinte comando para enviar sua ramificação (branch) e as alterações para o repositório remoto no GitHub:

```git
git push origin <nome_da_branch>
```

Substitua `<nome_da_branch>` pelo nome da branch que você criou anteriormente.

2. Acesse o repositório no GitHub.

3. Clique no botão "Compare & pull request" (ou similar) ao lado da sua ramificação no repositório.

4. Preencha os detalhes do seu pedido de pull (pull request), incluindo uma descrição clara das alterações realizadas.

5. Clique em "Create pull request" para enviar o pedido de pull.

Pronto! Você enviou com sucesso suas alterações para o projeto. Aguarde a revisão e o feedback da equipe do projeto. Certifique-se de manter sua ramificação atualizada com as alterações mais recentes do repositório principal para evitar conflitos.
--------------------------------------------------------------------------------------

<h1 align="center">

## [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)

#### [Ana Rita](https://github.com/aritarruda)
#### [Carol Fernanda](https://github.com/Carolfernanda)
#### [Delis Glória](https://github.com/delisG) 
#### [Luana Martins](https://github.com/luanamcomin)
#### [Michelle Bessoni](https://github.com/mbessoni)
#### [Michelle Luana](https://github.com/Michele324)
#### [Renata Silvestre](https://github.com/renatasilvestr3)
#### [Tereza Oliveira](https://github.com/TerezaOliveira90)
#### [Vanessa Farias](https://github.com/Vr-Farias)

Projeto criado com a orientação e cuidado da Professora [Tereza Oliveira](https://github.com/devcode25))!
<span align="center">

#  Muito obrigada a você que chegou até aqui! 💜 </h2>

</span>


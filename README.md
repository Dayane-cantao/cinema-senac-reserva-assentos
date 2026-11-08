Projeto Integrador - Sistema de Reserva de Assentos de Cinema

# 🎬 Sistema de Reserva de Assentos de Cinema

Projeto Integrador desenvolvido para a disciplina **Boas Práticas de Desenvolvimento de Software**, com o objetivo de aplicar conceitos de organização, desenvolvimento colaborativo e boas práticas na criação de uma aplicação web simples e funcional.

O projeto simula o processo de reserva de ingressos de cinema, permitindo ao usuário selecionar um filme, escolher o horário da sessão, visualizar e selecionar poltronas, acompanhar o valor da reserva e finalizar o processo.


## 📌 Sobre o projeto

O **Sistema de Reserva de Assentos de Cinema** foi desenvolvido como uma aplicação web acadêmica, com foco em uma experiência simples e intuitiva para o usuário.

A proposta surgiu a partir da necessidade de representar, de maneira prática, um fluxo comum em plataformas de cinema: a escolha de um filme, horário e assentos disponíveis.

O projeto foi planejado e desenvolvido de forma colaborativa por uma equipe de **8 integrantes**, com divisão das responsabilidades por área.


## 🎯 Objetivo

Desenvolver uma aplicação web capaz de simular o processo de reserva de ingressos de cinema, permitindo ao usuário:

- visualizar os filmes disponíveis;
- selecionar um filme;
- escolher o horário da sessão;
- visualizar a disposição das poltronas;
- identificar assentos livres e ocupados;
- selecionar e desmarcar poltronas disponíveis;
- visualizar a quantidade de assentos selecionados;
- calcular automaticamente o valor total;
- realizar uma simulação de pagamento;
- receber a confirmação da reserva.

## ✨ Funcionalidades

### 🎥 Seleção de filmes e horários

O usuário pode visualizar os filmes disponíveis e selecionar o filme e o horário desejados para a sessão.

### 💺 Seleção de assentos

A aplicação apresenta visualmente as poltronas da sala, permitindo identificar os diferentes estados dos assentos:

- disponível;
- selecionado;
- ocupado.

O usuário pode selecionar e desmarcar os assentos disponíveis.

### 💰 Cálculo automático

A quantidade de poltronas selecionadas e o valor total da reserva são atualizados de acordo com as escolhas realizadas pelo usuário.

### 💳 Simulação de pagamento

O sistema possui uma etapa de pagamento desenvolvida exclusivamente para fins acadêmicos.

> Não existe integração com sistemas financeiros ou processamento de pagamentos reais.

### 🎟️ Confirmação

Após a finalização do fluxo, o usuário é direcionado para uma tela de confirmação da reserva.

### 💾 Armazenamento local

O projeto utiliza o **LocalStorage** do navegador para armazenar informações necessárias durante a navegação, sem necessidade de banco de dados externo.


## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- **HTML5** — estrutura das páginas;
- **CSS3** — estilização e organização visual;
- **JavaScript** — interações e funcionalidades;
- **LocalStorage** — armazenamento local das informações;
- **Git e GitHub** — versionamento, organização e desenvolvimento colaborativo.


## 📂 Estrutura do projeto

```text
cinema-senac-reserva-assentos/
├── README.md
├── index.html
├── assets/
│   ├── Prot#U00f3tipo.pdf
│   ├── icons/
│   │   └── icon.png
│   └── img/
│       ├── filmes/
│       ├── interface/
│       └── qr-code/
├── css/
│   ├── style.css
│   └── responsive.css
├── demo/
│   ├── [vídeo desktop].mp4
│   └── [vídeo mobile].mp4
├── js/
│   ├── assentos.js
│   ├── filmes.js
│   ├── pagamento.js
│   ├── storage.js
│   └── visual.js
└── pages/
    ├── assentos.html
    ├── pagamento.html
    └── confirmacao.html
```


## 🔄 Fluxo da aplicação

```text
Tela inicial
     ↓
Seleção do filme
     ↓
Seleção do horário
     ↓
Escolha das poltronas
     ↓
Cálculo do valor
     ↓
Pagamento simulado
     ↓
Confirmação da reserva
```

## 👥 Equipe do Projeto

O projeto foi desenvolvido de forma colaborativa por **8 integrantes**, com responsabilidades definidas de acordo com cada etapa do desenvolvimento.


### 👩‍💻 Dayane Cantão Azarias
**Liderança e organização do projeto**

Responsável pela organização da equipe, estruturação do GitHub, acompanhamento das etapas, integração das atividades, revisão final e apoio na documentação.

### 🎯 Gustavo Duque Ferreira
**Requisitos e JavaScript**

Responsável pela definição do problema, objetivos e requisitos do sistema, além do desenvolvimento das funcionalidades JavaScript em conjunto com Rebeca.

### 📝 Fabiana Costa dos Santos
**Documentação e apresentação**

Responsável pela documentação do projeto e montagem da apresentação final em conjunto com Dayane.

### 🎨 Ranieri Portinari Bezerra dos Santos
**Protótipo e identidade visual**

Responsável pela criação do protótipo utilizado como referência para o desenvolvimento das telas e definição visual da aplicação.

### 🧱 Bruno Lira Soares
**HTML**

Responsável pela construção da estrutura HTML das páginas da aplicação.

### 🎨 Guilherme de Melo Gama
**CSS e responsividade**

Responsável pela estilização das páginas, organização visual da interface e adaptação do projeto para diferentes tamanhos de tela.

### ⚙️ Rebeca Brandão Vieira
**JavaScript**

Responsável pelo desenvolvimento das funcionalidades JavaScript, incluindo seleção de poltronas e cálculos, em conjunto com Gustavo.

### 🧪 Victor Cabral
**LocalStorage, validações e testes**

Responsável pelo armazenamento local das informações, validações, testes da aplicação e registro das evidências do projeto.


> **Projeto desenvolvido colaborativamente, com cada integrante responsável por uma etapa específica e integração das atividades durante o desenvolvimento.**

## 🧩 Etapas do desenvolvimento

O projeto foi organizado em etapas para facilitar o acompanhamento da equipe:

1. ✅ Organização inicial do projeto e do repositório — **Dayane**
2. ✅ Definição do problema, objetivo e requisitos — **Gustavo**
3. ✅ Desenvolvimento do protótipo — **Ranieri**
4. ✅ Estrutura HTML — **Bruno**
5. ✅ Estilização CSS — **Guilherme**
6. ✅ Desenvolvimento JavaScript — **Rebeca e Gustavo**
7. ✅ LocalStorage, validações, testes e evidências — **Victor**
8. ✅ Documentação, revisão e apresentação final — **Fabiana e Dayane**


## ✅ Boas práticas aplicadas

Durante o desenvolvimento foram consideradas boas práticas de desenvolvimento de software, como:

- separação entre HTML, CSS e JavaScript;
- organização dos arquivos em pastas;
- definição clara das responsabilidades da equipe;
- utilização de nomes de arquivos e elementos de forma padronizada;
- organização do projeto utilizando GitHub;
- reutilização de estilos e funções sempre que possível;
- validação das interações do usuário;
- documentação do desenvolvimento;
- realização de testes antes da entrega final;
- construção de uma interface simples e intuitiva.


## ▶️ Como executar

O projeto não necessita de instalação de dependências ou banco de dados.

### Opção 1 — Abrir diretamente

1. Baixe ou clone o projeto.
2. Abra a pasta do projeto.
3. Execute o arquivo:

```text
index.html
```

O projeto será aberto no navegador.

### Opção 2 — Visual Studio Code

Também é possível abrir o projeto utilizando o **Visual Studio Code** e executar o `index.html` com uma extensão de servidor local, como o **Live Server**.

---

## 💾 Persistência dos dados

Os dados utilizados durante a navegação são armazenados no navegador através do:

```javascript
localStorage
```

Por esse motivo, o projeto não utiliza banco de dados externo.

---

## 🧪 Testes

Durante o desenvolvimento, foram considerados testes relacionados a:

- seleção de filme;
- seleção de horário;
- seleção de poltronas disponíveis;
- bloqueio de poltronas ocupadas;
- seleção e desmarcação de assentos;
- cálculo do valor total;
- armazenamento das informações;
- navegação entre as etapas;
- validações;
- confirmação da reserva.

---

## 🎨 Protótipo

Antes do desenvolvimento das páginas, foi elaborado um protótipo visual para definir:

- organização das telas;
- disposição das informações;
- fluxo de navegação;
- cores;
- botões;
- organização dos assentos;
- experiência do usuário.

O protótipo serviu como referência para a implementação da aplicação.

---

## 📚 Contexto acadêmico

Projeto desenvolvido como atividade do **Projeto Integrador — Boas Práticas de Desenvolvimento de Software**, do **Senac**, com foco na aplicação prática dos conhecimentos adquiridos durante o curso.

---

## 📅 Status do projeto

### ✅ Projeto concluído


Todas as etapas previstas foram finalizadas, incluindo desenvolvimento, integração, validações, testes, documentação e apresentação.

---

## 👩‍💻 Liderança do projeto

**Dayane Cantão Azarias**

Responsável pela organização da equipe, estruturação do repositório, acompanhamento das etapas, integração das atividades e revisão final do projeto.

---

> 🎬 **Projeto Integrador — Sistema de Reserva de Assentos de Cinema**  
> Desenvolvido colaborativamente pela equipe com foco em organização, boas práticas e aplicação dos conceitos de desenvolvimento web.

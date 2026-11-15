# Data On'Quiz — Quiz sobre Bancos de Dados e Tecnologia

## 🔗 Link do Projeto
Acesse a versão publicada com HTTPS: [https://vithsilva.github.io/Data-On-Quiz/](https://vithsilva.github.io/Data-On-Quiz/)

---

## 📖 Sobre o Projeto
O **Data On'Quiz** é uma aplicação web interativa desenvolvida para a disciplina de Desenvolvimento Front-End Web. O projeto tem como objetivo testar e fixar conhecimentos fundamentais da área de Dados (SGBDs relacionais, NoSQL, modelagem, normalização, BI e ETL), aplicando boas práticas de semântica HTML5, responsividade, acessibilidade web e versionamento colaborativo com Git e GitHub.

### Tecnologias Utilizadas
- **HTML5:** Estruturação semântica das telas inicial e de jogo.
- **CSS3:** Layout responsivo (Mobile First), alto contraste e indicadores de foco visível.
- **JavaScript (ES6+):** Carregamento assíncrono via `fetch`, manipulação segura do DOM (`textContent`) e persistência de ranking em `sessionStorage`.
- **JSON:** Base estruturada de 10 questões com dicas, explicações e fontes bibliográficas.
- **Git & GitHub Pages:** Controle de versão distribuído, tag de entrega (`cp3-entrega`) e hospedagem HTTPS.

---

## 🎮 Regras do Jogo
1. **Identificação:** O jogador informa seu nome ou apelido na tela inicial antes de iniciar a partida.
2. **Pontuação:** Cada resposta correta soma **1 ponto** (total máximo de 10 pontos). Não há desconto por erros.
3. **Tentativa Única:** Cada questão permite apenas **uma seleção**. Após o clique ou acionamento via teclado, as opções são bloqueadas e o sistema exibe imediatamente a correção, a explicação teórica e o link da fonte de referência.
4. **Sistema de Dicas:** O jogador pode consultar uma dica opcional antes de responder cada questão, sem penalidade na pontuação.
5. **Ranking da Sessão:** Ao finalizar o quiz, a pontuação é salva no `sessionStorage` do navegador. Caso o mesmo jogador jogue novamente na mesma sessão, o ranking mantém a sua maior pontuação ordenada de forma decrescente.

---

## 🚀 Instruções de Execução

### Jogando Online
Acesse [https://vithsilva.github.io/Data-On-Quiz/](https://vithsilva.github.io/Data-On-Quiz/), informe seu nome e clique em **Começar o quiz**.

### Executando Localmente
Como o jogo carrega as questões dinamicamente via `fetch('perguntas.json')`, é necessário servi-lo por meio de um servidor HTTP local (abrir o arquivo diretamente via `file://` é bloqueado pela política de CORS do navegador):

1. Clone o repositório:
   ```bash
   git clone https://github.com/VithSilva/Data-On-Quiz.git
   ```
2. Abra a pasta do projeto no **VS Code**.
3. Inicie um servidor local usando a extensão **Live Server** (*Open with Live Server* no `index.html`) ou via terminal (`npx serve` ou `python -m http.server 8000`).

---

## ♿ Qualidade, Acessibilidade e Responsividade Conferidas

O grupo realizou auditoria manual e técnica nas páginas (`index.html` e `quiz.html`) garantindo conformidade com as diretrizes de acessibilidade (WCAG 2.1 nível AA):

- **Contraste de Cores:** Verificação das combinações entre texto e plano de fundo para garantir legibilidade superior a `4.5:1` em textos normais — incluindo texto branco (`#ffffff`) sobre o fundo escuro (`#1f2830`, contraste `14.7:1`), cartões (`#2f3742`, contraste `11.8:1`), botões de alternativa (`#3b6e9c`, contraste `5.4:1`), estados de hover (`#315d85`, contraste `6.8:1`) e destaque de resposta correta com texto escuro (`#0f2a0a` sobre `#46c035`, contraste `7.4:1`).
- **Foco Visível:** Estilização global com `:focus-visible` aplicando contorno sólido de `3px` na cor de alto destaque (`#f5b942`) e `outline-offset: 3px` em todos os elementos interativos (inputs, botões de alternativa, botão de dica, navegação e links de fonte).
- **Navegação Completa por Teclado:** Uso exclusivo de elementos semânticos nativos (`<form>`, `<label>`, `<input>`, `<button>`, `<a>`), permitindo percorrer toda a aplicação com `Tab` / `Shift + Tab` e acionar respostas ou formulários com `Enter` ou `Espaço`, sem armadilhas de foco (*keyboard traps*).
- **Textos Alternativos (`alt`) e Leitores de Tela:** A aplicação não utiliza imagens rasterizadas decorativas ou informativas (`<img>`), empregando ícones vetoriais inline marcados com `aria-hidden="true"` para evitar leitura redundante, além de atributos `aria-live="polite"` na área de feedback (`role="status"`) e `aria-expanded` no botão de dicas.
- **Layout Responsivo sem Rolagem Horizontal:** Contêineres fluidos limitados por `max-width` (`540px` na inicial e `600px` no quiz), quebra automática de palavras longas (`overflow-wrap: anywhere`), `overflow-x: hidden` preventivo e adaptação via `@media (max-width: 560px)` que reorganiza a grade de alternativas de 2 colunas para 1 coluna em dispositivos móveis, testado de `360px` (mobile) a `1280px+` (desktop) sem barra de rolagem horizontal.

---

## 👥 Integrantes e Divisão da Apresentação (Grupo 7)

| Integrante | Papel e Tópico na Apresentação Presencial |
| :--- | :--- |
| **João Vithor Silva Albuquerque** | **Abertura, Arquitetura e Deploy:** Apresentação geral do tema (Dados), estrutura de arquivos (`index.html`, `quiz.html`, `perguntas.json`), publicação com HTTPS no GitHub Pages e tag `cp3-entrega`. |
| **Bruno Luiz dos Santos** | **Tela Inicial e Fluxo de Entrada:** Demonstração da `index.html`, validação do formulário de identificação do jogador e armazenamento inicial do nome na `sessionStorage`. |
| **Enzo Moraes de Sousa** | **Base de Dados (`perguntas.json`) e Conteúdo:** Explicação da estrutura JSON das 10 questões, curadoria dos temas de SGBD/NoSQL/ETL, sistema de dicas opcionais e links de fontes confiáveis. |
| **Esther Costa** | **Lógica do Quiz e Feedback Imediato (`script.js`):** Demonstração do carregamento assíncrono via `fetch`, validação de resposta única, travamento das alternativas e exibição dinâmica das explicações. |
| **Gerdson Luiz Felix Oliveira** | **Acessibilidade Web (WCAG):** Demonstração prática na página sobre contraste de cores, navegação completa por teclado (`Tab` / `Enter`), foco visível (`#f5b942`) e atributos ARIA (`aria-live`, `aria-expanded`, `aria-hidden`). |
| **João Vitor Oliveira da Silva** | **Responsividade e Ranking Final:** Demonstração do layout adaptado para mobile e desktop sem rolagem horizontal, funcionamento do ranking ordenado em `sessionStorage` e botão *Jogar de novo*. |
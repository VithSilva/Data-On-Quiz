# Data On'Quiz — Quiz sobre Bancos de Dados e Tecnologia

<td>
      <td width="100%" align="center" valign="top">
      <img src="https://cf.preview.redd.it/jb0u633yc7v81.gif?width=2048&format=mp4&s=7086bbd6b01944c60f896933442197f293fa400b.gif" width="100%" alt="・゜゜・．🗝️⋆｡𖦹°‧★" />
    </td>
</td>

## 🔗 Link do Projeto
Acesse a versão publicada com HTTPS: [https://vithsilva.github.io/Data-On-Quiz/](https://vithsilva.github.io/Data-On-Quiz/)

---

##  Sobre o Projeto
O **Data On'Quiz** é uma aplicação web interativa desenvolvida para a disciplina de Desenvolvimento Front-End Web. O projeto tem como objetivo testar e fixar conhecimentos fundamentais da área de Dados (SGBDs relacionais, NoSQL, modelagem, normalização, BI e ETL), aplicando boas práticas de semântica HTML5, responsividade, acessibilidade web e versionamento colaborativo com Git e GitHub.

### Tecnologias Utilizadas
- **HTML5:** Estruturação semântica das telas inicial e de jogo.
- **CSS3:** Layout responsivo (Seguindo tambem a regra Mobile First), alto contraste e indicadores de foco visível.
- **JavaScript:** Carregamento assíncrono via `fetch`, manipulação segura do DOM (`textContent`) e persistência de ranking em `sessionStorage`.
- **JSON:** Base estruturada de 10 questões com dicas, explicações e fontes.
- **Git & GitHub Pages:** Controle de versão distribuído, tag de entrega e hospedagem HTTPS.

---

##  Regras do Jogo
1. **Identificação:** O jogador informa seu nome ou apelido na tela inicial antes de iniciar a partida.
2. **Pontuação:** Cada resposta correta soma **1 ponto** (total máximo de 10 pontos). Não há desconto por erros.
3. **Tentativa Única:** Cada questão permite apenas **uma seleção**. Após o clique ou acionamento via teclado, as opções são bloqueadas e o sistema exibe imediatamente a correção, a explicação teórica e o link da fonte de referência.
4. **Sistema de Dicas:** O jogador pode consultar uma dica opcional antes de responder cada questão, sem penalidade na pontuação.
5. **Ranking da Sessão:** Ao finalizar o quiz, a pontuação é salva no `sessionStorage` do navegador. Caso o mesmo jogador jogue novamente na mesma sessão, o ranking mantém a sua maior pontuação ordenada de forma decrescente.


##  Como faço para jogar?

### Jogando Online
Acesse [https://vithsilva.github.io/Data-On-Quiz/](https://vithsilva.github.io/Data-On-Quiz/), informe seu nome e clique em **Começar o quiz**.

### Executando Localmente
Como o jogo carrega as questões dinamicamente via `fetch('perguntas.json')`, é necessário servi-lo por meio de um servidor HTTP local (abrir o arquivo diretamente via `file://` é bloqueado pela política de CORS do navegador):

1. Clone o repositório:
   ```bash
   git clone [https://github.com/VithSilva/Data-On-Quiz.git](https://github.com/VithSilva/Data-On-Quiz.git)
   ```
2. Abra a pasta do projeto no **VS Code**.
3. Inicie um servidor local usando a extensão **Live Server** (*Open with Live Server* no `index.html`) ou via terminal (`npx serve` ou `python -m http.server 8000`).

## Membros fundadores do Quiz (Grupo 7)
<table border="0">
  <tr>
    <td width="100%" valign="top">
      
 **João Vithor Silva Albuquerque**

 **Bruno Luiz dos Santos**

 **Enzo Moraes de Sousa**

 **Gerdson Luiz Felix Oliveira**

 **João Vitor Oliveira da Silva**
  </td>
</table>

let perguntas = [];
let atual = 0;
let acertos = 0;
let respondida = false;

const $ = (id) => document.getElementById(id);
const nomeJogador = sessionStorage.getItem('nomeJogador') || 'Jogador';

async function iniciar() {
  try {
    const resposta = await fetch('perguntas.json');
    if (!resposta.ok) throw new Error('HTTP ' + resposta.status);
    perguntas = await resposta.json();
    mostrarPergunta();
  } catch (erro) {
    $('posicao').textContent = 'Erro';
    $('pergunta').textContent =
      'Não foi possível carregar as perguntas. Abra o site por um servidor ' +
      '(extensão Live Server do VS Code ou GitHub Pages), não clicando duas vezes no arquivo.';
    $('opcoes').innerHTML = '';
    $('proximo').disabled = true;
    $('area-dica').style.display = 'none';
  }
}

function mostrarPergunta() {
  const p = perguntas[atual];
  respondida = false;

  $('posicao').textContent = `${nomeJogador} — Pergunta ${atual + 1} de ${perguntas.length}`;
  $('pergunta').textContent = p.pergunta;

  const btnDica = $('btn-dica');
  const textoDica = $('texto-dica');
  btnDica.style.display = 'inline-block';
  btnDica.disabled = false;
  textoDica.classList.add('escondido');
  textoDica.textContent = p.dica || 'Sem dica disponível para esta pergunta.';

  const lista = $('opcoes');
  lista.innerHTML = '';
  p.opcoes.forEach((texto, i) => {
    const li = document.createElement('li');
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'opcao';
    botao.textContent = texto;
    botao.addEventListener('click', () => responder(i));
    li.appendChild(botao);
    lista.appendChild(li);
  });

  limparFeedback('Escolha uma alternativa.');
  $('proximo').disabled = true;
  $('proximo').textContent = atual === perguntas.length - 1 ? 'Ver resultado' : 'Próxima';
}

$('btn-dica').addEventListener('click', () => {
  $('texto-dica').classList.toggle('escondido');
});

function limparFeedback(texto) {
  const f = $('feedback');
  f.className = '';
  f.innerHTML = '';
  const status = document.createElement('p');
  status.textContent = texto;
  f.appendChild(status);
}

function responder(escolhida) {
  if (respondida) return;
  respondida = true;

  const p = perguntas[atual];
  const botoes = document.querySelectorAll('.opcao');
  const acertou = escolhida === p.respostaCorreta;
  if (acertou) acertos++;

  $('btn-dica').disabled = true;

  botoes.forEach((b, i) => {
    b.disabled = true;
    if (i === p.respostaCorreta) {
      b.classList.add('correta');
      b.textContent = '✓ ' + b.textContent;
    } else if (i === escolhida) {
      b.classList.add('errada');
      b.textContent = '✗ ' + b.textContent;
    }
  });

  const f = $('feedback');
  f.className = acertou ? 'acerto' : 'erro';
  f.innerHTML = '';

  const status = document.createElement('p');
  status.className = 'status';
  status.textContent = acertou
    ? '✓ Resposta correta — veja a explicação'
    : '✗ Resposta incorreta — veja a explicação';

  const explicacao = document.createElement('p');
  explicacao.className = 'explicacao';
  explicacao.textContent = p.explicacao;

  const fonte = document.createElement('p');
  fonte.className = 'fonte';
  fonte.textContent = 'Fonte: ' + p.fonte;

  f.append(status, explicacao, fonte);
  $('proximo').disabled = false;
}

function proxima() {
  if (atual < perguntas.length - 1) {
    atual++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function salvarERenderizarRanking() {
  let ranking = JSON.parse(sessionStorage.getItem('rankingQuiz')) || [];
  
  const jogadorExistente = ranking.find((item) => item.nome === nomeJogador);

  if (jogadorExistente) {
    if (acertos > jogadorExistente.pontuacao) {
      jogadorExistente.pontuacao = acertos;
    }
  } else {
    ranking.push({ nome: nomeJogador, pontuacao: acertos, total: perguntas.length });
  }
  
  ranking.sort((a, b) => b.pontuacao - a.pontuacao);
  
  sessionStorage.setItem('rankingQuiz', JSON.stringify(ranking));

  const lista = $('lista-ranking');
  lista.innerHTML = '';
  ranking.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} — ${item.pontuacao}/${item.total}`;
    lista.appendChild(li);
  });

  $('area-ranking').classList.remove('escondido');
}

function mostrarResultado() {
  $('posicao').textContent = 'Fim do quiz';
  $('pergunta').textContent = `${nomeJogador}, você acertou ${acertos} de ${perguntas.length} perguntas.`;
  $('opcoes').innerHTML = '';
  $('area-dica').style.display = 'none';
  
  limparFeedback(acertos === perguntas.length ? 'Perfeito! Você acertou todas as perguntas, continue assim. :D' : 'Boa! Tente de novo para melhorar ainda mais. :)');

  salvarERenderizarRanking();

  const botao = $('proximo');
  botao.textContent = 'Jogar de novo';
  
  const novoBotao = botao.cloneNode(true);
  $('acoes').replaceChild(novoBotao, botao);

  novoBotao.onclick = () => {
    atual = 0;
    acertos = 0;
    respondida = false;

    $('area-ranking').classList.add('escondido');
    $('area-dica').style.display = 'block';
    
    novoBotao.onclick = proxima;
    
    mostrarPergunta();
  };
}

$('proximo').addEventListener('click', proxima);
iniciar();

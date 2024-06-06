// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Introibo ad altare Dei.Ad Deum qui lætificat juventutem meam. Judica me, Deus, et discerne causam meam de gente non sancta: ab homine iniquo et doloso erue me. Quia tu es, Deus, fortitudo mea: quare me repulisti, et quare tristis incedo, dum affligit me inimicus?',
    answers: [
      {
        answer: 'Emitte lucem tuam et veritatem tuam: ipsa me deduxerunt et adduxerunt in montem sanctum tuum, et in tabernacula tua.',
        correct: false,
      },
      {
        answer: 'Spera in Deo, quoniam adhuc confitebor illi: salutare vultus mei, et Deus meus',
        correct: false,
      },
      {
        answer: 'Deus, tu conversus vivificabis nos. Et plebs tua lætabitur in te. Ostende nobis Domine, misericordiam tuam.',
        correct: false,
      },
      {
        answer: 'Domine, exuadi orationem meam.  Et clamor meus ad te veniat. Aufer a nobis, quæsumus, Domine, iniquitates nostras',
        correct: true,
      },
      {
        answer: 'zzzzzzzzzDomine, exuadi orationem meam.  Et clamor meus ad te veniat. Aufer a nobis, quæsumus, Domine, iniquitates nostras',
        correct: false,
      },
    ],
  },
  {
    question: 'Introibo ad altare Dei.Ad Deum qui lætificat juventutem meam. Judica me, Deus, et discerne causam meam de gente non sancta: ab homine iniquo et doloso erue me. Quia tu es, Deus, fortitudo mea: quare me repulisti, et quare tristis incedo, dum affligit me inimicus?',
    answers: [
      {
        answer: 'Emitte lucem tuam et veritatem tuam: ipsa me deduxerunt et adduxerunt in montem sanctum tuum, et in tabernacula tua.',
        correct: true,
      },
      {
        answer: 'Spera in Deo, quoniam adhuc confitebor illi: salutare vultus mei, et Deus meus',
        correct: false,
      },
      {
        answer: 'Deus, tu conversus vivificabis nos. Et plebs tua lætabitur in te. Ostende nobis Domine, misericordiam tuam.',
        correct: false,
      },
      {
        answer: 'Domine, exuadi orationem meam.  Et clamor meus ad te veniat. Aufer a nobis, quæsumus, Domine, iniquitates nostras',
        correct: false,
      },
    ],
  },
  {
    question: 'Introibo ad altare Dei.Ad Deum qui lætificat juventutem meam. Judica me, Deus, et discerne causam meam de gente non sancta: ab homine iniquo et doloso erue me. Quia tu es, Deus, fortitudo mea: quare me repulisti, et quare tristis incedo, dum affligit me inimicus?',
    answers: [
      {
        answer: 'Emitte lucem tuam et veritatem tuam: ipsa me deduxerunt et adduxerunt in montem sanctum tuum, et in tabernacula tua.',
        correct: false,
      },
      {
        answer: 'Spera in Deo, quoniam adhuc confitebor illi: salutare vultus mei, et Deus meus',
        correct: false,
      },
      {
        answer: 'Deus, tu conversus vivificabis nos. Et plebs tua lætabitur in te. Ostende nobis Domine, misericordiam tuam.',
        correct: true,
      },
      {
        answer: 'Domine, exuadi orationem meam.  Et clamor meus ad te veniat. Aufer a nobis, quæsumus, Domine, iniquitates nostras',
        correct: false,
      },
      {
        answer: 'zzzzzzzzzDomine, exuadi orationem meam.  Et clamor meus ad te veniat. Aufer a nobis, quæsumus, Domine, iniquitates nostras',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();

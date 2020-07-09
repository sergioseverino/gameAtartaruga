const cards = [
    //cards object start here
       { cardId: 1,
         cardQuestion: 'Que lugar é este?',
         cardAnswer: 'Machu Pichu'	,
         cardImg: './img/img4.jpg',
         cardImgDescription: 'Imagem de um animal',
         cardTip: 'Ruínas da civilização Inca',
         category: 'lugares',
         level: 'medio',
         fakes: {fake1: 'Aconcagua',
                fake2: 'Estreito de Magalhães',
                fake3: 'Deserto do Atacama',
                fake4: 'Praia Comprida',
            },
        cardHistory: 'Este é um lugar maravilhoso, foi construído pelo civilização Inca em 1200dC. Sofia e Rafael fizeram uma bela caminhada de 11km para chegar lá'        
        },
    //card object ends here
        { cardId: 2, 
            cardQuestion: 'Que lugar é este?',
            cardAnswer: 'Epecuen'	,
            cardImg: './img/img6.JPG',
            cardImgDescription: 'Imagem de Montanhas',
            cardTip: 'Cidade destruída pela elevação de um lago de sal',
            category: 'lugares',
            level: 'dificil',
            fakes: {fake1: 'Aconcagua',
                   fake2: 'Estreito de Magalhães',
                   fake3: 'Deserto do Atacama',
                   fake4: 'Praia Comprida',
               },
               cardHistory: 'Está é uma antiga cidade a beira de um lago salgado, mas um dia o lago encheu e cobriu toda cidade, em 2010 o lago secou novamente, e restaram os escombros e as lembranças da velha cidade.'        
                
           },
    //card object ends here
        { cardId : 3,
            cardQuestion: 'Que animal é este?',
            cardAnswer: 'Águia Americana '	,
            cardImg: './img/img1.JPG',
            cardImgDescription: 'Imagem de um animal',
            cardTip: 'Ave símbolo dos Estados Unidos da América',
            category: 'animais',
            level: 'facil',
            fakes: {fake1: 'Urso de Óculos',
                   fake2: 'Gaivota',
                   fake3: 'Condor',
                   fake4: 'Pelicano',
               },
            cardHistory: 'Vimos muitos Águias pelo caminho, principalmente no Alasca, onde passavam o dia pegando peixes. Ela é um símbolo dos Estados Unidos.'        
           },
    
//card object ends here
    { cardId : 4,
        cardQuestion: 'Que animal é este?',
        cardAnswer: 'Urso Pardo'	,
        cardImg: './img/img5.JPG',
        cardImgDescription: 'Imagem de um animal',
        cardTip: 'Gosta de dormir durante quase todo o inverno',
        category: 'animais',
        level: 'facil',
        fakes: {fake1: 'Bisão',
               fake2: 'Grilo',
               fake3: 'Leão',
               fake4: 'Alce',
           },
        fakesMedium: {fake1: 'Urso Polar',
           fake2: 'Urso Preto',
           fake3: 'Urso de Óculos',
           fake4: 'Urso Escuro',
       },
        cardHistory: 'O urso pardo é um dos mais ferozes animais no continente americano, ele passa boa parte do inverno em hibernação e quando acorda precisa de muito alimento'        
       },
//card object ends here
    
    ];

//// MENU CONFIGURAÇÃO listeners


const radios = document.getElementsByName('nivelEl');
console.log(radios[1].value);
let levelChoice = null;
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function() {
        (levelChoice) ? levelChoice.value : null;
        if (this !== levelChoice) {
            levelChoice = this;
        }
    });
}

let catAnimais = true;
animais.addEventListener('change', e => {
    e.target.checked ? catAnimais = 'true' : catAnimais = 'false';
    console.log(catAnimais)
});

let catLugares = true;
lugares.addEventListener('change', e => {
    e.target.checked ? ccatLugares = 'true' : catLugares = 'false';
    console.log(catLugares)
});

let catCultura = true;
cultura.addEventListener('change', e => {
    e.target.checked ? catCultura = 'true' : catCultura = 'false';
    console.log(catCultura)
});

let catPaises = true;
paises.addEventListener('change', e => {
    e.target.checked ? catPaises = 'true' : catPaises = 'false';
    console.log(catPaises)  
});

let playSound = true;
som.addEventListener('change', e => {
    e.target.checked ? playSound = 'true' : playSound = 'false';
    console.log(playSound)  
});





let newCardsArr = cards.sort(function(a, b){return 0.5 - Math.random()});
let callCardN = 0;
let cardImgEl = document.getElementById('cardImg');
let cardQuestionEl = document.getElementById('question');
let cardAnswer1El = document.getElementById('answer1');
let cardAnswer2El = document.getElementById('answer2');
let cardAnswer3El = document.getElementById('answer3');

//STYLE CARDS
let categoryColor = function(){if(newCardsArr[callCardN-1].category == 'animais'){
    mainCard.style.backgroundColor = '#c4ff94'} 
    if(newCardsArr[callCardN-1].category == 'lugares')
    {mainCard.style.backgroundColor = '#98c0ff'} 
};


// NEXT CARD button
const mainButton = () => {if (checkClicked){
    nextCardAction();
    } else {return window.alert("Escolha uma resposta, se precisar de uma dica clique no botão DICA")}
}


async function nextCardAction() {
    if (callCardN < newCardsArr.length){
        cardImgEl.src = newCardsArr[callCardN].cardImg;
        cardQuestionEl.innerHTML = '<h1>'+newCardsArr[callCardN].cardQuestion+ '</h1>';
        options();
        callCardN = callCardN + 1;
        reset();
        categoryColor();
        mainCard.style.display = 'block';
        abertura.style.display = 'none';
        pointsBoard.style.display = 'block';
        startGame();
        dicaBox.style.display = 'none';
        dicaButton.style.display = '';
        
    } 
    else if (next.innerHTML == 'Recomeçar') {   
        return novoGame()}
    else {
        next.innerHTML = 'Recomeçar'}

} 


const startGame = () => {if(next.textContent = 'VAMOS LÁ!'){
    return next.innerText = 'CONTINUAR';}
}

//dica

let dicaShow = () => {
    dicaBox.innerText = newCardsArr[callCardN-1].cardTip
    dicaBox.style.display = 'block';
    pontos = pontos - 15;
    dicaButton.style.display = 'none' ;
    
}

// reinicia jogo

const novoGame = () => {
    checkClicked = true;
    callCardN = 0;
    pontos = 0;
    points.innerHTML = 0;
    mainCard.style.display = 'none';
    abertura.style.display = 'flex';
    next.innerHTML = 'VAMOS LÁ!';
    pointsBoard.style.display = 'none';
    cards.sort(function(a, b){return 0.5 - Math.random()});
}

//shuffle answer options

// const answerScramble = 

async function options() {
    let numberRandom = Math.floor(Math.random() * 5);
    if(numberRandom == 1) {
        cardAnswer1El.innerHTML = newCardsArr[callCardN].cardAnswer;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].fakes.fake1;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].fakes.fake2;}
    else if(numberRandom == 2){
        cardAnswer1El.innerHTML = newCardsArr[callCardN].fakes.fake1;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].cardAnswer;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].fakes.fake2;}
    else if(numberRandom == 3){
        cardAnswer1El.innerHTML = newCardsArr[callCardN].fakes.fake3;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].cardAnswer;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].fakes.fake4;} 
    else if(numberRandom == 4){
        cardAnswer1El.innerHTML = newCardsArr[callCardN].fakes.fake4;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].fakes.fake2;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].cardAnswer;}  
    else {cardAnswer1El.innerHTML = newCardsArr[callCardN].fakes.fake1;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].fakes.fake2;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].cardAnswer}
}

//PONTUACAO

let pontos = 0

const pontuacao = (levelcard) => {if(levelcard == 'facil'){pontos = pontos + 20} 
    else if(levelcard == 'medio') {pontos = pontos + 50} else {
    pontos = pontos + 80
    } 
    {return points.innerHTML = pontos}
    };


//CHECK ANSWER

let checkClicked = true

answer1.onclick = function(){if(!checkClicked)
    {if(answer1.textContent == newCardsArr[callCardN-1].cardAnswer){
        answer1.style.borderColor = 'green';
        pontuacao(newCardsArr[callCardN-1].level);
    }else{  
        answer1.style.borderColor = 'red'}};
        checkClicked = true
    }

answer2.onclick = function(){if(!checkClicked)
    {if(answer2.textContent == newCardsArr[callCardN-1].cardAnswer){
        answer2.style.borderColor = 'green';
        pontuacao(newCardsArr[callCardN-1].level);
    }else{
        answer2.style.borderColor = 'red'}};
        checkClicked = true; 
    }

answer3.onclick = function(){if(!checkClicked)
    {if(answer3.textContent == newCardsArr[callCardN-1].cardAnswer){
        answer3.style.borderColor = 'green';
        pontuacao(newCardsArr[callCardN-1].level);
    }else{
        answer3.style.borderColor = 'red'}};
        checkClicked = true; 
    }

//RESET STYLE
let reset = function(){
    cardAnswer1El.style.borderColor = 'rgb(100, 149, 237)'
    cardAnswer2El.style.borderColor = 'rgb(100, 149, 237)'
    cardAnswer3El.style.borderColor = 'rgb(100, 149, 237)'
    checkClicked = false
}

//timer###########################

// const timer = () => {if(document.getElementsByName.nivel = 'dificil')
// {setInterval(function(){
//     nextCardAction(); 
//   }, 2000);
//   console.log(document.getElementById.nivel())
// }
// }


const cards = [
    //cards object start here
       { cardId: 1,
         cardQuestion: 'Que lugar é este?',
         cardAnswer: 'Machu Pichu'	,
         cardImg: './img/img4.jpg',
         cardImgDescription: 'Imagem de um animal',
         cardTip: 'É uma península com muita vida marinha na América do Sul ',
         category:	'lugares',
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
            cardTip: 'Conjunto de montanhas no sul da Patagônia',
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
            cardTip: 'É uma península com muita vida marinha na América do Sul ',
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
    
    ];


cards.sort(function(a, b){return 0.5 - Math.random()});

let newArray = cards;
let callCardN = 0;


// CHECK
//console.log(newArray[callCardN].cardQuestion)

let cardImgEl = document.getElementById('cardImg');
let cardQuestionEl = document.getElementById('question');
let cardAnswer1El = document.getElementById('answer1');
let cardAnswer2El = document.getElementById('answer2');
let cardAnswer3El = document.getElementById('answer3');

/// ONCLICK BOTAO


// document.getElementById("next").onclick = document.getElementById("next").ontouchstart = function () {nextCardAction()};


//STYLE CARDS
let categoryColor = function(){if(newArray[callCardN-1].category == 'animais'){
    document.getElementById('mainCard').style.backgroundColor = '#c4ff94'} 
    if(newArray[callCardN-1].category == 'lugares')
    {document.getElementById('mainCard').style.backgroundColor = '#98c0ff'} 
};



// NEXT CARD button
async function nextCardAction() {if (callCardN < newArray.length)
{cardImgEl.src = newArray[callCardN].cardImg;
cardQuestionEl.innerHTML = '<h1>'+newArray[callCardN].cardQuestion+ '</h1>';
options();
callCardN = callCardN + 1;
reset();
categoryColor();
document.getElementById('mainCard').style.display = 'block';
document.getElementById('abertura').style.display = 'none';
startGame();
} else if (document.getElementById('next').innerHTML == 'RECOMEÇAR') 
{return novoGame()}
else {document.getElementById('next').innerHTML = 'RECOMEÇAR'}

}


const startGame = () => {if(document.getElementById('next').textContent = 'VAMOS LÁ!'){
    return document.getElementById('next').innerText = 'CONTINUAR'}
}


const novoGame = () => {
    checkClicked = false;
    callCardN = 0;
    pontos = 0;
    document.getElementById('pontos').innerHTML = 0;
    document.getElementById('mainCard').style.display = 'none';
    document.getElementById('abertura').style.display = 'flex';
    document.getElementById('next').innerHTML = 'VAMOS LÁ!'}

//shuffle answer options
async function options() {let numberRandom = Math.floor(Math.random() * 5);
    console.log(numberRandom);
if(numberRandom == 1) {cardAnswer1El.innerHTML = newArray[callCardN].cardAnswer;
cardAnswer2El.innerHTML = newArray[callCardN].fakes.fake1;
cardAnswer3El.innerHTML = newArray[callCardN].fakes.fake2;}
else if(numberRandom == 2)
{cardAnswer1El.innerHTML = newArray[callCardN].fakes.fake1;
    cardAnswer2El.innerHTML = newArray[callCardN].cardAnswer;
    cardAnswer3El.innerHTML = newArray[callCardN].fakes.fake2;}
    else if(numberRandom == 3)
{cardAnswer1El.innerHTML = newArray[callCardN].fakes.fake3;
    cardAnswer2El.innerHTML = newArray[callCardN].cardAnswer;
    cardAnswer3El.innerHTML = newArray[callCardN].fakes.fake4;} 
    else if(numberRandom == 4)
{cardAnswer1El.innerHTML = newArray[callCardN].fakes.fake4;
    cardAnswer2El.innerHTML = newArray[callCardN].fakes.fake2;
    cardAnswer3El.innerHTML = newArray[callCardN].cardAnswer;}  
    else {cardAnswer1El.innerHTML = newArray[callCardN].fakes.fake1;
        cardAnswer2El.innerHTML = newArray[callCardN].fakes.fake2;
        cardAnswer3El.innerHTML = newArray[callCardN].cardAnswer}
}

//PONTUACAO

let pontos = 0

const pontuacao = (levelcard) => {if(levelcard == 'facil'){pontos = pontos + 20} 
else if(levelcard == 'medio') {pontos = pontos + 50} else {
    pontos = pontos + 80
} 
{return document.getElementById('pontos').innerHTML = pontos}
};




// console.log(level);
console.log(pontos);

//CHECK ANSWER

let checkClicked = false


document.getElementById('answer1').onclick = function(){if(!checkClicked)
    {if(document.getElementById('answer1').textContent == newArray[callCardN-1].cardAnswer){
    document.getElementById('answer1').style.borderColor = 'green';
    pontuacao(newArray[callCardN-1].level);
}else{  
        document.getElementById('answer1').style.borderColor = 'red'}};
        checkClicked = true
      console.log(pontos)

}


document.getElementById('answer2').onclick = function(){if(!checkClicked)
    {if(document.getElementById('answer2').textContent == newArray[callCardN-1].cardAnswer){
    document.getElementById('answer2').style.borderColor = 'green';
  
    pontuacao(newArray[callCardN-1].level);
}else{
        document.getElementById('answer2').style.borderColor = 'red'}};
        checkClicked = true;
        console.log(pontos)
}

document.getElementById('answer3').onclick = function(){if(!checkClicked)
    {if(document.getElementById('answer3').textContent == newArray[callCardN-1].cardAnswer){
    document.getElementById('answer3').style.borderColor = 'green';
    pontuacao(newArray[callCardN-1].level);
}else{
    document.getElementById('answer3').style.borderColor = 'red'}};
    checkClicked = true;
    console.log(pontos)
}


// #greenCard {color: #c4ff94;}
// #yellowCard {color: #efff94;}
// #blueCard {color: #98c0ff;}

//RESET STYLE
let reset = function(){
    cardAnswer1El.style.borderColor = 'rgb(100, 149, 237)'
    cardAnswer2El.style.borderColor = 'rgb(100, 149, 237)'
    cardAnswer3El.style.borderColor = 'rgb(100, 149, 237)'
    checkClicked = false
}



let restart = function(){
    cardAnswer1El.style.borderColor = 'rgb(100, 149, 237)'
    cardAnswer2El.style.borderColor = 'rgb(100, 149, 237)'
    cardAnswer3El.style.borderColor = 'rgb(100, 149, 237)'
    checkClicked = false
    callCardN = 0;
}



//CHECKS
// console.log(newArray.length)
//console.log(callCardN)
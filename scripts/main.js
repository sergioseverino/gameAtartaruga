//// MENU CONFIGURAÇÃO listeners

const radios = document.getElementsByName('nivelEl');
let levelChose = 'medio';
let levelChoice = '';

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function() {
        (levelChoice) ? levelChoice.value : null;
        if (this !== levelChoice) {
            levelChoice = this;
        }
      return levelChose = levelChoice.value;
 
    });
}


let catAnimais = 'animais';
animais.addEventListener('change', e => {
    e.target.checked ? catAnimais = 'animais' : catAnimais = null;
    console.log(catAnimais);
});


let catLugares = 'lugares';
lugares.addEventListener('change', e => {
    e.target.checked ? catLugares = 'lugares' : catLugares = null;
});

let catCultura = 'cultura';
cultura.addEventListener('change', e => {
    e.target.checked ? catCultura = 'cultura' : catCultura = null ; 
});

let catPaises = 'paises';
paises.addEventListener('change', e => {
    e.target.checked ? catPaises = 'paises' : catPaises = null ;
});




// sound track
// let playSound = true;
// som.addEventListener('change', e => {
//     e.target.checked ? playAudio() : pauseAudio();
// });

// var x = document.getElementById("myAudio"); 

// function playAudio() { 
//   x.play(); 
// } 

// function pauseAudio() { 
//   x.pause(); 
// } 


////////////////////////////

let newCardsArr = data;


function myfilter(array , test){
    let passedTest =[];
    for (let i = 0; i < array.length; i++) {
       if(test( array[i]))
          passedTest.push(array[i]);
    }

    return passedTest;
}

let passedCats = [];
function selectByCategory(){
    passedCats = myfilter(data , function(item){
        return ((item.cardCategory == catAnimais) || (item.cardCategory == catLugares) || (item.cardCategory == catPaises)|| (item.cardCategory == catCultura));   
    });
};

const shuffleCards = () => {
    selectByCategory();
    let cardsByLevel = passedCats.filter(function(holder) {
        return holder.cardLevel == levelChose;
        });
    let newArr = cardsByLevel.sort(function(a, b){return 0.5 - Math.random()});
    
    return newCardsArr = newArr;
 
}

//////////////////// globals

let callCardN = 0;
let cardImgEl = document.getElementById('cardImg');
let cardQuestionEl = document.getElementById('question');
let cardAnswer1El = document.getElementById('answer1');
let cardAnswer2El = document.getElementById('answer2');
let cardAnswer3El = document.getElementById('answer3');

//STYLE CARDS
let categoryColor = function(){if(newCardsArr[callCardN-1].cardCategory == 'animais'){
    mainCard.style.backgroundColor = '#c4ff94'} 
    if(newCardsArr[callCardN-1].cardCategory == 'lugares')
    {mainCard.style.backgroundColor = '#98c0ff'} 
};


// NEXT CARD button
const mainButton = () => {if (checkClicked){
    shuffleCards();
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
        cardsCount()
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
}
// function endGame(){
//     mainCard.style.display = 'none';
//     abertura.style.display = 'none';
//     endGameEl.style.display = 'flex';
//     next.innerHTML = "fim de jogo";
// }

// const answerScramble = 

async function options() {
    let numberRandom = Math.floor(Math.random() * 5);
    if(numberRandom == 1) {
        cardAnswer1El.innerHTML = newCardsArr[callCardN].cardAnswer;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].cardFakes1;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].cardFakes2;}
    else if(numberRandom == 2){
        cardAnswer1El.innerHTML = newCardsArr[callCardN].cardFakes1;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].cardAnswer;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].cardFakes2;}
    else if(numberRandom == 3){
        cardAnswer1El.innerHTML = newCardsArr[callCardN].cardFakes3;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].cardAnswer;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].cardFakes4;} 
    else if(numberRandom == 4){
        cardAnswer1El.innerHTML = newCardsArr[callCardN].cardFakes4;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].cardFakes2;
        cardAnswer3El.innerHTML = newCardsArr[callCardN].cardAnswer;}  
    else {cardAnswer1El.innerHTML = newCardsArr[callCardN].cardFakes1;
        cardAnswer2El.innerHTML = newCardsArr[callCardN].cardFakes2;
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
const cardsCount = () => {cardsCountEl.textContent = `Carta`+ callCardN + `de` + newCardsArr.length}

//CHECK ANSWER

let checkClicked = true

answer1.onclick = function(){if(!checkClicked)
    {if(answer1.textContent == newCardsArr[callCardN-1].cardAnswer){
        answer1.style.borderColor = 'green';
        pontuacao(newCardsArr[callCardN-1].cardLevel);
    }else{  
        answer1.style.borderColor = 'red'}};
        checkClicked = true
    }

answer2.onclick = function(){if(!checkClicked)
    {if(answer2.textContent == newCardsArr[callCardN-1].cardAnswer){
        answer2.style.borderColor = 'green';
        pontuacao(newCardsArr[callCardN-1].cardLevel);
    }else{
        answer2.style.borderColor = 'red'}};
        checkClicked = true; 
    }

answer3.onclick = function(){if(!checkClicked)
    {if(answer3.textContent == newCardsArr[callCardN-1].cardAnswer){
        answer3.style.borderColor = 'green';
        pontuacao(newCardsArr[callCardN-1].cardLevel);
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


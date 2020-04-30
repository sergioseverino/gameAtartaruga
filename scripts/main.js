const cards = 
[
    //cards object start here
       { cardId: 1,
         cardQuestion: 'Que lugar é este?',
         cardAnswer: 'Machu Pichu'	,
         cardImg: './img/img4.jpg',
         cardImgDescription: 'Imagem de um animal',
         cardTip: 'É uma península com muita vida marinha na América do Sul ',
         category:	'lugares',
         level: 'médio',
         fakes: {fake1: 'Aconcagua',
                fake2: 'Estreito de Magalhães',
                fake3: 'Deserto do Atacama',
                fake4: 'Praia Comprida',
            }        
        },
    //card object ends here
        { cardId: 2, 
            cardQuestion: 'Que lugar é este?',
            cardAnswer: 'Epecuen'	,
            cardImg: './img/img6.jpg',
            cardImgDescription: 'Imagem de Montanhas',
            cardTip: 'Conjunto de montanhas no sul da Patagônia',
            category: 'lugares',
            level: 'médio',
            fakes: {fake1: 'Aconcagua',
                   fake2: 'Estreito de Magalhães',
                   fake3: 'Deserto do Atacama',
                   fake4: 'Praia Comprida',
               }        
           },
    //card object ends here
        { cardId : 3,
            cardQuestion: 'Que animal é este?',
            cardAnswer: 'Águia Americana '	,
            cardImg: './img/img1.jpg',
            cardImgDescription: 'Imagem de um animal',
            cardTip: 'É uma península com muita vida marinha na América do Sul ',
            category: 'animais',
            level: 'médio',
            fakes: {fake1: 'Urso de Óculos',
                   fake2: 'Gaivota',
                   fake3: 'Condor',
                   fake4: 'Pelicano',
               }        
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

document.getElementById("next").onclick = function () {nextCardAction()};


//STYLE CARDS
let categoryColor = function(){if(newArray[callCardN-1].category == 'animais'){
    document.getElementById('mainCard').style.backgroundColor = '#c4ff94'} 
    if(newArray[callCardN-1].category == 'lugares'){document.getElementById('mainCard').style.backgroundColor = '#98c0ff'} 
else{console.log('error')};};



// NEXT CARD
async function nextCardAction() {if (callCardN < newArray.length)
{cardImgEl.src = newArray[callCardN].cardImg;
cardQuestionEl.innerHTML = '<h1>'+newArray[callCardN].cardQuestion+ '</h1>';
options();
callCardN = callCardN + 1;
reset();
categoryColor();
document.getElementById('mainCard').style.display = 'grid';
} else {document.getElementById('next').innerHTML = 'End Game';}};

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


//CHECK ANSWER

let checkClicked = false


document.getElementById('answer1').onclick = function(){if(!checkClicked){if(document.getElementById('answer1').textContent == newArray[callCardN-1].cardAnswer){
    document.getElementById('answer1').style.borderColor = 'green'}else{  
        document.getElementById('answer1').style.borderColor = 'red'}};
        checkClicked = true
        console.log(checkClicked)

}

document.getElementById('answer2').onclick = function(){if(!checkClicked){if(document.getElementById('answer2').textContent == newArray[callCardN-1].cardAnswer){
    document.getElementById('answer2').style.borderColor = 'green'}else{
        document.getElementById('answer2').style.borderColor = 'red'}};
        checkClicked = true
}

document.getElementById('answer3').onclick = function(){if(!checkClicked){if(document.getElementById('answer3').textContent == newArray[callCardN-1].cardAnswer){
    document.getElementById('answer3').style.borderColor = 'green'}else{
    document.getElementById('answer3').style.borderColor = 'red'}};
    checkClicked = true
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
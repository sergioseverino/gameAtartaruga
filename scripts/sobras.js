function adcElemento (listaItem) { 
    // cria um novo elemento div 
    // e dá à ele conteúdo
    var divNova = document.createElement("p"); 
    var conteudoNovo = listaItem; 
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada 
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    var divAtual = document.getElementById("btn"); 
    listaCartosEl.insertBefore(divAtual, divNova); 
  }



  <!-- <script type="text/javascript">
  function sendJSON(){
      alert("Sending Json");
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      location.reload()} 

</script> -->



passedCards.forEach(function listfunction(value, key){   
    listaItem = 'name="' + key + '">'+ value.id + ': ' + value.cardLevel ;
    console.log(listaItem)}
, )

};


/////////

// Create an unordered list
var thelist = document.createElement('ul');

// Create a fragement
var fragment = document.createDocumentFragment();

// Create a list item for each wizard
// and append it to the fragment
passedCards.forEach(function (item) {
	var li = document.createElement('li');
	li.textContent = item;
	fragment.appendChild(li);
});

// Append the fragement to the list
thelist.appendChild(fragment);


var app = document.querySelector('listadosCartoes');
app.appendChild(thelist);



/////////


async function selectByImg(){
    passedCards = myfilterCard(data , function(item){
        return (item.cardImg == cardX.value)});

    passedCards.forEach(function listfunction(value, key){   
        listaItem = 'name="' + key + '">'+ value.id + ': ' + value.cardLevel ;
        console.log(listaItem);
        
    }, )

};

var app = document.querySelector('#app');
app.appendChild(list);


///////////

///////////


let passedCards = [];
let cardX = document.getElementById('formCaminhoImagem');

var thelist = document.createElement('ul');
var fragment = document.createDocumentFragment();

function selectByImg(){if(passedCards.length > 0){ listadosCartoes.textContent = 'Sem cartoes para essa IMG'}
    else {
        let cardsData = data
        passedCards = myfilterCard(cardsData, function(item){
        return (item.cardImg == cardX.value)});
        generatelist()}
   }

function generatelist () {
    passedCards.forEach(function listfunction(value, key){  
    listaItem = key + ' -- '+ value.cardLevel + ' -- '+ value.cardCategory;
    let criali = document.createElement('li') 
    criali.append(listaItem)

    console.log(criali);
        return  thelist.append(criali); 
        
    }, )
    listadosCartoes.append(thelist)
    console.log(listadosCartoes)};

    


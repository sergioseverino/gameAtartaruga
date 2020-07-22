imagemForm = document.getElementById('imagemFormEl');
callerNum = 0;

const avancarImg = () =>{
    removeLi()
    callerNum = callerNum + 1;
    imagemForm.src = (`./img/img`+ callerNum + `_low.jpg`)
    myform.reset();
    document.getElementById('formCaminhoImagem').value = (`./img/img`+ callerNum + `_low.jpg`)
    selectByImg()  
    };

const voltarImg = () =>{ callerNum = callerNum - 1;
    removeLi()
    imagemForm.src = (`./img/img`+ callerNum + `_low.jpg`)
    myform.reset();
    document.getElementById('formCaminhoImagem').value = (`./img/img`+ callerNum + `_low.jpg`)
    selectByImg()
    };

formNumeroImg.addEventListener('change', doThing);

function doThing(){
    
    imagemForm.src = (`./img/img`+ formNumeroImg.value + `_low.jpg`);
    document.getElementById('formCaminhoImagem').value = (`./img/img`+ formNumeroImg.value + `_low.jpg`);
    callerNum = parseInt(formNumeroImg.value);
    console.log(callerNum , formNumeroImg.value)
    formNumeroImg.value = null;
    selectByImg()
    myform.reset();
    
};


function carregaCartao(x){
    let codigoId = parseInt(x) - 1
    data[codigoId] ? populate(myform, data[codigoId]) : myform.reset()     
            removeLi()
            imagemForm.src = data[codigoId].cardImg
            selectByImg()
};

function populate(form, data) {
	for (var key in data) {
		if (! data.hasOwnProperty(key)) {
			continue;
		}

		var name = key;
		var value = data[key];

        if ('undefined' === typeof value) {
            value = '';
        }

        if (null === value) {
            value = '';
        }

		// handle array name attributes
		if (typeof(basename) !== "undefined") {
			name = basename + "[" + key + "]";
		}

		if (value.constructor === Array) {
			name += '[]';
		} else if(typeof value == "object") {
			populate(form, value, name);
			continue;
		}

		// only proceed if element is set
		var element = form.elements.namedItem(name);
		if (! element) {
			continue;
		}

		var type = element.type || element[0].type;

		switch(type ) {
			default:
				element.value = value;
				break;

			case 'radio':
			case 'checkbox':
				var values = value.constructor === Array ? value : [value];
				for (var j=0; j < element.length; j++) {
					element[j].checked = values.indexOf(element[j].value) > -1;
				}
				break;

			case 'select-multiple':
				var values = value.constructor === Array ? value : [value];
				for(var k = 0; k < element.options.length; k++) {
					element.options[k].selected = (values.indexOf(element.options[k].value) > -1 );
				}
				break;

			case 'select':
			case 'select-one':
				element.value = value.toString() || value;
				break;

			case 'date':
      			element.value = new Date(value).toISOString().split('T')[0];	
				break;
		}

	}
};

function myfilterCard(array , test){
    let passedTest =[];
    for (let i = 0; i < array.length; i++) {
       if(test( array[i]))
          passedTest.push(array[i]);
    }
    return passedTest;
}

let passedCards = [];
let cardX = document.getElementById('formCaminhoImagem');
let thelist = document.createElement('div');


function selectByImg(){ 
    let cardsData = data
    passedCards = myfilterCard(cardsData, function(item){
        return (item.cardImg == cardX.value)});
        generatelist()
        }


function generatelist () {
    passedCards.forEach(function listfunction(value, key){  
            // const verCard = document.createElement('<button>')
            let atribibtn = document.createAttribute('onclick')
            atribibtn.value = `carregaCartao(${value.id})`
            listaItem = value.id + ' -- '+ value.cardLevel + ' -- '+ value.cardCategory;
            let criali = document.createElement('li') 
            criali.setAttributeNode(atribibtn)
            criali.append(listaItem)
            return  thelist.append(criali);
            }, )
    let atribli = document.createAttribute("id")
    atribli.value = 'tempLi'
    thelist.setAttributeNode(atribli)
    listadosCartoes.append(thelist)};


function removeLi () {
    if(tempLi != null) {
        let getLi = document.getElementById('tempLi')
        getLi.remove()
        thelist = document.createElement('div')} 
}



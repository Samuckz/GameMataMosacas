var widthScreen
var heightScreen
var positionX
var positionY
var vidas = 1
var timer  = 100
var velocity = 1500
var level = window.location.search
level = level.replace('?', '')

if(level === 'normal'){
	velocity = 1500
}

else if(level === 'dificil'){
	velocity = 1000
}

else if(level === 'extremo'){
	velocity = 750
}

var cronometro = setInterval(function(){
	timer -= 1

	if(timer < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}

	else{
		document.getElementById('cronometro').innerHTML = timer // o valor contido entre as tags
	}
	
	
}, 1000)

function espacoMaximo(){
	widthScreen = window.innerWidth
	heightScreen = window.innerHeight
}

espacoMaximo()



// === DEFININDO TAMANHO DA MOSCA ===
function tamanhoMosca(){
	var x = Math.floor(Math.random()*3)
	
	switch(x){
	 case 0:
	 	return 'moscaPequena'

	 case 1:
	 	return 'moscaMedia'

	 case 2:
	 	return 'moscaGrande'
	}

}

function sideMosca(){
	var y = Math.floor(Math.random()*2)

	switch(y){
	 case 0:
	 	return 'leftSide'

	 case 1:
	 	return 'rightSide'
	} 


}




function posicaoAleatoria(){

	if(document.getElementById('mosca')){
		document.getElementById('mosca').remove()

		if(vidas > 3){
			window.location.href = 'game_over.html'

		}

		document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

		vidas ++


	}
	
	posicaoX = Math.floor(Math.random()*widthScreen) - 70
	posicaoY = Math.floor(Math.random()*heightScreen) - 70

	if(posicaoX < 0){
		posicaoX = 0
	}

	else if (posicaoX > 0 && posicaoX <= 245) {
		posicaoX = 335
	}

	if(posicaoY < 0){
		posicaoY = 0
	}

	else if (posicaoY > 0 && posicaoY <= 95) {
		posicaoY = 185
	}

	console.log(posicaoY, posicaoX)

	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoMosca() + ' ' + sideMosca()
	mosca.style.left = posicaoX + "px"
	mosca.style.top = posicaoY + "px"
	mosca.style.position = "absolute"
	mosca.id = 'mosca'
	

	mosca.onclick = function(){
		this.remove()
	}



	document.body.appendChild(mosca)

	setInterval(mosquito.remove(), 2000)

}





let slideImage = document.getElementsByClassName('slide-img');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let numSide = 0;
function nextSlide(n){
	numSide++;
	if(numSide >= slideImage.length){
		numSide=0;
	}
	showSildeImage(numSide);
}
function prevSlide(n){
	numSide--;
	if(numSide<0){
		numSide = slideImage.length-1;
	}
	showSildeImage(numSide);
}
window.addEventListener("load", function autoShowSlide(){
	for (var i=0; i<slideImage.length; i++){
		slideImage[i].style.display = "none";
	}
	numSide++;
	if (numSide>slideImage.length){
		numSide=1;
	}
	slideImage[numSide-1].style.display = "block";
	setTimeout(autoShowSlide,4000);
});
function showSildeImage (n){
	for (var i=0; i<slideImage.length; i++){
		slideImage[i].style.display ="none";
	}
	slideImage[n].style.display ="block";
}
window.addEventListener("load", function ready(){
	let message =  document.querySelector('.comforts-message');
	let closeMessage = document.querySelector(".chat-message-header");
	var chatMessage = document.querySelector('.chat-message');

	message.addEventListener('click', function openChat(){	
		chatMessage.style.display="block";
		//chatMessage.classList.add('chat-message-active');
	});

	closeMessage.addEventListener('click', function closechat(){	
		chatMessage.style.display="none";
	})
});

// tab create, login
let pActive = document.querySelectorAll('.tab-button .tab-submit p');
let tabPanelContact = document.querySelectorAll(".tab-panel-contact");
function showPanel(panelIndex) {
	tabPanelContact.forEach(function(node) {
		node.style.display = "none";
	});
	tabPanelContact[panelIndex].style.display = "block";
}
showPanel(0);
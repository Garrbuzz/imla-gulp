// slider
var slideIndex=1;
function showSlide(slideInd, sliderClass){
	let classImg = '.slide-' + sliderClass 
	+ ' img';
	let coverClass = '.slider-cover-' + sliderClass;
	let galleryClass = '.photo-gallery-' + sliderClass;
	let slides = document.querySelectorAll(classImg);
	let i = 0;
		for (i=0; i<(slides.length); i++){
			slides[i].classList.remove('showed');
			slides[i].classList.add('hide');
		}
	console.log('clear ');
	console.log(slides);	
	
	slides[slideInd].classList.remove('hide');
	slides[slideInd].classList.add('showed');
    
	let cover = document.querySelector(coverClass);
	let gallery = document.querySelector(galleryClass);
	let butClass = '.but-' + sliderClass;
	let sliderButtons = document.querySelectorAll(butClass);
	let slider = new Slider(slides, slideInd, sliderButtons, cover, gallery);
	cover.style.display = "block";
	gallery.style.display = "none";	
	

	function Slider(images, currentIndex, buttons, cover, gallery){
		let i = currentIndex;
		console.log(images);
		buttons[1].onclick = function(){
			images[i].classList.remove("showed");
			images[i].classList.add('hide');
			console.log('i prev = '+i);
			
			if (i >(images.length-2)){
				i = 0;
			} else {
				i++
			}
			console.log('i next = '+i);
			images[i].classList.add('showed');
			images[i].classList.remove("hide");
			console.log(images);
		}
		buttons[0].onclick = function(){
			images[i].classList.remove("showed");
			images[i].classList.add('hide');
			console.log('i prev = '+i);
			
			if (i <1){
				i = images.length-2;
			} else {
				i--;
			}
			console.log('i next = '+i);
			images[i].classList.add('showed');
			images[i].classList.remove("hide");
			console.log(images);
		}
		document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    	if (evt.keyCode == 27) {
	    		cover.style.display = "none";
				gallery.style.display = "block";	
			}

		}	
	}
	
}
// end slider
// modal window 
function openModal(){
	let mw = document.getElementById("modalFeedback");
	mw.style.display = "block";
	console.log(mw);
	document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    if (evt.keyCode == 27) {
		    document.getElementById("modalFeedback").style.display = "none";
		}
    }
}
function closeModal(){
	let mw = document.getElementById("modalFeedback");
	mw.style.display = "none";
}
// end modal window 

// send message
function sendMessage(){
  var patternEmail=/\w+@\w+\.\w+/;
  var data = document.querySelectorAll('.feedback input');
  var name = data[0].value;
  var email = data[1].value;
  var text = document.querySelector('textarea');
  console.log("ім'я: " + name  + 'мейл: ' + email + '  ' + text.value);

  

//   if (!patternEmail.test(userMail)){
//     alert('Невірний формат адреси електронної пошти');

//    };

  var body = "userName=" + encodeURIComponent(name) + "&userMail=" + encodeURIComponent(email) + "&messageText=" + encodeURIComponent(text.value);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../php/sendmessage.php", true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(body);
  xhr.onreadystatechange = function(){
    if (xhr.readyState===4) {
      var result = JSON.parse(xhr.responseText);
      console.log(result);
   	}

  };
// location.reload();
  

}
//end send message


// modal window
function modalWindow () {
	this.modal=document.querySelector('.modal');
	this.overlay=document.querySelector('.overlay');
	var popup = this;
	popup.open=function(content){
		popup.modal.innerHTML = content;
		popup.overlay.classList.add('visible');
		popup.modal.classList.add('visible');
	}
	popup.close=function(){
		popup.overlay.classList.remove('visible');
		popup.modal.classList.remove('visible');
	}
	popup.overlay.onclick = popup.close;

}

// end modal window

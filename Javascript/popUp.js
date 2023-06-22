window.onload = () =>{
	let sub = document.getElementById('sub');
	sub.addEventListener('submit',function(e){
		let email = document.getElementById('email');
		if(email.value==''){
			e.preventDefault();
			let invalid = document.getElementById('invalid');
			invalid.innerHTML="Veuillez entrez votre Email!";

		}
		else{
			e.preventDefault();
			document.getElementById('popup').style.display ='block';
		}
		
	});
}
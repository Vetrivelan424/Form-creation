
    const form=document.getElementById("form1");
	const firstname=document.getElementById("firstname");
    const lastname=document.getElementById("lastname");
	const email=document.getElementById("email");
	const phno=document.getElementById("phno");
	const dob=document.getElementById("dob");
	const password=document.getElementById("password");
	const password1=document.getElementById("password1");
	
	form.addEventListener('submit', e =>{
		e.preventDefault();
		checkInput();
		checkalert();
		
	});
	function checkInput(){
		const firstnameValue=firstname.value.trim();
			const lastnameValue=lastname.value.trim();

		const emailValue=email.value.trim();
				

		const phnoValue=phno.value.trim();

		const dobValue=dob.value;
		const passwordValue=password.value.trim();
		const password1Value=password1.value.trim();
		if(firstnameValue===''){
			setError(firstname,'firstname cant be Blank');
		}
		else{
			setSuccess(firstname);
		}
		if(lastnameValue===''){
			setError(lastname,"firstname can't be Blank");
		}
		else{
			setSuccess(lastname);
		}
		if(phnoValue===''){
			setError(phno,"Ph-No can't be Blank");
		}
		else{
			setSuccess(phno);
		}
		if(dobValue===''){
			setError(dob,"firstname can't be Blank");
		}
		else{
			setSuccess(dob);
		}

		if(emailValue===''){
			setError(email,"email can't be Blank");
		}
		// else if(!isValidEmail(emailValue)){
		// 	setError(email,"email can't be Blank");


		// }
		else{
			setSuccess(email);
		}
		if(passwordValue===''){
			setError(password,"password can't be Blank");
		}
		else{
			setSuccess(password);
		}
		if(password1Value===''){
			setError(password1,"confirm password can't be Blank");
		}
		else if(passwordValue!==password1Value){
			setError(password1,"password does not match");
		}
		else{
			setSuccess(password1);
		}
if(dobValue===''){
			setError(dob,"DOB can't be Blank");
		}
		else{
			setSuccess(dob);
		}


	
}

function setError(input,message){
	const formContro=input.parentElement;
	const small=formContro.querySelector('small');
	formContro.className='form-contro error';
	small.innerText= message;
	swal({
		title: "Invalid Input",
		text: "plaese enter a valid input",
		icon: "warning",
		button: "OK",
	  });
	
}
function setSuccess(input){
    const formContro=input.parentElement;
    formContro.className='form-contro success';
	swal({
  title: "Good job!",
  text: "Thank You !",
  icon: "success",
  button: "Ok",
  
});
}

// function isValidEmail(email) {
// 	const re = [a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?
    
// 	return re. test(String(email). toLowerCase());
// }


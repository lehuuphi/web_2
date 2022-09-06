let usename = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let Confirm_password = document.querySelector('#Confirm-password')
let form= document.querySelector('form')

function showError(input , message){
 let  parent = input.parentElement;
 let small = parent.querySelector('small')

parent.classList.add('error')
small.innerText = message ;
}

function CheckEmptyError(listinput){
 let isEmptyError = false;
 listinput.forEach(input=> {
	input.value = input.value.trim()

	if(!input.value){
		isEmptyError = true;
		showError(input,"không được bỏ trống")	}
		else{
			showSuccess(input)
		}
 });

 return isEmptyError
}





function showSuccess(input){
	let  parent = input.parentElement;
	let small = parent.querySelector('small')
   
   parent.classList.add('error')
   small.innerText = '' ;
   }



   function checklengthError(input,min,max){
	input.value = input.value.trim()
	if(input.value.length < min ){
          showError(input,`phải có ít nhất ${min} ký tự`)
		  return true
	}
	if(input.value.length > max ){
		showError(input,`không được quá ${max} ký tự`)
		return true
  }
  showSuccess(input)
  return false
   }


   form.addEventListener("submit" , (e)=>{
	e.preventDefault()
	let isEmptyError = CheckEmptyError([usename,email,password,Confirm_password])
	let isUsenamelength= checklengthError(usename ,5,10)
	let isPaswordlength= checklengthError(password ,5,10)
	
   });


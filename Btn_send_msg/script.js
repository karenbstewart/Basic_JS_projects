const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg (){
	let content = messageIn.value;
	//console.log(content); this line show what the content of messageIn text is
	if(content == ''){
		alert('Please Enter a Valid Value. Current Value is Empty')
	}else{
		messageOut.innerHTML = content;
		messageIn.value = '';
	}
			
}
























console.log(" content script working");

document.body.appendChild(document.createTextNode('hello this is my first content scripts'));
 
// message send in background js

chrome.runtime.sendMessage('hello background',(responce)=>{
  console.log(responce);
})


//message recive in background js 

chrome.runtime.onMessage.addListener((message,sender,sendResponce)=>{
  console.log(message);
  console.log(sender);
  sendResponce('recived background')
})


console.log("working");

document.body.appendChild(document.createTextNode('hello this is my first content scripts'));
 
chrome.runtime.sendMessage('hello background',(responce)=>{
  console.log(responce);
})
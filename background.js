
chrome.tabs.onActivated.addListener((tabs)=>{

    console.log(tabs)

    chrome.tabs.get(tabs.tabId, function(tab) {
        
    if(tab.url == 'https://www.google.com/')
    {
    //    message send in background js
            chrome.tabs.sendMessage(tabs.tabId,'i am injected in your tab',(responce)=>{
                console.log(responce);
            })
     
    }
    })
})

// message recive in contentjs 

chrome.runtime.onMessage.addListener((message,sender,sendResponce)=>{
    console.log(message);
    console.log(sender);
    sendResponce('welcom content')
    
})

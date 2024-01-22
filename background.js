console.log("hello buddy");

chrome.tabs.onActivated.addListener((tabs)=>{

    console.log(tabs)

    chrome.tabs.get(tabs.tabId, function(tab) {
        
    if(tab.url == 'chrome://extensions/')
    {
        chrome.scripting.executeScript({
            target:{tabId:tab.id},
            file:['contentScript.js']
        })
    }

    })
})


chrome.runtime.onMessage.addListener((message,sender,sendResponce)=>{
    console.log(message);
    console.log(sender);

    sendResponce('come from background')
    
})
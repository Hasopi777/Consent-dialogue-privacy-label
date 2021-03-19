// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         if(/^https:\/\/www\.google/.test(current_tab_info.url)){
//             chrome.tabs.insertCSS(null, {file: './css/background.css'});
//             chrome.tabs.executeScript(null, {file: './foreground.js'}, () =>console.log('injected'));
//         }
//     })
// })

chrome.tabs.query({active: true, windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
    document.getElementById("currentUrl").innerHTML = (tabs[0].url);
});

document.getElementById("cdDetection").innerHTML = "<p>No consent dialogue was detected</p>"


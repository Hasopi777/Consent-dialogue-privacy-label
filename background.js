// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         if(/^https:\/\/www\.google/.test(current_tab_info.url)){
//             chrome.tabs.insertCSS(null, {file: './background.css'});
//             chrome.tabs.executeScript(null, {file: './foreground.js'}, () =>console.log('injected'));
//         }
//     })
// })

document.getElementById("cdDetection").innerHTML = "<p>No consent dialogue was detected</p>"
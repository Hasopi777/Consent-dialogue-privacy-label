
window.onload = function(){
    console.log('lmaos');
    document.querySelector('#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button:nth-child(2)').click();
    
    // window.addEventListener('DOMContentLoaded', start);
    setTimeout(scrollSelect, 3000);
    
}


function scrollSelect(){
    console.log('opop');
    console.log(document.querySelector('#qc-cmp2-ui > div.qc-cmp2-scrollable-section').querySelectorAll('li.qc-cmp2-list-item '));
    console.log('asdf')

    var scrollSection = document.querySelector('#qc-cmp2-ui > div.qc-cmp2-scrollable-section').querySelectorAll('li.qc-cmp2-list-item ');
    console.log(scrollSection);

    chrome.storage.sync.get(function(state){
        console.log(JSON.stringify(state));
        console.log(state);
        var matchedKeys = [];
        for(var key in state.options){
            console.log(key);
            if(state.options[key] == true){
                for(let i = 0; i < scrollSection.length; i++){
                    let item = scrollSection[i].innerText;
                    console.log(item)
                    var match = item.includes(key);
                    console.log(match);

                    if(match == true){
                        if(!matchedKeys.includes(key)){
                            matchedKeys.push(key);
                        }//if key doesnt exists in array, push it
                        scrollSection[i].style.backgroundColor = "#FF4433";
                    }
                }
            }
        }
        chrome.storage.sync.set({
            match: matchedKeys
        })
        console.log(matchedKeys);

        // chrome.runtime.sendMessage({
        //     action: 'updateIcon',
        //     value: false
        // });
    })
    
}

// function highlightDiv(){
//     console.log('started');
//     // var div = document.querySelector('#qc-cmp2-ui > div.qc-cmp2-scrollable-section').querySelectorAll('li.qc-cmp2-list-item ');
//     var div = document.querySelector("#qc-cmp2-ui > div.qc-cmp2-scrollable-section").querySelector('li.qc-cmp2-list-item ');
//     console.log('middle')
//     var colour = "yellow";
//     div.style.backgroundColor = colour;
//     console.log('changed')
// }

function removeHighlight(){
    var div = document.querySelector("#qc-cmp2-ui > div.qc-cmp2-footer > div.qc-cmp2-buttons-desktop > button.css-flk0bs");
    div.style.backgroundColor = "transparent";
    div.style.color = "blue";
}

function highlightBtn(){
    var div = document.querySelector("#qc-cmp2-ui > div.qc-cmp2-footer > div.qc-cmp2-buttons-desktop > button.css-14v0a5j")
    div.style.backgroundColor = "#90ee90";
}

setTimeout(removeHighlight,5000);
setTimeout(highlightBtn,5000);
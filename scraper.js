
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

    
    // for(let i = 0; i < scrollSection.length; i++){
    //     let item = scrollSection[i];
    //     console.log(item.innerText);
        
    // }
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
                    }
                }
            }
        }
        chrome.storage.sync.set({
            match: matchedKeys
        })
        console.log(matchedKeys);

    })
}

// chrome.storage.sync.get(function(result){
//     console.log(JSON.stringify(result));
//     for(var key in result){
//         console.log(key);
//         for(let i = 0; i < scrollSection.length; i++){
//             let item = scrollSection[i].innerText;
//             console.log(item)
            
//         }
//     }
// })

// chrome.storage.sync.get(function(result) {
//     console.log(JSON.stringify(result));
//     for(var key in result){
//         // console.log(key);
//         // console.log(result[key]);
//         if(result[key] == true){
//             console.log('hi')
//             // document.getElementById("rectangles").innerHTML = "<p>hii</p>"
            
//             var node = document.createElement("LI");
//             var textNode = document.createTextNode(key);
//             node.appendChild(textNode);
//             document.getElementById("rectangles").appendChild(node);
//         }else{
//             console.log('bye');
//         }
//     }
// });





// console.log(window.document.querySelector('#qc-cmp2-ui > div.qc-cmp2-scrollable-section').innerText);
// #qc-cmp2-ui > div.qc-cmp2-scrollable-section > ul



// function clickMoreOptionsBtn(){
//     window.document.querySelector('#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button:nth-child(2)').click();
//     console.log(window.document.body.querySelector('#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button:nth-child(2)'));
// }

// clickMoreOptionsBtn();

// // function scrapeScrollableSection(){
// //     console.log(window.document.querySelector('#qc-cmp2-ui > div.qc-cmp2-scrollable-section'));
// // }

// scrapeScrollableSection();
// console.log(window.document.querySelector('#qc-cmp2-ui > div.qc-cmp2-scrollable-section').innerText);

//document.querySelector('#qc-cmp2-ui > div.qc-cmp2-scrollable-section').querySelectorAll('li.qc-cmp2-list-item ')
//document.querySelector('#qc-cmp2-ui > div.qc-cmp2-scrollable-section')


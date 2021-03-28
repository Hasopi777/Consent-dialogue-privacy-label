//JS code that will execute whe nth epage laods. After page is loaded, 
//you can manipulate the contenets and behaviour of the page

console.log("extension brr");

chrome.storage.sync.get(console.log);

chrome.storage.sync.get(function(result) {
    console.log(JSON.stringify(result));
    for(var key in result){
        // console.log(key);
        // console.log(result[key]);
        if(result[key] == true){
            console.log('hi')
            // document.getElementById("rectangles").innerHTML = "<p>hii</p>"
            
            var node = document.createElement("LI");
            var textNode = document.createTextNode(key);
            node.appendChild(textNode);
            document.getElementById("rectangles").appendChild(node);
        }else{
            console.log('bye');
        }
    }
});

document.getElementById("goToOptions").addEventListener("click", optionsBtn);

function optionsBtn(){
        chrome.tabs.create({'url': "/options.html" } )
}


// var optionsUrl = chrome.extension.getURL("options.html"); 
// var content = '<a href="' + optionsUrl + '" target="_blank">Options</a>';

// document.querySelector('#goToOptions').addEventListener(function(){
//     if(chrome.runtime.openOptionsPage){
//         chrome.runtime.openOptionsPage();
//     }else{
//         window.open(chrome.runtime.getURL('options.html'));
//     }
// });
//if true value, make square




// const users = {
//     LG4u9Uth8JfaVuSBc2y: true, // active
//     LG4u9OJv5yD6dUqth9V: false, // inactive
//     LG4u9vP9xjwHJm8PezV: true // active
//     // ... more ...
// }
// console.log(users);


// for (var key in users) {
//     if (users.hasOwnProperty(key)) {
//         console.log(key + " -> " + users[key]);
//         if(users[key] == true){
//             console.log('true');
//             console.log(key);
//         }else{
//             console.log('false');
//         }
//     }
    
// }










// let count = 0;
// for (var c in users){
//     count = count + 1;
// }
// console.log(count);
// var array = Object.keys(users).map((key) => [Number(key), users[key]]);
// console.log(array);

// const count = array.filter(Boolean).length;

// console.log(count);

// const identifiers = Object.keys(users)
// const active = identifiers.filter(function(id){
//     return(users[id])
// })
// console.log(active);




// let array = [];


// chrome.storage.sync.get(['key'], function(result) {
//     var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
//     console.log(result);
// });

// console.log(array);

//scan through the object
//see what is true
//if value = true {






// const objectMap = (obj, fn) => 
//     Object.fromEntries(
//         Object.entries(obj).map(
//             ([k, v], i) => [k, fn(v,k,i)]
//         )
//     )
// // const myObject = chrome.storage.sync.get()

// console.log(objectMap(myObject, v => 2 * v)) 
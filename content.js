//JS code that will execute whe nth epage laods. After page is loaded, 
//you can manipulate the contenets and behaviour of the page

console.log("extension brr");

chrome.storage.sync.get(console.log);

chrome.storage.sync.get(function(state) {
    console.log(JSON.stringify(state));
    for(var key in state.options){
        // console.log(key);
        // console.log(result[key]);
        if(state.options[key] == true){
            console.log('hi')
            // document.getElementById("rectangles").innerHTML = "<p>hii</p>"
            var colour = state.match.includes(key) ? "red" : "green"
            var node = document.createElement("LI");
            var textNode = document.createTextNode(key);
            node.style.backgroundColor = colour;
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

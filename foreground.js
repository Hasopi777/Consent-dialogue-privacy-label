// document.querySelector('#hplogo img').classList.add('btnHighlighter')

// css-14v0a5j

// var target = document.querySelector("#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button:nth-child(2)");
// target.classList.add('btnHighlighter');

// document.querySelector("p.qc-cmp2-list-item-title").classList.add('btnHighlighter');

var geoText = document.querySelector("p.qc-cmp2-list-item-title".innerText);
highlight(geoText);

function highlight(text){
    var inputText = document.querySelector("p.qc-cmp2-list-item-title");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0){
        innerHTML = innerHTML.substring(0,index) = "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML;
    }
}
//saves options to chrome.storage
function saveOptions(){
    var location = document.getElementById('location-opt').checked;
    var advertisement = document.getElementById('perAdv-opt').checked;
    var scan = document.getElementById('scan-opt').checked;
    var store = document.getElementById('store-opt').checked;
    var identification = document.getElementById('identification-opt').checked;
    
    var state = {
        options: {
            location: location,
            advertisement: advertisement,
            scan: scan,
            store: store,
            identification: identification
        },
        match: [],

    }
//set object elements as list of keywords

    chrome.storage.sync.set(state, function() {
        //lets user know that their options were saved
        var status = document.getElementById('status');
        status.textContent = 'Options saved';
        setTimeout(function(){
            status.textContent='';
        }, 750);
    });
    
}

document.getElementById('save').addEventListener('click',saveOptions);



console.log('hi');

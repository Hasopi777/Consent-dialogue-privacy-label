//saves options to chrome.storage
function saveOptions(){
    var location = document.getElementById('location-opt').checked;
    var advertisement = document.getElementById('perAdv-opt').checked;
    var scan = document.getElementById('scan-opt').checked;
    var store = document.getElementById('store-opt').checked;
    var identification = document.getElementById('identification-opt').checked;
    
    chrome.storage.sync.set({
        location: location,
        advertisement: advertisement,
        scan: scan,
        store: store,
        identification: identification
    }, function() {
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

// Author: Mohammed Mahmuud M.
// Date(dd-mm-yy): 02-01-2022
// Description: A background script that adds a dictionary definition to the context menu

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "dictionary",
      title: "Look up '%s' in the dictionary",
      contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "dictionary") {
      // Get the selected word
      var selectedText = info.selectionText;
  
      // Request to a server(in this case the local-server)
      fetch('http://localhost:3000/api?selectedText=' + selectedText)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Display the definition in an alert
          alert(data[0].shortdef[0]);
        });
    }
});
  
  
  
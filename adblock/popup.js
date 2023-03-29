// Function to send a message to the content script
function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
  
  // Add a click event listener to the "Block Ads" button
  document.getElementById("block-ads").addEventListener("click", function() {
    sendMessageToContentScript({ command: "blockAds" });
  });
  
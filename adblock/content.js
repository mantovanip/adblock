// Function to block ads
function blockAds() {
    // Get all the ads on the page
    var ads = document.querySelectorAll("div[class*='ad']");
  
    // Hide each ad
    for (var i = 0; i < ads.length; i++) {
      ads[i].style.display = "none";
    }
  }
  
  // Add a message listener to receive messages from the popup
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command == "blockAds") {
      blockAds();
    }
  });
  
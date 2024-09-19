document.getElementById('fetchTitle').addEventListener('click', () => {
  // Get the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    const title = activeTab.title;
    
    // Display the tab's title in the popup
    document.getElementById('title').innerText = `Tab Title: ${title}`;
  });
});
document.querySelector('.close-btn').addEventListener('click', () => {
  window.close(); // Close the popup window
});
 
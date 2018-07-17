var windowObjectReference = null;

function openWindow(){
  if(windowObjectReference == null || windowObjectReference.closed){
    windowObjectReference = window.open(navigator.onLine ? 'https://taskontable.com/' : 'offline.html' , 'Taskontable', 'resizable,scrollbars,status');
  }else{
    windowObjectReference.focus();
  };
}

chrome.browserAction.onClicked.addListener(function() {
  openWindow();
});

chrome.runtime.onStartup.addListener(function() {
  openWindow();
});
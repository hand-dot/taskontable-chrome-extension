var windowObjectReference = null;

function openWindow(){
  if(windowObjectReference === null || windowObjectReference.closed){
    windowObjectReference = window.open(navigator.onLine ? 'https://taskontable.com/' : 'offline.html' , 'Taskontable', 'resizable,scrollbars,status');
  }else{
    windowObjectReference.focus();
  };
}

chrome.runtime.onInstalled.addListener(openWindow);

chrome.browserAction.onClicked.addListener(openWindow);

chrome.runtime.onStartup.addListener(openWindow);
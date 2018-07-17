function init() {
    setInterval(function(){
        if(navigator.onLine) location.href = 'https://taskontable.com/';
    }, 3000);
}
window.addEventListener('load', init);
function clickCounter() {
    if (typeof (Storage) !== 'undefined') {
        if (localStorage.clickCount) {
            localStorage.clickCount++;
        } else {
            localStorage.clickCount = 1;
        }
        document.getElementById("result").innerHTML = localStorage.clickCount;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

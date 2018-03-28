var typing = document.querySelector('.typing'),
    currentIndex = 0;

var startTyping = function (text) {
    var interval = setInterval(function () {
        if (text.length > currentIndex) {
            typing.textContent += text[currentIndex];
            currentIndex++;
        } else {
            clearInterval(interval);
        }
    }, 100);
};
startTyping("My Portfolio");

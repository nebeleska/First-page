window.onscroll = function () {
    var top = document.body.scrollTop + document.documentElement.scrollTop == 0;
    document.getElementById('top-up').style.display = top ? 'block' : 'none';
    document.getElementById('top-up').style.display = top ? 'none' : 'block';
};

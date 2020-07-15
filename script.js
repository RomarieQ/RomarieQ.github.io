window.addEventListener('scroll', function(e) {

    const target = document.querySelectorAll('.scroll');

    var scrolled = window.pageYOffset;

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    }
});

window.addEventListener('scroll', function(e) {
    const target = document.querySelector('#o');

    target.style.color = '#F68D2E';
})
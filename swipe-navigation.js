let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
    if (touchendX < touchstartX) navigateForward();
    if (touchendX > touchstartX) navigateBackward();
}

function navigateForward() {
    document.body.classList.add('swiping-left');
    setTimeout(() => {
        window.history.forward();
        document.body.classList.remove('swiping-left');
    }, 300);
}

function navigateBackward() {
    document.body.classList.add('swiping-right');
    setTimeout(() => {
        window.history.back();
        document.body.classList.remove('swiping-right');
    }, 300);
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchmove', e => {
    const currentX = e.changedTouches[0].screenX;
    if (currentX < touchstartX) {
        document.body.classList.add('swiping-left');
    } else if (currentX > touchstartX) {
        document.body.classList.add('swiping-right');
    }
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    document.body.classList.remove('swiping-left', 'swiping-right');
    checkDirection();
});
let train = document.getElementById('train');
let isMoving = false;
let animationFrame;

function startTrain() {
    if (!isMoving) {
        isMoving = true;
        moveTrain();
    }
}

function stopTrain() {
    isMoving = false;
    cancelAnimationFrame(animationFrame);
}

function moveTrain() {
    let trainPosition = train.offsetLeft;
    train.style.left = `${trainPosition + 2}px`;

    if (train.offsetLeft + train.clientWidth > window.innerWidth) {
        train.style.left = '-200px';
    }

    if (isMoving) {
        animationFrame = requestAnimationFrame(moveTrain);
    }
}

player = document.querySelector('.runner.player4')
var position = -100

function keyDown(e){

    if(e.key == 'D' || e.key == 'd'){
        position=position+50
        console.log(position);
        document.getElementById('player').style.left = `${position}px`
    }
    if(e.key == 'A' || e.key == 'a'){
        paddle.dx = -paddle.speed
    }
}

document.addEventListener('keydown', keyDown)
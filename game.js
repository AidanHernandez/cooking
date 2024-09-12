player = document.querySelector('.player4')
bot = document.getElementById('bot')
var player_position = -100
var bot_position = -100
var keypressed = false

function easy(){
    bot_position=bot_position+50
    document.getElementById('bot').style.left = `${bot_position}px`
}

function keyDown(e){
    if(keypressed == false)
    {
        if(e.key == 'D' || e.key == 'd'){
            player_position=player_position+50
            console.log(player_position);
            document.getElementById('player').style.left = `${player_position}px`
            keypressed = true
        }
    }
}

function keyUp(e){
    if(keypressed == true)
    {
        if(e.key == 'D' || e.key == 'd'){
            document.getElementById('player').style.left = `${player_position}px`
            keypressed = false
        }
    }
}

function screen_change(){
    document.body.style.backgroundImage = "url('img/final_track_nstart.png')";
    player_position = -100
    document.getElementById('player').style.left = `${player_position}px`
}

function isElementAtEndOfScreen() {
    const rect = player.getBoundingClientRect();
    return rect.right >= (window.innerWidth+200 || document.documentElement.clientWidth+200);
}

//checks if player is at end of screen
window.addEventListener('keydown', () => {
    if (isElementAtEndOfScreen()) {
        screen_change()
    }
});

function isBotAtEndOfScreen() {
    const rect = bot.getBoundingClientRect();
    return rect.right >= (window.innerWidth+200 || document.documentElement.clientWidth+200);
}

//checks if player is at end of screen
setInterval(() => {
    if (isBotAtEndOfScreen()) {
        screen_change()
    }
}, 100);

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)
//setInterval(easy,500)
setInterval(easy,100)
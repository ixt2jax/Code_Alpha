const audioPlayer = document.getElementById('audioPlayer'); 
const progressBar = document.getElementById('progressBar'); 
const Songs = ["Brown-Rang.mp3", "Royalty.mp3"];  
var i=0;

document.getElementById('playBtn').addEventListener('click', function() {
    document.getElementById('audioPlayer').src=Songs[i];
    document.getElementById('audioPlayer').play();
    document.getElementById('SongTitle').textContent = 'Now Playing:'+Songs[i].split('.')[0];
});
let p=2;
document.getElementById('pauseBtn').addEventListener('click', function() {
    document.getElementById('audioPlayer').pause();
    document.getElementById('SongTitle').textContent = 'Paused';
    if(p%2!=0){
        document.getElementById('pauseBtn').innerHTML= 'Pause';
        document.getElementById('audioPlayer').play();
        document.getElementById('SongTitle').textContent = 'Now Playing:'+Songs[i].split('.')[0];
    }
    else if(p%2==0){
        document.getElementById('pauseBtn').innerHTML= 'Resume';
        document.getElementById('audioPlayer').pause();
        document.getElementById('SongTitle').textContent = 'Paused';
    }
    p+=1;  
});

document.getElementById('Next_Song').addEventListener('click', function() {
    
    if (i < Songs.length-1) {
        i+=1;
    }
    document.getElementById('audioPlayer').src=Songs[i];
    document.getElementById('audioPlayer').play();
    document.getElementById('SongTitle').textContent = 'Now Playing:'+Songs[i].split('.')[0];
});
document.getElementById('Prev_Song').addEventListener('click', function() {
    
    if (i >0 ) {
        i-=1;
    }
    document.getElementById('audioPlayer').src=Songs[i];
    document.getElementById('audioPlayer').play();
    document.getElementById('SongTitle').textContent = 'Now Playing:'+Songs[i].split('.')[0];
});

audioPlayer.addEventListener('ended', function() {
    if (i < Songs.length - 1) {
        i += 1;
    } else {
        i = 0;  
    }
    audioPlayer.src = Songs[i];
    audioPlayer.play();
    document.getElementById('SongTitle').textContent = 'Now Playing: ' + Songs[i].split('.')[0];
});


audioPlayer.addEventListener('timeupdate', function() {
    const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progressPercentage;
});
progressBar.addEventListener('input', function() {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});


document.getElementById('volumeBar').addEventListener('input', function() {
    document.getElementById('audioPlayer').volume = this.value;
});
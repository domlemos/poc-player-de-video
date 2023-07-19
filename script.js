function getVideo(id) {       
    return  video = document.getElementsByName(id)[0];    
}

function play(id) {
    let video = getVideo(id)    
    video.play();
}

function pause(id) {
    let video = getVideo(id)
    video.pause();
}

function stop(id) {
    let video = getVideo(id)
    video.pause();
    video.currentTime = 0;
}

function inc(id) {
    let video = getVideo(id)
    video.playbackRate += 0.10;
}

function dec(id) {
    let video = getVideo(id)    
    video.playbackRate -= 0.10;
}

function retroceder(id) {
    let video = getVideo(id)
    video.controls = true 
    video.currentTime -= 5;
}

function avancar(id) {
    let video = getVideo(id)
    video.controls = true 
    video.currentTime += 5;
}



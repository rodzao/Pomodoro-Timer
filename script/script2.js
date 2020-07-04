// sessions
let btn_session = window.document.getElementById('session_btn')
btn_session.style.background = '#4db6ac'
let btn_break = window.document.getElementById('break_btn')
let btn_longBreak = window.document.getElementById('longBreak_btn')
let id_sessions = 1

//Buttons
let btn_start = window.document.getElementById('start')
let btn_stop = window.document.getElementById('stop')
let btn_restart = window.document.getElementById('restart')

//timer
let minute = window.document.getElementById('minuto')
let second = window.document.getElementById('segundo')
let min = 25
let sec = 0

//title
let title = window.document.getElementById('title')
let sessionName = window.document.getElementById('sessionName')


//notificaçao
let som = window.document.getElementById('som')

//id interval
let id_interval_runTimer = 0
let id_interval_sessionAuto = 0
let id_intervalBreakAuto = 0

function runSession(){
    id_sessions = 1
    min = 25
    sec = 0
    minute.innerHTML = min < 10 ? '0'+min : min 
    second.innerHTML = sec < 10 ? '0'+sec : sec
    btn_session.style.background = '#4db6ac'
    btn_break.style.background = 'white'
    btn_longBreak.style.background = 'white'
    sessionName.innerText = 'Session'
}

function runBreak(){
    id_sessions = 2
    min = 5
    sec = 0
    minute.innerHTML = min < 10 ? '0'+min : min
    second.innerHTML = sec < 10 ? '0'+sec : sec
    btn_break.style.background = '#4db6ac'
    btn_session.style.background = 'white'
    btn_longBreak.style.background = 'white'
    sessionName.innerText = 'Break'
}

function runLongBreak(){
    id_sessions = 3
    min = 10
    sec = 0
    minute.innerHTML = min < 10 ? '0'+min : min
    second.innerHTML = sec < 10 ? '0'+sec : sec
    btn_longBreak.style.background = '#4db6ac'
    btn_break.style.background = 'white'
    btn_session.style.background = 'white'
    sessionName.innerText = 'Long Break'
}

function start(){
    btn_start.setAttribute('disabled', 'disabled')
    btn_stop.removeAttribute('disabled', 'disabled')
    btn_restart.removeAttribute('disabled', 'disabled')
    if(id_sessions == 1){
        sessionAuto()
    }else if(id_sessions == 2){
        runTimer(5, 0)
    }else if(id_sessions == 3){
        runTimer(10, 0)
    }
}

function stop(){
    btn_start.removeAttribute('disabled', 'disabled')
    btn_stop.setAttribute('disabled', 'disabled')
    if(id_sessions == 1){
        clearInterval(id_interval_sessionAuto)
       
    }else if(id_sessions == 2 || id_sessions == 3){
        clearInterval(id_interval_runTimer)
    }
}

function restart(){
    btn_start.removeAttribute('disabled', 'disabled')
    btn_restart.setAttribute('disabled', 'disabled')
    btn_stop.setAttribute('disabled', 'disabled')
    
    if(id_sessions == 1){
        clearInterval(id_interval_sessionAuto)
        min = 25
        sec = 0
        second.innerHTML = sec < 10 ? '0'+sec : sec
        minute.innerHTML = min < 10 ? '0'+min : min 
       
    }else if(id_sessions == 2){
        clearInterval(id_interval_runTimer)
        min = 5
        sec = 0
        second.innerHTML = sec < 10 ? '0'+sec : sec
        minute.innerHTML = min < 10 ? '0'+min : min 
       
    }else if(id_sessions == 3){
        clearInterval(id_interval_runTimer)
        min = 10
        sec = 0
        second.innerHTML = sec < 10 ? '0'+sec : sec
        minute.innerHTML = min < 10 ? '0'+min : min 
      
    }
}

function runTimer(min, sec){
        id_interval_runTimer = setInterval(function(){
        second.innerHTML = sec < 10 ? '0'+sec : sec
        minute.innerHTML = min < 10 ? '0'+min : min
        title.innerHTML = `(${minute.innerHTML = min < 10 ? '0'+min : min}) Pomodoro Timer`
        
        if(sec < 59){
            sec += 1
        }else if(min > 0){
            min -= 1
            sec = 0 
        }else if(min == 0){
            clearInterval(id_interval_runTimer)
            min = 0 
            sec = 0
            second.innerHTML = sec < 10 ? '0'+sec : sec
            btn_start.removeAttribute('disabled', 'disabled')
            btn_restart.setAttribute('disabled', 'disabled')
            btn_stop.setAttribute('disabled', 'disabled')
            som.play()
        }
    }, 1000)
}

function sessionAuto(){
        sessionName.innerText = 'Session'
        btn_session.style.background = '#4db6ac'
        btn_break.style.background = 'white'

        id_interval_sessionAuto = setInterval(function(){
    
        second.innerHTML = sec < 10 ? '0'+sec : sec
        minute.innerHTML = min < 10 ? '0'+min : min 
        title.innerHTML = `(${minute.innerHTML = min < 10 ? '0'+min : min} Pomodoro Timer)`
        
       
        if(sec < 59){
            sec += 1
        }else if(min > 0){
            min -= 1
            sec = 0
        }else if(min == 0){
            clearInterval(id_interval_sessionAuto)
            min = 5
            sec = 0
            second.innerHTML = sec < 10 ? '0'+sec : sec
            minute.innerHTML = min < 10 ? '0'+min : min
            title.innerHTML = `(${minute.innerHTML = min < 10 ? '0'+min : min} Pomodoro Timer)`
            som.play()
            breakAuto()
        }
    }, 1000)  
}
function breakAuto(){
    btn_break.style.background = '#4db6ac'
    btn_session.style.background = 'white'
    sessionName.innerText = 'Break'

    let id_intervalBreakAuto = setInterval(function(){
        second.innerHTML = sec < 10 ? '0'+sec : sec
        minute.innerHTML = min < 10 ? '0'+min : min
        title.innerHTML = `(${minute.innerHTML = min < 10 ? '0'+min : min} Pomodoro Timer)`
      
        if(sec < 59){
            sec += 1
        }else if(min > 0){
            min -= 1
            sec = 0
        }else if(min == 0){
            min = 25
            sec = 0
            minute.innerHTML = min < 10 ? '0'+min : min
            second.innerHTML = sec < 10 ? '0'+sec : sec
            som.play()
            btn_start.removeAttribute('disabled', 'disabled')
            btn_stop.setAttribute('disabled', 'disabled')
            btn_restart.setAttribute('disabled', 'disabled')
            btn_session.style.background = '#4db6ac'
            btn_break.style.background = 'white'
            sessionName.innerText = 'Session'
            clearInterval(id_intervalBreakAuto)
        }
    }, 1000)
}

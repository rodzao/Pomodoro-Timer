// Variaveis
var interval_id = 0
var session_id = 0
var breake_id = 0
var seg = 0
var min = 25
var btn_start = window.document.getElementById('start')
var btn_restart = window.document.getElementById('restart')
var btn_stop = window.document.getElementById('stop')
var btn_session = window.document.getElementById('session_btn')
var btn_break = window.document.getElementById('break_btn')
var btn_lonBreak = window.document.getElementById('longBreak_btn')
var segundos = window.document.getElementById('segundo')
var minutos = window.document.getElementById('minuto')
session()

// Functions
function session(){
    seg = 0
    min = 25
    segundos.innerHTML = seg < 10 ? '0'+seg : seg
    minutos.innerHTML = min < 10 ? '0'+min : min
    btn_session.style.background = '#4db6ac'
    btn_break.style.background = 'white'
    session_id = 1
}
function runSession(){
    if(session_id == 1){

        btn_session.style.background = '#4db6ac'
        btn_start.setAttribute('disabled', 'disabled')
        btn_start.innerHTML = 'Start'
        btn_restart.setAttribute('disabled', 'disabled')
        btn_stop.removeAttribute('disabled', 'disabled')
        interval_id = setInterval(function(){
            segundos.innerHTML = seg < 10 ? '0'+seg : seg
            minutos.innerHTML = min < 10 ? '0'+min : min

            if(seg < 59){
                seg += 1
            }else if(min > 0){
                seg = 0
                min -= 1
            }else if(min == 0){
                seg = 0
                min = 25 
                segundo.innerHTML = '0'+seg
                btn_start.removeAttribute('disabled', 'disabled')
                btn_stop.setAttribute('disabled', 'disabled')         
                btn_session.style.background = 'white'
                clearInterval(interval_id) 
            }
        }, 1)

    }else{}
}

function breake(){
    breake_id = 1
    seg = 0
    min = 5
    segundos.innerHTML = seg < 10 ? '0'+seg : seg
    minutos.innerHTML = min 
    btn_session.style.background = 'white'
    btn_break.style.background = '#4db6ac'

}

function stop(){
    btn_start.innerHTML = 'Continue'
    btn_start.removeAttribute('disabled', 'disabled')
    btn_restart.removeAttribute('disabled', 'disabled')
    clearInterval(interval_id)
    seg = 0
}

function restart(){
   seg = 0
   min = 25
   segundos.innerHTML = '0'+seg
   minutos.innerHTML = min
   btn_stop.setAttribute('disabled', 'disabled')
   btn_restart.setAttribute('disabled', 'disabled')
   btn_start.innerHTML = 'Start'
}
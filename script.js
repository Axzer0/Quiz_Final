let i=0;

//for switching the panel
function next() {
    if(document.getElementById('start').style.display==='block'){
        document.getElementById('q1').style.display='block';
        document.getElementById('start').style.display='none';

    }
    else if(document.getElementById('q1').style.display==='block'){
        document.getElementById('q2').style.display='block';
        document.getElementById('q1').style.display='none';
    }
    else if(document.getElementById('q2').style.display==='block'){
        document.getElementById('q3').style.display='block';
        document.getElementById('q2').style.display='none';
    }
    else if(document.getElementById('q3').style.display==='block'){
        document.getElementById('q4').style.display='block';
        document.getElementById('q3').style.display='none';
    }
    else if(document.getElementById('q4').style.display==='block'){
        document.getElementById('end').style.display='block';
        document.getElementById('rem').style.display='none';
        document.getElementById('q4').style.display='none';
    }
    else if(document.getElementById('end').style.display==='block'){
        document.getElementById('start').style.display='block';
        document.getElementById('end').style.display='none';
    }
}

//for button to store data and switch panel in no time limit
function ans(val) {
        if (document.getElementById('q1').style.display === 'block') {
            if (val === 'a') {
                document.getElementById("ans1").innerText = "Q1 Selected Option: " + val + ", correct: +1";
                i++
            } else {
                document.getElementById("ans1").innerText = "Q1 Selected Option: " + val + ", incorrect: 0 [Correct Ans: a]"
            }
            ;
            document.getElementById('q2').style.display = 'block';
            document.getElementById('q1').style.display = 'none';
        } else if (document.getElementById('q2').style.display === 'block') {
            if (val === 'a') {
                document.getElementById("ans2").innerText = "Q2 Selected Option: " + val + ", correct: +1";
                i++
            } else {
                document.getElementById("ans2").innerText = "Q2 Selected Option: " + val + ", incorrect: 0 [Correct Ans: a]"
            }
            ;
            document.getElementById('q3').style.display = 'block';
            document.getElementById('q2').style.display = 'none';
        } else if (document.getElementById('q3').style.display === 'block') {
            if (val === 'a') {
                document.getElementById("ans3").innerText = "Q3 Selected Option: " + val + ", correct: +1";
                i++
            } else {
                document.getElementById("ans3").innerText = "Q1 Selected Option: " + val + ", incorrect: 0 [Correct Ans: a]"
            }
            ;
            document.getElementById('q4').style.display = 'block';
            document.getElementById('q3').style.display = 'none';
        } else if (document.getElementById('q4').style.display === 'block') {
            if (val === 'a') {
                document.getElementById("ans4").innerText = "Q4 Selected Option: " + val + ", correct: +1";
                i++
            } else {
                document.getElementById("ans4").innerText = "Q4 Selected Option: " + val + ", incorrect: 0 [Correct Ans: a]"
            }
            ;
            document.getElementById('end').style.display = 'block';
            document.getElementById('q4').style.display = 'none';
            document.getElementById('rem').style.display='none';
        }
        document.getElementById("res").innerText = "Results : " + i;
}

//restart the program
function reset() {
    if(document.getElementById('end').style.display==='block')
    {
        document.getElementById('start').style.display='block';
        document.getElementById('end').style.display='none';
        clearInterval(this.interval);
        i=0;
    }
}

//to start the time limit and timer
function time_limit() {
    stopTimer();
    timer();
    this.t=setInterval(()=>{stopTimer();next();timer();if (document.getElementById('end').style.display==='block'){clearInterval(this.t);}},10000);
}

//the start countdown
function timer(){
    let timeLeft=10;
    document.getElementById('rem').innerText="Time Remaining: "+timeLeft;
    this.int = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('rem').innerText="Time Remaining: "+timeLeft;
        } else {
            timeLeft = 10;
        }
    }, 1000)

}

//to stop countdown
function stopTimer()
{
    clearInterval(this.int);
}

//to setup btn for no timed version
function onNo_Timer() {
    document.getElementById('no_timer1').style.display='block';
    document.getElementById('no_timer2').style.display='block';
    document.getElementById('no_timer3').style.display='block';
    document.getElementById('no_timer4').style.display='block';
    document.getElementById('timer1').style.display='none';
    document.getElementById('timer2').style.display='none';
    document.getElementById('timer3').style.display='none';
    document.getElementById('timer4').style.display='none';
    next();
}

//to setup btn for timed version
function on_Timer() {
    document.getElementById('no_timer1').style.display='none';
    document.getElementById('no_timer2').style.display='none';
    document.getElementById('no_timer3').style.display='none';
    document.getElementById('no_timer4').style.display='none';
    document.getElementById('timer1').style.display='block';
    document.getElementById('timer2').style.display='block';
    document.getElementById('timer3').style.display='block';
    document.getElementById('timer4').style.display='block';
    document.getElementById('rem').style.display='block';
    document.getElementById('q1').style.display='block';
    document.getElementById('start').style.display='none';
    time_limit()
}



//btn for timed version
function ans2(val) {
    if (document.getElementById('q1').style.display === 'block') {
        clearInterval(this.t);stopTimer();
        if (val === 'a') {
            document.getElementById("ans1").innerText = "Q1 Selected Option: " + val + ", correct: +1";
            i++
        } else {
            document.getElementById("ans1").innerText = "Q1 Selected Option: " + val + ", incorrect: 0 [Correct Ans: a]"
        }
        ;
        next();time_limit();
    }
    else if(document.getElementById('q2').style.display === 'block') {
        clearInterval(this.t);stopTimer();
        if (val === 'a') {
            document.getElementById("ans2").innerText = "Q2 Selected Option: " + val + ", correct: +1";
            i++
        } else {
            document.getElementById("ans2").innerText = "Q2 Selected Option: " + val + ", incorrect: 0 [Correct Ans: a]"
        }
        ;
        next();time_limit();
    }
    else if(document.getElementById('q3').style.display === 'block') {
        clearInterval(this.t);stopTimer();
        if (val === 'a') {
            document.getElementById("ans3").innerText = "Q3 Selected Option: " + val + ", correct: +1";
            i++
        } else {
            document.getElementById("ans3").innerText = "Q3 Selected Option: " + val + ", incorrect: 0 [Correct Ans: a]"
        }
        ;
        next();time_limit();
    }
    else if(document.getElementById('q4').style.display === 'block') {
        clearInterval(this.t);stopTimer();
        if (val === 'a') {
            document.getElementById("ans4").innerText = "Q4 Selected Option: " + val + ", correct: +1";
            i++
        } else {
            document.getElementById("ans4").innerText = "Q4 Selected Option: " + val + ", incorrect: 0 [Correct Ans: a]"
        }
        ;
        next();
    }
    document.getElementById("res").innerText = "Results : " + i;
}

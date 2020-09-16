let i=0;
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
        document.getElementById('q4').style.display='none';
    }
    else if(document.getElementById('end').style.display==='block'){
        document.getElementById('start').style.display='block';
        document.getElementById('end').style.display='none';
    }
}

function ans(val) {

    if(document.getElementById('q1').style.display==='block'){
        if (val === 'a'){
            document.getElementById("ans1").innerText="Q1 Selected Option: "+val+", correct: +1";i++
        }
        else {document.getElementById("ans1").innerText="Q1 Selected Option: "+val+", incorrect: 0 [Correct Ans: a]"};
        document.getElementById('q2').style.display='block';
        document.getElementById('q1').style.display='none';
    }
    else if(document.getElementById('q2').style.display==='block'){
        if (val === 'a'){
            document.getElementById("ans2").innerText="Q2 Selected Option: "+val+", correct: +1";i++
        }
        else {document.getElementById("ans2").innerText="Q2 Selected Option: "+val+", incorrect: 0 [Correct Ans: a]"};
        document.getElementById('q3').style.display='block';
        document.getElementById('q2').style.display='none';
    }
    else if(document.getElementById('q3').style.display==='block'){
        if (val === 'a'){
            document.getElementById("ans3").innerText="Q3 Selected Option: "+val+", correct: +1";i++
        }
        else {document.getElementById("ans3").innerText="Q1 Selected Option: "+val+", incorrect: 0 [Correct Ans: a]"};
        document.getElementById('q4').style.display='block';
        document.getElementById('q3').style.display='none';
    }
    else if(document.getElementById('q4').style.display==='block'){
        if (val === 'a'){
            document.getElementById("ans4").innerText="Q4 Selected Option: "+val+", correct: +1";i++
        }
        else {document.getElementById("ans4").innerText="Q4 Selected Option: "+val+", incorrect: 0 [Correct Ans: a]"};
        document.getElementById('end').style.display='block';
        document.getElementById('q4').style.display='none';
    }
    document.getElementById("res").innerText="Results : "+ i;
}

function reset() {
    if(document.getElementById('end').style.display==='block')
    {
        document.getElementById('start').style.display='block';
        document.getElementById('end').style.display='none';
        i=0;
    }
}

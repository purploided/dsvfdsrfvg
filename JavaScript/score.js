document.getElementById('red2-button').onclick=function(){
    var score = document.getElementById("score").innerHTML;
    score++;
    document.getElementById("score").innerHTML = score;

    if(score >= 150){ // upgrades the users button
        var score = document.getElementById("score").innerHTML;
        score++;
        document.getElementById("score").innerHTML = score + 1;
    }
    else{
        //do nothing
    }
    if(score >= 300){ // upgrades the users button v2
        var score = document.getElementById("score").innerHTML;
        score++;
        document.getElementById("score").innerHTML = score + 2;
    }
    else{
        //do nothing
    }
    if(score >= 600){ // upgrades the users button v3
        var score = document.getElementById("score").innerHTML;
        score++;
        document.getElementById("score").innerHTML = score + 4;
    }
    else{
        //do nothing
    }
    if(score >= 5000){ // upgrades the users button v4
        var score = document.getElementById("score").innerHTML;
        score++;
        document.getElementById("score").innerHTML = score + 8;
    }
    else{
        //do nothing
    }
    if(score >= 20000){ // upgrades the users button v5
        var score = document.getElementById("score").innerHTML;
        score++;
        document.getElementById("score").innerHTML = score + 16;
    }
    else{
        //do nothing
    }
}
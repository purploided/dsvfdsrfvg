var song = document.getElementById("song");
    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function() {
        song.play();
    });
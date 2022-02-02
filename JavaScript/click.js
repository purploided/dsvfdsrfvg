var character = document.getElementById("red-button");

function changeState()
{
    character.setAttribute("class", "state-2");
    setTimeout(function () {
        character.classList.remove("state-2")
    }, 10);
}
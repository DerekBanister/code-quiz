
//pulling id's from html page
var highScore = document.querySelector("#highScore");
var clearHighScores = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Clearing scores onclick
clearHighScores.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local storage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("ol");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Go back to index.html
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
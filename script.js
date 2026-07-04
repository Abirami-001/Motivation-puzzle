/* script.js */

let finalWord = "";

/* First Step: Show Motivation After Questions */

function showMotivation() {
    let name = document.getElementById("name").value;
    let mood = document.getElementById("mood").value;
    let energy = document.getElementById("energy").value;

    if (name === "" || energy === "") {
        alert("Please fill all required fields.");
        return;
    }

    let quote = "";
    let story = "";

    if (mood === "sad") {
        quote = "🌈 Tough times never last. Strong people do!";
        story = "A tiny plant grows even between rocks. Never give up.";
    }
    else if (mood === "stressed") {
        quote = "🧘 One step at a time. You are doing your best!";
        story = "A student failed many times but later became successful.";
    }
    else if (mood === "tired") {
        quote = "💤 Rest if needed, but never quit!";
        story = "Slow progress is still progress.";
    }
    else {
        quote = "🎉 Keep shining and spreading positivity!";
        story = "Success comes to those who keep trying every day.";
    }

    document.getElementById("quoteBox").innerHTML =
        "Hello " + name + " 👋 <br><br>" + quote;

    document.getElementById("storyBox").innerHTML = story;

    document.getElementById("afterSubmit").style.display = "block";
}

/* Puzzle Section */

function addLetter(letter) {
    finalWord += letter;
    document.getElementById("displayBox").innerHTML = finalWord;
}

function clearWord() {
    finalWord = "";
    document.getElementById("displayBox").innerHTML = "";
    document.getElementById("puzzleResult").innerHTML = "";
}

function submitPuzzle() {
    let answer = finalWord.toUpperCase();

    let validWords = [
        "INSPIRED",
        "INSPIRE",
        "RISE",
        "PRIDE",
        "SPIRE",
        "RIDE"
    ];

    if (validWords.includes(answer)) {
        document.getElementById("puzzleResult").innerHTML =
            "🎉 Correct!<br><br>" +
            "\"Stay inspired and keep moving forward!\" 🌟";
    } else {
        document.getElementById("puzzleResult").innerHTML =
            "❌ Wrong Answer!<br><br>" +
            "Hint: The letters can form INSPIRED and other motivational words like RISE and PRIDE.";
    }
}

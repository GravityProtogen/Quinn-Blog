const correctCodes = {
    code1: "olho",
    code2: "aranha",
    code3: "ovelha"
};

let codesEntered = {
    correct1: false,
    correct2: false,
    correct3: false
};

function checkCode(inputId, feedbackId, correctFlag) {
    const input = document.getElementById(inputId).value.toLowerCase();
    const feedback = document.getElementById(feedbackId);

    if (input === correctCodes[inputId]) {
        feedback.textContent = "✔️ Correct";
        feedback.style.color = "#32CD32";
        codesEntered[correctFlag] = true;
    } else if (input) {
        feedback.textContent = "❌ Incorrect";
        feedback.style.color = "red";
        codesEntered[correctFlag] = false;
    } else {
        feedback.textContent = "";
        codesEntered[correctFlag] = false;
    }

    // If all 3 codes are correct, trigger the animation
    if (codesEntered.correct1 && codesEntered.correct2 && codesEntered.correct3) {
        triggerAnimation();
    }
}
function playSound() {
    const audio = new Audio('./boo-womp.mp3');
    audio.play();
}

function triggerButton() {
    // This function simulates a button click
    playSound(); // Call the playSound function
}
function triggerAnimation() {
    const animationDiv = document.getElementById('animation');
    const animLetter = document.getElementById('animLetter');
    const successSound = document.getElementById('successSound');

    animationDiv.style.visibility = "visible"; // Make the animation visible
    successSound.play();  // Play the success sound

    let delay = 1000;  // Initial delay (1 second)
    let minDelay = 100;  // Minimum delay
    let repetitions = 0;
    const maxRepetitions = 20;  // Number of times the word will appear before redirecting

    function repeatWord() {
        animLetter.classList.remove('grow');  // Reset animation
        setTimeout(() => {
            animLetter.classList.add('grow');  // Apply grow animation
        }, 100);  // Delay before applying animation

        // Speed up the repetition by reducing the delay
        delay *= 0.9;  // Reduce delay by 10% each time
        if (delay < minDelay) {
            delay = minDelay;  // Ensure it doesn't go below the minimum
        }

        repetitions++;
        if (repetitions < maxRepetitions) {
            setTimeout(repeatWord, delay);
        } else {
            // After max repetitions, redirect to another page
            window.location.href = "./acesso-concedido.html";
        }
    }

    repeatWord();  // Start the repeating animation
}
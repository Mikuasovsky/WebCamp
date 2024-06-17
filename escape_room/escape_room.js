document.addEventListener('DOMContentLoaded', function() {
    const pc1Area = document.getElementById('pc1');
    const pc2Area = document.getElementById('pc2');
    const pc3Area = document.getElementById('pc3');
    const exitSignArea = document.getElementById('exitSign');
    const popup1 = document.getElementById('popup1');
    const popup2 = document.getElementById('popup2');
    const popup3 = document.getElementById('popup3');
    const congratsPopup1 = document.getElementById('congratsPopup1');
    const congratsPopup2 = document.getElementById('congratsPopup2');
    const congratsPopup3 = document.getElementById('congratsPopup3');
    const lockerPopup = document.getElementById('lockerPopup');
    const finalCongratsPopup = document.getElementById('finalCongratsPopup');
    const timeoutPopup = document.getElementById('timeoutPopup');
    const closePopup1 = document.getElementById('closePopup1');
    const closePopup2 = document.getElementById('closePopup2');
    const closePopup3 = document.getElementById('closePopup3');
    const closeCongrats1 = document.getElementById('closeCongrats1');
    const closeCongrats2 = document.getElementById('closeCongrats2');
    const closeCongrats3 = document.getElementById('closeCongrats3');
    const closeLockerPopup = document.getElementById('closeLockerPopup');
    const closeFinalCongratsPopup = document.getElementById('closeFinalCongratsPopup');
    const closeTimeoutPopup = document.getElementById('closeTimeoutPopup');
    const answerButtonsPopup1 = document.querySelectorAll('#popup1 .answer');
    const answerButtonsPopup2 = document.querySelectorAll('#popup2 .answer');
    const answerButtonsPopup3 = document.querySelectorAll('#popup3 .answer');
    const correctAnswerIndex1 = 1; // Assuming B is the correct answer for HTML question
    const correctAnswerIndex2 = 1; // Assuming B is the correct answer for CSS question
    const correctAnswerIndex3 = 2; // Assuming C is the correct answer for JavaScript question
    const menu = document.querySelector('#mobile-menu')
    const menuLinks = document.querySelector('.navbar_menu')

    // Overlay and start button elements
    const overlay = document.getElementById('overlay');
    const startButton = document.getElementById('startButton');

    let firstQuestionAnsweredCorrectly = false; // Track if the first question is answered correctly
    let secondQuestionAnsweredCorrectly = false; // Track if the second question is answered correctly
    let thirdQuestionAnsweredCorrectly = false; // Track if the third question is answered correctly
    let randomNumber1, randomNumber2, randomNumber3; // Variables to store random numbers

    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
      });
    
    // Timer variables
    const timerElement = document.getElementById('timer');
    let timeRemaining = 30; // 5-minute timer in seconds
    let timerInterval;


    // Function to start the timer
    function startTimer() {
        timerInterval = setInterval(function() {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            timeRemaining--;

            if (timeRemaining < 0) {
                clearInterval(timerInterval);
                showTimeoutPopup();
            }
        }, 1000);
    }

    // Function to show the timeout popup and redirect after confirmation
    function showTimeoutPopup() {
        timeoutPopup.style.display = 'block';
    }

    closeTimeoutPopup.addEventListener('click', function() {
        timeoutPopup.style.display = 'none';
        window.location.href = '/learn_page/learn_page.html'; // Redirect to another page
    });

    // Function to generate a random number
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to display congrats popup with a random number for the first question
    function showCongratsPopup1() {
        congratsPopup1.style.display = 'block';
        randomNumber1 = generateRandomNumber(1, 9); // Generate a random number between 1 and 9
        document.getElementById('congratsText1').textContent = `Congratulations! You unlocked the next question. The first digit is: ${randomNumber1}`;
        popup1.style.display = 'none'; // Close the first question popup
    }

    // Function to display congrats popup with a random number for the second question
    function showCongratsPopup2() {
        congratsPopup2.style.display = 'block';
        randomNumber2 = generateRandomNumber(1, 9); // Generate a random number between 1 and 9
        document.getElementById('congratsText2').textContent = `Congratulations! You unlocked the next question. The second digit is: ${randomNumber2}`;
        popup2.style.display = 'none'; // Close the second question popup
    }

    // Function to display congrats popup with a random number for the third question
    function showCongratsPopup3() {
        congratsPopup3.style.display = 'block';
        randomNumber3 = generateRandomNumber(1, 9); // Generate a random number between 1 and 9
        document.getElementById('congratsText3').textContent = `Congratulations! You completed the challenge. The third digit is: ${randomNumber3}`;
        popup3.style.display = 'none'; // Close the third question popup
    }

    // Function to handle answer button clicks for popup1 (HTML question)
    answerButtonsPopup1.forEach(function(button, index) {
        button.addEventListener('click', function() {
            if (index === correctAnswerIndex1) {
                button.classList.add('correct'); // Apply CSS class for correct answer
                firstQuestionAnsweredCorrectly = true; // Set flag to true

                // Show congratulations popup with random number and close popup1
                showCongratsPopup1();
            } else {
                button.classList.add('incorrect'); // Apply CSS class for incorrect answer
            }
        });
    });

    // Function to handle answer button clicks for popup2 (CSS question)
    answerButtonsPopup2.forEach(function(button, index) {
        button.addEventListener('click', function() {
            if (index === correctAnswerIndex2) {
                button.classList.add('correct'); // Apply CSS class for correct answer
                secondQuestionAnsweredCorrectly = true; // Set flag to true

                // Show congratulations popup with random number and close popup2
                showCongratsPopup2();
            } else {
                button.classList.add('incorrect'); // Apply CSS class for incorrect answer
            }
        });
    });

    // Function to handle answer button clicks for popup3 (JavaScript question)
    answerButtonsPopup3.forEach(function(button, index) {
        button.addEventListener('click', function() {
            if (index === correctAnswerIndex3) {
                button.classList.add('correct'); // Apply CSS class for correct answer
                thirdQuestionAnsweredCorrectly = true; // Set flag to true

                // Show congratulations popup with random number and close popup3
                showCongratsPopup3();
            } else {
                button.classList.add('incorrect'); // Apply CSS class for incorrect answer
            }
        });
    });

    // Close popup1
    closePopup1.addEventListener('click', function() {
        popup1.style.display = 'none';
    });

    // Close popup2
    closePopup2.addEventListener('click', function() {
        popup2.style.display = 'none';
    });

    // Close popup3
    closePopup3.addEventListener('click', function() {
        popup3.style.display = 'none';
    });

    // Close congrats popup1
    closeCongrats1.addEventListener('click', function() {
        congratsPopup1.style.display = 'none';
    });

    // Close congrats popup2
    closeCongrats2.addEventListener('click', function() {
        congratsPopup2.style.display = 'none';
    });

    // Close congrats popup3
    closeCongrats3.addEventListener('click', function() {
        congratsPopup3.style.display = 'none';
    });

    // Close locker popup
    closeLockerPopup.addEventListener('click', function() {
        lockerPopup.style.display = 'none';
    });

    // Close final congratulations popup
    closeFinalCongratsPopup.addEventListener('click', function() {
        finalCongratsPopup.style.display = 'none';
    });

    // Add event listeners for triggering popups on image map clicks
    pc1Area.addEventListener('click', function() {
        if (firstQuestionAnsweredCorrectly) {
            congratsPopup1.style.display = 'block';
            document.getElementById('congratsText1').textContent = `The first digit is: ${randomNumber1}`;
        } else {
            popup1.style.display = 'block';
        }
    });

    pc2Area.addEventListener('click', function() {
        if (!firstQuestionAnsweredCorrectly) {
            alert("You need to answer the first question correctly to proceed.");
        } else if (secondQuestionAnsweredCorrectly) {
            congratsPopup2.style.display = 'block';
            document.getElementById('congratsText2').textContent = `The second digit is: ${randomNumber2}`;
        } else {
            popup2.style.display = 'block';
        }
    });

    pc3Area.addEventListener('click', function() {
        if (!secondQuestionAnsweredCorrectly) {
            alert("You need to answer the second question correctly to proceed.");
        } else if (thirdQuestionAnsweredCorrectly) {
            congratsPopup3.style.display = 'block';
            document.getElementById('congratsText3').textContent = `The third digit is: ${randomNumber3}`;
        } else {
            popup3.style.display = 'block';
        }
    });

    // Event listener for the exit sign
    exitSignArea.addEventListener('click', function() {
        lockerPopup.style.display = 'block';
    });

    // Event listener for the locker code submission
    document.getElementById('submitCode').addEventListener('click', function() {
        const enteredCode = document.getElementById('codeInput').value;
        const correctCode = `${randomNumber1}${randomNumber2}${randomNumber3}`;
        if (enteredCode === correctCode) {
            clearInterval(timerInterval); // Stop the timer
            lockerPopup.style.display = 'none';
            finalCongratsPopup.style.display = 'block';
        } else {
            alert("Incorrect code. Please try again.");
        }
    });

    // Event listener for the start button on the overlay
    startButton.addEventListener('click', function() {
        overlay.style.display = 'none'; // Hide the overlay
        startTimer(); // Start the timer
    });
});

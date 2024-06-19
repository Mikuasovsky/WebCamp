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
    const correctAnswerIndex1 = 1; 
    const correctAnswerIndex2 = 1; 
    const correctAnswerIndex3 = 2; 
    const overlay = document.getElementById('overlay');
    const startButton = document.getElementById('startButton');

    let firstQuestionAnsweredCorrectly = false; 
    let secondQuestionAnsweredCorrectly = false; 
    let thirdQuestionAnsweredCorrectly = false; 
    let randomNumber1, randomNumber2, randomNumber3; 
    
    
   
    const timerElement = document.getElementById('timer');
    let timeRemaining = 3*60; 
    let timerInterval;


    
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

    
    function showTimeoutPopup() {
        timeoutPopup.style.display = 'block';
    }

    closeTimeoutPopup.addEventListener('click', function() {
        timeoutPopup.style.display = 'none';
        window.location.href = '/learn_page.html';
    });

    
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    function showCongratsPopup1() {
        congratsPopup1.style.display = 'block';
        randomNumber1 = generateRandomNumber(1, 9); 
        document.getElementById('congratsText1').textContent = `Congratulations! You unlocked the next question. The first digit is: ${randomNumber1}`;
        popup1.style.display = 'none'; 
    }

    
    function showCongratsPopup2() {
        congratsPopup2.style.display = 'block';
        randomNumber2 = generateRandomNumber(1, 9); 
        document.getElementById('congratsText2').textContent = `Congratulations! You unlocked the next question. The second digit is: ${randomNumber2}`;
        popup2.style.display = 'none'; 
    }

    
    function showCongratsPopup3() {
        congratsPopup3.style.display = 'block';
        randomNumber3 = generateRandomNumber(1, 9);
        document.getElementById('congratsText3').textContent = `Congratulations! You completed the challenge. The third digit is: ${randomNumber3}`;
        popup3.style.display = 'none'; 
    }

    
    answerButtonsPopup1.forEach(function(button, index) {
        button.addEventListener('click', function() {
            if (index === correctAnswerIndex1) {
                button.classList.add('correct'); 
                firstQuestionAnsweredCorrectly = true; 

                
                showCongratsPopup1();
            } else {
                button.classList.add('incorrect'); 
            }
        });
    });

    
    answerButtonsPopup2.forEach(function(button, index) {
        button.addEventListener('click', function() {
            if (index === correctAnswerIndex2) {
                button.classList.add('correct'); 
                secondQuestionAnsweredCorrectly = true; 

                
                showCongratsPopup2();
            } else {
                button.classList.add('incorrect'); 
            }
        });
    });

    answerButtonsPopup3.forEach(function(button, index) {
        button.addEventListener('click', function() {
            if (index === correctAnswerIndex3) {
                button.classList.add('correct'); 
                thirdQuestionAnsweredCorrectly = true; 

                
                showCongratsPopup3();
            } else {
                button.classList.add('incorrect'); 
            }
        });
    });

    
    closePopup1.addEventListener('click', function() {
        popup1.style.display = 'none';
    });

    
    closePopup2.addEventListener('click', function() {
        popup2.style.display = 'none';
    });

    
    closePopup3.addEventListener('click', function() {
        popup3.style.display = 'none';
    });

   
    closeCongrats1.addEventListener('click', function() {
        congratsPopup1.style.display = 'none';
    });

   
    closeCongrats2.addEventListener('click', function() {
        congratsPopup2.style.display = 'none';
    });

    
    closeCongrats3.addEventListener('click', function() {
        congratsPopup3.style.display = 'none';
    });

    
    closeLockerPopup.addEventListener('click', function() {
        lockerPopup.style.display = 'none';
    });

    
    closeFinalCongratsPopup.addEventListener('click', function() {
        finalCongratsPopup.style.display = 'none';
    });

   
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

    
    exitSignArea.addEventListener('click', function() {
        lockerPopup.style.display = 'block';
    });

    
    document.getElementById('submitCode').addEventListener('click', function() {
        const enteredCode = document.getElementById('codeInput').value;
        const correctCode = `${randomNumber1}${randomNumber2}${randomNumber3}`;
        if (enteredCode === correctCode) {
            clearInterval(timerInterval); 
            lockerPopup.style.display = 'none';
            finalCongratsPopup.style.display = 'block';
        } else {
            alert("Incorrect code. Please try again.");
        }
    });

    
    startButton.addEventListener('click', function() {
        overlay.style.display = 'none'; 
        startTimer(); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const pc1Area = document.getElementById('pc1');
    const popup1 = document.getElementById('popup1');
    const closePopup1 = document.getElementById('closePopup1');
    const answerButtons = document.querySelectorAll('.answer');
    const correctAnswerIndex = 1; // Assuming B is the correct answer (index 1)

    // Function to generate a random number
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to handle answer button clicks
    answerButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            if (index === correctAnswerIndex) {
                // Mark correct answer as green
                button.classList.add('correct'); // Apply CSS class for correct answer

                // Show congratulations message
                const congratsMessage = document.createElement('p');
                congratsMessage.textContent = "Congrats! You unlocked the next question.";
                congratsMessage.style.color = '#8bc34a'; // Green color
                popup1.appendChild(congratsMessage);

                // Close current popup after a short delay
                setTimeout(function() {
                    popup1.style.display = 'none';
                    popup1.innerHTML = ''; // Clear content

                    // Open new popup with random number
                    const newPopup = document.createElement('div');
                    newPopup.classList.add('popup');
                    newPopup.style.display = 'block';

                    const randomNumber = generateRandomNumber(1, 9); // Example range
                    const newContent = `
                        <div class="popup-content">
                            <h2></h2>
                            <p>Here is a random number: ${randomNumber}</p>
                            <button class="close-btn" id="closePopup2">Close</button>
                        </div>
                    `;
                    newPopup.innerHTML = newContent;

                    document.body.appendChild(newPopup);

                    // Event listener to close new popup
                    const closePopup2 = newPopup.querySelector('#closePopup2');
                    closePopup2.addEventListener('click', function() {
                        newPopup.style.display = 'none';
                        newPopup.remove(); // Remove from DOM
                    });
                }, 1000); // Adjust delay as needed
            } else {
                // Handle incorrect answer if needed
            }
        });
    });

    // Show initial popup when clicking on pc1 area
    pc1Area.addEventListener('click', function() {
        popup1.style.display = 'block';
    });

    // Close popup when clicking on close button
    closePopup1.addEventListener('click', function() {
        popup1.style.display = 'none';
    });
});

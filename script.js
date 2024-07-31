function checkAnswer() {
    const answerInput = document.getElementById('answer').value.toLowerCase().trim();
    const resultElement = document.getElementById('result');
    
    // Correct answer is "echo"
    if (answerInput === 'echo') {
        resultElement.textContent = 'Correct! Redirecting to the hidden page...';
        resultElement.style.color = 'green';
        
        // Redirect after a short delay
        setTimeout(() => {
            window.location.href = 'riddle.html'; // Redirect to the hidden content page
        }, 2000);
    } else {
        resultElement.textContent = 'Incorrect, try again.';
        resultElement.style.color = 'red';
    }
}

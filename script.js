document.addEventListener('DOMContentLoaded', () => {

    const logo = document.getElementById('logo');
    const countdownText = document.getElementById('countdown-text');
    const redirectUrl = 'https://github.com/begiflow';

    let countdownInterval = null;
    let timeLeft = 3;
    const blinkClasses = ['blink-step-1', 'blink-step-2', 'blink-step-3'];

    function clearBlinkClasses() {
        countdownText.classList.remove(...blinkClasses);
    }

    function updateCountdown() {
        countdownText.textContent = `${timeLeft}`;
        
        clearBlinkClasses();
        if (timeLeft === 3) {
            countdownText.classList.add('blink-step-1');
        } else if (timeLeft === 2) {
            countdownText.classList.add('blink-step-2');
        } else if (timeLeft === 1) {
            countdownText.classList.add('blink-step-3');
        }
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            window.location.href = redirectUrl;
        }
    }

    if (logo) {
        logo.addEventListener('mouseenter', () => {
            timeLeft = 3; 
            updateCountdown();
            countdownInterval = setInterval(updateCountdown, 1000);
        });

        logo.addEventListener('mouseleave', () => {
            clearInterval(countdownInterval); 
            clearBlinkClasses(); 
            countdownText.textContent = ''; 
        });
    } else {
        console.error('logo not found.');
    }
});

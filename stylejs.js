document.addEventListener('DOMContentLoaded', () => {
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const secondsInput = document.getElementById('seconds-input');
    const startBtn = document.getElementById('start-btn');
    const timerElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };
    let countdownInterval;

    function updateTimerDisplay(days, hours, minutes, seconds) {
        timerElements.days.textContent = String(days).padStart(2, '0');
        timerElements.hours.textContent = String(hours).padStart(2, '0');
        timerElements.minutes.textContent = String(minutes).padStart(2, '0');
        timerElements.seconds.textContent = String(seconds).padStart(2, '0');
    }

    function startCountdown() {
        const hours = parseInt(hoursInput.value, 10);
        const minutes = parseInt(minutesInput.value, 10);
        const seconds = parseInt(secondsInput.value, 10);

        const endTime = Date.now() + (hours * 3600000) + (minutes * 60000) + (seconds * 1000);

        countdownInterval = setInterval(() => {
            const now = Date.now();
            const timeRemaining = endTime - now;

            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                updateTimerDisplay(0, 0, 0, 0);
                alert('Time is up!');
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            updateTimerDisplay(days, hours, minutes, seconds);
        }, 1000);
    }

    startBtn.addEventListener('click', startCountdown);

    themeSelector.addEventListener('change', (event) => {
        document.body.className = event.target.value;
    });
});
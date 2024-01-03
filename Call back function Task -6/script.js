
  const timerElement = document.getElementById('timer');
  const surpriseContainer = document.getElementById('surprise-container');
  const surpriseGif = document.getElementById('surprise-gif');
  let countdownInterval;
  let timeRemaining = 10; 
 
  function updateTimerDisplay() {
    timerElement.textContent = timeRemaining;
  }


  function startCountdown() {
    updateTimerDisplay(); 

    countdownInterval = setInterval(() => {
      
    
      timeRemaining--;

      if (timeRemaining < 1) {
        clearInterval(countdownInterval);
        showSurprise();
      } else {
        updateTimerDisplay();
      }
    }, 1000);
  }


  function showSurprise() {
    timerElement.style.display = 'none'; // Hide the timer
    surpriseContainer.style.display = 'block'; 
    document.body.style.backgroundColor = '#ff69b4'; 
  }


  surpriseGif.addEventListener('click', function() {
    clearInterval(countdownInterval);  
    timeRemaining = 10; 
    timerElement.style.display = 'inline-flex'; 
    surpriseContainer.style.display = 'none'; 
    document.body.style.backgroundColor = '#f0f0f0'; 
    startCountdown(); 
  });

 
  startCountdown();


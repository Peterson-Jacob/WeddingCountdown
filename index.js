function updateCountdown() {
    // Target date: July 25, 2026, 15:00:00 (3 PM) in local timezone
    const targetDate = new Date(2026, 6, 25, 15, 0, 0); // Month is 0-based (6 = July)

    const now = new Date();
    const difference = targetDate - now;

    // If the target date has passed
    if (difference <= 0) {
      document.getElementById('countdown').innerHTML = `
        <div style="font-size: 2rem; color: #00ff88;">
          🎉 The date has arrived!
        </div>
      `;
      return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  // Update countdown every second
  setInterval(updateCountdown, 1000);

  // Initial call
  updateCountdown();
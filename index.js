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

  //Image Change
  const img = document.getElementById("JacobandTeresa");
  
  setInterval(imgChange, 300);
  let i = 1;
  function imgChange(){
      const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pic7.jpg", "pic8.jpg", "pic9.jpg", "pic10.jpg", "pic11.jpg", "pic12.jpg" ];

      if(i < 11){
          img.src = "images/" + images[i];
          i++;
      }else{
         i = 1;
         img.src = "images/" + images[0];
      };
  };
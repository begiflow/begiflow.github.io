document.addEventListener('DOMContentLoaded', () => {
     const logo = document.getElementById('logo');
     const countdownText = document.getElementById('countdown-text');
     const redirectUrl = 'https://github.com/begiflow';
     let hoverTimer = null;
     let countdownInterval;
     let timeLeft = 3;

     function updateCountdown() {
         countdownText.textContent = `Chuyển hướng sau: ${timeLeft}...`;
         timeLeft--;
         if (timeLeft < 0) {
             clearInterval(countdownInterval);
             window.location.href = redirectUrl;
         }
     }

     if (logo) {
         logo.addEventListener('mouseenter', () => {
             timeLeft = 3; 
             countdownText.textContent = `Chuyển hướng sau: ${timeLeft}...`;
             countdownInterval = setInterval(updateCountdown, 1000);
             hoverTimer = setTimeout(() => {
                 clearInterval(countdownInterval);
                 if (timeLeft <= 0) {
                     window.location.href = redirectUrl;
                 }
             }, 3000);
         });

         logo.addEventListener('mouseleave', () => {
             clearTimeout(hoverTimer);
             clearInterval(countdownInterval);
             countdownText.textContent = ''; 
         });
     } else {
         console.error('Lỗi: Không tìm thấy phần tử có ID "logo". Hãy kiểm tra lại file index.html.');
     }
 });

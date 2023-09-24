function formatElapsedTime(elapsedTime) {
   const parts = [];
 
   if (elapsedTime.years > 0) {
     parts.push(elapsedTime.years + 'y');
     if (elapsedTime.months > 0) {
       parts.push(elapsedTime.months + 'm');
     }
   } else if (elapsedTime.months > 0) {
     parts.push(elapsedTime.months + 'm');
     if (elapsedTime.days > 0) {
       parts.push(elapsedTime.days + 'd');
     }
   } else if (elapsedTime.days > 0) {
     parts.push(elapsedTime.days + 'd');
     if (elapsedTime.hours > 0) {
       parts.push(elapsedTime.hours + 'h');
     }
   } else if (elapsedTime.hours > 0) {
     parts.push(elapsedTime.hours + 'h');
     if (elapsedTime.minutes > 0) {
       parts.push(elapsedTime.minutes + 'm');
     }
   } else if (elapsedTime.minutes > 0) {
     parts.push(elapsedTime.minutes + 'm');
   } else {
     return 'less than a minute';
   }
 
   return parts.join(' ');
 }
 
 
 
 
 
 function updateElapsedTime() {
   const currentTime = new Date();
   const paragraphs = document.querySelectorAll('h1[data-start-time]');
 
   paragraphs.forEach((paragraph) => {
     const startTime = new Date(paragraph.getAttribute('data-start-time'));
     const elapsedTime = calculateElapsedTime(currentTime, startTime);
     paragraph.querySelector('span').textContent = formatElapsedTime(elapsedTime);
   });
 }
 
 function calculateElapsedTime(currentTime, startTime) {
   const elapsedMilliseconds = currentTime - startTime;
   const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
   const elapsedMinutes = Math.floor(elapsedSeconds / 60);
   const elapsedHours = Math.floor(elapsedMinutes / 60);
   const elapsedDays = Math.floor(elapsedHours / 24);
   const elapsedMonths = Math.floor(elapsedDays / 30); // Environ
   const elapsedYears = Math.floor(elapsedMonths / 12); // Environ
 
   return {
     years: elapsedYears,
     months: elapsedMonths % 12,
     days: elapsedDays % 30,
     hours: elapsedHours % 24,
     minutes: elapsedMinutes % 60,
   };
 }
 
 // Mettre à jour le temps écoulé toutes les secondes (ou selon la fréquence souhaitée)
 setInterval(updateElapsedTime, 1000);
 
 // Mettre à jour le temps écoulé immédiatement au chargement de la page
 updateElapsedTime();
 
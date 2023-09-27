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
 
 // Fonction pour convertir la date en format timestamp
function parseDate(dateString) {
  return new Date(dateString).getTime();
}

// Sélectionner la liste d'éléments à trier
const myList = document.getElementById('myList');
const items = Array.from(myList.querySelectorAll('a'));

// Convertir les dates en timestamp et stocker dans un tableau avec l'indice
const datesArray = items.map((item, index) => {
  const dateElement = item.querySelector('.text-date-account');
  const dateAttribute = dateElement ? dateElement.getAttribute('data-start-time') : null;

  // Vérifier si l'attribut existe avant de le convertir en timestamp
  if (dateAttribute) {
    const timestamp = parseDate(dateAttribute);
    return { timestamp, index };
  }

  // Si l'attribut n'existe pas, retourner une date négative pour qu'il apparaisse en dernier
  return { timestamp: -1, index };
});

// Trier le tableau de dates par ordre décroissant
datesArray.sort((a, b) => b.timestamp - a.timestamp);

// Réorganiser les éléments dans myList en fonction du nouveau tri
datesArray.forEach((dateObj, newIndex) => {
  const oldIndex = dateObj.index;
  const currentItem = items[oldIndex];
  myList.appendChild(currentItem);
});

 
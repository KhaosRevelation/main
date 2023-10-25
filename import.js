 fetch('https://corsproxy.io/?' + encodeURIComponent('https://dropnudes.com/'))
   .then(response => response.text())
   .then(html => {
     const tempElement = document.createElement('div');
     tempElement.innerHTML = html;
 
     const sectionElement = tempElement.querySelector('section');
 
     if (sectionElement) {
       // Insérez la section avant le script Linkvertise
       document.body.appendChild(sectionElement); // Au cas où le script Linkvertise n'est pas trouvé
 
       // Chargez le script Linkvertise
       shortUrl();
      }
   })
   .catch(error => {
     console.error('Une erreur s\'est produite :', error);
   });

function shortUrl(){
   // Sélectionnez la balise section
   const sectionElement = document.querySelector('section');

   if (sectionElement) {
   // Sélectionnez toutes les balises <a> enfants de la balise section
   const linksInSection = sectionElement.querySelectorAll('a');

   // Parcourez les liens et ajoutez "https://redir.me/?" devant chaque URL
   linksInSection.forEach(link => {
      const lienOriginal = link.getAttribute('href');
      // Vérifiez si le lien est déjà un lien court, auquel cas, ne l'ajoutez pas
      if (!lienOriginal.startsWith('https://redir.me/?')) {
         const nouveauLien = 'https://redir.me/?' + lienOriginal;
         link.setAttribute('href', nouveauLien);
      }
   });

   loadLinkvertiseScript()
}
}


function loadLinkvertiseScript(){
   // Base URL
   var base_url = "https://link-to.net/";

   // ID de l'utilisateur (remplacez ceci par votre véritable user_id)
   var user_id = "472897";

   // URL de base pour la redirection dynamique
   var dynamic_url = base_url + user_id + "/" + (Math.random() * 1000) + "/dynamic/";

   // Obtenez tous les liens enfants de la balise <section>
   const section = document.querySelector('section');
   if (section) {
   const links = section.querySelectorAll('a');

   // Parcourez les liens et mettez à jour leur attribut href
   links.forEach(link => {
      // Obtenez l'URL de base du lien
      var base_href = link.getAttribute('href');
      
      // Encodez l'URL en Base64
      var encoded_base_href = btoa(encodeURI(base_href));

      // Construisez l'URL finale avec le paramètre "r"
      var final_url = dynamic_url + "?r=" + encoded_base_href;

      // Mettez à jour l'attribut href du lien
      link.setAttribute('href', final_url);
   });
   }

   // Sélectionnez les liens <a> dans le header (ou autre élément, ajustez le sélecteur en conséquence)
   const linksInHeader = document.querySelectorAll('header a');
   linksInHeader.forEach(link => {
      link.setAttribute('href', "index.html");
   });
   
   // Sélectionnez la balise <section>
   const sectionElement = document.querySelector('section');

   if (sectionElement) {
      // Modifiez le style de la balise <section> pour l'afficher en "flex"
      sectionElement.style.display = 'flex';
   }
}

function formatTime(number) {
   return number < 10 ? `0${number}` : number;
}

function updateCountdown() {
   const parisTime = moment.tz("Europe/Paris");
   const now = moment();
   const startOfDay = moment().startOf('day');
   const targetTime = parisTime.startOf('day').add(11, 'hours');

   if (now.isAfter(targetTime)) {
       targetTime.add(1, 'day');
   }

   const duration = moment.duration(targetTime.diff(now));
   const hours = formatTime(duration.hours());
   const minutes = formatTime(duration.minutes());
   const seconds = formatTime(duration.seconds());

   // Récupérez l'élément countdown
   const countdownElement = document.getElementById("countdown");
   if (countdownElement) {
       countdownElement.textContent = `${hours} : ${minutes} : ${seconds}`;
   }

   setTimeout(updateCountdown, 1000);
}

updateCountdown();
fetch('https://corsproxy.io/?' + encodeURIComponent('https://pornleaks.in/packs.php'))
   .then(response => response.text())
   .then(html => {
   const tempElement = document.createElement('div');
   tempElement.innerHTML = html;

   const sectionElement = tempElement.querySelector('section.pt-35.postxd');


   if (sectionElement) {
      
      document.body.appendChild(sectionElement);

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

// Sélectionnez toutes les balises 'img' de la page
var images = document.getElementsByTagName('img');

// Parcourez toutes les images et mettez à jour l'attribut 'src'
for (var i = 0; i < images.length; i++) {
  var currentSrc = images[i].getAttribute('src');
  
  // Vérifiez si l'attribut 'src' existe
  if (currentSrc) {
    // Ajoutez "https://monsite.in/" devant le lien existant
    var newSrc = "https://pornleaks.in/" + currentSrc;
    
    // Mettez à jour l'attribut 'src' avec le nouveau lien
    images[i].setAttribute('src', newSrc);
  }
}

// Sélectionnez toutes les balises 'a' de la page
var links = document.getElementsByTagName('a');

// Parcourez toutes les balises 'a' et supprimez celles dont le texte commence par "Disable Ads"
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  var linkText = link.textContent.trim();

  if (linkText.startsWith('Disable Ads')) {
    link.parentNode.removeChild(link);
  }
}

// Sélectionnez toutes les balises 'div' avec la classe "col-12" de la page
var divsToRemove = document.querySelectorAll('div.col-12');

// Parcourez toutes les balises sélectionnées et supprimez-les
for (var i = 0; i < divsToRemove.length; i++) {
  var div = divsToRemove[i];
  div.parentNode.removeChild(div);
}


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

   // Sélectionnez les liens <a> dans la box (ou autre élément, ajustez le sélecteur en conséquence)
   const linksInBox = document.querySelectorAll('.box-container-sub-title .box-sub-title a');
   linksInBox.forEach(link => {
      link.setAttribute('href', "howtoaccess.html");
   });

   // Sélectionnez la balise <section>
   const sectionElement = document.querySelector('section');

   if (sectionElement) {
      // Modifiez le style de la balise <section> pour l'afficher en "flex"
      sectionElement.style.display = 'flex';
   }
}
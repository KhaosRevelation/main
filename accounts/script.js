// Vérifier si l'URL commence par "https://khaosrevelation.github.io/"
if (window.location.href.startsWith("https")) {
   console.log("changed");
  
  // Sélectionnez les balises <link> par leur attribut rel
   var styleLink = document.querySelector('link[rel="stylesheet"][href="/style.css"]');
   var searchbarStyleLink = document.querySelector('link[rel="stylesheet"][href="/searchbar.css"]');
   var faviconLink = document.querySelector('link[rel="icon"][href="/img/icon.ico"]');

   // Vérifiez si les balises <link> ont été trouvées
   if (styleLink && searchbarStyleLink && faviconLink) {
   // Modifiez les attributs href selon vos besoins
      styleLink.href = '/main/style.css'; // Nouveau chemin pour le style
      searchbarStyleLink.href = '/main/searchbar.css'; // Nouveau chemin pour le searchbar
      faviconLink.href = '/main/img/icon.ico'; // Nouveau chemin pour le favicon
   }

   // Sélectionnez tous les éléments <div> avec une classe "game"
   var divElements = document.querySelectorAll("div.game");

   // Parcourez chaque élément <div>
   divElements.forEach(function(element) {
   // Obtenez le style en ligne de l'élément
   var inlineStyle = element.getAttribute("style");

   // Utilisez une expression régulière pour extraire l'URL réelle
   var match = inlineStyle.match(/background-image:\s?url\(['"]?([^'"\)]+)['"]?\)/);

   // Vérifiez si la correspondance est trouvée
   if (match) {
      // Obtenez l'URL réelle à partir de la correspondance
      var imageUrl = match[1];

      // Ajoutez "/main" au début de l'URL
      imageUrl = "/main" + imageUrl;

      // Créez une nouvelle valeur de style en ligne
      var newInlineStyle = "background-image: url('" + imageUrl + "');";

      // Remplacez l'ancienne valeur de style par la nouvelle
      element.setAttribute("style", newInlineStyle);
      }
   });

   var aElement = document.querySelector("header a");

   // Vérifiez si la balise <a> a été trouvée
   if (aElement) {
   // Nouvelle valeur pour l'attribut href
   var newHrefValue = "/main/accounts.html"; // Remplacez par l'URL souhaitée

   // Modifiez l'attribut href avec la nouvelle valeur
   aElement.setAttribute("href", newHrefValue);
   }
}
else{
   var aElement = document.querySelector("header a");

   // Vérifiez si la balise <a> a été trouvée
   if (aElement) {
   // Nouvelle valeur pour l'attribut href
   var newHrefValue = "/accounts.html"; // Remplacez par l'URL souhaitée

   // Modifiez l'attribut href avec la nouvelle valeur
   aElement.setAttribute("href", newHrefValue);
   }
}
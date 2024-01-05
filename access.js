
// function CreateHTML(){
//    // Crée la structure HTML
//    const containerDiv = document.createElement('div');
//    containerDiv.classList.add('container-arrivage');

//    const boxDiv = document.createElement('div');
//    boxDiv.classList.add('box-arrivage');

//    const h1 = document.createElement('h1');
//    h1.textContent = "Il semble que c'est la première fois que tu viens sur ce site";
//    h1.style.textAlign = 'center';
//    h1.style.marginTop = '20px';

//    const p = document.createElement('p');
//    p.textContent = "Pour accéder au site, vous devez regarder entièrement la vidéo (45 secondes) qui explique comment accéder aux différents leaks du site (le bouton devient vert quand c'est terminé)";
//    p.style.width = '90%';
//    p.style.textAlign = 'center';
//    p.style.marginTop = '15px';
//    p.style.fontSize = '18px';
//    p.style.color = 'red';

//    const video = document.createElement('video');
//    video.id = 'video';
//    video.controls = true;
//    video.classList.add('videoAccess');

//    const source = document.createElement('source');
//    source.src = 'video/explication.mp4';
//    source.type = 'video/mp4';

//    const fallbackText = document.createElement('p');
//    fallbackText.textContent = "Votre navigateur ne prend pas en charge les vidéos. Merci donc de bien vouloir lire cet article ";
//    const link = document.createElement('a');
//    link.href = 'howtoaccess.html';
//    link.textContent = 'Comment y accéder ?';
//    fallbackText.appendChild(link);

//    const button = document.createElement('input');
//    button.style.borderRadius = '15px';
//    button.type = 'button';
//    button.value = "Accéder au site";
//    button.classList.add('buttonAccess');
//    button.disabled = true;

//    video.appendChild(source);
//    containerDiv.appendChild(boxDiv);
//    boxDiv.appendChild(h1);
//    boxDiv.appendChild(p);
//    boxDiv.appendChild(video);
//    boxDiv.appendChild(button);

//    // Insère la structure générée juste après la balise <body>
//   document.body.insertAdjacentElement('afterbegin', containerDiv);

//    containerDivControl()
// }

// function containerDivControl(){
//    // Obtenir l'élément vidéo
//    var video = document.getElementById('video');
//    var boutonClique = document.querySelector('input[type="button"]');
//    var lastTime = 0;

//    // Ajouter un gestionnaire d'événement timeupdate pour activer le bouton
//    video.addEventListener('timeupdate', function(event) {
//       // Vérifier si la vidéo a été changée manuellement
//       if (Math.abs(video.currentTime - lastTime) > 1) {
//          video.currentTime = lastTime;
//       } else {
//          lastTime = video.currentTime;
//       }
//       if (event.detail === 2) {
//          // Empêcher la vidéo de se déplacer rapidement
//          video.pause();
//          video.currentTime = currentPosition;
//          video.play();
//       }
//       if (video.currentTime >= 42) {
//          boutonClique.removeAttribute('disabled');
//          boutonClique.style.backgroundColor = 'green';
//          boutonClique.style.cursor = "pointer";
//       }

//       if (video.currentTime >= 45) {
//          video.pause();
//          video.currentTime = 0; // Remettre la vidéo au début
//          lastTime = 0;
//       }
//    });

//    // Fonction appelée lorsque la vidéo est terminée
//    function videoTerminee() {
//       video.pause();
//       video.currentTime = 0; // Remettre la vidéo au début
//       boutonClique.removeAttribute('disabled');
//    }

//    // Écouter l'événement 'ended' de la vidéo
//    video.addEventListener('ended', videoTerminee);

//    // Ajouter un gestionnaire d'événement clic pour le bouton
//    var boutonClique = document.querySelector('input[type="button"]');
//    boutonClique.addEventListener('click', function() {
//       document.cookie = 'visite=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'; // Expire jamais
//       window.location.reload();
//    });
// }

// function checkCookie(name) {
//    var cookies = document.cookie.split(';');
//    for (var i = 0; i < cookies.length; i++) {
//        var cookie = cookies[i].trim();
//        if (cookie.indexOf(name + '=') === 0) {
//            return true; // Le cookie existe
//        }
//    }
//    return false; // Le cookie n'existe pas
// }

// if (!checkCookie('visite')) {
//    CreateHTML()
// }
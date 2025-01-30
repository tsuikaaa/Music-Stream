document.addEventListener("DOMContentLoaded", function () {

    var playButtons = document.querySelectorAll(".play-btn");
    var infoButtons = document.querySelectorAll(".info-btn");
    var popUp = document.createElement('div');
    popUp.classList.add('popup');
    popUp.innerHTML = `
        <div class="popup-content">
            <button class="close-btn">×</button>
            <h3></h3>
            <p class="artiste"></p>
            <p class="description"></p>
            <p class="date"></p>
            <p class="propriete"></p>
        </div>
    `;
    document.body.appendChild(popUp);

var openFormBtn = document.getElementById("open-form-btn");
var closeFormBtn = document.getElementById("close-form-btn");
var formPopup = document.getElementById("form-popup");
var submitForm = document.getElementById("submitForm");

var sectionContainer = document.getElementById("section-container"); 
openFormBtn.addEventListener("click", function () {
    formPopup.style.display = "block";
});
closeFormBtn.addEventListener("click", function () {
    formPopup.style.display = "none";
});

document.getElementById("resetForm").addEventListener("click", function () {
    document.getElementById("music-form").reset();
});

submitForm.addEventListener("click", function (event) {
    event.preventDefault(); 

    var titre = document.getElementById("titre").value;
    var artiste = document.getElementById("artiste").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var audioLink1 = document.getElementById("audioLink1").files[0] ? URL.createObjectURL(document.getElementById("audioLink1").files[0]) : "";
    var audioLink2 = document.getElementById("audioLink2").value;
    var audioLink3 = document.getElementById("audioLink3").value;
    var audioLink4 = document.getElementById("audioLink4").value;
    var musicImage = document.getElementById("musicImage").files[0] ? URL.createObjectURL(document.getElementById("musicImage").files[0]) : "";

    var newSection = document.createElement("section");

    newSection.innerHTML = `
<section>
    <img src="${musicImage}" alt="Album cover">
    <div class="content-wrapper">
        <h3>${titre}</h3>
        <div class="buttons">
            <audio id="audio1" src="${audioLink1}" type="audio/mpeg"></audio>
            <button class="play-btn" data-audio-id="audio1" data-playing="false">⏵ Play</button>
            <span class="current-time">0:00</span>
            <div class="icons-container">
                <a href="${audioLink2}" target="_blank">
                    <img src="img/spotify.png" alt="Écouter sur Spotify" class="spotify-link">
                </a>
                <a href="${audioLink3}" target="_blank">
                    <img src="img/youtube-music.png" alt="Écouter sur YouTube Music" class="youtube-link">
                </a>
                <a href="${audioLink4}" target="_blank">
                    <img src="img/apple-music.png" alt="Écouter sur Apple Music" class="applemusic-link">
                </a>
            </div>
        </div>
        <button class="info-btn">+</button>
    </div>
</section>
`;


    sectionContainer.appendChild(newSection);

    var playButton = newSection.querySelector(".play-btn");
    var audio = newSection.querySelector("audio");
    var infoButton = newSection.querySelector(".info-btn");

    // Fonction pour gérer la lecture de la musique
    playButton.addEventListener("click", function () {
        var isPlaying = playButton.getAttribute("data-playing") === "true";

        if (isPlaying) {
            audio.pause();
            playButton.setAttribute("data-playing", "false");
            playButton.textContent = "⏵ Play";
        } else {
            audio.play();
            playButton.setAttribute("data-playing", "true");
            playButton.textContent = "⏸ Pause";
        }
    });

    // Fonction pour afficher/masquer les informations de la musique
    infoButton.addEventListener("click", function () {
        popUp.querySelector("h3").textContent = titre;
        popUp.querySelector(".artiste").textContent = "Artiste: " + artiste;
        popUp.querySelector(".description").textContent = "Description: " + description;
        popUp.querySelector(".date").textContent = "Date: " + date;
        popUp.style.display = "block";
    });

    // Gestion du bouton de fermeture de la popup
    popUp.querySelector(".close-btn").addEventListener("click", function () {
        popUp.style.display = "none";
    });

    formPopup.style.display = "none";

    var confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'Musique ajoutée avec succès! Vous pouvez maintenant continuer à naviguer.';
    confirmationMessage.style.color = '#121212';
    confirmationMessage.style.position = 'fixed';
    confirmationMessage.style.top = '20px';
    confirmationMessage.style.left = '50%';
    confirmationMessage.style.transform = 'translateX(-50%)';
    confirmationMessage.style.padding = '10px 20px';
    confirmationMessage.style.backgroundColor = 'white';
    confirmationMessage.style.borderRadius = '5px';
    confirmationMessage.style.zIndex = '1000';
    confirmationMessage.style.opacity = '0';
    confirmationMessage.style.transition = 'opacity 0.5s ease-in-out';

    document.body.appendChild(confirmationMessage);

    setTimeout(function() {
        confirmationMessage.style.opacity = '1';
    }, 10);

    setTimeout(function() {
        confirmationMessage.style.opacity = '0';
    }, 2000);

    setTimeout(function() {
        document.body.removeChild(confirmationMessage);
    }, 2500);
});



    

    var footerButtons = document.querySelectorAll(".popup-btn");
    var popUpFooter = document.createElement('div');
    popUpFooter.classList.add('popup');
    var popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    var closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.textContent = "×";

    var title = document.createElement('h3');
    var description = document.createElement('p');
    popupContent.appendChild(closeButton);
    popupContent.appendChild(title);
    popupContent.appendChild(description);
    popUpFooter.appendChild(popupContent);
    document.body.appendChild(popUpFooter);

    closeButton.addEventListener('click', function () {
        popUpFooter.style.display = 'none';
    });

    footerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var buttonId = button.id;

            switch (buttonId) {
                case 'mentions-legales':
    title.textContent = "Mentions légales";
    description.innerHTML = `
    <h3>Éditeur du site :</h3>
    <p><strong>Nom :</strong> ALI Suhita</p>
    <p><strong>Adresse :</strong> 43 Rue Théophile Gaubert, 93330 Neuilly-sur-Marne, France</p>
    <p><strong>Email :</strong> <a href="mailto:suhita2501@gmail.com">suhita2501@gmail.com</a></p>
    <p><strong>Téléphone :</strong> +33 7 60 50 98 64</p>
    <h3>Propriété intellectuelle :</h3>
    <p>Tous les contenus présents sur ce site (textes, images, vidéos, etc.) sont protégés par les droits d’auteur. Toute reproduction ou utilisation sans autorisation écrite est interdite.</p>
    <p><strong>Hébergeur :</strong> Université Gustave Eiffel <br>5 Bd Descartes, 77420 Champs-sur-Marne, France</p>
    <p>Téléphone : +33 1 60 95 75 00</p>
    <p>Ce site web est prévu dans le cadre d'un projet scolaire.</p>
    `;
 
    popUpFooter.classList.add('.pop-up-container');
    break;


                case 'politique-confidentialite':
                    title.textContent = "Politique de confidentialité";
                    description.innerHTML = `
                    <p><strong>Dernière mise à jour :</strong> 2025</p>
                            <p>Nous respectons la vie privée de nos utilisateurs et nous nous engageons à protéger les informations personnelles que vous nous fournissez.</p>`;
                    break;

                    case 'credits':
    title.textContent = "Crédits";
    description.innerHTML = `
    <div id="credits-content">
        <h2>Chasing That Feeling (English Ver. – Digital Only)</h2>
        <p>Performed by TOMORROW X TOGETHER</p>
        <p>Written by Antonina Armato, Thomas Sturges, Tim James</p>
        <p>Produced by Rock Mafia</p>
        <p>Source: Republic Records - TXT, Budde Music Publishing, Downtown Music Publishing</p><br>

        <h2>Moonstruck</h2>
        <p>Performed by ENHYPEN</p>
        <p>Written by "hitman" bang, Chris Collins, Koda, Slow Rabbit, Su Ji Kim (lalala studio), Yeo Jin Jang (lalala studio), true(153/Joombas)</p>
        <p>Produced by Slow Rabbit</p>
        <p>Source: BELIFT LAB, HYBE Co., Ltd.</p><br>

        <h2>Ruler of My Heart (VIVINOS - ALNST Original Soundtrack Part.5)</h2>
        <p>Performed by BL8M, Rubyeye</p>
        <p>Written by STUDIO LICO</p>
        <p>Produced by -</p>
        <p>Source: STUDIO LICO</p><br>

        <h2>La vaguelette</h2>
        <p>Performed by Cécilia Cara, HOYO-MiX</p>
        <p>Written by HOYO-MiX</p>
        <p>Produced by -</p>
        <p>Source: miHoYo</p><br>

        <h2>ZERO MOMENT (Sung by HEESEUNG, JAY, JAKE) (Prod. tearliner)</h2>
        <p>Performed by ENHYPEN</p>
        <p>Written by liner, Sentimental Scenery</p>
        <p>Produced by Tearliner</p>
        <p>Source: GENIE MUSIC, Onesta Company</p>
    </div>
    `;
    break;



                default:
                    title.textContent = "";
                    description.innerHTML = "";
                    break;
            }

            popUpFooter.style.display = 'block';
        });
    });

    var musicList = document.getElementById("musicList");
    var musicForm = document.getElementById("music-form");

    document.getElementById("submitForm").addEventListener("click", function (event) {
        event.preventDefault();

        var titre = document.getElementById("titre").value;
        var artiste = document.getElementById("artiste").value;
        var description = document.getElementById("description").value;
        var date = document.getElementById("artiste").value;
        var audioLink2 = document.getElementById("audioLink2").value;
        var audioLink3 = document.getElementById("audioLink3").value;
        var audioLink4 = document.getElementById("audioLink4").value;
        var musicImage = document.getElementById("musicImage").files[0];

        if (!titre || !artiste || !description) {
            alert("Tous les champs obligatoires doivent être remplis.");
            return;
        }

        var musicItem = document.createElement("li");
        musicItem.classList.add("music-item");

        var musicImageUrl = musicImage ? URL.createObjectURL(musicImage) : "default_image.jpg";
        musicItem.innerHTML = `
            <div class="music-info">
                <img src="${musicImageUrl}" alt="${titre}">
                <div class="music-details">
                    <h3>${titre}</h3>
                    <p>Artiste: ${artiste}</p>
                    <p>${description}</p>
                    <p>Date: ${date}</p>
                    <div class="links">
                        <a href="${audioLink2}" target="_blank">Spotify</a>
                        <a href="${audioLink3}" target="_blank">YouTube Music</a>
                        <a href="${audioLink4}" target="_blank">Apple Music</a>
                    </div>
                </div>
                <button class="delete-btn">X</button>
            </div>
        `;

        musicList.appendChild(musicItem);

        musicForm.reset();
        formPopup.style.display = "none";

        musicItem.querySelector(".delete-btn").addEventListener("click", function () {
            musicItem.remove();
        });
    });


    fetch('musiques.json')
        .then(response => response.json())
        .then(data => {
            infoButtons.forEach((button, index) => {
                button.addEventListener("click", function () {
                    var musique = data[index];
                    var popupContent = popUp.querySelector('.popup-content');
                    popupContent.querySelector('h3').textContent = musique.musique;
                    popupContent.querySelector('.artiste').textContent = "Artiste : " + musique.artiste;
                    popupContent.querySelector('.description').textContent = "Description : " + musique.descriptionMusicale;
                    popupContent.querySelector('.date').textContent = "Date : " + musique.date;
                    

                    popUp.style.display = 'block';
                });
            });

            popUp.querySelector('.close-btn').addEventListener('click', function () {
                popUp.style.display = 'none';
            });

            playButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    var audioId = button.getAttribute("data-audio-id");
                    var audioElement = document.getElementById(audioId);

                    var isPlaying = button.getAttribute("data-playing") === "true";

                    document.querySelectorAll("audio").forEach(function (audio) {
                        audio.pause();
                        audio.currentTime = 0; 
                    });

                    document.querySelectorAll(".play-btn").forEach(function (btn) {
                        btn.textContent = "⏵ Play";
                        btn.setAttribute("data-playing", "false");
                    });

                    if (isPlaying) {
                        audioElement.pause();
                        button.textContent = "⏵ Play";
                        button.setAttribute("data-playing", "false");
                    } else {
                        audioElement.play();
                        button.textContent = "⏸ Pause";
                        button.setAttribute("data-playing", "true");


                        var currentTimeElement = button.nextElementSibling;
                        audioElement.addEventListener("timeupdate", function () {
                            var minutes = Math.floor(audioElement.currentTime / 60);
                            var seconds = Math.floor(audioElement.currentTime % 60);
                            currentTimeElement.textContent =
                                minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
                        });
                    }
                });
            });
        })
        .catch(error => console.error("Erreur lors du chargement des données JSON :", error));
});

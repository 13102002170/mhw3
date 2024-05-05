// Nome: Stefano 
// Cognome: Caramagno 
// Matricola: 1000038343 
// Email Istituzionale: CRMSFN02R13I754M@studium.unict.it 

// Pulsante Mondo dell'Header
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('mondo-modale');
  
    var btn = document.getElementById("icona_mondo_a_griglia");
  
    btn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    var span = document.getElementsByClassName("pulsante-chiusura-mondo")[0];
  
    span.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
});

// Barra Lingua Regione e Valuta dell'Header
document.addEventListener("DOMContentLoaded", function() {
    var initialContent = document.getElementById('contenuto1-pulsante-barra-lingua-regione-valuta');
    if (initialContent) {
        initialContent.classList.add('active');
    }
});

function toggleContent(contentId) {
    var contents = document.querySelectorAll('.flex-container2-header');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');

    var buttons = document.querySelectorAll('.pulsante-barra-lingua-regione-valuta');
    buttons.forEach(function(button) {
        button.style.fontWeight = 'normal';
    });
    var selectedButton = document.getElementById('pulsante-' + contentId);
    selectedButton.style.fontWeight = 'bold';
}

document.addEventListener('DOMContentLoaded', function() {
    var firstContentId = 'contenuto1-pulsante-barra-lingua-regione-valuta';
    toggleContent(firstContentId);
});

// Menu a Tendita dell'Header
document.addEventListener("DOMContentLoaded", function() {
    var dropdownMenu = document.getElementById("menu-a-tendina-header");
    var dropdownContent = document.getElementById("contenuto-menu-a-tendina-header");

    dropdownMenu.addEventListener("click", function() {
        dropdownContent.classList.toggleContent("show");
    });

    window.addEventListener("click", function(event) {
        if (!dropdownMenu.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

// Pulsante Autenticazione dell'Header
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("autenticazione-modale");

    var span = document.getElementsByClassName("pulsante-chiusura-autenticazione")[0];

    document.querySelector('.cuore-sovrapposto').addEventListener('click', function(event) {
        modal.style.display = "block";
        event.preventDefault(); 
    });

    document.getElementById('pulsante-accedi').addEventListener('click', function(event) {
        modal.style.display = "block";
        event.preventDefault(); 
    });

    document.getElementById('pulsante-registrati').addEventListener('click', function(event) {
        modal.style.display = "block";
        event.preventDefault(); 
    });

    span.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

// Barra di Scorrimento della Nav Bar
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('flex-container1-nav-section2');
    var leftButton = document.getElementById('pulsante-scorrimento-a-sinistra');
    var rightButton = document.getElementById('pulsante-scorrimento-a-destra');
    var scrollStep = 750; 

    leftButton.addEventListener('click', function() {
        var currentPosition = container.scrollLeft;
        var newPosition = currentPosition - scrollStep;

        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', function() {
        var currentPosition = container.scrollLeft;
        var newPosition = currentPosition + scrollStep;
        var maxScroll = container.scrollWidth - container.clientWidth;

        if (newPosition > maxScroll) {
            newPosition = maxScroll;
        }
        
        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    });
});

// Pulsante Filtri della Nav Bar
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('filtri-modale');
  
    var btn = document.getElementById("pulsante-filtri");
  
    btn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    var span = document.getElementsByClassName("pulsante-chiusura-filtri")[0];
  
    span.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
});

// Pulsante Mostra la Mappa del Main Content
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('mappa-modale');
  
    var btn = document.getElementById("pulsante-mostra-la-mappa-main");
  
    btn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    var span = document.getElementsByClassName("pulsante-chiusura-mappa")[0];
  
    span.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
});

// Barra di Ispirazione Viaggi del Footer
document.addEventListener("DOMContentLoaded", function() {
    var initialContent = document.getElementById('contenuto1-pulsante-barra-ispirazione-viaggi');
    if (initialContent) {
        initialContent.classList.add('active');
    }
});

function toggleContent(contentId) {
    var contents = document.querySelectorAll('.flex-container-footer-section1');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');

    var buttons = document.querySelectorAll('.pulsante-barra-ispirazione-viaggi');
    buttons.forEach(function(button) {
        button.style.fontWeight = 'normal';
    });
    var selectedButton = document.getElementById('pulsante-' + contentId);
    selectedButton.style.fontWeight = 'bold';
}

document.addEventListener('DOMContentLoaded', function() {
    var firstContentId = 'contenuto1-pulsante-barra-ispirazione-viaggi';
    toggleContent(firstContentId);
});

// Mostra Altro del Contenuto della di Barra di Ispirazione Viaggi del Footer
document.addEventListener("DOMContentLoaded", function() {
    
    const toggleButton = document.getElementById("pulsante-mostra-altro-footer");
    const hiddenElements = document.querySelectorAll(".lista-visibile .elemento-nascosto");
    
    toggleButton.addEventListener("click", function() {

        hiddenElements.forEach(function(element) {
            element.classList.toggle("elemento-nascosto");
        });

        toggleButton.style.display = "none";
    });
});
  
// Funzione API Google Maps
document.addEventListener("DOMContentLoaded", function() {
    const center = { lat: 37.7749, lng: -122.4194 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14, 
        center: center, 
    });
    const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "San Francisco",
    });
});

// Funzione API Google Authenticator
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
    const token = response.credential;
    const decoded = parseJwt(token); // decode -> responsePayload

    /* Stampiamo l'intero oggetto */
    console.log(decoded);

    /* Stampiamo gli attributi che ci interessano */
    console.log("ID: " + decoded.sub);
    console.log('Full Name: ' + decoded.name);
    console.log('Given Name: ' + decoded.given_name);
    console.log('Family Name: ' + decoded.family_name);
    console.log("Image URL: " + decoded.picture);
    console.log("Email: " + decoded.email);
}

const projectsData = {
  "1": {
    title: "Interaktywny Globus 3D",
    image: "https://placehold.co/800x500", // Tutaj wstaw główny screen globusa
    description: "Interaktywna aplikacja 3D stworzona w technologii webowej. Projekt wykorzystuje bibliotekę Three.js do renderowania kuli ziemskiej w czasie rzeczywistym. Główną funkcjonalnością jest możliwość kliknięcia w oznaczone miejsce na globusie, aby odczytać i wyświetlić dokładne współrzędne geograficzne wybranego punktu.",
    category: "Three.js / Globus",
    date: "2025",
    tools: "Three.js, JavaScript, HTML5",
    client: "Projekt własny",
    demoUrl: "https://6949d81b37c470ee3de569d6--storied-belekoy-7610eb.netlify.app/",
    gallery: [
      "renderd6.png", 
      "renderd10.png"
    ]
  },
  "2": {
    title: "Animacja walki",
    image: "https://placehold.co/800x500",
    description: "Kompleksowa animacja walki wręcz wykonana w Maya i zaimplementowana w Unity.",
    category: "Animacja",
    date: "Sierpień 2023",
    tools: "Maya, Unity",
    client: "Action Games Inc.",
    gallery: []
  },
  "3": {
    title: "Wizualizacja architektoniczna",
    image: "https://placehold.co/800x500",
    description: "Fotorealistyczna wizualizacja nowoczesnego apartamentowca w centrum miasta.",
    category: "Wizualizacja",
    date: "Maj 2023",
    tools: "3ds Max, V-Ray, Photoshop",
    client: "Architektura Plus",
    gallery: []
  },
  "4": {
    title: "Model pojazdu",
    image: "https://placehold.co/800x500",
    description: "High-poly model koncepcyjnego pojazdu przyszłości z pełnym teksturowaniem.",
    category: "Modelowanie",
    date: "Lipiec 2023",
    tools: "Blender, Substance Painter",
    client: "FutureTech Motors",
    gallery: []
  },
  "5": {
    title: "Animacja produktu",
    image: "https://placehold.co/800x500",
    description: "Animacja reklamowa prezentująca nowy model smartfona.",
    category: "Animacja",
    date: "Wrzesień 2023",
    tools: "Cinema 4D, Redshift",
    client: "TechBrand",
    gallery: []
  },
  "6": {
    title: "Wizualizacja krajobrazu",
    image: "https://placehold.co/800x500",
    description: "Cyfrowa rekonstrukcja prehistorycznego krajobrazu na potrzeby muzeum.",
    category: "Wizualizacja",
    date: "Kwiecień 2023",
    tools: "Blender, Unreal Engine 5",
    client: "Muzeum Historii Naturalnej",
    gallery: []
  }
};

// Funkcja pobierająca ID z adresu URL (np. ?id=1)
function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Główna funkcja ładująca treść
function loadProject() {
    const id = getProjectId();
    if (!id || !projectsData[id]) return;

    const project = projectsData[id];

    // 1. Uzupełnianie tekstów (Tytuł, Opis)
    const titleEl = document.querySelector(".project-header h1");
    const descEl = document.querySelector(".project-header p");
    const infoDescEl = document.querySelector(".project-info p");
    
    if(titleEl) titleEl.textContent = project.title;
    if(descEl) descEl.textContent = project.description.substring(0, 100) + "..."; // Krótki opis w nagłówku
    if(infoDescEl) infoDescEl.textContent = project.description; // Pełny opis

    // 2. Główne zdjęcie
    const mainImage = document.querySelector(".project-details img");
    if (mainImage) {
        mainImage.src = project.image;
        mainImage.alt = project.title;
    }

    // 3. Specyfikacja (Data, Narzędzia itp.)
    const specs = `
        <ul>
            <li><strong>Data:</strong> ${project.date}</li>
            <li><strong>Kategoria:</strong> ${project.category}</li>
            <li><strong>Klient:</strong> ${project.client}</li>
            <li><strong>Narzędzia:</strong> ${project.tools}</li>
        </ul>`;
    
    const specsContainer = document.querySelector(".project-specs");
    if(specsContainer) specsContainer.innerHTML = "<h3>Specyfikacja</h3>" + specs;

    // 4. PRZYCISK LIVE DEMO (Link do Netlify)
    if (project.demoUrl) {
        const infoContainer = document.querySelector(".project-info");
        
        // Usuwamy stary przycisk jeśli istnieje
        const oldBtn = document.querySelector(".demo-btn-container");
        if(oldBtn) oldBtn.remove();

        const btnContainer = document.createElement("div");
        btnContainer.className = "demo-btn-container";
        btnContainer.style.marginTop = "30px";
        
        btnContainer.innerHTML = `
            <a href="${project.demoUrl}" target="_blank" class="btn btn-primary" style="display:inline-block; text-align:center; padding: 15px 30px; width: 100%;">
                🚀 Zobacz projekt na żywo (Live Demo)
            </a>
        `;
        infoContainer.appendChild(btnContainer);
    }

    // 5. Galeria (Karuzela)
    const galleryContainer = document.getElementById("gallery");
    
    if (galleryContainer) {
        // Czyścimy galerię
        galleryContainer.innerHTML = "";

        if (project.gallery && project.gallery.length > 0) {
            // Dodajemy zdjęcia
            galleryContainer.innerHTML = project.gallery.map(img =>
                `<img src="${img}" alt="${project.title}">`
            ).join("");

            // Logika przewijania
            const track = galleryContainer;
            const prevBtn = document.querySelector(".carousel-btn.prev");
            const nextBtn = document.querySelector(".carousel-btn.next");
            
            // Jeśli są przyciski, dodajemy obsługę
            if(prevBtn && nextBtn) {
                const slides = Array.from(track.children);
                let currentIndex = 0;

                function updateCarousel() {
                    track.style.transform = `translateX(-${currentIndex * 100}%)`;
                }

                // Usuwamy stare listenery (klonując przyciski) żeby się nie dublowały przy przeładowaniu
                const newNextBtn = nextBtn.cloneNode(true);
                const newPrevBtn = prevBtn.cloneNode(true);
                nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
                prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);

                newNextBtn.addEventListener("click", () => {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel();
                });

                newPrevBtn.addEventListener("click", () => {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                    updateCarousel();
                });
            }
        } else {
            galleryContainer.innerHTML = "<p style='padding:20px'>Brak dodatkowych zdjęć w galerii.</p>";
        }
    }
}

// Uruchomienie funkcji tylko jeśli jesteśmy na stronie projektu
if (document.querySelector(".project-header")) {
    loadProject();
}

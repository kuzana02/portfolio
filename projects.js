const projectsData = {
  const projectsData = {
  "1": {
    title: "Interaktywny Globus 3D",
    image: "https://placehold.co/800x500", // Pamiętaj, żeby tu wstawić screena swojego globusa!
    description: "Interaktywna aplikacja 3D stworzona w technologii webowej. Projekt wykorzystuje bibliotekę Three.js do renderowania kuli ziemskiej w czasie rzeczywistym. Główną funkcjonalnością jest możliwość kliknięcia w oznaczone miejsce na globusie, aby odczytać i wyświetlić dokładne współrzędne geograficzne wybranego punktu.",
    category: "Three.js / Globus",
    date: "2025",
    tools: "Three.js, JavaScript, HTML5",
    client: "Projekt własny",
    demoUrl: "https://6949d81b37c470ee3de569d6--storied-belekoy-7610eb.netlify.app/",
    gallery: [
      "renderd6.png", // Tu też warto wrzucić dodatkowe screeny globusa
      "renderd10.png"
    ]
  },
  "2": {
    title: "Animacja walki",
    image: "https://placehold.co/800x500",
    description: "Kompleksowa animacja walki wręcz...",
    category: "Animacja",
    date: "Sierpień 2023",
    tools: "Maya, Unity",
    client: "Action Games Inc.",
    gallery: []
  },
  "3": {
    title: "Wizualizacja architektoniczna",
    image: "https://placehold.co/800x500",
    description: "Fotorealistyczna wizualizacja apartamentowca...",
    category: "Wizualizacja",
    date: "Maj 2023",
    tools: "3ds Max, V-Ray, Photoshop",
    client: "Architektura Plus",
    gallery: []
  },
  "4": {
    title: "Model pojazdu",
    image: "https://placehold.co/800x500",
    description: "High-poly model koncepcyjnego pojazdu...",
    category: "Modelowanie",
    date: "Lipiec 2023",
    tools: "Blender, Substance Painter",
    client: "FutureTech Motors",
    gallery: []
  },
  "5": {
    title: "Animacja produktu",
    image: "https://placehold.co/800x500",
    description: "Animacja prezentująca nowy smartfon...",
    category: "Animacja",
    date: "Wrzesień 2023",
    tools: "Cinema 4D, Redshift",
    client: "TechBrand",
    gallery: []
  },
  "6": {
    title: "Wizualizacja krajobrazu",
    image: "https://placehold.co/800x500",
    description: "Cyfrowa rekonstrukcja krajobrazu...",
    category: "Wizualizacja",
    date: "Kwiecień 2023",
    tools: "Blender, Unreal Engine 5",
    client: "Muzeum Historii Naturalnej",
    gallery: []
  }
};

// Załóżmy że chcesz otworzyć projekt 1
const project = projectsData["1"];

const galleryContainer = document.getElementById("gallery");

if (galleryContainer && project.gallery && project.gallery.length > 0) {
    galleryContainer.innerHTML = project.gallery.map(img =>
        `<img src="${img}" alt="${project.title}">`
    ).join("");

    const track = galleryContainer;
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const slides = Array.from(track.children);
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });
}

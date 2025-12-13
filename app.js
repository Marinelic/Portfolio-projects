 
 const projects = [
            {
                title: "Verduras - Vegan restaurant",
                description: "Landing page with React and Tailwind",
                image: "assets/verduras.png",
                url: "https://verduras-vegan-restaurant-8vfm.vercel.app/",
            },

            {
                title: "MoonBank - Banking web app",
                description: "Landing page with React and Tailwind",
                image: "assets/moonBank.png",
                url: "https://moon-bank-se1v.vercel.app/",
            },

            {
                title: "BlueSky Dental - Dental page",
                description: "Landing page with React and Tailwind",
                image: "assets/dental.png",
                url: "https://dental-nh1v.vercel.app/",
            },

            {
                title: "Weather App",
                description: "Weather app built with React, Vite, Tailwind CSS, and Framer Motion",
                image: "assets/weather.png",
                url: "https://weather-app-one-kappa-66.vercel.app/",
            },

            {
                title: "Twitter Clone App",
                description: "Built with React, Tailwind and connected to MockAPI",
                image: "assets/twitterClone.png",
                url: "https://twitter-clone-eosin-rho.vercel.app/",
            },

            {
                title: "Comida - Grocery mini app",
                description: "HTML, CSS, Vanilla JavaScript and Firebase Realtime Database",
                image: "assets/groceryApp.png",
                url: "https://grocery-app-eight-gamma.vercel.app/",
            },

            {
                title: "Blackjack Game",
                description: "Built with HTML, CSS, and vanilla JavaScript",
                image: "assets/blackjackGame.png",
                url: "https://blackjack-game-bice.vercel.app/",
            },
        ];

    const projectsContainer = document.getElementById("projects");

    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className =
            "overflow-hidden rounded-2xl border border-[#B9B350] bg-white/5 shadow";

    card.innerHTML = `
        <img
            src="${project.image}"
            alt="Screenshot od ${project.title}"
            class="h-44 w-full object-contain"
            loading="lazy"       
        />

        <div class="p-5">
            <h2 class="text-lg font-semibold text-center">${project.title}</h2>
            <p class="mt-1 text-sm text-slate-300 text-center">${project.description}</p>
            
            <a
                href="${project.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#AAA873] px-4 py-2.5 texr-sm font-semibold text-white hover:bg-[#B9B350]"
            >
                View project
            </a>
        </div>
    `

    projectsContainer.appendChild(card);
});
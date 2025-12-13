 
 const projects = [
            {
                title: "Project One",
                description: "Landing page with Tailwind",
                image: "assets/Verduras.png",
                url: "https://project-one.vercel.app",
            },

            {
                title: "Project One",
                description: "Landing page with Tailwind",
                image: "images/project-1.png",
                url: "https://project-one.vercel.app",
            },

            {
                title: "Project One",
                description: "Landing page with Tailwind",
                image: "images/project-1.png",
                url: "https://project-one.vercel.app",
            },

            {
                title: "Project One",
                description: "Landing page with Tailwind",
                image: "images/project-1.png",
                url: "https://project-one.vercel.app",
            },

            {
                title: "Project One",
                description: "Landing page with Tailwind",
                image: "images/project-1.png",
                url: "https://project-one.vercel.app",
            },

            {
                title: "Project One",
                description: "Landing page with Tailwind",
                image: "images/project-1.png",
                url: "https://project-one.vercel.app",
            },
        ];

    const projectsContainer = document.getElementById("projects");

    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className =
            "overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow";

    card.innerHTML = `
        <img
            src="${project.image}"
            alt="Screenshot od ${project.title}"
            class="h-44 w-full object-cover"
            loading="lazy"       
        />

        <div class="p-5">
            <h2 class="text-lg font-semibold">${project.title}</h2>
            <p class="mt-1 text-sm text-slate-300">${project.description}</p>
            
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
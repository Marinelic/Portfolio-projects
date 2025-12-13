 
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
            class=""
            loading="lazy"       
        />

        <div>
            <h2>${project.title}</h2>       
        </div>
    `

    projectsContainer.appendChild(card);
});
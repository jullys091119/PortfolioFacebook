function PortfolioTabs() {
    const headerDiv = document.createElement("header");
    headerDiv.classList.add("portfolio-tabs-header");

    const headerNav = document.createElement("nav");
    headerNav.classList.add("portfolio-tabs-nav");

    const tabs = [
        { name: "Terminados" },
        { name: "En progreso" },
        { name: "Blog" },
        { name: "Extras" },
        { name: "Contacto" }
    ];

    tabs.forEach((tab, index) => {
        const btn = document.createElement("button");
        btn.textContent = tab.name;
        btn.classList.add("portfolio-tab-btn");
        if (index === 0) btn.classList.add("active");

        btn.addEventListener("click", () => {

            document.querySelectorAll(".portfolio-tab-btn").forEach(b => b.classList.remove("active"));

            btn.classList.add("active");
        });

        headerNav.appendChild(btn);
    });

    headerDiv.appendChild(headerNav); 
    const target = document.querySelector(".portfolio-tabs-header");
    if (target) target.appendChild(headerDiv);
}

export default PortfolioTabs
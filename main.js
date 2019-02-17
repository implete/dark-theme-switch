const toggler = document.getElementById("theme-toggle");

function detectTheme() {
    return localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function activateTheme(theme) {
    let targetTheme = theme || detectTheme();
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
}

function switchTheme() {
    const reverseTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    activateTheme(reverseTheme);
}

activateTheme();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => e.matches && switchTheme());
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => e.matches && switchTheme());
toggler.addEventListener('click', switchTheme);

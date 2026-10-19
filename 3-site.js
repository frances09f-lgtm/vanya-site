// Change the brand name here only.
const BRAND = { name: "Vanya", tagline: "Eco-printed fabrics", place: "India" };
document.querySelectorAll("[data-brand]").forEach(e => e.textContent = BRAND.name);
document.querySelectorAll("[data-place]").forEach(e => e.textContent = BRAND.place);
document.title = BRAND.name + " | " + BRAND.tagline;
document.getElementById("yr").textContent = new Date().getFullYear();
document.getElementById("menu").onclick = () => document.getElementById("nav").classList.toggle("open");

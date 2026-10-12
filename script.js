// Configure o telefone comercial abaixo no formato internacional, somente números.
const WHATSAPP_NUMBER = "5534999214295";
const DEFAULT_MESSAGE = "Olá! Gostaria de solicitar um orçamento para higienização de estofados.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
document.querySelectorAll("#whatsapp-cta, #whatsapp-float").forEach(link => link.href = whatsappUrl);
document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const opened = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!opened));
  nav.classList.toggle("open", !opened);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
  observer.observe(el);
});

// A comparação usa imagens ilustrativas; substitua por fotos reais de antes/depois para divulgar resultados reais.

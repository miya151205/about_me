
  //  Transición al hacer clic en enlaces (suave salida)
  const enlaces = document.querySelectorAll("a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      const href = enlace.getAttribute("href");
      // Solo aplica si es un enlace interno (html o con #)
      if (href && (href.endsWith(".html") || href.startsWith("#"))) {
        e.preventDefault();
        document.body.classList.remove("loaded");
        setTimeout(() => {
          window.location.href = href;
        }, 500); // tiempo antes de redirigir
      }
    });
  });

//  Formulario del footer (en index.html)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      alert(`¡Gracias, ${email}! Pronto me pondré en contacto contigo.`);
      form.reset();
});
}
});
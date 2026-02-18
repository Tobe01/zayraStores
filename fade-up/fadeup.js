// Scripts for Fade Up

export function fadeup(){
  const sections = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const index = [...sections].indexOf(el);
        setTimeout(() => {
          el.classList.add('show');
        }, index * 25); // delay based on position
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(el => observer.observe(el));
}

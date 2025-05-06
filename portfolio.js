document.addEventListener("DOMContentLoaded", function() {

    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });

    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);  
            }
        });
    }, {
        threshold: 0.5 
    });

    sections.forEach(section => {
        observer.observe(section);  
    });
});
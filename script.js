// Функция для прокрутки к форме
function scrollToForm() {
    const form = document.getElementById('rent');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

// Функция для отправки формы
function submitForm() {
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
}

// Функция для активного состояния навигации
function setActiveNavItem() {
    const navLinks = document.querySelectorAll('.nav__list a');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavItem();
});




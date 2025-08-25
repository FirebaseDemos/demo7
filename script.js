// Функция прокрутки к форме заявки
function scrollToForm() {
    const form = document.getElementById('rent');
    if (form) {
        form.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Функция отправки формы
function submitForm() {
    // Здесь будет логика отправки формы
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
}

// Карусель для мобильных устройств
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.equipment__carousel');
    const dots = document.querySelectorAll('.carousel__dot');
    const slides = document.querySelectorAll('.equipment__carousel .equipment__item');
    
    if (carousel && dots.length > 0 && slides.length > 0) {
        let currentSlide = 0;
        let autoPlayInterval;
        
        // Функция переключения слайдов
        function showSlide(index) {
            // Убираем активный класс со всех слайдов и точек
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Активируем текущий слайд и точку
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentSlide = index;
        }
        
        // Обработчики кликов по точкам
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetAutoPlay();
            });
        });
        
        // Автоматическое переключение
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                const nextSlide = (currentSlide + 1) % slides.length;
                showSlide(nextSlide);
            }, 4000); // Переключение каждые 4 секунды
        }
        
        function resetAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            }
        }
        
        // Запускаем автопереключение
        startAutoPlay();
        
        // Останавливаем автопереключение при наведении
        carousel.addEventListener('mouseenter', () => {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        });
        
        // Возобновляем автопереключение при уходе мыши
        carousel.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }
});




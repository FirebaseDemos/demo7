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




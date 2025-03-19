document.getElementById('resetPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('resetEmail');
    const errorMessage = document.getElementById('resetErrorMessage');
    const inputGroup = document.querySelector('.input-group'); // Tek bir input-group var

    // Hataları temizle
    inputGroup.classList.remove('input-error');
    errorMessage.classList.remove('alert-danger', 'shake');
    errorMessage.style.display = 'none';

    let error = '';

    // E-posta kontrolü
    if (email.value.trim() === '') {
        error = 'E-posta adresi boş olamaz!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        error = 'Geçersiz e-posta adresi!';
    }

    // Hata gösterimi
    if (error) {
        inputGroup.classList.add('input-error');
        showError(error);
    }
});

function showError(message) {
    const errorMessage = document.getElementById('resetErrorMessage');
    errorMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    errorMessage.classList.add('alert-danger', 'shake');
    errorMessage.style.display = 'block';

    setTimeout(() => {
        errorMessage.classList.remove('shake');
    }, 400);
}

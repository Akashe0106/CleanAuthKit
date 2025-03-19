document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('regUsername');
    const email = document.getElementById('regEmail');
    const password = document.getElementById('regPassword');
    const passwordConfirm = document.getElementById('regPasswordConfirm');
    const errorMessage = document.getElementById('regErrorMessage');
    const inputGroups = document.querySelectorAll('.input-group');

    // Hataları temizle
    inputGroups.forEach(group => group.classList.remove('input-error'));
    errorMessage.classList.remove('alert-danger', 'shake');
    errorMessage.style.display = 'none';

    let error = '';

    // Kullanıcı adı kontrolü
    if (username.value.trim() === '') {
        error = 'Kullanıcı adı boş olamaz!';
    } else if (username.value.length < 3) {
        error = 'Kullanıcı adı en az 3 karakter olmalıdır!';
    }
    // E-posta kontrolü
    else if (email.value.trim() === '') {
        error = 'E-posta adresi boş olamaz!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        error = 'Geçersiz e-posta adresi!';
    }
    // Şifre kontrolü
    else if (password.value.trim() === '') {
        error = 'Şifre boş olamaz!';
    } else if (password.value.length < 8) {
        error = 'Şifre en az 8 karakter olmalıdır!';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password.value)) {
        error = 'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir!';
    }
    // Şifre tekrar kontrolü
    else if (passwordConfirm.value.trim() === '') {
        error = 'Şifre tekrarı boş olamaz!';
    } else if (password.value !== passwordConfirm.value) {
        error = 'Şifreler eşleşmiyor!';
    }


    // Hata gösterimi
    if (error) {
        inputGroups.forEach(group => group.classList.add('input-error'));
        showError(error);
    } // Başarılı kayıt durumunda hiçbir şey yapma (simülasyon yok)
});

function showError(message) {
    const errorMessage = document.getElementById('regErrorMessage');
    errorMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    errorMessage.classList.add('alert-danger', 'shake');
    errorMessage.style.display = 'block';

    setTimeout(() => {
        errorMessage.classList.remove('shake');
    }, 400);
}


// Şifre gösterme/gizleme (Tüm şifre alanları için)
document.querySelectorAll('.btn-password-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const passwordField = this.closest('.input-group').querySelector('input[type="password"], input[type="text"]');
        const icon = this.querySelector('i');

        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            passwordField.type = 'password';
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});
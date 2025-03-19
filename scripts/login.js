document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const inputGroups = document.querySelectorAll('.input-group');
    
    // Hataları temizle
    inputGroups.forEach(group => group.classList.remove('input-error'));
    errorMessage.classList.remove('alert-danger', 'shake');
    errorMessage.style.display = 'none';

    // Simülasyon: Her zaman hata göster
    let error = '';
    if(username.value.trim() === '' || password.value.trim() === '') {
        error = 'Lütfen tüm alanları doldurun!';
    } else {
        error = 'Kullanıcı adı/şifre hatalı!';
    }
    
    // Hata gösterimi
    if(error) {
        inputGroups.forEach(group => group.classList.add('input-error'));
        showError(error);
    }
});

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    errorMessage.classList.add('alert-danger', 'shake');
    errorMessage.style.display = 'block';
    
    setTimeout(() => {
        errorMessage.classList.remove('shake');
    }, 400);
}

document.querySelector('.btn-password-toggle').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const icon = this.querySelector('i');
    
    if(passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
});
// Formu ve ilgili öğeleri seç
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Form gönderildiğinde
form.addEventListener('submit', function(event) {
    // Formun varsayılan davranışını engelle
    event.preventDefault();

    // Veritabanı veya sunucuya gönderilecek işlemler burada yapılabilir.
    // Örnek olarak form verilerini konsola yazdırıyoruz
    console.log('Ad:', nameInput.value);
    console.log('E-posta:', emailInput.value);
    console.log('Mesaj:', messageInput.value);

    // Geri bildirim mesajı
    alert('Mesajınız başarıyla gönderildi!');

    // Formu sıfırlama (isteğe bağlı)
    form.reset();
});
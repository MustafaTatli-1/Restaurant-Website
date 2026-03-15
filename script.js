// 1. Bilgisayara "yazı" sınıfına sahip her şeyi bul diyoruz
const tumYazilar = document.querySelectorAll('.yazi');
let sira = 0; // Şu an kaçıncı yazıda olduğumuzu tutan sayaç

// 2. Bir döngü kuruyoruz (setInterval = her X saniyede bir yap)
setInterval(() => {
    // Önce o an görünür olan yazıdan 'active' ismini geri alıyoruz
    tumYazilar[sira].classList.remove('active');

    // Sayacı bir artırıyoruz (Eğer son yazıdaysak başa dön: % işareti bu işe yarar)
    sira = (sira + 1) % tumYazilar.length;

    // Yeni sıradaki yazıya 'active' ismini veriyoruz
    tumYazilar[sira].classList.add('active');
}, 5000); // 5000 milisaniye = 5 saniye




const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Aktif buton değişimi
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        menuItems.forEach(item => {
            // Animasyon başlangıcı
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            }, 300);
        });
    });
});
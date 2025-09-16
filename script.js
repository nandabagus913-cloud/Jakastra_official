document.addEventListener("DOMContentLoaded", function() {
    
    // Solusi yang lebih kuat untuk mengatasi masalah gulir saat reload
    // Baris ini akan memaksa halaman untuk selalu dimulai dari atas
    window.location.hash = '';

    // Fungsi untuk mengaktifkan fungsionalitas burger menu
    function setupHamburgerMenu() {
        const hamburger = document.querySelector(".hamburger-menu");
        const navMenu = document.querySelector(".nav-menu");

        // Ketika tombol burger diklik, tambahkan atau hapus class 'active'
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Ketika link navigasi di dalam menu diklik, tutup menu
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // Fungsi untuk mengelola animasi saat elemen muncul di viewport
    function setupScrollAnimations() {
        // Pilih semua elemen yang akan dianimasikan
        const animatedElements = document.querySelectorAll(
            ".section-title, .section-text, .member-card, .project-card, .contact-links-container"
        );

        const observerOptions = {
            root: null, // Menggunakan viewport sebagai root
            threshold: 0.2, // Elemen akan terpicu saat 20% terlihat
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Tambahkan class 'show' untuk memulai animasi CSS
                    entry.target.classList.add("show");
                    // Hentikan pengamatan setelah animasi dimulai
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Amati setiap elemen
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Panggil kedua fungsi saat halaman selesai dimuat
    setupHamburgerMenu();
    setupScrollAnimations();
});
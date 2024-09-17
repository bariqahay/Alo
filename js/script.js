let currentPhotoIndex = 0;
const photos = [
    'img/mukagw(1).jpg',
    'img/piderman.jpg',
    'img/conan.jpg'
];

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhoto();
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhoto();
}

function updatePhoto() {
    document.getElementById('photo').src = photos[currentPhotoIndex];
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentPhotoIndex);
    });
}

function toggleInfo() {
    const info = document.getElementById('info');
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
}

let hasEnteredSection1 = false;
let hasEnteredSection2 = false;
let hasEnteredSection3 = false;

function handleScroll() {
    const section1 = document.querySelector('.section-1');
    const section2 = document.querySelector('.section-2');
    const section3 = document.querySelector('.section-3');
    const footer = document.querySelector('.footer');

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const resetThreshold = windowHeight / 4;

    if (scrollPosition < resetThreshold) {
        hasEnteredSection1 = false;
        hasEnteredSection2 = false;
        hasEnteredSection3 = false;
    }
    

    // Always show section1 if the scroll position is less than the threshold
    if (scrollPosition < windowHeight / 2) {
        if (!hasEnteredSection1) {
            section1.classList.add('visible');
            section1.classList.remove('hidden');
            section2.classList.add('hidden');
            section2.classList.remove('visible');
            section3.classList.add('hidden');
            section3.classList.remove('visible');
            footer.style.opacity = '0'; // Hide footer
            hasEnteredSection1 = true;
        }
    } 
    // Always show section2 if the scroll position is in its range
    else if (scrollPosition >= windowHeight / 2 && scrollPosition < windowHeight * 1.5) {
        if (!hasEnteredSection2) {
            section1.classList.add('visible');
            section1.classList.remove('hidden');
            section2.classList.add('visible');
            section2.classList.remove('hidden');
            section3.classList.add('hidden');
            section3.classList.remove('visible');
            footer.style.opacity = '0'; // Hide footer
            hasEnteredSection2 = true;
        }
    } 
    // Always show section3 if the scroll position is beyond its range
    else if (scrollPosition >= windowHeight * 1.5) {
        if (!hasEnteredSection3) {
            section1.classList.add('visible');
            section1.classList.remove('hidden');
            section2.classList.add('visible');
            section2.classList.remove('hidden');
            section3.classList.add('visible');
            section3.classList.remove('hidden');
            footer.style.opacity = '1'; // Show footer
            hasEnteredSection3 = true;
        }
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const image = document.getElementById('myImage');
    if (document.body.classList.contains('dark-mode')) {
        image.src = '1.png';
    } else {
        image.src = '11.png';
    }

    const imageSection2 = document.getElementById('section-2-image');
    if (document.body.classList.contains('dark-mode')) {
        imageSection2.src = '2.png'; // Gambar dark mode untuk section 2
    } else {
        imageSection2.src = '22.png'; // Gambar light mode untuk section 2
    }

    const imageSection3 = document.getElementById('section-3-image');
    if (document.body.classList.contains('dark-mode')) {
        imageSection3.src = '3.png'; // Gambar dark mode untuk section 2
    } else {
        imageSection3.src = '33.png'; // Gambar light mode untuk section 2
    }
}

function toggleInfo() {
    const info = document.getElementById('info');
    if (info.classList.contains('show')) {
        // Aktifkan animasi fade-out
        info.classList.remove('show');
        info.classList.add('hide');
        setTimeout(() => {
            // Mengubah style display setelah animasi selesai
            info.style.display = 'none';
        }, 500); // 500 milidetik = 0.5 detik
    } else {
        // Tampilkan info dan aktifkan animasi fade-in
        info.style.display = 'block'; // Pastikan info terlihat sebelum animasi
        info.classList.remove('hide');
        info.classList.add('show');
    }
}

    
    window.addEventListener('scroll', handleScroll);

    document.addEventListener('DOMContentLoaded', () => {
        handleScroll();
});

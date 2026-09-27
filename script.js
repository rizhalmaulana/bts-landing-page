// Mengatur perubahan warna Navbar saat di-scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animasi Fade-In saat scroll menggunakan Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Opsional: unobserve jika animasi hanya ingin dimainkan sekali
            // observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.15, // Animasi dimulai saat 15% elemen terlihat
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// --- LANGUAGE TOGGLE ---
function toggleLanguage() {
    const body = document.body;
    const label = document.getElementById('langLabel');
    if (body.classList.contains('lang-en')) {
        body.classList.replace('lang-en', 'lang-id');
        label.innerText = 'ID';
    } else {
        body.classList.replace('lang-id', 'lang-en');
        label.innerText = 'EN';
    }
}

// --- TABS LOGIC (ABOUT US) ---
function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Trigger animasi untuk hero section segera setelah halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .reveal');
        heroElements.forEach(el => el.classList.add('active'));
    }, 100);
});

// --- EFEK NODE TEKNOLOGI (CONSTELLATION) ---
const canvas = document.getElementById('techCanvas');
if(canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = document.getElementById('home').offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1;
            this.vy = (Math.random() - 0.5) * 1;
            this.radius = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if(this.x < 0 || this.x > width) this.vx = -this.vx;
            if(this.y < 0 || this.y > height) this.vy = -this.vy;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 75, 135, 0.5)'; // Deep Blue Nodes
            ctx.fill();
        }
    }
    
    // Jumlah Node / Partikel
    for(let i=0; i<70; i++) particles.push(new Particle());
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        for(let i=0; i<particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for(let j=i+1; j<particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                
                // Jika jarak antar node dekat, buat garis penghubung
                if(dist < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 156, 166, ${1 - dist/150})`; // Cyan Lines
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== CONFIGURACIÓN GLOBAL =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== INICIALIZACIÓN PRINCIPAL =====
function initializeWebsite() {
    initializeHeader();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeParallaxEffects();
    initializeInteractiveElements();
    initializeStatisticsCounter();
    initializeTypingEffect();
    initializeParticleSystem();
    initializeCatalogModal();
    initializeFireworks();
    initializeHeroAnimations();
}

// ===== HEADER Y NAVEGACIÓN =====
function initializeHeader() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Efecto de transparencia del header
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Efecto de ocultar/mostrar header al hacer scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ===== SCROLL SUAVE =====
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ANIMACIONES DE SCROLL =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Efecto de aparición escalonada para cards
                if (entry.target.classList.contains('product-category')) {
                    const items = entry.target.querySelectorAll('.product-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos con animaciones
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .product-category');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== EFECTOS PARALLAX =====
function initializeParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero, .about-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== ELEMENTOS INTERACTIVOS =====
function initializeInteractiveElements() {
    // Efecto hover en product items
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            createSparkles(this);
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de partículas en el hero
    initializeParticleSystem();
    
    // Efecto de typing en el título principal
    initializeTypingEffect();
}

// ===== SISTEMA DE PARTÍCULAS =====
function initializeParticleSystem() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Crear partículas flotantes
    for (let i = 0; i < 50; i++) {
        createParticle(hero);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        pointer-events: none;
        animation: float ${Math.random() * 10 + 10}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
    `;
    
    container.appendChild(particle);
    
    // Limpiar partículas después de la animación
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 15000);
}

// ===== EFECTO DE TYPING =====
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    // El efecto de typing ya está manejado por CSS con animaciones
    // Aquí solo agregamos efectos adicionales
    const titleWords = heroTitle.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        word.addEventListener('animationend', function() {
            // Agregar efecto de rebote después de la animación inicial
            setTimeout(() => {
                this.style.animation = 'bounce 1s ease-in-out';
                setTimeout(() => {
                    this.style.animation = 'titleAnimation 2s ease-out forwards, shimmer 3s ease-in-out infinite';
                }, 1000);
            }, 500);
        });
    });
}

// ===== ANIMACIONES ADICIONALES PARA HERO =====
function initializeHeroAnimations() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Efecto de ondas en el fondo
    createWaveEffect(hero);
    
    // Efecto de partículas brillantes
    createBrightParticles(hero);
    
    // Efecto de texto con rebote
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach((word, index) => {
        word.addEventListener('mouseenter', function() {
            this.style.animation = 'rubberBand 1s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'titleAnimation 2s ease-out forwards, shimmer 3s ease-in-out infinite';
            }, 1000);
        });
    });
}

function createWaveEffect(container) {
    const wave = document.createElement('div');
    wave.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 50%);
        animation: wave 3s ease-in-out infinite;
        z-index: 2;
    `;
    
    container.appendChild(wave);
}

function createBrightParticles(container) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 3}px;
            height: ${Math.random() * 6 + 3}px;
            background: radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
            border-radius: 50%;
            pointer-events: none;
            animation: brightFloat ${Math.random() * 8 + 5}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 3;
        `;
        
        container.appendChild(particle);
    }
}

// ===== CONTADOR DE ESTADÍSTICAS =====
function initializeStatisticsCounter() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCounter();
    };
    
    // Observar cuando las estadísticas estén visibles
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        if (counter.textContent.match(/\d+/)) {
            statsObserver.observe(counter);
        }
    });
}

// ===== MODAL DEL CATÁLOGO =====
function initializeCatalogModal() {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const catalogModal = document.getElementById('catalogModal');
    const closeModal = document.getElementById('closeModal');
    
    if (viewMoreBtn && catalogModal) {
        viewMoreBtn.addEventListener('click', function() {
            catalogModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            createFireworks();
        });
    }
    
    if (closeModal && catalogModal) {
        closeModal.addEventListener('click', function() {
            catalogModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Cerrar modal al hacer clic fuera
    if (catalogModal) {
        catalogModal.addEventListener('click', function(e) {
            if (e.target === catalogModal) {
                catalogModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && catalogModal.classList.contains('active')) {
            catalogModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ===== SISTEMA DE FUEGOS ARTIFICIALES =====
function initializeFireworks() {
    // Crear fuegos artificiales automáticos
    setInterval(() => {
        if (Math.random() > 0.7) {
            createFireworks();
        }
    }, 3000);
}

function createFireworks() {
    const container = document.body;
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    firework.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: 4px;
        height: 4px;
        background: ${randomColor};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: fireworks 1s ease-out forwards;
    `;
    
    container.appendChild(firework);
    
    // Crear explosión de partículas
    setTimeout(() => {
        createExplosion(firework.offsetLeft, firework.offsetTop, randomColor);
        if (firework.parentNode) {
            firework.parentNode.removeChild(firework);
        }
    }, 500);
}

function createExplosion(x, y, color) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 50 + Math.random() * 50;
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 3px;
            height: 3px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(particle);
        
        // Animar partícula
        const startTime = Date.now();
        const animateParticle = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / 1000;
            
            if (progress < 1) {
                const newX = x + Math.cos(angle) * velocity * progress;
                const newY = y + Math.sin(angle) * velocity * progress + (progress * progress * 100);
                const opacity = 1 - progress;
                const scale = 1 - progress * 0.5;
                
                particle.style.left = newX + 'px';
                particle.style.top = newY + 'px';
                particle.style.opacity = opacity;
                particle.style.transform = `scale(${scale})`;
                
                requestAnimationFrame(animateParticle);
            } else {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }
        };
        
        requestAnimationFrame(animateParticle);
    }
}

// ===== CREAR CHISPAS =====
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1'];
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.style.cssText = `
            position: absolute;
            left: ${Math.random() * rect.width}px;
            top: ${Math.random() * rect.height}px;
            width: 4px;
            height: 4px;
            background: ${randomColor};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkle 1s ease-out forwards;
        `;
        
        element.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
}

// ===== EFECTOS DE HOVER AVANZADOS =====
function initializeAdvancedHovers() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// ===== INICIALIZAR FUNCIONES ADICIONALES =====
document.addEventListener('DOMContentLoaded', function() {
    initializeAdvancedHovers();
    
    // Añadir año actual al footer
    const footerYear = document.querySelector('.footer-bottom');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
    }
    
    // Efectos especiales en las categorías
    const categories = document.querySelectorAll('.product-category');
    categories.forEach((category, index) => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            createFireworks();
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
    }
}

function update() {
    ticking = false;
}

// ===== SCROLL SUAVE MEJORADO =====
function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// ===== EFECTOS DE CARGA =====
window.addEventListener('load', function() {
    // Efecto de entrada para las imágenes
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('loaded');
        }, index * 100);
    });
    
    // Crear fuegos artificiales de bienvenida
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFireworks();
            }, i * 200);
        }
    }, 1000);
});

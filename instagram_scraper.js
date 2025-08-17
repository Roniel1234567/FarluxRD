// ===== SCRAPER AUTOMÁTICO DE INSTAGRAM =====
// Este script extrae automáticamente las imágenes del perfil de FarluxRD

console.log('🚀 Iniciando scraper automático de Instagram...');

// Función para extraer imágenes de Instagram
async function scrapeInstagramImages() {
    try {
        // URL del perfil de FarluxRD
        const profileUrl = 'https://www.instagram.com/farluxrd/';
        
        console.log('📸 Extrayendo imágenes de:', profileUrl);
        
        // Simular navegación a Instagram
        const response = await fetch(profileUrl);
        
        if (response.ok) {
            const html = await response.text();
            
            // Buscar URLs de imágenes en el HTML
            const imageRegex = /"display_url":"([^"]+)"/g;
            const images = [];
            let match;
            
            while ((match = imageRegex.exec(html)) !== null) {
                images.push(match[1]);
            }
            
            console.log(`✅ Encontradas ${images.length} imágenes!`);
            
            // Generar HTML con las imágenes
            generateImageHTML(images);
            
        } else {
            console.log('❌ No se pudo acceder a Instagram');
            useAlternativeSolution();
        }
        
    } catch (error) {
        console.log('❌ Error al hacer scraping:', error.message);
        useAlternativeSolution();
    }
}

// Función para generar HTML con las imágenes extraídas
function generateImageHTML(images) {
    console.log('🎨 Generando HTML con las imágenes...');
    
    let html = '';
    images.forEach((imageUrl, index) => {
        html += `
        <div class="catalog-item">
            <img src="${imageUrl}" alt="Producto FarluxRD ${index + 1}" class="catalog-img">
        </div>`;
    });
    
    console.log('📋 HTML generado:', html);
    console.log('💡 Copia este HTML y pégalo en tu página web');
}

// Función alternativa si el scraping no funciona
function useAlternativeSolution() {
    console.log('🔄 Usando solución alternativa...');
    console.log('📱 Abre Instagram en tu navegador y:');
    console.log('1. Ve a @farluxrd');
    console.log('2. Haz clic derecho en cada imagen');
    console.log('3. Selecciona "Copiar dirección de la imagen"');
    console.log('4. Pega la URL en tu código');
}

// Función para extraer desde el navegador (más fácil)
function extractFromBrowser() {
    console.log('🌐 SOLUCIÓN MÁS FÁCIL:');
    console.log('1. Abre Instagram en tu navegador');
    console.log('2. Ve a @farluxrd');
    console.log('3. Presiona F12 (DevTools)');
    console.log('4. Ve a la pestaña Console');
    console.log('5. Copia y pega este comando:');
    console.log('');
    console.log('copy(Array.from(document.querySelectorAll("img")).map(img => img.src).join("\\n"));');
    console.log('');
    console.log('Esto copiará todas las URLs de imágenes al portapapeles!');
}

// Función para procesar URLs copiadas
function processCopiedUrls() {
    const urls = prompt('Pega aquí las URLs de Instagram (una por línea):');
    
    if (urls) {
        const imageUrls = urls.split('\n').filter(url => url.trim());
        console.log(`✅ Procesando ${imageUrls.length} URLs...`);
        generateImageHTML(imageUrls);
    }
}

// Función para generar código HTML completo
function generateCompleteHTML() {
    const html = `
    <!-- CATÁLOGO COMPLETO CON IMÁGENES REALES -->
    <div class="full-catalog-grid">
        <!-- Las imágenes se generarán automáticamente aquí -->
    </div>
    
    <!-- SCRIPT PARA CARGAR IMÁGENES -->
    <script>
        // URLs de Instagram (reemplaza con las reales)
        const instagramImages = [
            // Pega aquí las URLs que copiaste
        ];
        
        // Generar catálogo automáticamente
        function loadInstagramCatalog() {
            const grid = document.querySelector('.full-catalog-grid');
            if (grid && instagramImages.length > 0) {
                grid.innerHTML = instagramImages.map((url, index) => \`
                    <div class="catalog-item">
                        <img src="\${url}" alt="Producto FarluxRD \${index + 1}" class="catalog-img">
                    </div>
                \`).join('');
            }
        }
        
        // Cargar cuando la página esté lista
        document.addEventListener('DOMContentLoaded', loadInstagramCatalog);
    </script>
    `;
    
    console.log('📋 CÓDIGO HTML COMPLETO:');
    console.log(html);
}

// Mostrar opciones al usuario
console.log('🎯 OPCIONES DISPONIBLES:');
console.log('1. scrapeInstagramImages() - Scraping automático');
console.log('2. extractFromBrowser() - Instrucciones para el navegador');
console.log('3. processCopiedUrls() - Procesar URLs copiadas');
console.log('4. generateCompleteHTML() - Generar código completo');

// Función principal
function main() {
    console.log('🌟 SCRAPER DE INSTAGRAM FARLUXRD');
    console.log('================================');
    console.log('');
    console.log('🔄 Intentando scraping automático...');
    scrapeInstagramImages();
    
    setTimeout(() => {
        console.log('');
        console.log('💡 Si el scraping automático no funciona:');
        extractFromBrowser();
    }, 3000);
}

// Ejecutar automáticamente
main();

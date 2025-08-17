// ===== COMANDO MÁGICO PARA INSTAGRAM =====
// 🚀 COPIA Y PEGA ESTE CÓDIGO EN LA CONSOLA DE INSTAGRAM

console.log('🌟 COMANDO MÁGICO FARLUXRD ACTIVADO! 🌟');

// Función para extraer TODAS las imágenes automáticamente
function extraerImagenesFarluxRD() {
    console.log('🔍 Buscando imágenes en el perfil...');
    
    // Buscar todas las imágenes en la página
    const imagenes = document.querySelectorAll('img[src*="instagram"]');
    const urls = [];
    
    imagenes.forEach((img, index) => {
        if (img.src && img.src.includes('instagram')) {
            urls.push(img.src);
            console.log(`📸 Imagen ${index + 1}: ${img.src}`);
        }
    });
    
    console.log(`✅ Total encontradas: ${urls.length} imágenes`);
    
    // Copiar al portapapeles
    const urlsTexto = urls.join('\n');
    navigator.clipboard.writeText(urlsTexto).then(() => {
        console.log('📋 URLs copiadas al portapapeles!');
        console.log('💡 Ahora pégalas en tu código HTML');
    }).catch(() => {
        console.log('📋 URLs (copia manualmente):');
        console.log(urlsTexto);
    });
    
    return urls;
}

// Función para generar HTML automáticamente
function generarHTMLAutomatico() {
    const urls = extraerImagenesFarluxRD();
    
    if (urls.length > 0) {
        const html = `
<!-- CATÁLOGO AUTOMÁTICO FARLUXRD -->
<div class="full-catalog-grid">
${urls.map((url, index) => `
    <div class="catalog-item">
        <img src="${url}" alt="Producto FarluxRD ${index + 1}" class="catalog-img">
    </div>`).join('')}
</div>`;
        
        console.log('🎨 HTML GENERADO AUTOMÁTICAMENTE:');
        console.log(html);
        
        // Copiar HTML al portapapeles
        navigator.clipboard.writeText(html).then(() => {
            console.log('📋 HTML copiado al portapapeles!');
        });
    }
}

// Función para extraer solo las mejores imágenes
function extraerMejoresImagenes() {
    console.log('⭐ Extrayendo solo las mejores imágenes...');
    
    // Buscar imágenes con mejor calidad
    const imagenes = document.querySelectorAll('img[src*="instagram"]');
    const mejoresUrls = [];
    
    imagenes.forEach((img) => {
        if (img.src && img.src.includes('instagram') && img.width > 300) {
            mejoresUrls.push(img.src);
        }
    });
    
    console.log(`⭐ Mejores imágenes encontradas: ${mejoresUrls.length}`);
    
    // Generar HTML con las mejores
    const html = `
<!-- MEJORES IMÁGENES FARLUXRD -->
<div class="full-catalog-grid">
${mejoresUrls.map((url, index) => `
    <div class="catalog-item">
        <img src="${url}" alt="Mejor Producto FarluxRD ${index + 1}" class="catalog-img">
    </div>`).join('')}
</div>`;
        
        console.log('🎨 HTML CON MEJORES IMÁGENES:');
        console.log(html);
        
        return mejoresUrls;
    }
}

// Función para limpiar URLs duplicadas
function limpiarURLsDuplicadas() {
    const urls = extraerImagenesFarluxRD();
    const urlsUnicas = [...new Set(urls)];
    
    console.log(`🧹 URLs originales: ${urls.length}`);
    console.log(`✨ URLs únicas: ${urlsUnicas.length}`);
    
    return urlsUnicas;
}

// Mostrar menú de opciones
console.log('🎯 OPCIONES DISPONIBLES:');
console.log('1. extraerImagenesFarluxRD() - Extrae todas las imágenes');
console.log('2. generarHTMLAutomatico() - Genera HTML completo');
console.log('3. extraerMejoresImagenes() - Solo las mejores imágenes');
console.log('4. limpiarURLsDuplicadas() - Elimina duplicados');

// Ejecutar automáticamente
console.log('🚀 Ejecutando extracción automática...');
extraerImagenesFarluxRD();

// Función para hacer scroll automático y extraer más imágenes
function scrollYExtraer() {
    console.log('📜 Haciendo scroll para encontrar más imágenes...');
    
    let contador = 0;
    const maxScrolls = 10;
    
    const scrollInterval = setInterval(() => {
        window.scrollTo(0, document.body.scrollHeight);
        contador++;
        
        if (contador >= maxScrolls) {
            clearInterval(scrollInterval);
            console.log('✅ Scroll completado, extrayendo imágenes...');
            setTimeout(() => {
                extraerImagenesFarluxRD();
            }, 2000);
        }
    }, 1000);
}

console.log('💡 Para extraer más imágenes: scrollYExtraer()');
console.log('🌟 ¡COMANDO MÁGICO LISTO! 🌟');

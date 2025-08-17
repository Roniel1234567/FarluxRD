// ===== COMANDO SUPER SIMPLE Y SEGURO =====
// 🚀 COPIA Y PEGA ESTO EN LA CONSOLA DE INSTAGRAM

// Comando súper simple para extraer imágenes
copy(Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => src.includes('instagram')).join('\n'));

console.log('✅ URLs copiadas al portapapeles!');
console.log('📋 Ahora pégalas en tu código HTML');

// Función para generar HTML automáticamente
function generarHTML() {
    const imagenes = Array.from(document.querySelectorAll('img')).filter(img => img.src.includes('instagram'));
    
    const html = imagenes.map((img, index) => 
        `<div class="catalog-item"><img src="${img.src}" alt="Producto FarluxRD ${index + 1}" class="catalog-img"></div>`
    ).join('');
    
    copy(html);
    console.log('🎨 HTML generado y copiado al portapapeles!');
    return html;
}

console.log('💡 Para generar HTML: generarHTML()');

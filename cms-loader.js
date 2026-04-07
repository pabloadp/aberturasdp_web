// ================================================================
// CMS LOADER - Carga el contenido desde los archivos JSON del CMS
// ================================================================
// Este script lee los archivos JSON generados por Netlify CMS
// y actualiza el contenido del sitio web automáticamente.
// ================================================================

document.addEventListener('DOMContentLoaded', async function() {
    console.log('CMS Loader: Iniciando carga de contenido...');
    
    try {
        // Cargar configuración general
        const configResponse = await fetch('site-config.json');
        if (configResponse.ok) {
            const config = await configResponse.json();
            console.log('CMS Loader: Configuración cargada');
            updateContactInfo(config);
        }

        // Cargar hero
        const heroResponse = await fetch('content/hero.json');
        if (heroResponse.ok) {
            const hero = await heroResponse.json();
            console.log('CMS Loader: Hero cargado');
            updateHero(hero);
        }

        // Cargar aberturas
        const aberturasResponse = await fetch('content/aberturas.json');
        if (aberturasResponse.ok) {
            const aberturas = await aberturasResponse.json();
            console.log('CMS Loader: Aberturas cargadas');
            updateAberturas(aberturas);
        }

        // Cargar viviendas
        const viviendasResponse = await fetch('content/viviendas.json');
        if (viviendasResponse.ok) {
            const viviendas = await viviendasResponse.json();
            console.log('CMS Loader: Viviendas cargadas');
            updateViviendas(viviendas);
        }

        // Cargar contacto
        const contactoResponse = await fetch('content/contacto.json');
        if (contactoResponse.ok) {
            const contacto = await contactoResponse.json();
            console.log('CMS Loader: Contacto cargado');
            updateContacto(contacto);
        }

        console.log('CMS Loader: Carga completada');

    } catch (error) {
        console.log('CMS Loader: No se pudieron cargar algunos datos del CMS');
        console.log('Esto es normal si los archivos JSON no existen todavía');
        console.log('Error:', error);
    }
});

// ================================================================
// ACTUALIZAR INFORMACIÓN DE CONTACTO
// ================================================================
function updateContactInfo(config) {
    // Actualizar teléfono
    if (config.telefono) {
        const telefonoLinks = document.querySelectorAll('a[href^="tel:"]');
        telefonoLinks.forEach(link => {
            link.href = 'tel:' + config.telefono.replace(/\s/g, '');
            if (!link.querySelector('i')) {
                link.textContent = config.telefono;
            }
        });
        
        // Actualizar texto del teléfono en contacto
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach(card => {
            const phoneLink = card.querySelector('a[href^="tel:"]');
            if (phoneLink) {
                phoneLink.textContent = config.telefono;
            }
        });
    }

    // Actualizar email
    if (config.email) {
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.href = 'mailto:' + config.email;
            link.textContent = config.email;
        });
    }

    // Actualizar dirección
    if (config.direccion) {
        const direccionElements = document.querySelectorAll('.contact-details p');
        direccionElements.forEach(el => {
            if (el.textContent.includes('San Vicente') || el.textContent.includes('Buenos Aires')) {
                el.textContent = config.direccion;
            }
        });
    }

    // Actualizar nombre del negocio en logo
    if (config.nombre) {
        const logoTexts = document.querySelectorAll('.logo span, .footer-logo span');
        logoTexts.forEach(el => {
            el.textContent = config.nombre;
        });
    }

    // Actualizar horario
    if (config.horario) {
        const horarioCards = document.querySelectorAll('.contact-card');
        horarioCards.forEach(card => {
            const icon = card.querySelector('.contact-icon i.fa-clock');
            if (icon) {
                const details = card.querySelector('.contact-details p');
                if (details) {
                    details.innerHTML = config.horario.replace(/\n/g, '<br>');
                }
            }
        });
    }

    // Actualizar Instagram
    if (config.instagram) {
        const instagramLinks = document.querySelectorAll('a[href*="instagram"]');
        instagramLinks.forEach(link => {
            link.href = config.instagram;
        });
    }
}

// ================================================================
// ACTUALIZAR SECCIÓN HERO
// ================================================================
function updateHero(hero) {
    // Actualizar título
    if (hero.titulo) {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const destacado = hero.titulo_destacado || 'abertura';
            heroTitle.innerHTML = `${hero.titulo} <span>${destacado}</span>`;
        }
    }

    // Actualizar descripción
    if (hero.descripcion) {
        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) {
            heroDesc.textContent = hero.descripcion;
        }
    }

    // Actualizar badge
    if (hero.badge) {
        const heroBadge = document.querySelector('.hero-badge span');
        if (heroBadge) {
            heroBadge.textContent = hero.badge;
        }
    }

    // Actualizar botón principal
    if (hero.boton_principal) {
        const btnPrincipal = document.querySelector('.hero-buttons .btn-primary');
        if (btnPrincipal) {
            btnPrincipal.innerHTML = `<i class="fas fa-paper-plane"></i> ${hero.boton_principal}`;
        }
    }

    // Actualizar botón secundario
    if (hero.boton_secundario) {
        const btnSecundario = document.querySelector('.hero-buttons .btn-secondary');
        if (btnSecundario) {
            btnSecundario.innerHTML = `<i class="fas fa-arrow-right"></i> ${hero.boton_secundario}`;
        }
    }

    // Actualizar imagen
    if (hero.imagen) {
        const heroImg = document.querySelector('.hero-image img');
        if (heroImg) {
            heroImg.src = hero.imagen;
        }
    }

    // Actualizar estadísticas
    if (hero.estadisticas && Array.isArray(hero.estadisticas)) {
        const statItems = document.querySelectorAll('.stat-item');
        hero.estadisticas.forEach((stat, index) => {
            if (statItems[index]) {
                const numero = statItems[index].querySelector('.stat-number');
                const etiqueta = statItems[index].querySelector('.stat-label');
                if (numero) numero.textContent = stat.numero;
                if (etiqueta) etiqueta.textContent = stat.etiqueta;
            }
        });
    }
}

// ================================================================
// ACTUALIZAR SECCIÓN ABERTURAS
// ================================================================
function updateAberturas(aberturas) {
    // Actualizar título de sección
    if (aberturas.titulo) {
        const sectionTitle = document.querySelector('#aberturas .section-title');
        if (sectionTitle) {
            sectionTitle.textContent = aberturas.titulo;
        }
    }

    // Actualizar subtítulo
    if (aberturas.subtitulo) {
        const sectionSubtitle = document.querySelector('#aberturas .section-subtitle');
        if (sectionSubtitle) {
            sectionSubtitle.textContent = aberturas.subtitulo;
        }
    }

    // Actualizar Aluminio
    if (aberturas.aluminio) {
        const serviceCards = document.querySelectorAll('.service-card');
        const aluminioCard = serviceCards[0];
        
        if (aluminioCard) {
            if (aberturas.aluminio.titulo) {
                const title = aluminioCard.querySelector('.service-title');
                if (title) title.textContent = aberturas.aluminio.titulo;
            }
            
            if (aberturas.aluminio.descripcion) {
                const desc = aluminioCard.querySelector('.service-description');
                if (desc) desc.textContent = aberturas.aluminio.descripcion;
            }
            
            if (aberturas.aluminio.imagen) {
                const img = aluminioCard.querySelector('.service-image img');
                if (img) img.src = aberturas.aluminio.imagen;
            }

            // Actualizar características
            if (aberturas.aluminio.caracteristicas && Array.isArray(aberturas.aluminio.caracteristicas)) {
                const features = aluminioCard.querySelectorAll('.service-feature span');
                aberturas.aluminio.caracteristicas.forEach((carac, index) => {
                    if (features[index]) {
                        features[index].textContent = typeof carac === 'string' ? carac : carac.item;
                    }
                });
            }
        }
    }

    // Actualizar PVC
    if (aberturas.pvc) {
        const serviceCards = document.querySelectorAll('.service-card');
        const pvcCard = serviceCards[1];
        
        if (pvcCard) {
            if (aberturas.pvc.titulo) {
                const title = pvcCard.querySelector('.service-title');
                if (title) title.textContent = aberturas.pvc.titulo;
            }
            
            if (aberturas.pvc.descripcion) {
                const desc = pvcCard.querySelector('.service-description');
                if (desc) desc.textContent = aberturas.pvc.descripcion;
            }
            
            if (aberturas.pvc.imagen) {
                const img = pvcCard.querySelector('.service-image img');
                if (img) img.src = aberturas.pvc.imagen;
            }

            // Actualizar características
            if (aberturas.pvc.caracteristicas && Array.isArray(aberturas.pvc.caracteristicas)) {
                const features = pvcCard.querySelectorAll('.service-feature span');
                aberturas.pvc.caracteristicas.forEach((carac, index) => {
                    if (features[index]) {
                        features[index].textContent = typeof carac === 'string' ? carac : carac.item;
                    }
                });
            }
        }
    }
}

// ================================================================
// ACTUALIZAR SECCIÓN VIVIENDAS MODULARES
// ================================================================
function updateViviendas(viviendas) {
    // Actualizar título
    if (viviendas.titulo && viviendas.titulo_destacado) {
        const title = document.querySelector('.modular-title');
        if (title) {
            title.innerHTML = `${viviendas.titulo} <span>${viviendas.titulo_destacado}</span>`;
        }
    }

    // Actualizar descripción
    if (viviendas.descripcion) {
        const desc = document.querySelector('.modular-description');
        if (desc) desc.textContent = viviendas.descripcion;
    }

    // Actualizar imagen
    if (viviendas.imagen) {
        const img = document.querySelector('.modular-image img');
        if (img) img.src = viviendas.imagen;
    }

    // Actualizar badge
    if (viviendas.badge) {
        const badge = document.querySelector('.modular-badge');
        if (badge) badge.textContent = viviendas.badge;
    }

    // Actualizar botón
    if (viviendas.boton_texto) {
        const btn = document.querySelector('.modular-content .btn-primary');
        if (btn) btn.innerHTML = `<i class="fas fa-calculator"></i> ${viviendas.boton_texto}`;
    }

    // Actualizar beneficios
    if (viviendas.beneficios && Array.isArray(viviendas.beneficios)) {
        const benefitItems = document.querySelectorAll('.benefit-item');
        viviendas.beneficios.forEach((beneficio, index) => {
            if (benefitItems[index]) {
                const title = benefitItems[index].querySelector('.benefit-text h4');
                const desc = benefitItems[index].querySelector('.benefit-text p');
                if (title) title.textContent = beneficio.titulo;
                if (desc) desc.textContent = beneficio.descripcion;
            }
        });
    }
}

// ================================================================
// ACTUALIZAR SECCIÓN CONTACTO
// ================================================================
function updateContacto(contacto) {
    // Actualizar título
    if (contacto.titulo) {
        const titles = document.querySelectorAll('.contact-info .section-title');
        titles.forEach(el => {
            if (el) el.textContent = contacto.titulo;
        });
    }

    // Actualizar subtítulo
    if (contacto.subtitulo) {
        const subtitles = document.querySelectorAll('.contact-info .section-subtitle');
        subtitles.forEach(el => {
            if (el) el.textContent = contacto.subtitulo;
        });
    }

    // Actualizar título del formulario
    if (contacto.formulario_titulo) {
        const formTitle = document.querySelector('.form-title');
        if (formTitle) formTitle.textContent = contacto.formulario_titulo;
    }

    // Actualizar subtítulo del formulario
    if (contacto.formulario_subtitulo) {
        const formSubtitle = document.querySelector('.form-subtitle');
        if (formSubtitle) formSubtitle.textContent = contacto.formulario_subtitulo;
    }
}

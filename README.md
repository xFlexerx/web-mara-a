<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Maraña | Restaurante Mediterráneo Creativo en Alcoi</title>
    <meta name="description"
        content="Gastronomía mediterránea fusión, arroces de autor y coctelería creativa en Alcoi. Disfruta de un ambiente cálido, moderno y sofisticado.">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Header / Navbar -->
    <header class="main-header">
        <div class="container header-container">
            <a href="#hero" class="logo">
                <svg class="logo-mark" viewBox="0 0 100 100" width="40" height="40">
                    <!-- Elegant Abstract Tangled Ribbon Logo -->
                    <path class="tangle-path-logo"
                        d="M 30,50 C 30,30 40,20 50,20 C 65,20 70,35 60,45 C 50,55 35,45 25,55 C 15,65 30,80 50,80 C 70,80 80,60 70,40 C 65,30 50,30 45,40"
                        fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                </svg>
                <span class="logo-text">La Maraña</span>
            </a>
            <nav class="main-nav">
                <ul>
                    <li><a href="#about" class="nav-link">Nosotros</a></li>
                    <li><a href="#dishes" class="nav-link">Nuestra Carta</a></li>
                    <li><a href="#cocktails" class="nav-link">Coctelería</a></li>
                    <li><a href="#reviews" class="nav-link">Opiniones</a></li>
                    <li><a href="#gallery" class="nav-link">Atmósfera</a></li>
                    <li><a href="#visit-us" class="nav-link">Visítanos</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <button class="mobile-nav-toggle" aria-label="Menu de navegación">
                    <span class="hamburger"></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-nav-overlay"></div>
    <aside class="mobile-nav-drawer">
        <div class="drawer-header">
            <span class="logo-text">La Maraña</span>
            <button class="mobile-nav-close" aria-label="Cerrar menú"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <nav class="mobile-nav-links">
            <ul>
                <li><a href="#about" class="mobile-nav-page-link">Nosotros</a></li>
                <li><a href="#dishes" class="mobile-nav-page-link">Nuestra Carta</a></li>
                <li><a href="#cocktails" class="mobile-nav-page-link">Coctelería</a></li>
                <li><a href="#reviews" class="mobile-nav-page-link">Opiniones</a></li>
                <li><a href="#gallery" class="mobile-nav-page-link">Atmósfera</a></li>
                <li><a href="#visit-us" class="mobile-nav-page-link">Visítanos</a></li>
            </ul>
        </nav>
        <div class="drawer-footer">
            <div class="social-links-drawer">
                <a href="#" target="_blank" rel="noopener"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </aside>

    <main>
        <!-- Hero Section -->
        <section id="hero" class="hero-section">
            <div class="hero-bg-overlay"></div>
            <div class="container hero-container">
                <div class="hero-badge fade-in-up">
                    <span class="google-badge">
                        <i class="fa-brands fa-google text-google"></i>
                        <span class="rating-stars"><i class="fa-solid fa-star"></i> 4.7</span>
                        <span class="rating-count">(626 opiniones)</span>
                    </span>
                    <span class="hours-badge" id="hero-hours-badge">
                        <span class="badge-dot pulse"></span>
                        <span class="badge-text">Cargando horario...</span>
                    </span>
                </div>

                <h1 class="hero-title fade-in-up">La Maraña</h1>
                <p class="hero-tagline fade-in-up">Cocina creativa mediterránea, arroces de autor y coctelería para
                    enredar los sentidos.</p>

                <div class="hero-ctas fade-in-up">
                    <a href="#dishes" class="btn btn-accent btn-large">Ver Carta</a>
                </div>
            </div>

            <a href="#about" class="scroll-indicator" aria-label="Desplazarse hacia abajo">
                <span class="scroll-mouse">
                    <span class="scroll-wheel"></span>
                </span>
            </a>

            <!-- Tangled line transition graphic at section bottom -->
            <div class="tangle-divider-bottom">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path class="tangle-line-bg"
                        d="M0,80 C240,110 480,50 720,90 C960,130 1200,60 1440,80 L1440,120 L0,120 Z"></path>
                    <path class="tangle-line-stroke-1" d="M0,60 Q360,110 720,50 T1440,70" fill="none"
                        stroke="currentColor" stroke-width="2.5"></path>
                    <path class="tangle-line-stroke-2" d="M0,80 Q240,40 600,100 T1440,50" fill="none"
                        stroke="currentColor" stroke-width="1.5" opacity="0.6"></path>
                </svg>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about-section">
            <div class="container about-container">
                <div class="about-grid">
                    <div class="about-content scroll-reveal">
                        <h2 class="section-title">El enredo perfecto entre tradición e innovación</h2>
                        <div class="accent-line-tangle">
                            <svg viewBox="0 0 300 20" width="150" height="15" preserveAspectRatio="none">
                                <path d="M 0,10 Q 75,0 150,15 T 300,5" fill="none" stroke="currentColor"
                                    stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </div>
                        <p class="lead-text">
                            Ubicado en la histórica ciudad de Alcoi (Alicante), <strong>La Maraña</strong> nace como un
                            espacio creativo para los amantes del buen comer y conversar.
                        </p>
                        <p>
                            Nuestra propuesta gastronómica une los ingredientes de temporada más frescos de la montaña
                            alicantina con técnicas modernas de fusión. Nos distingue el mimo por los arroces creativos,
                            las tapas reinventadas y una atmósfera acogedora pero sofisticada, pensada tanto para
                            veladas íntimas como para reuniones animadas.
                        </p>
                        <p>
                            En el fin de semana, el ambiente se transforma. Extendemos nuestra carta con una cuidada
                            propuesta de coctelería premium, ideal para alargar la sobremesa o iniciar una noche
                            inolvidable en Alcoi.
                        </p>
                        <div class="about-features">
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fa-solid fa-utensils"></i></div>
                                <div>
                                    <h3>Fusión Mediterránea</h3>
                                    <p>Propuestas innovadoras elaboradas con ingredientes locales de temporada.</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fa-solid fa-glass-martini-alt"></i></div>
                                <div>
                                    <h3>Coctelería de Autor</h3>
                                    <p>Mixología original y una amplia carta de cócteles clásicos y signature.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-visual scroll-reveal delay-200">
                        <div class="image-stack">
                            <div class="image-stack-item image-stack-item-main">
                                <div class="image-placeholder main-about-img">
                                    <div class="placeholder-overlay">
                                        <i class="fa-solid fa-camera"></i>
                                        <span>Atmósfera La Maraña</span>
                                    </div>
                                </div>
                            </div>
                            <div class="image-stack-item image-stack-item-accent">
                                <div class="image-placeholder accent-about-img">
                                    <div class="placeholder-overlay">
                                        <i class="fa-solid fa-whiskey-glass"></i>
                                        <span>Cocktail Bar</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Tangled circle frames the image stack -->
                            <div class="tangled-frame-bg">
                                <svg viewBox="0 0 100 100" width="100%" height="100%">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="1"
                                        stroke-dasharray="2 3" opacity="0.3" />
                                    <path
                                        d="M 50,2 C 75,5 98,25 98,50 C 98,75 75,98 50,98 C 25,98 2,75 2,50 C 2,25 25,2 50,2 Z"
                                        fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Dishes Section -->
        <section id="dishes" class="dishes-section">
            <!-- Wavy tangled divider top -->
            <div class="section-divider-top">
                <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path class="divider-path" d="M0,30 Q360,60 720,20 T1440,40" fill="none" stroke="currentColor"
                        stroke-width="2" opacity="0.3"></path>
                    <path class="divider-path-bg" d="M0,0 L1440,0 L1440,60 Q1080,20 720,40 T0,30 Z"></path>
                </svg>
            </div>

            <div class="container">
                <div class="dishes-header scroll-reveal">
                    <span class="section-subtitle">Nuestras Recomendaciones</span>
                    <h2 class="section-title text-center">Especialidades con Alma</h2>
                    <p class="section-description">
                        Una selección de nuestros platos más aclamados por los comensales. Creatividad, textura y sabor
                        presentados con una estética contemporánea.
                    </p>
                </div>

                <!-- Food Filter Tabs (For UX Enhancement) -->
                <div class="dishes-filter-nav scroll-reveal">
                    <button class="filter-tab active" data-filter="all">Toda la Selección</button>
                    <button class="filter-tab" data-filter="rice">Arroces</button>
                    <button class="filter-tab" data-filter="tapas">Entrantes y Tapas</button>
                    <button class="filter-tab" data-filter="meat-fish">Carnes y Pescados</button>
                    <button class="filter-tab" data-filter="sweets">Postres</button>
                    <button class="filter-tab" data-filter="drinks">Bebidas y Bodega</button>
                </div>

                <!-- Dishes Grid -->
                <div class="dishes-grid scroll-reveal">

                    <!-- Dish 1: Arroz con Secreto -->
                    <div class="dish-card" data-category="rice">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-1">
                                <div class="placeholder-overlay"><i class="fa-solid fa-plate-wheat"></i></div>
                            </div>
                            <span class="dish-badge">Especialidad</span>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Arroz con Secreto, Boletus y Pericana</h3>
                                <span class="dish-price">18.50€</span>
                            </div>
                            <p class="dish-desc">Un arroz meloso magistral que fusiona el sabor graso del secreto
                                ibérico, la profundidad de los boletus y el toque tradicional de la pericana alicantina.
                            </p>
                            <div class="dish-tags">
                                <span>Arroz</span> <span>Tradición local</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 2: Tallarines de Sepia -->
                    <div class="dish-card" data-category="meat-fish">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-2">
                                <div class="placeholder-overlay"><i class="fa-solid fa-fish"></i></div>
                            </div>
                            <span class="dish-badge">Popular</span>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Tallarines de Sepia</h3>
                                <span class="dish-price">14.00€</span>
                            </div>
                            <p class="dish-desc">Cortes finos y tiernos de sepia fresca en forma de tallarines,
                                salteados con una emulsión suave de ajo, perejil y matices cítricos.</p>
                            <div class="dish-tags">
                                <span>Pescado</span> <span>Sin Gluten</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 3: Abanico de Crema -->
                    <div class="dish-card" data-category="tapas">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-3">
                                <div class="placeholder-overlay"><i class="fa-solid fa-cheese"></i></div>
                            </div>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Abanico de Crema</h3>
                                <span class="dish-price">9.50€</span>
                            </div>
                            <p class="dish-desc">Crujientes láminas de hojaldre artesanal intersecadas con una crema
                                fina perfumada, coronada con un velo caramelizado.</p>
                            <div class="dish-tags">
                                <span>Entrante</span> <span>Crujiente</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 4: Entrecot al Huevo de Dragón -->
                    <div class="dish-card" data-category="meat-fish">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-4">
                                <div class="placeholder-overlay"><i class="fa-solid fa-fire"></i></div>
                            </div>
                            <span class="dish-badge">Sorprendente</span>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Entrecot al Huevo de Dragón</h3>
                                <span class="dish-price">23.00€</span>
                            </div>
                            <p class="dish-desc">Lomo de vacuno mayor fileteado en su punto, flanqueado por una
                                guarnición ahumada y presentado en una campana con efecto de vaporizado herbal.</p>
                            <div class="dish-tags">
                                <span>Carnes</span> <span>Ahumado</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 5: Arroz con Pulpo -->
                    <div class="dish-card" data-category="rice">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-5">
                                <div class="placeholder-overlay"><i class="fa-solid fa-shrimp"></i></div>
                            </div>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Arroz con Pulpo</h3>
                                <span class="dish-price">18.00€</span>
                            </div>
                            <p class="dish-desc">Arroz a banda cocinado en un potente caldo de pescadores locales,
                                coronado con patas de pulpo de roca soasadas y alioli ligero de azafrán.</p>
                            <div class="dish-tags">
                                <span>Arroz</span> <span>Marisco</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 6: Coqueta Negra con Anchoa -->
                    <div class="dish-card" data-category="tapas">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-6">
                                <div class="placeholder-overlay"><i class="fa-solid fa-bread-slice"></i></div>
                            </div>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Coqueta Negra con Anchoa</h3>
                                <span class="dish-price">4.20€ <small>/ud</small></span>
                            </div>
                            <p class="dish-desc">Masa frita tradicional teñida con tinta de sepia y coronada con una
                                selecta anchoa del Cantábrico calibre "00" y emulsión de pimiento asado.</p>
                            <div class="dish-tags">
                                <span>Tapa</span> <span>Mar</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 7: Taco de Pulled Pork con Guacamole -->
                    <div class="dish-card" data-category="tapas">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-7">
                                <div class="placeholder-overlay"><i class="fa-solid fa-hotdog"></i></div>
                            </div>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Taco de Pulled Pork</h3>
                                <span class="dish-price">6.80€ <small>/ud</small></span>
                            </div>
                            <p class="dish-desc">Tortilla de maíz artesana rellena de cerdo deshilachado marinado al
                                estilo pibil, guacamole cremoso y encurtido casero de cebolla morada.</p>
                            <div class="dish-tags">
                                <span>Tapas</span> <span>Fusión</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 8: Hamburguesita de Calabaza Asada -->
                    <div class="dish-card" data-category="tapas">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-8">
                                <div class="placeholder-overlay"><i class="fa-solid fa-seedling"></i></div>
                            </div>
                            <span class="dish-badge">Veggie</span>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Mini Burger Veggie</h3>
                                <span class="dish-price">6.50€</span>
                            </div>
                            <p class="dish-desc">Medallón de calabaza asada y garbanzos con bouquet de rúcula fresca,
                                salsa alioli cítrica en pan brioche artesanal.</p>
                            <div class="dish-tags">
                                <span>Tapas</span> <span>Vegetariano</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 9: Coulant -->
                    <div class="dish-card" data-category="sweets">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-9">
                                <div class="placeholder-overlay"><i class="fa-solid fa-ice-cream"></i></div>
                            </div>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Coulant de Chocolate</h3>
                                <span class="dish-price">6.50€</span>
                            </div>
                            <p class="dish-desc">Volcán de chocolate templado con corazón fluido de cacao al 70%,
                                servido con helado de vainilla de Madagascar y arena de avellanas tostadas.</p>
                            <div class="dish-tags">
                                <span>Postre</span> <span>Chocolate</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 10: Mojito de Sandía -->
                    <div class="dish-card" data-category="drinks">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-10">
                                <div class="placeholder-overlay"><i class="fa-solid fa-glass-water"></i></div>
                            </div>
                            <span class="dish-badge">Signature</span>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Mojito de Sandía</h3>
                                <span class="dish-price">7.50€</span>
                            </div>
                            <p class="dish-desc">Versión de nuestro barman con sandía fresca machacada, ron añejo,
                                hierbabuena, lima y un sifón aromatizado con notas amargas.</p>
                            <div class="dish-tags">
                                <span>Cóctel</span> <span>Refrescante</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 11: Vermut de la Casa -->
                    <div class="dish-card" data-category="drinks">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-11">
                                <div class="placeholder-overlay"><i class="fa-solid fa-martini-glass-citrus"></i></div>
                            </div>
                            <span class="dish-badge">Local</span>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Vermut La Maraña</h3>
                                <span class="dish-price">4.50€</span>
                            </div>
                            <p class="dish-desc">Vermut artesanal macerado con hierbas selectas de la Sierra de Mariola,
                                servido con un twist de naranja y aceituna rellena.</p>
                            <div class="dish-tags">
                                <span>Vermut</span> <span>Botánico</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 12: Vino Enrique Mendoza Tinto -->
                    <div class="dish-card" data-category="drinks">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-12">
                                <div class="placeholder-overlay"><i class="fa-solid fa-wine-glass"></i></div>
                            </div>
                            <span class="dish-badge">Recomendado</span>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Enrique Mendoza Tinto</h3>
                                <span class="dish-price">4.00€ <small>/ copa</small></span>
                            </div>
                            <p class="dish-desc">Tinto D.O. Alicante Crianza (Monastrell y Syrah). Destaca por su aroma
                                a fruta madura, especias y su agradable paso por barrica.</p>
                            <div class="dish-tags">
                                <span>Tinto</span> <span>D.O. Alicante</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 13: Bahía de Dénia Blanco -->
                    <div class="dish-card" data-category="drinks">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-13">
                                <div class="placeholder-overlay"><i class="fa-solid fa-wine-bottle"></i></div>
                            </div>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Bahía de Dénia Blanco</h3>
                                <span class="dish-price">3.80€ <small>/ copa</small></span>
                            </div>
                            <p class="dish-desc">Vino blanco seco elaborado con Moscatel de Alejandría. Muy aromático,
                                floral y con matices frescos de fruta tropical.</p>
                            <div class="dish-tags">
                                <span>Blanco</span> <span>Aromático</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dish 14: Cerveza Artesanal Mariola IPA -->
                    <div class="dish-card" data-category="drinks">
                        <div class="dish-img-box">
                            <div class="image-placeholder dish-img-14">
                                <div class="placeholder-overlay"><i class="fa-solid fa-beer-mug-empty"></i></div>
                            </div>
                        </div>
                        <div class="dish-info">
                            <div class="dish-meta">
                                <h3 class="dish-title">Cerveza Mariola IPA</h3>
                                <span class="dish-price">4.80€</span>
                            </div>
                            <p class="dish-desc">Cerveza artesana de la zona, de estilo American IPA. Intensos toques
                                herbales, cítricos y un amargor persistente equilibrado.</p>
                            <div class="dish-tags">
                                <span>Cerveza</span> <span>Artesanal</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Wavy tangled divider bottom -->
            <div class="section-divider-bottom bg-alternative">
                <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path class="divider-path" d="M0,20 Q360,0 720,40 T1440,30" fill="none" stroke="currentColor"
                        stroke-width="2" opacity="0.3"></path>
                    <path class="divider-path-bg" d="M0,20 L0,60 L1440,60 L1440,30 Q1080,40 720,10 T0,20 Z"></path>
                </svg>
            </div>
        </section>

        <!-- Cocktail Bar Callout Section (Special feature) -->
        <section id="cocktails" class="cocktails-callout-section">
            <div class="cocktails-overlay"></div>
            <div class="container cocktails-container">
                <div class="cocktails-grid">
                    <div class="cocktails-visual scroll-reveal">
                        <!-- Abstract neon-glow cocktail wire art (matching La Maraña) -->
                        <div class="wireframe-cocktail-box">
                            <svg class="wireframe-cocktail" viewBox="0 0 200 200" width="100%" height="auto">
                                <defs>
                                    <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="var(--accent)" />
                                        <stop offset="100%" stop-color="var(--highlight-cocktail)" />
                                    </linearGradient>
                                </defs>
                                <!-- Interactive neon line cocktail glass tangled with floral/helix lines -->
                                <path d="M 60,40 L 140,40 L 105,120 L 105,170 L 130,170 M 105,170 L 70,170" fill="none"
                                    stroke="url(#glow-grad)" stroke-width="3" stroke-linecap="round" />
                                <path
                                    d="M 120,70 C 135,55 170,45 160,80 C 150,110 110,85 100,110 C 90,135 120,140 100,160"
                                    fill="none" stroke="var(--highlight-cocktail)" stroke-width="1.5"
                                    stroke-dasharray="1 3" />
                                <circle cx="100" cy="70" r="6" fill="var(--accent)" opacity="0.8" />
                                <line x1="85" y1="90" x2="155" y2="20" stroke="var(--accent-warm)" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                    <div class="cocktails-content scroll-reveal delay-200">
                        <span class="gold-subtitle">El Arte de Enredar la Noche</span>
                        <h2 class="section-title">Nuestra Coctelería de Autor</h2>
                        <p class="lead-text">
                            ¿Por qué conformarse con terminar la cena, cuando puedes prolongar la experiencia?
                        </p>
                        <p>
                            Nuestra renovada y ampliada selección de cócteles ha capturado el favor de la crítica local
                            y digital. Con bases destiladas de marcas premium, combinados con extractos frutales
                            preparados a diario, purés naturales e infusiones especiadas propias, creamos tragos que
                            cuentan una historia diferente en cada sorbo.
                        </p>
                        <p>
                            Pregunta a nuestro personal por las sugerencias fuera de carta de la semana o descubre el
                            icónico <strong>Mojito de Sandía</strong> marinando un atardecer en nuestra terraza.
                        </p>
                        <div class="signature-cocktails-highlight">
                            <div class="mini-cocktail-item">
                                <div class="cocktail-info-bubble">
                                    <h4>Mojito de Sandía</h4>
                                    <p>Ron, hierbabuena fresca, sandía infusionada y lima.</p>
                                </div>
                            </div>
                            <div class="mini-cocktail-item">
                                <div class="cocktail-info-bubble">
                                    <h4>Ginebra Silvestre con Pericana</h4>
                                    <p>Ginebra local con toques especiados y tónica premium.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="reviews" class="reviews-section">
            <div class="container">
                <div class="reviews-header scroll-reveal text-center">
                    <span class="section-subtitle">Testimonios de Clientes</span>
                    <h2 class="section-title">El Reflejo de su Experiencia</h2>
                    <div class="overall-social-proof">
                        <div class="rating-box">
                            <span class="rating-value">4.7</span>
                            <div class="rating-stars-full">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <p class="rating-meta">Basado en <strong>626 valoraciones reales</strong> de Google Reviews</p>
                    </div>
                </div>

                <div class="reviews-grid">

                    <!-- Quote 1 -->
                    <div class="review-card scroll-reveal">
                        <div class="card-tangle-bg">
                            <!-- Abstract fine curve -->
                            <svg viewBox="0 0 100 100" class="subtle-tangle">
                                <path d="M 10,10 Q 50,90 90,10" fill="none" stroke="currentColor" stroke-width="0.5"
                                    opacity="0.1" />
                            </svg>
                        </div>
                        <div class="review-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <blockquote class="review-quote">
                            "La <strong>carrillada en salsa de boletus</strong> es espectacular, al igual que los
                            <strong>tallarines de sepia</strong> que estaban súper tiernos. El local cuenta con un trato
                            excepcional de diez y la decoración interior es preciosa, muy acogedora."
                        </blockquote>
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">CM</div>
                            <div>
                                <cite class="reviewer-name">Carlos M.</cite>
                                <span class="reviewer-date">Hace 2 semanas · Local Guide</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quote 2 -->
                    <div class="review-card scroll-reveal delay-200">
                        <div class="card-tangle-bg">
                            <svg viewBox="0 0 100 100" class="subtle-tangle">
                                <path d="M 0,50 Q 50,0 100,50" fill="none" stroke="currentColor" stroke-width="0.5"
                                    opacity="0.1" />
                            </svg>
                        </div>
                        <div class="review-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <blockquote class="review-quote">
                            "Pedimos <strong>5 entrantes distintos</strong> para compartir entre amigos en plan picoteo
                            y todos estaban excelentes. Lo que más nos fascinó fue el <strong>pulpo</strong>, cocinado
                            al punto exacto de ternura y con un sabor increíble. ¡Repetiremos sin duda!"
                        </blockquote>
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">LR</div>
                            <div>
                                <cite class="reviewer-name">Lucía R.</cite>
                                <span class="reviewer-date">Hace 1 mes · Reseña verificada</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quote 3 -->
                    <div class="review-card scroll-reveal delay-400">
                        <div class="card-tangle-bg">
                            <svg viewBox="0 0 100 100" class="subtle-tangle">
                                <path d="M 10,90 T 50,10 T 90,90" fill="none" stroke="currentColor" stroke-width="0.5"
                                    opacity="0.1" />
                            </svg>
                        </div>
                        <div class="review-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <blockquote class="review-quote">
                            "¡Qué gran descubrimiento! El espacio es estéticamente precioso, amplio y muy bien cuidado.
                            Los <strong>cócteles de autor</strong> son simplemente increíbles, de los mejores y más
                            creativos que hemos tomado por la zona."
                        </blockquote>
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">DT</div>
                            <div>
                                <cite class="reviewer-name">David T.</cite>
                                <span class="reviewer-date">Hace 3 días · Experto local</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Gallery / Atmosphere Section -->
        <section id="gallery" class="gallery-section">
            <div class="container">
                <div class="gallery-header scroll-reveal text-center">
                    <span class="section-subtitle">Nuestra Casa</span>
                    <h2 class="section-title">La Atmósfera de La Maraña</h2>
                    <p class="section-description">
                        Un espacio amplio, limpio y luminoso. Ideal tanto para almorzar en grupo como para disfrutar de
                        una cena íntima con cócteles.
                    </p>
                </div>

                <div class="gallery-grid">

                    <!-- Gallery Item 1 -->
                    <div class="gallery-item scroll-reveal">
                        <div class="image-placeholder gallery-img-1">
                            <div class="placeholder-overlay">
                                <i class="fa-solid fa-magnifying-glass-plus"></i>
                                <span>Salón e Interior</span>
                            </div>
                        </div>
                    </div>

                    <!-- Gallery Item 2 -->
                    <div class="gallery-item scroll-reveal delay-100">
                        <div class="image-placeholder gallery-img-2">
                            <div class="placeholder-overlay">
                                <i class="fa-solid fa-magnifying-glass-plus"></i>
                                <span>Arroces y Presentación</span>
                            </div>
                        </div>
                    </div>

                    <!-- Gallery Item 3 -->
                    <div class="gallery-item scroll-reveal delay-200">
                        <div class="image-placeholder gallery-img-3">
                            <div class="placeholder-overlay">
                                <i class="fa-solid fa-magnifying-glass-plus"></i>
                                <span>Detalle Cócteles Premium</span>
                            </div>
                        </div>
                    </div>

                    <!-- Gallery Item 4 -->
                    <div class="gallery-item scroll-reveal delay-300">
                        <div class="image-placeholder gallery-img-4">
                            <div class="placeholder-overlay">
                                <i class="fa-solid fa-magnifying-glass-plus"></i>
                                <span>Ambiente Noche</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Practical Info / Visit Us Section -->
        <section id="visit-us" class="visit-section">
            <div class="container">
                <div class="visit-grid">
                    <div class="visit-info scroll-reveal">
                        <span class="section-subtitle">¿Dónde estamos?</span>
                        <h2 class="section-title">Ven a Enredarte</h2>

                        <div class="hours-card">
                            <h3><i class="fa-regular fa-clock"></i> Horarios de Apertura</h3>
                            <ul class="hours-list">
                                <li data-day="tuesday"><span>Martes - Jueves</span> <span>13:00 - 17:00 | 20:00 -
                                        23:30</span></li>
                                <li data-day="friday"><span>Viernes</span> <span>13:00 - 17:00 | 20:00 - 00:30</span>
                                </li>
                                <li data-day="saturday"><span>Sábados</span> <span>13:00 - 17:00 | 20:00 - 00:30</span>
                                </li>
                                <li data-day="sunday"><span>Domingos</span> <span>13:00 - 18:00</span></li>
                                <li data-day="monday" class="closed-day"><span>Lunes</span> <span>Cerrado por
                                        descanso</span></li>
                            </ul>
                            <div class="current-status-alert" id="visit-status-alert">
                                <!-- Will be hydrated dynamically by script.js -->
                                <i class="fa-solid fa-info-circle"></i> Cargando estado de apertura...
                            </div>
                        </div>

                        <div class="contact-details">
                            <div class="contact-item">
                                <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                                <div>
                                    <h4>Dirección</h4>
                                    <p>Plaza Gonzalo Cantó, 6, 03802 Alcoi, Alicante</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
                                <div>
                                    <h4>Reservas por Teléfono</h4>
                                    <p><a href="tel:+34613007460" class="tel-link">613 00 74 60</a></p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon"><i class="fa-solid fa-circle-check"></i></div>
                                <div>
                                    <h4>Servicios de Comedor</h4>
                                    <p><span class="service-tag">Comer allí</span> <span class="service-tag">A
                                            domicilio</span> <span class="service-tag">Para llevar</span></p>
                                </div>
                            </div>
                        </div>

                        <div class="social-visit-links">
                            <a href="#" target="_blank" rel="noopener" class="social-badgefb"
                                aria-label="Síguenos en Facebook">
                                <i class="fa-brands fa-facebook"></i> Facebook (La Maraña)
                            </a>
                        </div>
                    </div>

                    <div class="visit-map scroll-reveal delay-200">
                        <div class="map-container">
                            <div class="map-inner-placeholder">
                                <div class="vector-map-graphic">
                                    <!-- A decorative CSS graphic of a neighborhood grid with a pulsing pin -->
                                    <svg viewBox="0 0 400 400" width="100%" height="100%">
                                        <g stroke="var(--border-color)" stroke-width="2" opacity="0.3">
                                            <line x1="0" y1="50" x2="400" y2="50"></line>
                                            <line x1="0" y1="150" x2="400" y2="150"></line>
                                            <line x1="0" y1="280" x2="400" y2="280"></line>
                                            <line x1="80" y1="0" x2="80" y2="400"></line>
                                            <line x1="220" y1="0" x2="220" y2="400"></line>
                                            <line x1="330" y1="0" x2="330" y2="400"></line>
                                            <!-- Diagonal river -->
                                            <path d="M-50,300 C150,280 200,380 450,320" fill="none"
                                                stroke="var(--accent)" stroke-width="12" opacity="0.15"></path>
                                        </g>
                                        <!-- Central Plaza (Gonzalo Cantó) -->
                                        <circle cx="220" cy="150" r="35" fill="var(--bg-alternative)"
                                            stroke="var(--border-color)" stroke-dasharray="2 2"></circle>
                                        <!-- Interactive pin -->
                                        <g class="map-pin-group">
                                            <circle cx="220" cy="150" r="8" fill="var(--accent)"></circle>
                                            <circle cx="220" cy="150" r="16" fill="var(--accent)" class="pin-ring">
                                            </circle>
                                            <!-- Pin marker -->
                                            <path
                                                d="M220,150 C210,130 220,110 220,110 C220,110 230,130 220,150 Z M220,123 A4,4 0 1,0 220,131 A4,4 0 1,0 220,123 Z"
                                                fill="var(--accent-warm)"></path>
                                        </g>
                                        <text x="235" y="145" font-family="'Plus Jakarta Sans', sans-serif"
                                            font-weight="600" font-size="12" fill="var(--text-light)"
                                            class="map-label">Plaza Gonzalo Cantó</text>
                                        <text x="235" y="160" font-family="'Plus Jakarta Sans', sans-serif"
                                            font-weight="500" font-size="10" fill="var(--accent)"
                                            class="map-label-sub">La Maraña</text>
                                    </svg>
                                </div>
                                <div class="map-action-overlay">
                                    <a href="https://maps.google.com/?q=Plaza+Gonzalo+Cantó,+6,+03802+Alcoi,+Alicante"
                                        target="_blank" rel="noopener" class="btn btn-accent"><i
                                            class="fa-solid fa-map-location-dot"></i> Cómo Llegar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="main-footer">
        <div class="footer-tangle-motif">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                <path d="M0,40 C360,90 720,0 1080,70 T1440,30" fill="none" stroke="var(--border-color)"
                    stroke-width="1.5" opacity="0.3"></path>
            </svg>
        </div>
        <div class="container footer-container">
            <div class="footer-brand">
                <span class="logo-text">La Maraña</span>
                <p class="footer-tagline">Cocina creativa mediterránea & cócteles.</p>
                <div class="footer-socials">
                    <a href="#" target="_blank" rel="noopener" aria-label="Facebook"><i
                            class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" target="_blank" rel="noopener" aria-label="Instagram"><i
                            class="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank" rel="noopener" aria-label="Tripadvisor"><i
                            class="fa-brands fa-tripadvisor"></i></a>
                </div>
            </div>
            <div class="footer-links">
                <h4>Navegación</h4>
                <ul>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#dishes">Nuestra Carta</a></li>
                    <li><a href="#cocktails">Coctelería</a></li>
                    <li><a href="#visit-us">Cómo Llegar</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4>Contacto</h4>
                <p><i class="fa-solid fa-location-dot"></i> Plaza Gonzalo Cantó, 6, Alcoi (Alicante)</p>
                <p><i class="fa-solid fa-phone"></i> Tlf: <a href="tel:+34613007460">613 00 74 60</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container footer-bottom-container">
                <p>&copy; 2026 La Maraña Restaurante. Todos los derechos reservados.</p>
                <p class="dev-tag">Diseñado con mimo en Alcoi</p>
            </div>
        </div>
    </footer>



    <!-- Image Lightbox (Gallery popups) -->
    <div class="lightbox-overlay" id="lightbox-overlay">
        <button class="lightbox-close" aria-label="Cerrar galería"><i class="fa-solid fa-xmark"></i></button>
        <button class="lightbox-prev" aria-label="Anterior"><i class="fa-solid fa-chevron-left"></i></button>
        <div class="lightbox-content">
            <div class="lightbox-image-placeholder">
                <i class="fa-solid fa-image"></i>
            </div>
            <p class="lightbox-caption"></p>
        </div>
        <button class="lightbox-next" aria-label="Siguiente"><i class="fa-solid fa-chevron-right"></i></button>
    </div>

    <!-- Application Script -->
    <script src="script.js"></script>
</body>

</html>

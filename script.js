/**
 * La Maraña Restaurant Website Script
 * Responsive UI, Real-time opening hours, and interactive elements.
 */

document.addEventListener("DOMContentLoaded", () => {
    // --- STATE & UTILITIES ---
    const MARANA_HOURS = {
        // [DayIndex]: [{ open: 'HH:MM', close: 'HH:MM' }, ...]
        // 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
        0: [{ start: "13:00", end: "18:00" }], // Domingo
        1: [], // Lunes - Cerrado
        2: [{ start: "13:00", end: "17:00" }, { start: "20:00", end: "23:30" }], // Martes
        3: [{ start: "13:00", end: "17:00" }, { start: "20:00", end: "23:30" }], // Miércoles
        4: [{ start: "13:00", end: "17:00" }, { start: "20:00", end: "23:30" }], // Jueves
        5: [{ start: "13:00", end: "17:00" }, { start: "20:00", end: "00:30" }], // Viernes
        6: [{ start: "13:00", end: "17:00" }, { start: "20:00", end: "00:30" }]  // Sábado
    };

    const DAY_NAMES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    // Compare two HH:MM strings: true if t1 <= t2
    function compareTime(t1, t2) {
        const [h1, m1] = t1.split(":").map(Number);
        const [h2, m2] = t2.split(":").map(Number);
        return h1 * 60 + m1 <= h2 * 60 + m2;
    }

    // Check if a time string is between start and end strings
    function isTimeBetween(time, start, end) {
        // If end time is past midnight (e.g. 00:30), handle cross-over
        if (compareTime(end, start)) {
            return compareTime(start, time) || compareTime(time, end);
        }
        return compareTime(start, time) && compareTime(time, end);
    }

    // Get current spanish local time (or browser local time)
    function currentOpenStatus() {
        const now = new Date();
        const currentDayIndex = now.getDay();
        const currentHour = String(now.getHours()).padStart(2, '0');
        const currentMin = String(now.getMinutes()).padStart(2, '0');
        const currentTimeString = `${currentHour}:${currentMin}`;

        const todaysSlots = MARANA_HOURS[currentDayIndex];

        // 1. Check if open right now
        for (const slot of todaysSlots) {
            if (isTimeBetween(currentTimeString, slot.start, slot.end)) {
                return {
                    isOpen: true,
                    text: `Abierto · Cierra a las ${slot.end}`,
                    currentSlotEnd: slot.end
                };
            }
        }

        // 2. Closed. Find when does it open next
        // Look through today's future slots
        for (const slot of todaysSlots) {
            if (compareTime(currentTimeString, slot.start)) {
                return {
                    isOpen: false,
                    text: `Cerrado · Abre hoy a las ${slot.start}`
                };
            }
        }

        // Look into tomorrow and consecutive days
        for (let i = 1; i <= 7; i++) {
            const nextDayIndex = (currentDayIndex + i) % 7;
            const nextDaySlots = MARANA_HOURS[nextDayIndex];
            if (nextDaySlots.length > 0) {
                const nextDayName = i === 1 ? "mañana" : `el ${DAY_NAMES[nextDayIndex]}`;
                return {
                    isOpen: false,
                    text: `Cerrado · Abre ${nextDayName} a las ${nextDaySlots[0].start}`
                };
            }
        }

        return { isOpen: false, text: "Cerrado" };
    }

    // Dynamic hours hydration
    function updateHoursUI() {
        const status = currentOpenStatus();
        const badgeEl = document.getElementById("hero-hours-badge");
        const alertEl = document.getElementById("visit-status-alert");
        const now = new Date();
        const currentDayIndex = now.getDay();

        // Hydrate header/hero badge
        if (badgeEl) {
            const textEl = badgeEl.querySelector(".badge-text");
            textEl.textContent = status.text;
            if (status.isOpen) {
                badgeEl.classList.remove("closed");
            } else {
                badgeEl.classList.add("closed");
            }
        }

        // Hydrate contact card alert
        if (alertEl) {
            alertEl.innerHTML = `<i class="fa-solid ${status.isOpen ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i> ${status.text}`;
            if (status.isOpen) {
                alertEl.classList.remove("closed");
            } else {
                alertEl.classList.add("closed");
            }
        }

        // Bold current day in the hours list
        const daysLi = document.querySelectorAll(".hours-list li");
        const daysMap = { 2: "tuesday", 3: "tuesday", 4: "tuesday", 5: "friday", 6: "saturday", 0: "sunday", 1: "monday" };
        const currentDayAttr = daysMap[currentDayIndex];

        daysLi.forEach(li => {
            if (li.getAttribute("data-day") === currentDayAttr) {
                li.classList.add("active-day");
                // Add a small label
                const label = document.createElement("span");
                label.className = "today-tag";
                label.style.fontSize = "0.7rem";
                label.style.color = "var(--accent)";
                label.style.fontWeight = "bold";
                label.style.marginLeft = "8px";
                label.textContent = "(Hoy)";
                li.querySelector("span").appendChild(label);
            }
        });
    }

    // Call early
    updateHoursUI();
    setInterval(updateHoursUI, 60000); // refresh every minute

    // --- STICKY NAV --
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // --- MOBILE NAVIGATION DRAWER ---
    const mobileToggle = document.querySelector(".mobile-nav-toggle");
    const mobileClose = document.querySelector(".mobile-nav-close");
    const mobileOverlay = document.querySelector(".mobile-nav-overlay");
    const mobileDrawer = document.querySelector(".mobile-nav-drawer");
    const drawerLinks = document.querySelectorAll(".mobile-nav-page-link");

    function openMobileDrawer() {
        mobileDrawer.classList.add("open");
        mobileOverlay.classList.add("visible");
        document.body.style.overflow = "hidden"; // lock scroll
    }

    function closeMobileDrawer() {
        mobileDrawer.classList.remove("open");
        mobileOverlay.classList.remove("visible");
        document.body.style.overflow = ""; // unlock scroll
    }

    if (mobileToggle) mobileToggle.addEventListener("click", openMobileDrawer);
    if (mobileClose) mobileClose.addEventListener("click", closeMobileDrawer);
    if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener("click", closeMobileDrawer);
    });

    // --- DISH FILTER FUNCTIONALITY ---
    const filterTabs = document.querySelectorAll(".filter-tab");
    const dishCards = document.querySelectorAll(".dish-card");

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const filterValue = tab.getAttribute("data-filter");

            // Toggle active style on tab buttons
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Filter cards
            dishCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filterValue === "all" || category === filterValue) {
                    card.classList.remove("hidden");
                    // Quick fade animation
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                    }, 50);
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });


    // --- INTERSECTION OBSERVER FOR SCROLL REVEALS ---
    const revealElements = document.querySelectorAll(".scroll-reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); // only reveal once
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add("active"));
    }

    // --- NAV LINK SCROLLSPY ---
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function scrollActiveHighlight() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", scrollActiveHighlight);

    // --- GALLERY LIGHTBOX VIEWER ---
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxImgPlaceholder = document.querySelector(".lightbox-image-placeholder");
    const lightboxCaption = document.querySelector(".lightbox-caption");
    const lightboxClose = document.querySelector(".lightbox-close");
    const lightboxPrev = document.querySelector(".lightbox-prev");
    const lightboxNext = document.querySelector(".lightbox-next");

    let currentGalleryIndex = 0;
    const galleryData = [
        { title: "Salón e Interior", theme: "Ambiente cálido y acogedor diseñado al detalle." },
        { title: "Arroces y Presentación", theme: "Nuestros arroces creativos listos para servir." },
        { title: "Detalle Cócteles Premium", theme: "Mixología premium con destilados superiores." },
        { title: "Ambiente Noche", theme: "Luces cálidas para las cenas y veladas más mágicas." }
    ];

    function openLightbox(index) {
        currentGalleryIndex = index;
        updateLightboxContent();
        lightboxOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightboxOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    function updateLightboxContent() {
        const data = galleryData[currentGalleryIndex];
        if (data) {
            lightboxCaption.textContent = `${data.title} — ${data.theme}`;

            // Style-up the placeholder dynamically with custom inner content to prove it works
            lightboxImgPlaceholder.innerHTML = `
                <div style="text-align: center; color: var(--text-light); padding: 2rem;">
                    <i class="fa-solid fa-camera" style="font-size: 3.5rem; color: var(--accent); margin-bottom: 1.5rem; display: block;"></i>
                    <h3 style="font-family: var(--ff-display); font-size: 1.8rem; margin-bottom: 0.5rem; font-style: italic;">${data.title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">${data.theme}</p>
                </div>
            `;
        }
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => openLightbox(index));
    });

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

    if (lightboxPrev) {
        lightboxPrev.addEventListener("click", () => {
            currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
            updateLightboxContent();
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener("click", () => {
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
            updateLightboxContent();
        });
    }

    // Keyboard controls in lightbox
    document.addEventListener("keydown", (e) => {
        if (!lightboxOverlay.classList.contains("active")) return;

        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft" && lightboxPrev) lightboxPrev.click();
        if (e.key === "ArrowRight" && lightboxNext) lightboxNext.click();
    });
});

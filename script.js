// Data for Dynamic Interactive Features
const FULL_GALLERY = [
  { src: 'images/hero-exterior.jpg', title: 'Fachada e Serra dos Órgãos', category: 'Exterior' },
  { src: 'images/hero-piscina-noite.jpg', title: 'Piscina Iluminada à Noite', category: 'Lazer' },
  { src: 'images/card-piscina-dia.jpg', title: 'Piscina Durante o Dia', category: 'Lazer' },
  { src: 'images/card-cafe-piscina.jpg', title: 'Café da Manhã à Beira da Piscina', category: 'Lazer' },
  { src: 'images/card-patio-piscina.jpg', title: 'Pátio e Área Externa', category: 'Lazer' },
  { src: 'images/drone-aerea.jpg', title: 'Vista Aérea do Terreno', category: 'Exterior' },
  { src: 'images/card-fachada.jpg', title: 'Jardim Frontal e Chalé', category: 'Exterior' },
  { src: 'images/card-rede.jpg', title: 'Varanda Coberta com Rede', category: 'Exterior' },
  { src: 'images/showcase-gourmet.jpg', title: 'Varanda Gourmet e Churrasqueira', category: 'Gourmet' },
  { src: 'images/card-bartender.jpg', title: 'Espaço Bartender', category: 'Gourmet' },
  { src: 'images/editorial-jantar.jpg', title: 'Sala de Jantar Panorâmica', category: 'Interior' },
  { src: 'images/showcase-sala.jpg', title: 'Sala de Estar Principal', category: 'Interior' },
  { src: 'images/card-sala-tv.jpg', title: 'Sala de TV com Janelão Verde', category: 'Interior' },
  { src: 'images/card-lareira.jpg', title: 'Lareira Interna em Pedra', category: 'Interior' },
  { src: 'images/showcase-cozinha.jpg', title: 'Cozinha Completa', category: 'Interior' },
  { src: 'images/card-quarto1.jpg', title: 'Quarto 1 · Casal', category: 'Quartos' },
  { src: 'images/card-quarto2.jpg', title: 'Quarto 2 · Casal', category: 'Quartos' },
  { src: 'images/card-quarto3.jpg', title: 'Quarto 3 · 2 Casal + Beliche', category: 'Quartos' },
  { src: 'images/card-banheiro.jpg', title: 'Banheiro Completo', category: 'Quartos' },
  { src: 'images/hero-cachoeira.jpg', title: 'Cachoeira do Condomínio', category: 'Natureza' },
  { src: 'images/card-serra.jpg', title: 'Montanhas da Serra dos Órgãos', category: 'Natureza' },
  { src: 'images/card-campo.jpg', title: 'Campo de Futebol em Frente', category: 'Natureza' },
  { src: 'images/card-condominio.jpg', title: 'Alameda Arborizada do Condomínio', category: 'Natureza' },
];

const SPACE_CATEGORIES = {
  lazer: [
    {
      eyebrow: 'ÁREA EXTERNA',
      title: 'Piscina Exclusiva',
      description: 'Piscina ampla privativa, cercada por gramado verde e espreguiçadeiras com vista para a serra.',
      image: 'images/card-piscina-dia.jpg',
    },
    {
      eyebrow: 'CONVIVÊNCIA',
      title: 'Pátio ao Ar Livre',
      description: 'Espaço aberto para café da manhã ao sol, banho de ducha externa e fins de tarde relaxantes.',
      image: 'images/card-cafe-piscina.jpg',
    },
    {
      eyebrow: 'EXPERIÊNCIA',
      title: 'Espaço Bartender',
      description: 'Bancada exclusiva integrada à varanda gourmet para preparar drinks e reunir amigos.',
      image: 'images/card-bartender.jpg',
    },
    {
      eyebrow: 'RELAXAMENTO',
      title: 'Varanda com Rede',
      description: 'Rede preguiçosa com vista para os jardins e brisa fresca vinda da floresta tropical.',
      image: 'images/card-rede.jpg',
    },
  ],
  interior: [
    {
      eyebrow: 'QUARTO 1 · CASAL',
      title: 'Suíte Master',
      description: 'Cama de casal com cabeceira estofada, enxoval branco, cortina blackout e armário.',
      image: 'images/card-quarto1.jpg',
    },
    {
      eyebrow: 'QUARTO 2 · CASAL',
      title: 'Quarto Climatizado',
      description: 'Cama de casal, ar-condicionado, TV e iluminação quente para noites tranquilas na serra.',
      image: 'images/card-quarto2.jpg',
    },
    {
      eyebrow: 'QUARTO 3 · FAMÍLIA',
      title: 'Quarto Amplo',
      description: 'Duas camas de casal e um beliche, acomodando grupos e famílias com espaço e conforto.',
      image: 'images/card-quarto3.jpg',
    },
    {
      eyebrow: 'CONFORTO INTERNO',
      title: 'Sala de TV & Lareira',
      description: 'Sala de estar iluminada com sofás espaçosos, lareira em pedra, Wi-Fi e janelão para o jardim.',
      image: 'images/card-sala-tv.jpg',
    },
  ],
  natureza: [
    {
      eyebrow: 'CONDOMÍNIO',
      title: '2 Cachoeiras Próprias',
      description: 'Águas cristalinas cercadas pela Mata Atlântica, com o som da cachoeira presente dia e noite.',
      image: 'images/hero-cachoeira.jpg',
    },
    {
      eyebrow: '10 MINUTOS A PÉ',
      title: 'Serra dos Órgãos',
      description: 'Porta de entrada para trilhas nas montanhas, mirantes e biodiversidade do Parque Nacional.',
      image: 'images/card-serra.jpg',
    },
    {
      eyebrow: 'EM FRENTE À CASA',
      title: 'Campo & Playground',
      description: 'Direito ao campo de futebol gramado em frente à casa e área infantil arborizada para crianças.',
      image: 'images/card-campo.jpg',
    },
    {
      eyebrow: 'ACESSO AO LAGO',
      title: 'Caminhos Arborizados',
      description: 'Ruas calçadas de pedra dentro do condomínio tranquilo, com acesso ao lago e estacionamento no local.',
      image: 'images/card-condominio.jpg',
    },
  ],
};

const HERO_SCENES_DATA = [
  {
    id: 'serra',
    eyebrow: 'Guapimirim · Cidade do Dedo de Deus',
    headline: 'Um Refúgio Que\nAbraça a Natureza',
  },
  {
    id: 'piscina',
    eyebrow: 'Lazer Privativo · Dia e Noite',
    headline: 'Desenhada Para\nMomentos Reais',
  },
  {
    id: 'cachoeira',
    eyebrow: 'Mata Atlântica · Condomínio Fechado',
    headline: 'O Som da Cachoeira\nDia e Noite',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Effect
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-[#0B3B2E]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-[#C9A45C]/15');
      navbar.classList.remove('bg-gradient-to-b', 'from-black/55', 'via-black/25', 'to-transparent');
    } else {
      navbar.classList.remove('bg-[#0B3B2E]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-[#C9A45C]/15');
      navbar.classList.add('bg-gradient-to-b', 'from-black/55', 'via-black/25', 'to-transparent');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });
    mobileMenuDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenuDrawer.classList.add('hidden');
      });
    });
  }

  // 3. Cinematic Hero Scroll Logic
  const heroSection = document.getElementById('inicio');
  const sceneElements = document.querySelectorAll('.hero-scene');
  const eyebrowEl = document.getElementById('hero-eyebrow');
  const headlineEl = document.getElementById('hero-headline');
  const chapterBtns = document.querySelectorAll('.hero-chapter-btn');
  const scrollIndicator = document.getElementById('hero-scroll-indicator');

  let currentActiveIndex = 0;

  function clamp(val, min = 0, max = 1) {
    return Math.min(max, Math.max(min, val));
  }

  function updateHero() {
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    const scrollable = heroSection.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const progress = clamp(-rect.top / scrollable, 0, 1);

    const opacities = [
      1 - clamp((progress - 0.25) / 0.16, 0, 1),
      clamp((progress - 0.23) / 0.16, 0, 1) * (1 - clamp((progress - 0.62) / 0.16, 0, 1)),
      clamp((progress - 0.6) / 0.16, 0, 1),
    ];

    sceneElements.forEach((el, idx) => {
      const localScale =
        idx === 0
          ? 1.02 + progress * 0.24
          : idx === 1
          ? 1.0 + Math.max(0, progress - 0.22) * 0.22
          : 1.0 + Math.max(0, progress - 0.58) * 0.22;

      el.style.opacity = opacities[idx];
      el.style.transform = `scale(${localScale.toFixed(4)})`;
    });

    const activeIndex = progress < 0.34 ? 0 : progress < 0.7 ? 1 : 2;
    if (activeIndex !== currentActiveIndex) {
      currentActiveIndex = activeIndex;
      const data = HERO_SCENES_DATA[activeIndex];
      if (eyebrowEl && headlineEl) {
        eyebrowEl.textContent = data.eyebrow;
        headlineEl.innerHTML = data.headline.replace('\n', '<br>');
        eyebrowEl.parentElement.classList.remove('hero-text-enter');
        void eyebrowEl.parentElement.offsetWidth; // trigger reflow
        eyebrowEl.parentElement.classList.add('hero-text-enter');
      }

      chapterBtns.forEach((btn, bIdx) => {
        if (bIdx === activeIndex) {
          btn.className = 'hero-chapter-btn flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase transition-all cursor-pointer border border-[#C9A45C] bg-[#0B3B2E]/85 text-[#C9A45C]';
        } else {
          btn.className = 'hero-chapter-btn flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase transition-all cursor-pointer border border-white/25 bg-black/25 text-white/70 hover:text-white hover:border-white/50';
        }
      });
    }

    if (scrollIndicator) {
      scrollIndicator.style.opacity = progress > 0.12 ? '0' : '1';
    }
  }

  window.addEventListener('scroll', updateHero, { passive: true });
  window.addEventListener('resize', updateHero, { passive: true });
  updateHero();

  // Jump to Scene by clicking chapter button
  chapterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetIndex = parseInt(btn.dataset.index, 10);
      const scrollable = heroSection.offsetHeight - window.innerHeight;
      const targets = [0, 0.48, 0.92];
      const targetTop = heroSection.offsetTop + scrollable * (targets[targetIndex] ?? 0);
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  // 4. Responsive Video Selection (Desktop 16:9 vs Mobile 9:16)
  function initHeroVideos() {
    const isMobile = window.innerWidth < 768;
    const heroVideos = document.querySelectorAll('video[data-mobile-src]');
    heroVideos.forEach((vid) => {
      const targetSrc = isMobile ? vid.dataset.mobileSrc : vid.dataset.desktopSrc;
      if (vid.getAttribute('src') !== targetSrc) {
        vid.setAttribute('src', targetSrc);
        vid.load();
        vid.play().catch(() => {});
      }
    });
  }
  initHeroVideos();
  window.addEventListener('resize', initHeroVideos);

  // 5. Space Categories Tabs
  const spaceTabBtns = document.querySelectorAll('.space-tab-btn');
  const spaceCardsContainer = document.getElementById('space-cards-grid');

  function renderSpaceCards(categoryKey) {
    if (!spaceCardsContainer) return;
    const items = SPACE_CATEGORIES[categoryKey] || SPACE_CATEGORIES.lazer;
    spaceCardsContainer.innerHTML = items
      .map(
        (card) => `
        <article class="group bg-[#EDE7DA]/50 border border-[#1C2421]/10 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#1C2421]/20">
          <button type="button" class="open-gallery-btn block w-full aspect-[4/3] overflow-hidden cursor-pointer" data-img="${card.image}">
            <img src="${card.image}" alt="${card.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <p class="text-[10px] uppercase tracking-[0.24em] text-[#7A6B4F] font-semibold">${card.eyebrow}</p>
              <h3 class="font-serif-editorial text-2xl text-[#1C2421] mt-1.5 leading-snug">${card.title}</h3>
              <p class="mt-3 text-xs sm:text-[13px] text-[#5A6560] font-light leading-relaxed">${card.description}</p>
            </div>
            <button type="button" class="open-gallery-btn mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#0B3B2E] font-medium hover:text-[#C9A45C] transition-colors cursor-pointer self-start" data-img="${card.image}">
              <span>Ver Foto</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6l6 6-6 6"></path></svg>
            </button>
          </div>
        </article>
      `
      )
      .join('');

    // Re-attach gallery click handlers
    spaceCardsContainer.querySelectorAll('.open-gallery-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        openGallery(btn.dataset.img);
      });
    });
  }

  spaceTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.tab;
      spaceTabBtns.forEach((b) => {
        b.className = 'space-tab-btn relative inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase pb-2 transition-colors cursor-pointer text-[#5A6560] hover:text-[#1C2421] font-medium';
        const underline = b.querySelector('.tab-underline');
        if (underline) underline.remove();
      });
      btn.className = 'space-tab-btn relative inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase pb-2 transition-colors cursor-pointer text-[#0B3B2E] font-semibold';
      const line = document.createElement('span');
      line.className = 'tab-underline absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#0B3B2E]';
      btn.appendChild(line);

      renderSpaceCards(cat);
    });
  });

  // Initial render of spaces
  renderSpaceCards('lazer');

  // 6. Bedroom Mobile Carousel Scroll
  const bedroomsTrack = document.getElementById('bedrooms-track');
  const prevBedroomBtn = document.getElementById('prev-bedroom-btn');
  const nextBedroomBtn = document.getElementById('next-bedroom-btn');

  if (bedroomsTrack && prevBedroomBtn && nextBedroomBtn) {
    prevBedroomBtn.addEventListener('click', () => {
      bedroomsTrack.scrollBy({ left: -bedroomsTrack.clientWidth * 0.88, behavior: 'smooth' });
    });
    nextBedroomBtn.addEventListener('click', () => {
      bedroomsTrack.scrollBy({ left: bedroomsTrack.clientWidth * 0.88, behavior: 'smooth' });
    });
  }

  // 7. Reserve Modal
  const reserveModal = document.getElementById('reserve-modal');
  const openReserveBtns = document.querySelectorAll('.open-reserve-btn');
  const closeReserveBtn = document.getElementById('close-reserve-btn');
  const reserveForm = document.getElementById('reserve-form');
  const guestsInput = document.getElementById('reserve-guests');
  const checkinInput = document.getElementById('reserve-checkin');
  const checkoutInput = document.getElementById('reserve-checkout');
  const whatsappSubmitLink = document.getElementById('reserve-whatsapp-submit');

  function updateWhatsAppUrl() {
    if (!whatsappSubmitLink) return;
    const guests = guestsInput ? guestsInput.value : 4;
    const checkin = checkinInput && checkinInput.value ? checkinInput.value : '';
    const checkout = checkoutInput && checkoutInput.value ? checkoutInput.value : '';

    const parts = [
      'Olá! Gostaria de consultar disponibilidade para o Refúgio Serra dos Órgãos (Guapimirim).',
      `• Hóspedes: ${guests}`,
    ];
    if (checkin) parts.push(`• Check-in: ${checkin}`);
    if (checkout) parts.push(`• Checkout: ${checkout}`);

    const url = `https://wa.me/5521998474055?text=${encodeURIComponent(parts.join('\n'))}`;
    whatsappSubmitLink.setAttribute('href', url);
  }

  if (guestsInput) guestsInput.addEventListener('input', updateWhatsAppUrl);
  if (checkinInput) checkinInput.addEventListener('change', updateWhatsAppUrl);
  if (checkoutInput) checkoutInput.addEventListener('change', updateWhatsAppUrl);

  function openReserveModal() {
    if (!reserveModal) return;
    updateWhatsAppUrl();
    reserveModal.classList.remove('hidden');
    reserveModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeReserveModal() {
    if (!reserveModal) return;
    reserveModal.classList.add('hidden');
    reserveModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  openReserveBtns.forEach((btn) => btn.addEventListener('click', openReserveModal));
  if (closeReserveBtn) closeReserveBtn.addEventListener('click', closeReserveModal);
  if (reserveModal) {
    reserveModal.addEventListener('click', (e) => {
      if (e.target === reserveModal) closeReserveModal();
    });
  }

  // 8. Full Gallery Modal
  const galleryModal = document.getElementById('gallery-modal');
  const galleryImageEl = document.getElementById('gallery-current-img');
  const galleryTitleEl = document.getElementById('gallery-current-title');
  const galleryCategoryEl = document.getElementById('gallery-current-category');
  const galleryCounterEl = document.getElementById('gallery-counter');
  const galleryThumbsContainer = document.getElementById('gallery-thumbs-track');
  const closeGalleryBtn = document.getElementById('close-gallery-btn');
  const prevGalleryBtn = document.getElementById('prev-gallery-btn');
  const nextGalleryBtn = document.getElementById('next-gallery-btn');
  const galleryCatBtns = document.querySelectorAll('.gallery-cat-btn');

  let currentGalleryList = [...FULL_GALLERY];
  let currentGalleryIndex = 0;

  function renderGalleryThumbs() {
    if (!galleryThumbsContainer) return;
    galleryThumbsContainer.innerHTML = currentGalleryList
      .map(
        (item, idx) => `
        <button type="button" class="shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all cursor-pointer ${
          idx === currentGalleryIndex ? 'border-[#C9A45C] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
        }" data-index="${idx}">
          <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover" />
        </button>
      `
      )
      .join('');

    galleryThumbsContainer.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        setGalleryActive(parseInt(btn.dataset.index, 10));
      });
    });
  }

  function setGalleryActive(index) {
    if (index < 0) index = currentGalleryList.length - 1;
    if (index >= currentGalleryList.length) index = 0;
    currentGalleryIndex = index;

    const currentItem = currentGalleryList[index] || currentGalleryList[0];
    if (galleryImageEl) galleryImageEl.src = currentItem.src;
    if (galleryTitleEl) galleryTitleEl.textContent = currentItem.title;
    if (galleryCategoryEl) galleryCategoryEl.textContent = currentItem.category;
    if (galleryCounterEl) {
      galleryCounterEl.textContent = `${index + 1} / ${currentGalleryList.length}`;
    }

    renderGalleryThumbs();

    const activeThumb = galleryThumbsContainer.children[index];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function openGallery(initialImageSrc = null) {
    if (!galleryModal) return;
    currentGalleryList = [...FULL_GALLERY];
    galleryCatBtns.forEach((btn) => {
      if (btn.dataset.category === 'Todas') {
        btn.className = 'gallery-cat-btn px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors border border-[#C9A45C] bg-[#C9A45C] text-[#07271E] font-medium';
      } else {
        btn.className = 'gallery-cat-btn px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors border border-white/20 text-white/70 hover:text-white hover:border-white/40';
      }
    });

    if (initialImageSrc) {
      const foundIdx = currentGalleryList.findIndex((it) => it.src === initialImageSrc);
      currentGalleryIndex = foundIdx >= 0 ? foundIdx : 0;
    } else {
      currentGalleryIndex = 0;
    }

    setGalleryActive(currentGalleryIndex);
    galleryModal.classList.remove('hidden');
    galleryModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeGallery() {
    if (!galleryModal) return;
    galleryModal.classList.add('hidden');
    galleryModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  if (closeGalleryBtn) closeGalleryBtn.addEventListener('click', closeGallery);
  if (prevGalleryBtn) prevGalleryBtn.addEventListener('click', () => setGalleryActive(currentGalleryIndex - 1));
  if (nextGalleryBtn) nextGalleryBtn.addEventListener('click', () => setGalleryActive(currentGalleryIndex + 1));

  galleryCatBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      galleryCatBtns.forEach((b) => {
        b.className = 'gallery-cat-btn px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors border border-white/20 text-white/70 hover:text-white hover:border-white/40';
      });
      btn.className = 'gallery-cat-btn px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors border border-[#C9A45C] bg-[#C9A45C] text-[#07271E] font-medium';

      if (cat === 'Todas') {
        currentGalleryList = [...FULL_GALLERY];
      } else {
        currentGalleryList = FULL_GALLERY.filter((item) => item.category === cat);
      }
      setGalleryActive(0);
    });
  });

  // Global triggers for opening gallery
  document.querySelectorAll('.open-gallery-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      openGallery(btn.dataset.img || null);
    });
  });

  // Global Keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReserveModal();
      closeGallery();
    }
    if (galleryModal && !galleryModal.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') setGalleryActive(currentGalleryIndex - 1);
      if (e.key === 'ArrowRight') setGalleryActive(currentGalleryIndex + 1);
    }
  });
});

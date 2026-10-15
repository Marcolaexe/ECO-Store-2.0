/* =========================================================
   1. CATÁLOGO DE PRODUTOS COM AS SUAS FOTOS
========================================================== */
const PRODUCTS = [
  // Camisetas
  {
    id: 'camiseta-preta',
    name: 'Camiseta ECO Style Black',
    category: 'camiseta',
    price: 119.99,
    sizes: ['P', 'M', 'G', 'GG'],
    desc: 'Camisetas — cor preto',
    tagBest: true,
    image: './assets/camisetaECO.webp',
    imageBack: './assets/camisetaECOpretaverso.webp'
  },
  {
    id: 'camiseta-branca',
    name: 'Camiseta ECO Style Off White',
    category: 'camiseta',
    price: 119.99,
    sizes: ['P', 'M', 'G', 'GG'],
    desc: 'Camisetas — cor branco',
    tagBest: false,
    image: './assets/camisetaECObrancafrente.webp',
    imageBack: './assets/camisetaECObrancaverso.webp'
  },
  {
    id: 'camiseta-chumbo',
    name: 'Camiseta ECO Style Chumbo',
    category: 'camiseta',
    price: 119.99,
    sizes: ['P', 'M', 'G', 'GG'],
    desc: 'Camisetas — cor chumbo',
    tagBest: false,
    image: './assets/camisetacinzaECOfrente.webp',
    imageBack: './assets/camisetacinzaECOverso.webp'
  },
  {
    id: 'camiseta-azul-marinho',
    name: 'Camiseta ECO Style Blue',
    category: 'camiseta',
    price: 119.99,
    sizes: ['P', 'M', 'G', 'GG'],
    desc: 'Camisetas — cor azul marinho',
    tagBest: false,
    image: './assets/camisetaECOazulfrente.webp',
    imageBack: './assets/camisetaECOazulVERSO.webp'
  },

  // Calças
  {
    id: 'calca-preta',
    name: 'Baggy Jeans ECO Preta',
    category: 'calca',
    price: 199.99,
    sizes: ['38', '40', '42', '44'],
    desc: 'Calças — cor preto',
    tagBest: false,
    image: './assets/jeanspretaECOfrente.webp',
    imageBack: './assets/jeanspretaECOverso.webp'
  },
  {
    id: 'calca-branca',
    name: 'Baggy Jeans ECO Off White',
    category: 'calca',
    price: 199.99,
    sizes: ['38', '40', '42', '44'],
    desc: 'Calças — cor branco',
    tagBest: false,
    image: './assets/jeanscinzaECOfrente.webp',
    imageBack: './assets/jeanscinzaECOverso.webp'
  },
  {
    id: 'calca-azul-marinho',
    name: 'Baggy Jeans ECO Azul',
    category: 'calca',
    price: 199.99,
    sizes: ['38', '40', '42', '44'],
    desc: 'Calças — cor azul marinho',
    tagBest: false,
    image: './assets/jeansECOfrente.webp',
    imageBack: './assets/jeansecoverso.webp'
  },

  // Moletons
  {
    id: 'moletom-preto',
    name: 'Moletom ECO Style Black',
    category: 'moletom',
    price: 219.99,
    sizes: ['P', 'M', 'G', 'GG'],
    desc: 'Moletons — cor preto',
    tagBest: true,
    image: './assets/moletompretoECO.webp'
  },
  {
    id: 'moletom-branco',
    name: 'Moletom ECO Style White',
    category: 'moletom',
    price: 219.99,
    sizes: ['P', 'M', 'G', 'GG'],
    desc: 'Moletons — cor branco',
    tagBest: false,
    image: './assets/moletombrancoECOfrente.webp'
  },
  {
    id: 'moletom-chumbo',
    name: 'Moletom ECO Style Chumbo',
    category: 'moletom',
    price: 219.99,
    sizes: ['P', 'M', 'G', 'GG'],
    desc: 'Moletons — cor chumbo',
    tagBest: false,
    image: './assets/moletomcinzaECOfrente.webp',
    imageBack: './assets/moletomcinzaECOverso.webp'
  },

  // Bonés
  {
    id: 'bone-preto',
    name: 'Boné ECO Preto',
    category: 'bone',
    price: 89.99,
    sizes: ['Único'],
    desc: 'Bonés — cor preto',
    tagBest: false,
    image: './assets/bonepretoECOfrente.webp',
    imageBack: './assets/bonepretoECOverso.webp'
  }
];

/* Descrição mais completa, usada na tela de detalhe do produto.
   ⚠️ Texto genérico por categoria — ajuste depois com informações
   reais de tecido/costura de cada peça, se quiser mais precisão. */
const LONG_DESC_BY_CATEGORY = {
  camiseta: 'Camiseta de corte solto, em algodão de gramatura encorpada — não transparece e mantém a forma depois de várias lavagens. Modelagem streetwear, caimento confortável, serve bem tanto justa quanto numa folga maior.',
  calca: 'Calça baggy de cintura média, corte largo do quadril até o tornozelo. Tecido resistente, bolsos funcionais, pensada pra quem curte uma modelagem mais solta sem perder o caimento.',
  moletom: 'Moletom com forro felpado por dentro, gola careca reforçada e punhos/barra em ribana pra não esticar com o uso. Corte oversized, pensado pra ficar bem tanto sozinho quanto em camadas.',
  bone: 'Boné de aba curva, modelagem clássica streetwear. Ajuste traseiro, tecido durável, acabamento discreto — combina com qualquer peça do catálogo.'
};
PRODUCTS.forEach(p => { if (!p.longDesc) p.longDesc = LONG_DESC_BY_CATEGORY[p.category] || p.desc; });

const CATEGORY_LABELS = {
  camiseta: 'Camisetas',
  calca: 'Calças',
  moletom: 'Moletons',
  bone: 'Bonés'
};

const CATEGORIES = [
  { id: 'todas', name: 'Todas' },
  { id: 'camiseta', name: 'Camisetas' },
  { id: 'calca', name: 'Calças' },
  { id: 'moletom', name: 'Moletons' },
  { id: 'bone', name: 'Bonés' }
];

/* =========================================================
   1b. CARROSSEL DO HERO (fotos reais dos produtos)
========================================================== */
function findProduct(id) { return PRODUCTS.find(p => p.id === id); }

const HERO_SLIDES = [
  {
    type: 'grid',
    images: [
      findProduct('camiseta-preta').image,
      findProduct('calca-preta').image,
      findProduct('moletom-branco').image,
      findProduct('bone-preto').image,
      findProduct('camiseta-branca').image,
      findProduct('calca-branca').image
    ],
    ctaLabel: 'Ver catálogo',
    ctaHref: '#catalogo'
  },
  {
    type: 'photo',
    image: findProduct('moletom-preto').image,
    kicker: 'Coleção atual',
    phrase: 'Peças simples, feitas pra durar.',
    ctaLabel: 'Ver catálogo',
    ctaHref: '#catalogo'
  },
  {
    type: 'photo',
    image: findProduct('calca-preta').image,
    kicker: 'Entrega',
    phrase: 'Frete fixo de R$ 19,90 em qualquer pedido.',
    ctaLabel: 'Ver catálogo',
    ctaHref: '#catalogo'
  }
];

const heroTrack = document.getElementById('heroTrack');
const heroDotsEl = document.getElementById('heroDots');
const heroPrevBtn = document.getElementById('heroPrev');
const heroNextBtn = document.getElementById('heroNext');
let heroIndex = 0;
let heroTimer = null;

function renderHeroSlide(slide) {
  if (slide.type === 'grid') {
    return `
      <div class="hero-slide hero-slide--bg">
        <div class="hero-slide-grid">
          <a href="${slide.ctaHref}" class="hero-shop-now">${slide.ctaLabel.toUpperCase()}</a>
        </div>
      </div>`;
  }
  return `
    <div class="hero-slide hero-slide--bg">
      <div class="hero-slide-photo">
        <div class="hero-slide-copy">
          <span class="hero-kicker">${slide.kicker}</span>
          <p class="hero-phrase">${slide.phrase}</p>
          <a href="${slide.ctaHref}" class="btn btn-primary">${slide.ctaLabel}</a>
        </div>
      </div>
    </div>`;
}

function renderHeroCarousel() {
  if (!heroTrack) return;
  heroTrack.innerHTML = HERO_SLIDES.map(renderHeroSlide).join('');
  heroDotsEl.innerHTML = HERO_SLIDES.map((_, i) =>
    `<button class="hero-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Ir pro slide ${i + 1}"></button>`
  ).join('');
  heroDotsEl.querySelectorAll('[data-dot]').forEach(dot => {
    dot.addEventListener('click', () => goToHeroSlide(+dot.dataset.dot));
  });
  updateHeroPosition();
}

function updateHeroPosition() {
  heroTrack.style.transform = `translateX(-${heroIndex * 100}%)`;
  heroDotsEl.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === heroIndex));

  const slides = heroTrack.querySelectorAll('.hero-slide');
  slides.forEach(s => s.classList.remove('hero-anim'));
  const activeSlide = slides[heroIndex];
  if (activeSlide) {
    // força o navegador a "esquecer" a animação anterior antes de reaplicar
    void activeSlide.offsetWidth;
    activeSlide.classList.add('hero-anim');
  }
}

function goToHeroSlide(i) {
  heroIndex = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
  updateHeroPosition();
  restartHeroAutoplay();
}

function restartHeroAutoplay() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goToHeroSlide(heroIndex + 1), 9000);
}

if (heroPrevBtn) heroPrevBtn.addEventListener('click', () => goToHeroSlide(heroIndex - 1));
if (heroNextBtn) heroNextBtn.addEventListener('click', () => goToHeroSlide(heroIndex + 1));

const heroCarouselEl = document.getElementById('heroCarousel');
if (heroCarouselEl) {
  heroCarouselEl.addEventListener('mouseenter', () => clearInterval(heroTimer));
  heroCarouselEl.addEventListener('mouseleave', restartHeroAutoplay);
}

/* =========================================================
   2. CATEGORIAS E BUSCA
========================================================== */
const navLinks = document.getElementById('navLinks');
let activeCategory = 'todas';
let searchTerm = '';

/* Fecha o painel "Comprar" */
let closeMega = () => {};
const isDesktopHover = () =>
  !!(window.matchMedia && window.matchMedia('(hover: hover) and (min-width: 721px)').matches);

function selectCategory(id) {
  activeCategory = id;
  const cat = CATEGORIES.find(c => c.id === id);
  const title = document.getElementById('catalogTitle');
  if (title) title.textContent = id === 'todas' ? 'Todo o catálogo' : cat.name;
  navLinks.querySelectorAll('.mega-link').forEach(l => l.classList.toggle('active', l.dataset.cat === id));
  renderProducts();
}

function renderCategories() {
  if (!navLinks) return;
  navLinks.innerHTML = '';

  const catName = (id) => (id === 'todas' ? 'Todas as peças' : CATEGORIES.find(c => c.id === id).name);
  const catHref = (id) => (id === 'todas' ? 'index.html#catalogo' : 'index.html?cat=' + id + '#catalogo');
  const GROUPS = [
    { title: 'Coleção', items: ['todas'] },
    { title: 'Roupas', items: ['camiseta', 'calca', 'moletom'] },
    { title: 'Acessórios', items: ['bone'] }
  ];

  const closeMenu = () => {
    navLinks.classList.remove('open');
    const t = document.getElementById('navToggle');
    if (t) t.setAttribute('aria-expanded', 'false');
  };

  const buy = document.createElement('div');
  buy.className = 'nav-buy';
  buy.innerHTML = `
    <button type="button" class="nav-cat-link nav-extra-link" id="buyBtn" aria-haspopup="true" aria-expanded="false">Comprar</button>
    <div class="mega" id="mega">
      <div class="wrap mega-inner">
        ${GROUPS.map(g => `
          <div class="mega-col">
            <h3>${g.title}</h3>
            ${g.items.map(id => `<a href="${catHref(id)}" class="mega-link${id === activeCategory ? ' active' : ''}" data-cat="${id}">${catName(id)}</a>`).join('')}
          </div>`).join('')}
      </div>
    </div>`;
  navLinks.appendChild(buy);

  const btn = buy.querySelector('#buyBtn');
  const inner = buy.querySelector('.mega-inner');

  // Alinha as colunas do painel com o botão "Comprar" (só no desktop)
  const positionMega = () => {
    if (!isDesktopHover()) { inner.style.paddingLeft = ''; return; }
    const left = btn.getBoundingClientRect().left - inner.getBoundingClientRect().left;
    inner.style.paddingLeft = Math.max(24, Math.round(left)) + 'px';
  };
  const setMega = (open) => {
    if (open) positionMega();
    buy.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  closeMega = () => setMega(false);

  buy.querySelectorAll('.mega-link').forEach(a => {
    a.addEventListener('click', (e) => {
      // Na home, filtra sem recarregar. Nas outras páginas, o link leva pra home já filtrada.
      if (productsGrid) {
        e.preventDefault();
        selectCategory(a.dataset.cat);
        const cat = document.getElementById('catalogo');
        if (cat) cat.scrollIntoView({ behavior: 'smooth' });
      }
      setMega(false);
      closeMenu();
    });
  });

  // Desktop: abre ao passar o mouse. Celular: abre/fecha ao tocar.
  btn.addEventListener('click', () => {
    if (isDesktopHover()) {
      if (!productsGrid) { window.location.href = 'index.html#catalogo'; return; }
      selectCategory('todas');
      setMega(false);
      const cat = document.getElementById('catalogo');
      if (cat) cat.scrollIntoView({ behavior: 'smooth' });
    } else {
      setMega(!buy.classList.contains('open'));
    }
  });
  const header = document.querySelector('header');
  if (header) {
    // Só fecha de vez se o mouse for pra OUTRO botão/link do cabeçalho.
    // Se passar por um espaço vazio (a caminho do painel), espera um instante.
    let closeTimer;
    const cancelClose = () => clearTimeout(closeTimer);
    header.addEventListener('mouseover', (e) => {
      if (!isDesktopHover()) return;
      cancelClose();
      if (buy.contains(e.target)) {
        if (!buy.classList.contains('open')) setMega(true);
      } else if (buy.classList.contains('open')) {
        if (e.target.closest('a, button, input')) setMega(false);
        else closeTimer = setTimeout(() => setMega(false), 400);
      }
    });
    header.addEventListener('mouseleave', () => { cancelClose(); if (isDesktopHover()) setMega(false); });
  }
  // Teclado: ao dar Tab no "Comprar" o painel abre e dá pra navegar pelos links
  buy.addEventListener('focusin', (e) => {
    let visible = false;
    try { visible = e.target.matches(':focus-visible'); } catch (err) {}
    if (isDesktopHover() && visible) setMega(true);
  });
  buy.addEventListener('focusout', (e) => {
    if (isDesktopHover() && !buy.contains(e.relatedTarget)) setMega(false);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMega(false); });

  buildNavExtras();
}

/* "Sobre Nós" e "Contato" ficam ao lado de "Comprar" */
function buildNavExtras() {
  const closeMenu = () => {
    navLinks.classList.remove('open');
    const t = document.getElementById('navToggle');
    if (t) t.setAttribute('aria-expanded', 'false');
  };
  const page = document.body.dataset.page;

  const about = document.createElement('a');
  about.href = 'index.html#sobre';
  about.className = 'nav-cat-link nav-extra-link';
  about.textContent = 'Sobre Nós';
  about.addEventListener('click', closeMenu);
  navLinks.appendChild(about);

  const contact = document.createElement('a');
  contact.href = 'contato.html';
  contact.className = 'nav-cat-link nav-extra-link' + (page === 'contato' ? ' active' : '');
  contact.textContent = 'Contato';
  navLinks.appendChild(contact);
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    searchTerm = searchInput.value.trim();
    renderProducts();
  });
  // Fora da home, a busca leva pro catálogo já filtrado
  searchInput.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || productsGrid) return;
    const q = searchInput.value.trim();
    if (q) window.location.href = 'index.html?q=' + encodeURIComponent(q) + '#catalogo';
  });
}

/* Painel de busca (ícone na nav abre/fecha) */
const searchToggle = document.getElementById('searchToggle');
const searchPanel = document.getElementById('searchPanel');
const searchClose = document.getElementById('searchClose');

function openSearchPanel() {
  if (!searchPanel) return;
  searchPanel.classList.add('open');
  if (searchToggle) searchToggle.setAttribute('aria-expanded', 'true');
  if (searchInput) setTimeout(() => searchInput.focus(), 180);
}
function closeSearchPanel() {
  if (!searchPanel) return;
  searchPanel.classList.remove('open');
  if (searchToggle) searchToggle.setAttribute('aria-expanded', 'false');
}
if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    searchPanel.classList.contains('open') ? closeSearchPanel() : openSearchPanel();
  });
}
if (searchClose) searchClose.addEventListener('click', closeSearchPanel);

/* =========================================================
   3. RENDERIZAÇÃO DOS PRODUTOS
========================================================== */
const productsGrid = document.getElementById('productsGrid');
const catalogCount = document.getElementById('catalogCount');
const noResults = document.getElementById('noResults');

function formatBRL(v) { 
  return 'R$ ' + v.toFixed(2).replace('.', ','); 
}

function formatInstallments(v, n = 6) {
  const parcela = v / n;
  return `ou ${n}x de ${formatBRL(parcela)} sem juros`;
}

/* Fade-in dos cards quando entram na tela */
const cardObserver = ('IntersectionObserver' in window)
  ? new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        const delay = (parseInt(card.dataset.idx, 10) % 4) * 90;
        card.style.animationDelay = delay + 'ms';
        card.classList.remove('reveal-pending');
        card.classList.add('reveal-in');
        cardObserver.unobserve(card);
      });
    }, { threshold: 0.12 })
  : null;

/* Cartão da peça: um link que abre a página dela (dá pra abrir em nova aba) */
function createProductCard(p, idx) {
  const card = document.createElement('a');
  card.className = 'product-card' + (cardObserver ? ' reveal-pending' : '');
  card.href = 'produto.html?id=' + encodeURIComponent(p.id);
  card.dataset.idx = idx;

  const imgTag = p.image
    ? (p.imageBack
        ? `<img src="${p.image}" alt="${p.name}" class="product-real-img product-img-front" onerror="this.style.display='none'">
           <img src="${p.imageBack}" alt="${p.name} — verso" class="product-real-img product-img-back" onerror="this.style.display='none'">`
        : `<img src="${p.image}" alt="${p.name}" class="product-real-img" onerror="this.style.display='none'">`)
    : `<div class="img-placeholder">Sem foto</div>`;

  card.innerHTML = `
    <div class="product-photo">
      ${imgTag}
    </div>
    <div class="product-info">
      <h3>${p.name}</h3>
      <div class="product-price">${formatBRL(p.price)}</div>
    </div>`;

  if (cardObserver) cardObserver.observe(card);
  return card;
}

function renderProducts() {
  if (!productsGrid) return;

  let list = activeCategory === 'todas' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(term) || (CATEGORY_LABELS[p.category] && CATEGORY_LABELS[p.category].toLowerCase().includes(term)));
  }

  if (catalogCount) catalogCount.textContent = list.length + (list.length === 1 ? ' peça' : ' peças');
  productsGrid.innerHTML = '';
  if (noResults) noResults.style.display = list.length === 0 ? 'block' : 'none';

  list.forEach((p, idx) => productsGrid.appendChild(createProductCard(p, idx)));
}

/* =========================================================
   4. SISTEMA DO CARRINHO
========================================================== */
const SHIPPING = 19.90;
const CART_KEY = 'eco_cart';
function loadCart() {
  try { const c = JSON.parse(localStorage.getItem(CART_KEY)); return Array.isArray(c) ? c : []; }
  catch (e) { return []; }
}
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
}
let cart = loadCart();

const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const cartCount = document.getElementById('cartCount');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartShippingEl = document.getElementById('cartShipping');
const cartTotalEl = document.getElementById('cartTotal');
const siteCheckoutBtn = document.getElementById('siteCheckoutBtn');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

function openCart() { if (cartDrawer && overlay) { cartDrawer.classList.add('open'); overlay.classList.add('open'); } }
function closeCart() { if (cartDrawer && overlay) { cartDrawer.classList.remove('open'); overlay.classList.remove('open'); } }

if (cartBtn) cartBtn.addEventListener('click', () => {
  // Na página do carrinho o ícone só volta pro topo (não precisa da gaveta)
  if (document.body.dataset.page === 'carrinho') window.scrollTo({ top: 0, behavior: 'smooth' });
  else openCart();
});
if (cartClose) cartClose.addEventListener('click', closeCart);

function showToast(msg) {
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 2200);
}

function addToCart(id, name, price, size, qty, image) {
  const existing = cart.find(i => i.id === id && i.size === size);
  if (existing) { existing.qty += qty; } else { cart.push({ id, name, price, size, qty, image }); }
  renderCart();
  showToast(name + ' (' + size + ') adicionada');
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function cartSubtotal() { return cart.reduce((s, i) => s + i.qty * i.price, 0); }
function cartGrandTotal() { return cart.length ? cartSubtotal() + SHIPPING : 0; }

function renderCart() {
  saveCart();
  if (!cartItemsEl) return;
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    if (cartEmptyEl) cartEmptyEl.style.display = 'flex';
  } else {
    if (cartEmptyEl) cartEmptyEl.style.display = 'none';
    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-thumb">
          <img src="${item.image || ''}" alt="${item.name}" onerror="this.style.display='none'">
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-meta">Tamanho: ${item.size}</div>
          <div class="cart-item-row">
            <div class="cart-item-qty">
              <button type="button" data-dec="${index}">−</button>
              <span>${item.qty}</span>
              <button type="button" data-inc="${index}">+</button>
            </div>
            <span class="cart-item-price">${formatBRL(item.price * item.qty)}</span>
          </div>
          <button class="cart-remove" data-remove="${index}">Remover</button>
        </div>`;
      cartItemsEl.appendChild(div);
    });
  }

  cartItemsEl.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => changeQty(+b.dataset.inc, 1)));
  cartItemsEl.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => changeQty(+b.dataset.dec, -1)));
  cartItemsEl.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => removeItem(+b.dataset.remove)));

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  if (cartCount) { cartCount.textContent = totalQty; cartCount.hidden = totalQty === 0; }
  if (cartSubtotalEl) cartSubtotalEl.textContent = formatBRL(cartSubtotal());
  if (cartShippingEl) cartShippingEl.textContent = cart.length ? formatBRL(SHIPPING) : formatBRL(0);
  if (cartTotalEl) cartTotalEl.textContent = formatBRL(cartGrandTotal());
  if (siteCheckoutBtn) siteCheckoutBtn.disabled = cart.length === 0;
  if (typeof window.onCartRender === 'function') window.onCartRender();
}

// Carrinho aberto em outra aba: mantém tudo sincronizado
window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) { cart = loadCart(); renderCart(); }
});

/* =========================================================
   5. MENU MOBILE, CHECKOUT E CHATBOT
========================================================== */
const navToggle = document.getElementById('navToggle');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// "Finalizar compra" na gaveta leva pra página do carrinho
if (siteCheckoutBtn) siteCheckoutBtn.addEventListener('click', () => {
  if (!cart.length) return;
  if (document.body.dataset.page === 'carrinho') { closeCart(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  else window.location.href = 'carrinho.html';
});
if (overlay) overlay.addEventListener('click', closeCart);

/* =========================================================
   CHATBOT — assistente da loja (regras, sem IA externa)
   Entende o que foi perguntado (cores, peças, preço, tamanho...),
   lembra do assunto da conversa e corrige erros de digitação.
   Responde só com dados reais do site (PRODUCTS, carrinho, STORE).
========================================================== */
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');
const quickReplies = document.getElementById('quickReplies');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

const STORE = {
  whatsapp: '5511973808292',
  whatsappTexto: '(11) 97380-8292',
  email: 'ecostore@gmail.com',
  instagram: 'https://instagram.com/ecostudio',
  trocaDias: 30,
  parcelas: 6,
  // ✏️ Preencha quando tiver (vazio = o assistente manda falar com a equipe):
  prazoEntrega: '',        // ex.: 'de 5 a 10 dias úteis'
  horarioAtendimento: ''   // ex.: 'segunda a sábado, das 9h às 18h'
};

const chatNorm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const waLink = (msg) => 'https://wa.me/' + STORE.whatsapp + '?text=' +
  encodeURIComponent(msg || 'Olá! Vim pelo site da ECO Studio e preciso de ajuda.');
const teamLinks = () => [
  { label: 'WhatsApp', href: waLink() },
  { label: 'E-mail', href: 'mailto:' + STORE.email },
  { label: 'Instagram', href: STORE.instagram }
];
const productLink = (p) => ({ label: p.name, href: 'produto.html?id=' + encodeURIComponent(p.id) });
const catLink = (cat) => ({ label: CATEGORY_LABELS[cat], href: 'index.html?cat=' + cat + '#catalogo' });
const allCatLinks = () => Object.keys(CATEGORY_LABELS).map(catLink);
const catNames = () => Object.values(CATEGORY_LABELS).map((n) => n.toLowerCase());
const listWords = (arr) => arr.length <= 1 ? arr.join('') : arr.slice(0, -1).join(', ') + ' e ' + arr[arr.length - 1];

/* ---------- Memória curta da conversa ---------- */
const ctx = { product: null, types: [] };

/* ---------- Mensagens na tela ---------- */
function addMsg(text, who, links) {
  if (!chatBody) return;
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.textContent = text;
  if (links && links.length) {
    const row = document.createElement('div');
    row.className = 'msg-links';
    links.forEach((l) => {
      const a = document.createElement('a');
      a.className = 'msg-link';
      a.href = l.href;
      a.textContent = l.label;
      if (/^(https?:|mailto:)/.test(l.href)) { a.target = '_blank'; a.rel = 'noopener'; }
      row.appendChild(a);
    });
    div.appendChild(row);
  }
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showTyping() {
  if (!chatBody) return () => {};
  const t = document.createElement('div');
  t.className = 'msg bot typing';
  t.innerHTML = '<span></span><span></span><span></span>';
  chatBody.appendChild(t);
  chatBody.scrollTop = chatBody.scrollHeight;
  return () => t.remove();
}

function botSay(text, links, then) {
  const done = showTyping();
  setTimeout(() => {
    done();
    addMsg(text, 'bot', links);
    if (then) then();
  }, Math.min(900, 350 + text.length * 3));
}

function setQuickReplies(items) {
  if (!quickReplies) return;
  quickReplies.innerHTML = '';
  items.forEach((it) => {
    const btn = document.createElement('button');
    btn.className = 'qr-btn';
    btn.textContent = it.label;
    btn.addEventListener('click', () => {
      addMsg(it.label, 'user');
      quickReplies.innerHTML = '';
      it.run();
    });
    quickReplies.appendChild(btn);
  });
}

/* Manda uma ou mais respostas em sequência e, no fim, mostra os atalhos.
   Cada resposta é { text, links, menu }  (menu = atalhos específicos, opcional) */
function answer(...msgs) {
  const list = msgs.flat().filter(Boolean);
  const step = (i) => {
    if (i >= list.length) {
      const last = list[list.length - 1];
      if (last && last.menu) {
        return setQuickReplies(last.menu.concat([{ label: 'Outros assuntos', run: () => botSay('Claro! Escolha um assunto ou escreva sua dúvida.', null, mainMenu) }]));
      }
      return mainMenu();
    }
    botSay(list[i].text, list[i].links, () => step(i + 1));
  };
  step(0);
}

function currentProduct() {
  if (document.body.dataset.page !== 'produto') return null;
  const id = new URLSearchParams(window.location.search).get('id');
  return PRODUCTS.find((p) => p.id === id) || null;
}

function mainMenu() {
  const items = [];
  const cur = currentProduct();
  // Atalhos dão a resposta geral (não ficam presos na última peça da conversa)
  const topic = (fn) => () => { ctx.product = cur; ctx.types = []; answer(fn()); };
  if (cur) items.push({ label: 'Sobre esta peça', run: () => answer(aboutProductMsg(cur)) });
  items.push(
    { label: 'Ver peças e preços', run: topic(catalogMsg) },
    { label: 'Tamanhos', run: topic(sizesMsg) },
    { label: 'Frete e prazo', run: topic(shippingMsg) },
    { label: 'Trocas', run: topic(exchangeMsg) },
    { label: 'Pagamento', run: topic(paymentMsg) },
    { label: 'Como comprar', run: topic(howToBuyMsg) },
    { label: 'Meu carrinho', run: topic(cartMsg) },
    { label: 'Falar com a equipe', run: topic(contactMsg) }
  );
  setQuickReplies(items);
}

/* =========================================================
   CORES, TIPOS DE PEÇA E O QUE NÃO TEMOS
========================================================== */
const TYPE_WORDS = {
  camiseta: /\b(camiseta|camisetas|camisa|camisas|t-?shirt|tee)\b/,
  calca: /\b(calca|calcas|jeans|baggy)\b/,
  moletom: /\b(moletom|moletons|hoodie|canguru)\b/,
  bone: /\b(bone|bones|cap|chapeu)\b/
};
const COLOR_WORDS = {
  preto: /\b(preto|preta|pretos|pretas|black)\b/,
  branco: /\b(branco|branca|brancos|brancas|white|off ?white)\b/,
  cinza: /\b(chumbo|cinza|grafite|gray|grey)\b/,
  azul: /\b(azul|azuis|blue|marinho)\b/
};
const COLOR_LABELS = { preto: 'preto', branco: 'branco (off white)', cinza: 'chumbo', azul: 'azul marinho' };

// Cores que a loja NÃO tem (pra responder com honestidade em vez de mostrar tudo)
const UNKNOWN_COLORS = [
  ['rosa', /\b(rosa|rosas|pink)\b/], ['vermelho', /\b(vermelh[oa]s?|red)\b/], ['verde', /\b(verdes?|green|militar|oliva)\b/],
  ['amarelo', /\b(amarel[oa]s?|yellow)\b/], ['laranja', /\b(laranjas?|orange)\b/], ['roxo', /\b(rox[oa]s?|lilas|violeta|purple)\b/],
  ['marrom', /\b(marrom|marrons|cafe|caramelo)\b/], ['bege', /\b(bege|beges|creme|areia|nude|caqui)\b/],
  ['vinho', /\b(vinho|bordo)\b/], ['dourado', /\b(dourad[oa]s?|prata|prateado)\b/]
];
// Peças que a loja NÃO tem (com o que temos de parecido)
const UNKNOWN_ITEMS = [
  ['jaqueta', /\b(jaquetas?|corta ?vento|blazer)\b/], ['casaco', /\b(casacos?)\b/], ['bermuda ou short', /\b(bermudas?|shorts?)\b/],
  ['regata', /\b(regatas?)\b/], ['camisa polo', /\b(polos?)\b/], ['vestido ou saia', /\b(vestidos?|saias?)\b/],
  ['calçado', /\b(tenis|sapatos?|chinelos?|sandalias?|botas?)\b/], ['meia ou cueca', /\b(meias?|cuecas?)\b/],
  ['acessório', /\b(cintos?|mochilas?|bolsas?|oculos|relogios?|gorros?|toucas?|carteiras?)\b/], ['blusa', /\b(blusas?|blusinhas?)\b/]
];

function colorsAvailable() {
  return Object.keys(COLOR_WORDS).filter((c) => PRODUCTS.some((p) => COLOR_WORDS[c].test(chatNorm(p.name + ' ' + p.desc))));
}

function filterProducts({ types = [], colors = [] }) {
  let list = PRODUCTS;
  if (types.length) list = list.filter((p) => types.includes(p.category));
  if (colors.length) list = list.filter((p) => colors.some((c) => COLOR_WORDS[c].test(chatNorm(p.name + ' ' + p.desc))));
  return list;
}

function productsMsg(list, intro) {
  if (!list.length) return { text: 'Não encontrei uma peça assim no catálogo.', links: allCatLinks() };
  const shown = list.slice(0, 4);
  ctx.product = list.length === 1 ? list[0] : null;
  const head = intro || (list.length === 1 ? 'Encontrei esta peça:' : 'Encontrei ' + list.length + ' peças:');
  const lines = shown.map((p) => '• ' + p.name + ': ' + formatBRL(p.price));
  const more = list.length > shown.length ? '\n\nHá mais ' + (list.length - shown.length) + ' no catálogo.' : '';
  return {
    text: head + '\n' + lines.join('\n') + '\n(ou ' + STORE.parcelas + 'x sem juros no cartão)' + more,
    links: shown.map(productLink).concat(list.length > shown.length ? [{ label: 'Ver todas', href: 'index.html#catalogo' }] : [])
  };
}

/* =========================================================
   RESPOSTAS (cada função devolve { text, links, menu })
========================================================== */
function sizesMsg() {
  // ⚠️ Dica genérica de caimento: confira com as medidas reais das peças
  const tip = '\n\nAs peças têm modelagem mais solta. Se você prefere um ajuste mais justo, vale escolher um tamanho abaixo. Na dúvida, mande sua altura e peso no WhatsApp que a equipe te ajuda a escolher.';
  const help = [{ label: 'Pedir ajuda com o tamanho', href: waLink('Olá! Preciso de ajuda para escolher o tamanho' + (ctx.product ? ' da peça ' + ctx.product.name : '') + '.') }];
  if (ctx.product) {
    const s = ctx.product.sizes;
    const txt = s.length === 1 && s[0] === 'Único' ? 'tem tamanho único' : 'vem nos tamanhos ' + s.join(', ');
    return { text: ctx.product.name + ' ' + txt + '.' + (s[0] === 'Único' ? '' : tip), links: help };
  }
  const lines = Object.keys(CATEGORY_LABELS).map((cat) => {
    const sizes = [...new Set(PRODUCTS.filter((p) => p.category === cat).flatMap((p) => p.sizes))];
    return '• ' + CATEGORY_LABELS[cat] + ': ' + (sizes.length === 1 && sizes[0] === 'Único' ? 'tamanho único' : sizes.join(', '));
  });
  return { text: 'Tamanhos disponíveis:\n' + lines.join('\n') + tip, links: help };
}

function bodySizeMsg(h, w) {
  const dados = [h ? 'altura ' + h : '', w ? 'peso ' + w : ''].filter(Boolean).join(' e ');
  const msg = 'Olá! Minha ' + dados + '. Preciso de ajuda para escolher o tamanho' + (ctx.product ? ' da peça ' + ctx.product.name : '') + '.';
  return {
    text: 'Obrigado por passar ' + (h && w ? 'altura e peso' : h ? 'a altura' : 'o peso') + '. Eu não tenho uma tabela de medidas para te indicar o tamanho com segurança, mas a equipe consegue. Já deixei seus dados prontos na mensagem:',
    links: [{ label: 'Enviar no WhatsApp', href: waLink(msg) }]
  };
}

function shippingMsg() {
  const prazo = STORE.prazoEntrega
    ? 'Prazo de entrega: ' + STORE.prazoEntrega + '.'
    : 'Depois que você finaliza o pedido, a equipe entra em contato pelo telefone informado para confirmar pagamento e entrega. Para saber o prazo antes de comprar, chame no WhatsApp.';
  return { text: 'O frete é fixo: ' + formatBRL(SHIPPING) + ' para qualquer pedido, em todo o Brasil.\n' + prazo,
    links: [{ label: 'Perguntar o prazo', href: waLink('Olá! Qual o prazo de entrega para a minha região?') }] };
}

const exchangeMsg = () => ({ text: 'Você tem até ' + STORE.trocaDias + ' dias para trocar uma peça por tamanho ou defeito. Para pedir a troca, fale com a equipe e informe o número do pedido.', links: teamLinks() });
const paymentMsg = () => ({ text: 'Ao finalizar o pedido você escolhe a forma de pagamento: Pix, cartão de crédito ou boleto. Os preços aparecem parcelados em até ' + STORE.parcelas + 'x sem juros. Depois do pedido, a equipe entra em contato para confirmar o pagamento.' });
const howToBuyMsg = () => ({ text: 'É simples:\n1. Escolha a peça e abra a página dela.\n2. Selecione o tamanho e a quantidade e adicione ao carrinho.\n3. No carrinho, toque em Finalizar compra, preencha os dados de entrega e confirme.\n4. A equipe entra em contato para confirmar pagamento e entrega.',
  links: [{ label: 'Ver as peças', href: 'index.html#catalogo' }, { label: 'Ir ao carrinho', href: 'carrinho.html' }] });
const orderStatusMsg = () => ({ text: 'Para acompanhar um pedido, fale com a equipe e informe o número do pedido (ele aparece na tela de confirmação).', links: teamLinks() });
const promoMsg = () => ({ text: 'Não tenho informação de promoções ou cupons ativos por aqui. Para saber se há alguma, fale com a equipe.', links: teamLinks() });
const stockMsg = () => ({ text: 'O catálogo do site mostra as peças que temos, mas eu não tenho o estoque por tamanho em tempo real. Para confirmar a disponibilidade de um tamanho, fale com a equipe.', links: teamLinks() });
const careMsg = () => ({ text: 'Ainda não tenho a composição do tecido nem as instruções de lavagem de cada peça por aqui. A equipe te passa esses detalhes:', links: teamLinks() });
const storeMsg = () => ({ text: 'Por aqui eu só tenho informações da loja online. Não tenho endereço de loja física nem de retirada. Para isso, fale com a equipe:', links: teamLinks() });
const genderMsg = () => ({ text: 'O catálogo atual é de peças masculinas e unissex. Para outras linhas, não tenho informação por aqui.', links: allCatLinks() });
const aboutStoreMsg = () => ({ text: 'A ECO Studio faz peças simples, feitas pra durar: camisetas, calças, moletons e bonés. Você conhece mais na seção Sobre nós.', links: [{ label: 'Sobre nós', href: 'index.html#sobre' }, { label: 'Ver as peças', href: 'index.html#catalogo' }] });

function contactMsg() {
  return { text: 'Você fala com a equipe por:\n• WhatsApp ' + STORE.whatsappTexto + '\n• E-mail ' + STORE.email + '\n• Instagram (SAC)' +
    (STORE.horarioAtendimento ? '\n\nAtendimento: ' + STORE.horarioAtendimento + '.' : ''), links: teamLinks() };
}
function hoursMsg() {
  if (STORE.horarioAtendimento) return { text: 'Nosso atendimento funciona ' + STORE.horarioAtendimento + '.', links: teamLinks() };
  return { text: 'Eu, o assistente, estou aqui a qualquer hora. A equipe responde pelo WhatsApp, e-mail e Instagram, mas ainda não tenho o horário exato de atendimento. Se for urgente, chame no WhatsApp.', links: teamLinks() };
}

function catalogMsg() {
  const rows = [];
  Object.keys(CATEGORY_LABELS).forEach((cat) => {
    const list = PRODUCTS.filter((p) => p.category === cat);
    if (!list.length) return;
    const prices = list.map((p) => p.price);
    const min = Math.min(...prices), max = Math.max(...prices);
    rows.push('• ' + CATEGORY_LABELS[cat] + ' (' + list.length + '): ' + (min === max ? formatBRL(min) : formatBRL(min) + ' a ' + formatBRL(max)));
  });
  return { text: 'Hoje temos ' + PRODUCTS.length + ' peças:\n' + rows.join('\n') + '\n\nCores: ' + listWords(colorsAvailable().map((c) => COLOR_LABELS[c])) + '.\nToque numa categoria para ver as peças.', links: allCatLinks() };
}

function cartMsg() {
  if (!cart.length) return { text: 'Seu carrinho está vazio por enquanto.', links: [{ label: 'Ver as peças', href: 'index.html#catalogo' }] };
  const lines = cart.map((i) => '• ' + i.qty + 'x ' + i.name + ' (' + i.size + '): ' + formatBRL(i.price * i.qty));
  return { text: 'No seu carrinho:\n' + lines.join('\n') + '\n\nSubtotal: ' + formatBRL(cartSubtotal()) + '\nFrete: ' + formatBRL(SHIPPING) + '\nTotal: ' + formatBRL(cartGrandTotal()),
    links: [{ label: 'Finalizar compra', href: 'carrinho.html' }] };
}

function aboutProductMsg(p) {
  ctx.product = p;
  return { text: p.name + '\n' + formatBRL(p.price) + ' (' + formatInstallments(p.price) + ')\nTamanhos: ' + p.sizes.join(', ') + '\n' +
    (p.imageBack ? 'Esta peça tem foto do verso: toque na miniatura ao lado da foto.\n' : '') +
    'Escolha o tamanho na página e toque em Adicionar ao carrinho.', links: [productLink(p)] };
}

function priceOfMsg(p) {
  ctx.product = p;
  return { text: p.name + ' custa ' + formatBRL(p.price) + ', ou ' + STORE.parcelas + 'x de ' + formatBRL(p.price / STORE.parcelas) + ' sem juros.', links: [productLink(p)] };
}

function backPhotoMsg(p) {
  ctx.product = p;
  return p.imageBack
    ? { text: 'Sim! ' + p.name + ' tem foto do verso. Na página da peça, toque na segunda miniatura (ou passe o mouse sobre a foto no catálogo).', links: [productLink(p)] }
    : { text: 'Ainda não tenho a foto do verso de ' + p.name + '. Se quiser ver como é atrás, a equipe pode te mostrar:', links: teamLinks() };
}

function otherColorsMsg(p) {
  ctx.product = p;
  const others = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id);
  if (!others.length) return { text: 'Hoje ' + p.name + ' é a única opção de ' + CATEGORY_LABELS[p.category].toLowerCase() + '.', links: allCatLinks() };
  return productsMsg(others, 'Outras opções de ' + CATEGORY_LABELS[p.category].toLowerCase() + ':');
}

function unknownItemMsg(item, redirectTypes) {
  const have = listWords(catNames());
  return { text: 'Ainda não temos ' + item + '. Hoje trabalhamos com ' + have + '. Quer ver alguma dessas?', links: allCatLinks() };
}

function unknownColorMsg(colorName, types) {
  const what = types.length ? listWords(types.map((c) => CATEGORY_LABELS[c].toLowerCase())) : 'peças';
  const avail = colorsAvailable();
  return {
    text: 'No momento não temos ' + what + ' na cor ' + colorName + '. As cores que temos hoje são: ' + listWords(avail.map((c) => COLOR_LABELS[c])) + '.\nQuer ver alguma delas?',
    links: types.length ? types.map(catLink) : allCatLinks(),
    menu: avail.map((c) => ({ label: 'Ver ' + COLOR_LABELS[c].split(' ')[0], run: () => answer(productsMsg(filterProducts({ types, colors: [c] }))) }))
  };
}

/* =========================================================
   ENTENDER O TEXTO
========================================================== */
// Corrige erros de digitação ("camizeta", "moleton", "fretee")
const VOCAB = ['camiseta','camisetas','camisa','calca','calcas','jeans','baggy','moletom','moletons','hoodie','tamanho','tamanhos','frete','entrega','prazo',
  'troca','trocas','trocar','devolucao','pagamento','pagar','parcelar','parcelas','carrinho','cupom','desconto','promocao','preto','preta','pretos','pretas','branco','branca',
  'chumbo','cinza','azul','marinho','catalogo','produto','produtos','pecas','peca','quanto','custa','custam','preco','precos','valor','barato','barata','vendido','vendidos',
  'estoque','whatsapp','instagram','rastreio','horario','atendimento','jaqueta','jaquetas','casaco','rosa','vermelho','verde','amarelo','laranja','roxo','marrom','bege','bermuda',
  'shorts','regata','recomenda','sugestao','presente','obrigado','obrigada','disponivel','verso','costas','cores','comprar','finalizar','pedido','tenis','mochila','boleto','cartao',
  'masculino','feminino','unissex','lavar','tecido','algodao','envio','correios','medidas','numeracao','caimento','robo','equipe','contato','email','telefone','vendem','voces',
  // palavras comuns que não devem ser trocadas por outra parecida:
  'compra','compras','quando','frente','verao','vendeu','entregas','pedidos','pagamentos','camisas','camisao','custar','comprador'];
const VOCAB_SET = new Set(VOCAB);

function osa(a, b) {
  const d = [];
  for (let i = 0; i <= a.length; i++) { d[i] = [i]; }
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  }
  return d[a.length][b.length];
}

function fixTypos(t) {
  return t.replace(/[a-z]{5,}/g, (w) => {
    if (VOCAB_SET.has(w)) return w;
    const max = w.length >= 8 ? 2 : 1;
    let best = null, bestD = 99;
    for (const v of VOCAB) {
      if (v[0] !== w[0] || Math.abs(v.length - w.length) > max) continue;
      const dist = osa(w, v);
      if (dist <= max && dist < bestD) { best = v; bestD = dist; }
    }
    return best || w;
  });
}

function parseBudget(t) {
  const m = t.match(/(?:ate|abaixo de|menos de|no maximo|maximo|orcamento (?:de )?|tenho|uns|por volta de)\s*(?:r\$ ?)?(\d{2,4})\b/) || t.match(/\b(\d{2,4}) ?(?:reais|rs|conto)/);
  return m ? parseInt(m[1], 10) : null;
}
function parseBody(t) {
  const h = t.match(/\b1[,.](\d{2})\b/);
  const hcm = t.match(/\b(1[5-9]\d|2[0-1]\d)\s*cm\b/);
  const w = t.match(/\b(\d{2,3})\s*(?:kg|quilos?)\b/);
  return { h: h ? '1,' + h[1] + ' m' : hcm ? hcm[1] + ' cm' : '', w: w ? w[1] + ' kg' : '' };
}

const typesIn = (t) => Object.keys(TYPE_WORDS).filter((k) => TYPE_WORDS[k].test(t));
const colorsIn = (t) => Object.keys(COLOR_WORDS).filter((k) => COLOR_WORDS[k].test(t));

/* Cada "intenção" tem: group (social, entity, info, catalog), test e build.
   social = conversa  |  entity = pergunta sobre peças/cores/preços
   info = política da loja  |  catalog = visão geral */
const INTENTS = [
  // ---- conversa ----
  { group: 'social', test: (t) => /^(oi+|ola|opa|e ai|eae|bom dia|boa tarde|boa noite|hey|hello|salve)\b/.test(t) || /\b(tudo bem|td bem|como voce esta|como vai)\b/.test(t),
    build: (t) => ({ text: /\b(tudo bem|td bem|como voce esta|como vai)\b/.test(t) ? 'Tudo certo por aqui! Como posso ajudar? Escolha uma opção ou escreva sua dúvida.' : 'Oi! Como posso ajudar? Escolha uma opção ou escreva sua dúvida.' }) },
  { group: 'social', test: (t) => /\b(obrigad[oa]|valeu|brigad[oa]|agradec)/.test(t), build: () => ({ text: 'Por nada! Se precisar de mais alguma coisa, é só chamar.' }) },
  { group: 'social', test: (t) => /\b(tchau|ate mais|ate logo|flw|falou)\b/.test(t), build: () => ({ text: 'Até mais! Qualquer dúvida, estou por aqui.' }) },
  { group: 'social', test: (t) => /\b(voce (e|eh) (um )?(robo|bot|humano|pessoa|ia|gente)|e um robo|quem (e )?voce|seu nome|robo)\b/.test(t),
    build: () => ({ text: 'Sou o assistente virtual da ECO Studio. Respondo dúvidas sobre peças, tamanhos, frete, trocas e pagamento. Se preferir falar com uma pessoa, é só chamar a equipe:', links: teamLinks() }) },
  { group: 'social', test: (t) => /^(ok|okay|certo|beleza|blz|entendi|show|legal|massa|sim|nao|talvez|hum+|aham|uhum|ta bom)\W*$/.test(t),
    build: () => ({ text: 'Certo! Quer ver as peças ou tirar outra dúvida?' }) },

  // ---- peças, cores e preços ----
  { group: 'entity', test: (t) => !typesIn(t).length && UNKNOWN_ITEMS.some(([, re]) => re.test(t)),
    build: (t) => unknownItemMsg(UNKNOWN_ITEMS.find(([, re]) => re.test(t))[0]) },
  { group: 'entity', test: (t) => UNKNOWN_COLORS.some(([, re]) => re.test(t)),
    build: (t) => {
      const unk = UNKNOWN_COLORS.find(([, re]) => re.test(t))[0];
      const types = typesIn(t), known = colorsIn(t);
      if (known.length) {   // ex.: "camiseta verde ou azul" -> avisa do verde e mostra o azul
        const list = filterProducts({ types, colors: known });
        if (list.length) return productsMsg(list, 'Na cor ' + unk + ' não temos, mas na cor ' + listWords(known.map((c) => COLOR_LABELS[c].split(' ')[0])) + ' temos:');
      }
      return unknownColorMsg(unk, types);
    } },
  { group: 'entity', suppress: ['size'], test: (t) => { const b = parseBody(t); return (b.h && b.w) || (/\b(tamanho|veste|cabe|uso|numero)\b/.test(t) && (b.h || b.w)); },
    build: (t) => { const b = parseBody(t); return bodySizeMsg(b.h, b.w); } },
  { group: 'entity', test: (t) => parseBudget(t) !== null && !/\b(kg|quilo|cm)\b/.test(t),
    build: (t) => {
      const max = parseBudget(t);
      const list = PRODUCTS.filter((p) => p.price <= max).sort((a, b) => a.price - b.price);
      if (!list.length) {
        const cheapest = PRODUCTS.slice().sort((a, b) => a.price - b.price)[0];
        return { text: 'Com ' + formatBRL(max) + ' ainda não temos uma peça. A mais em conta é ' + cheapest.name + ', por ' + formatBRL(cheapest.price) + '.', links: [productLink(cheapest)] };
      }
      return productsMsg(list, 'Até ' + formatBRL(max) + ' você encontra:');
    } },
  { group: 'entity', test: (t) => /\b(mais barat|mais em conta|mais acessivel|menor preco|economic|barato|barata)/.test(t),
    build: () => { const p = PRODUCTS.slice().sort((a, b) => a.price - b.price)[0]; return productsMsg([p], 'A peça mais em conta é:'); } },
  { group: 'entity', test: (t) => /\b(mais car[oa]|maior preco|premium)/.test(t),
    build: () => { const max = Math.max(...PRODUCTS.map((p) => p.price)); return productsMsg(PRODUCTS.filter((p) => p.price === max), 'As peças de maior valor são:'); } },
  { group: 'entity', test: (t) => /\b(mais vendid|mais popular|campea|favorit|sucesso|mais pedid|mais procurad)/.test(t) || /\b(recomend|sugest|indica|presente|em duvida|nao sei (o que )?(escolher|comprar))/.test(t),
    build: () => {
      const best = PRODUCTS.filter((p) => p.tagBest);
      if (best.length) return productsMsg(best, 'As mais vendidas e uma boa pedida pra começar:');
      return { text: 'Me conta o que você procura (camiseta, calça, moletom ou boné) e quanto pretende gastar que eu te ajudo a escolher.', links: allCatLinks() };
    } },
  { group: 'entity', test: (t) => typesIn(t).length || colorsIn(t).length,
    build: (t) => {
      let types = typesIn(t), colors = colorsIn(t);
      // resposta de acompanhamento curta: "e na branca?" mantém o tipo de peça do assunto anterior
      if (!types.length && colors.length && t.split(' ').length <= 5 && !/\b(pecas|produtos|tudo)\b/.test(t)) {
        if (ctx.product) types = [ctx.product.category]; else if (ctx.types.length) types = ctx.types;
      }
      ctx.types = types;
      let list = filterProducts({ types, colors });
      // Frase com duas partes ("calça azul e camiseta chumbo", "camiseta preta ou branca"): cada parte é buscada separada
      const parts = t.split(/\s+e\s+|,|\s+ou\s+/).map((s) => ({ ty: typesIn(s), co: colorsIn(s) })).filter((s) => s.ty.length || s.co.length);
      if (parts.length > 1) {
        let lastTypes = [];
        const union = [];
        parts.forEach((s) => {
          const ty = s.ty.length ? s.ty : lastTypes;
          if (s.ty.length) lastTypes = s.ty;
          filterProducts({ types: ty, colors: s.co }).forEach((p) => { if (!union.includes(p)) union.push(p); });
        });
        if (union.length) list = union;
      }
      if (!list.length) {
        const what = types.length ? listWords(types.map((c) => CATEGORY_LABELS[c].toLowerCase())) : 'peças';
        return { text: 'Não encontrei ' + what + (colors.length ? ' nessa cor' : '') + ' no catálogo. As cores que temos são: ' + listWords(colorsAvailable().map((c) => COLOR_LABELS[c])) + '.', links: allCatLinks() };
      }
      return productsMsg(list);
    } },
  { group: 'entity', test: (t) => !!ctx.product && !typesIn(t).length && !colorsIn(t).length && /\b(quanto|preco|valor|custa|verso|costas|atras|traseira|outras? cores?|outra cor|cores|essa|esse|ela|ele|dela|dele|dessa|desse)\b/.test(t),
    build: (t) => {
      const p = ctx.product;
      if (/\b(verso|costas|atras|traseira)\b/.test(t)) return backPhotoMsg(p);
      if (/\b(outras? cores?|outra cor|cores)\b/.test(t)) return otherColorsMsg(p);
      if (/\b(quanto|preco|valor|custa)\b/.test(t)) return priceOfMsg(p);
      return aboutProductMsg(p);
    } },

  // ---- informações da loja (pode juntar até 3 numa resposta) ----
  { group: 'info', test: (t) => /\b(carrinho|sacola)\b/.test(t), build: cartMsg },
  { group: 'info', id: 'size', test: (t) => /\b(tamanho|tamanhos|medida|medidas|numeracao|caimento|veste|cabe)\b/.test(t), build: sizesMsg },
  { group: 'info', test: (t) => /\b(rastre|acompanh|status|cade (o )?meu|onde esta (o )?meu|meu pedido (chegou|ja|esta|nao))/.test(t), build: orderStatusMsg },
  { group: 'info', test: (t) => /\b(frete|entreg|prazo|envi|correios|cheg)/.test(t), build: shippingMsg },
  { group: 'info', id: 'exchange', suppress: ['size'], test: (t) => /\b(troc|devol|defeito|arrepend|reembols|estorno|cancel)/.test(t), build: exchangeMsg },
  { group: 'info', test: (t) => /\b(desconto|cupom|promocao|promocoes|oferta|cashback)/.test(t), build: promoMsg },
  { group: 'info', test: (t) => /\b(pagamento|pagar|pix|cartao|boleto|parcel|credito|debito)/.test(t), build: paymentMsg },
  { group: 'info', test: (t) => /\b(estoque|disponibilidade|disponivel|esgotad|acabou|reposicao)/.test(t), build: stockMsg },
  { group: 'info', test: (t) => /\b(lavar|lavagem|tecido|material|algodao|composicao|encolhe|desbota|gramatura)/.test(t), build: careMsg },
  { group: 'info', test: (t) => /\b(loja fisica|retirar|retirada|presencial|showroom|onde fica|endereco)/.test(t), build: storeMsg },
  { group: 'info', test: (t) => /\b(masculin|feminin|unissex|mulher|homem|infantil|crianca)/.test(t), build: genderMsg },
  { group: 'info', test: (t) => /\b(horario|funcionamento|aberto|abre|abrem|fecha|fecham|atendem|atendimento|que horas)/.test(t), build: hoursMsg },
  { group: 'info', test: (t) => /\b(contato|whatsapp|zap|email|e-mail|instagram|direct|telefone|ligar|falar com|atendente|humano|equipe)/.test(t), build: contactMsg },
  { group: 'info', test: (t) => /\b(como compr|comprar|compro\b|finalizar|fazer (um )?pedido|como pedir|pedir\b)/.test(t), build: howToBuyMsg },
  { group: 'info', test: (t) => /\b(sobre a loja|quem (e|sao)|marca|historia|eco studio|a loja)\b/.test(t), build: aboutStoreMsg },

  // ---- visão geral ----
  { group: 'catalog', test: (t) => /\b(catalogo|produtos|o que (voces )?(tem|vendem)|quais (sao )?(as )?(pecas|produtos|modelos)|todas as pecas|ver (as )?pecas|tabela de precos|lista de precos|modelos|precos|mostra(r)? tudo|ver tudo|tudo que (voces )?(tem|vendem))\b/.test(t), build: catalogMsg },
  { group: 'catalog', test: (t) => /\b(ajuda|menu|opcoes|duvida)/.test(t), build: () => ({ text: 'Claro! Escolha um assunto abaixo ou escreva sua dúvida.' }) }
];

function respond(raw) {
  const t = fixTypos(chatNorm(raw).replace(/[^\w\s$,.\-]/g, ' ').replace(/\s+/g, ' ').trim());
  const hits = INTENTS.filter((i) => i.test(t));
  const by = (g) => hits.filter((h) => h.group === g);
  let chosen = [];
  const entity = by('entity')[0];
  let info = by('info');
  // algumas respostas já cobrem outro assunto (ex.: troca de tamanho não precisa da tabela de tamanhos)
  const covered = new Set([].concat(entity ? entity.suppress || [] : [], ...info.map((h) => h.suppress || [])));
  info = info.filter((h) => !covered.has(h.id));
  if (entity) chosen = [entity].concat(info.slice(0, 2));
  else if (info.length) chosen = info.slice(0, 3);
  else if (by('social').length) chosen = by('social').slice(0, 1);
  else if (by('catalog').length) chosen = by('catalog').slice(0, 1);

  if (!chosen.length) {
    return answer({ text: 'Não tenho certeza de que entendi. Posso ajudar com peças, cores, preços, tamanhos, frete, trocas e pagamento. Se preferir, a equipe também te responde:', links: teamLinks() });
  }
  answer(chosen.map((h) => h.build(t)));
}

/* ---------- Abrir, fechar e enviar ---------- */
let chatStarted = false;
if (chatToggle && chatPanel) {
  chatToggle.addEventListener('click', () => {
    const isOpen = chatPanel.classList.toggle('open');
    if (isOpen && !chatStarted) {
      chatStarted = true;
      const cur = currentProduct();
      ctx.product = cur;
      botSay('Olá! Eu sou o assistente da ECO Studio. Posso te mostrar as peças, cores e preços, e tirar dúvidas de tamanho, frete, trocas e pagamento.' +
        (cur ? '\n\nVocê está vendo: ' + cur.name + '.' : '') + '\nO que você procura?', null, mainMenu);
    }
  });
}
if (chatClose && chatPanel) chatClose.addEventListener('click', () => chatPanel.classList.remove('open'));

// Página de contato: o botão do Assistente abre o chat
const contactChatBtn = document.getElementById('contactChatBtn');
if (contactChatBtn) contactChatBtn.addEventListener('click', () => {
  if (chatPanel && chatToggle && !chatPanel.classList.contains('open')) chatToggle.click();
});

if (chatSend && chatInput) {
  const send = () => {
    const val = chatInput.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    chatInput.value = '';
    if (quickReplies) quickReplies.innerHTML = '';
    respond(val);
  };
  chatSend.addEventListener('click', send);
  chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
}

/* =========================================================
   6. INICIALIZAÇÃO
========================================================== */
// Vindo de outra página: ?cat=camiseta ou ?q=boné já chegam filtrados
if (productsGrid) {
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam && CATEGORIES.some(c => c.id === catParam)) activeCategory = catParam;
  const qParam = params.get('q');
  if (qParam) { searchTerm = qParam.trim(); if (searchInput) searchInput.value = searchTerm; }
}

renderCategories();
if (productsGrid && activeCategory !== 'todas') selectCategory(activeCategory);
else renderProducts();
if (searchTerm && searchPanel) openSearchPanel();
renderCart();
if (heroTrack) {            // o carrossel só existe na home
  renderHeroCarousel();
  restartHeroAutoplay();
}
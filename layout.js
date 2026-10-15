/* =========================================================
   LAYOUT COMPARTILHADO — cabeçalho, rodapé, carrinho lateral,
   aviso e chat. Fica aqui UMA vez e aparece em todas as páginas.
   Pra mudar o menu ou o rodapé, mude só neste arquivo.
========================================================== */
(function () {
  const HEADER = `
<header>
  <div class="utility-bar">
    <div class="wrap utility-inner">
      <span class="utility-tag">Peças simples, feitas pra durar.</span>
      <div class="utility-links">
        <a href="index.html#info">Trocas &amp; entrega</a>
        <a href="https://instagram.com/ecostudio" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
  </div>

  <div class="wrap nav">
    <button class="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>

    <a href="index.html" class="brand">
      <img src="./assets/eco.png" alt="Logo ECO Studio">
      <div class="brand-text"><strong>ECO Studio</strong></div>
    </a>

    <nav class="nav-links" id="navLinks"></nav>

    <div class="nav-right">
      <button class="icon-btn" id="searchToggle" aria-label="Buscar" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      </button>
      <button class="cart-btn" id="cartBtn" aria-label="Abrir carrinho">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
        <span class="cart-count" id="cartCount">0</span>
      </button>
    </div>
  </div>

  <div class="search-panel" id="searchPanel">
    <div class="wrap search-panel-inner">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <input type="text" class="search-input" id="searchInput" placeholder="Buscar peça: camiseta, moletom, boné...">
      <button class="icon-btn" id="searchClose" aria-label="Fechar busca">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>
  </div>
</header>`;

  const FOOTER = `
<footer>
  <div class="wrap footer-inner">
    <div class="footer-brand">
      <img src="./assets/eco.png" alt="Logo ECO Studio">
      <small>ECO Studio — peças simples, feitas pra durar</small>
    </div>
    <div class="footer-links">
      <a href="index.html#catalogo">Catálogo</a>
      <a href="index.html#info">Trocas &amp; entrega</a>
      <a href="contato.html">Contato</a>
      <a href="https://instagram.com/ecostudio" target="_blank" rel="noopener">Instagram (SAC)</a>
    </div>
  </div>
</footer>`;

  const OVERLAYS = `
<div class="overlay" id="overlay"></div>

<aside class="cart-drawer" id="cartDrawer" aria-label="Carrinho de compras">
  <div class="cart-head">
    <h2>Seu carrinho</h2>
    <button class="icon-close" id="cartClose" aria-label="Fechar carrinho">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
  </div>
  <div class="cart-body" id="cartBody">
    <div class="cart-empty" id="cartEmpty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
      Seu carrinho está vazio.<br>Escolha uma peça no catálogo.
    </div>
    <div id="cartItems"></div>
  </div>
  <div class="cart-foot">
    <div class="cart-line-row"><span>Subtotal</span><span id="cartSubtotal">R$ 0,00</span></div>
    <div class="cart-line-row"><span>Frete</span><span id="cartShipping">R$ 0,00</span></div>
    <div class="cart-total-row"><span>Total</span><b id="cartTotal">R$ 0,00</b></div>
    <button class="btn btn-primary btn-block" id="siteCheckoutBtn" disabled>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/></svg>
      Finalizar compra
    </button>
    <p class="cart-note">Frete fixo de R$ 19,90 aplicado a qualquer pedido.</p>
  </div>
</aside>

<div class="toast" id="toast">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
  <span id="toastMsg">Adicionado ao carrinho</span>
</div>

<div class="float-stack">
  <button class="float-btn chat-toggle" id="chatToggle" aria-label="Abrir assistente">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
  </button>
  <a class="float-btn" href="https://instagram.com/ecostudio" target="_blank" rel="noopener" aria-label="Instagram — SAC">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
  </a>
</div>

<div class="chat-panel" id="chatPanel">
  <div class="chat-head">
    <div class="chat-head-info"><span class="chat-dot"></span><h3>Assistente ECO</h3></div>
    <button class="chat-close" id="chatClose" aria-label="Fechar assistente">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
  </div>
  <div class="chat-body" id="chatBody"></div>
  <div class="quick-replies" id="quickReplies"></div>
  <div class="chat-input-row">
    <input type="text" id="chatInput" placeholder="Escreva sua dúvida...">
    <button class="chat-send" id="chatSend" aria-label="Enviar">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
    </button>
  </div>
</div>`;

  const put = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  };
  put('siteHeader', HEADER);
  put('siteFooter', FOOTER);
  put('siteOverlays', OVERLAYS);
})();
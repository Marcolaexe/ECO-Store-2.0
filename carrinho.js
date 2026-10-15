/* =========================================================
   PÁGINA DO CARRINHO — itens, resumo e finalizar compra
   (usa cart, changeQty, removeItem, renderCart... do script.js)
========================================================== */
(function () {
  const $ = (id) => document.getElementById(id);
  const layout = $('checkoutLayout');
  const emptyBox = $('pageEmpty');
  const doneBox = $('orderDone');
  const itemsEl = $('pageCartItems');
  let finished = false;   // depois de confirmar o pedido, não volta a mostrar o "vazio"

  function renderPage() {
    if (finished) return;
    const has = cart.length > 0;
    emptyBox.hidden = has;
    layout.hidden = !has;

    itemsEl.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-thumb">
          <img src="${item.image || ''}" alt="${item.name}" onerror="this.style.display='none'">
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-meta">Tamanho: ${item.size}</div>
          <div class="cart-item-row">
            <div class="cart-item-qty">
              <button type="button" data-dec="${index}" aria-label="Diminuir quantidade">−</button>
              <span>${item.qty}</span>
              <button type="button" data-inc="${index}" aria-label="Aumentar quantidade">+</button>
            </div>
            <span class="cart-item-price">${formatBRL(item.price * item.qty)}</span>
          </div>
          <button type="button" class="cart-remove" data-remove="${index}">Remover</button>
        </div>
      </div>`).join('');

    $('coSubtotal').textContent = formatBRL(cartSubtotal());
    $('coShipping').textContent = formatBRL(cart.length ? SHIPPING : 0);
    $('coTotal').textContent = formatBRL(cartGrandTotal());
  }

  // Um único ouvinte cuida de todos os botões de + / − / remover
  itemsEl.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.inc !== undefined) changeQty(+b.dataset.inc, 1);
    else if (b.dataset.dec !== undefined) changeQty(+b.dataset.dec, -1);
    else if (b.dataset.remove !== undefined) removeItem(+b.dataset.remove);
  });

  // O script.js chama isto toda vez que o carrinho muda
  window.onCartRender = renderPage;
  renderPage();

  function buildSummaryHTML() {
    let rows = cart.map((i) =>
      `<div class="modal-summary-row"><span>${i.qty}x ${i.name} (${i.size})</span><span>${formatBRL(i.price * i.qty)}</span></div>`
    ).join('');
    rows += `<div class="modal-summary-row"><span>Frete</span><span>${formatBRL(SHIPPING)}</span></div>`;
    rows += `<div class="modal-summary-row"><span>Total</span><span>${formatBRL(cartGrandTotal())}</span></div>`;
    return rows;
  }

  $('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!cart.length) return;

    $('orderNumber').textContent = '#' + Math.floor(1000 + Math.random() * 9000);
    $('confirmSummary').innerHTML = buildSummaryHTML();   // guarda o resumo ANTES de esvaziar

    finished = true;
    cart = [];
    renderCart();                                        // esvazia o carrinho (e o contador)

    layout.hidden = true;
    emptyBox.hidden = true;
    doneBox.hidden = false;
    $('cartTitle').textContent = 'Obrigado pela compra';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
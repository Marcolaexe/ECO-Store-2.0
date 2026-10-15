/* =========================================================
   PÁGINA DE PRODUTO — produto.html?id=camiseta-preta
   Lê o "id" da URL e preenche a página com os dados da peça.
   (usa PRODUCTS, addToCart, formatBRL... do script.js)
========================================================== */
(function () {
  const $ = (id) => document.getElementById(id);
  const id = new URLSearchParams(window.location.search).get('id');
  const p = PRODUCTS.find((x) => x.id === id);

  // Link inválido ou peça que não existe mais
  if (!p) {
    $('crumbName').textContent = 'Peça não encontrada';
    $('productMissing').hidden = false;
    document.title = 'Peça não encontrada — ECO Studio';
    return;
  }

  /* ---------- Textos, título e navegação ---------- */
  document.title = `${p.name} — ECO Studio`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = `${p.name}, ${formatBRL(p.price)}. ${p.longDesc || p.desc}`;

  const catLabel = CATEGORY_LABELS[p.category] || 'Catálogo';
  $('crumbCat').textContent = catLabel;
  $('crumbCat').href = `index.html?cat=${p.category}#catalogo`;
  $('crumbName').textContent = p.name;

  $('pdName').textContent = p.name;
  $('pdPrice').textContent = formatBRL(p.price);
  $('pdInstallments').textContent = formatInstallments(p.price);
  $('pdDesc').textContent = p.longDesc || p.desc;
  $('pdBest').hidden = !p.tagBest;

  /* ---------- Galeria (frente e verso) ---------- */
  const photos = [p.image, p.imageBack].filter(Boolean);
  const main = $('pdImage');
  const thumbs = $('pdThumbs');
  const labels = ['Frente', 'Verso'];

  function showPhoto(i) {
    main.src = photos[i] || '';
    main.alt = i === 0 ? p.name : `${p.name} — verso`;
    thumbs.querySelectorAll('.pd-thumb').forEach((t, k) => t.classList.toggle('active', k === i));
  }
  if (photos.length > 1) {
    thumbs.innerHTML = photos.map((src, i) =>
      `<button type="button" class="pd-thumb" data-i="${i}" aria-label="Ver ${labels[i].toLowerCase()}"><img src="${src}" alt=""></button>`
    ).join('');
    thumbs.querySelectorAll('.pd-thumb').forEach((t) => t.addEventListener('click', () => showPhoto(+t.dataset.i)));
  }
  showPhoto(0);

  /* ---------- Tamanho, quantidade e adicionar ---------- */
  const sizesEl = $('pdSizes');
  sizesEl.innerHTML = p.sizes.map((s, i) =>
    `<button type="button" class="size-btn${i === 0 ? ' selected' : ''}" data-size="${s}">${s}</button>`
  ).join('');
  sizesEl.querySelectorAll('.size-btn').forEach((btn) => btn.addEventListener('click', () => {
    sizesEl.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('selected'));
    btn.classList.add('selected');
  }));

  const qtyEl = $('pdQty');
  $('pdQUp').addEventListener('click', () => { qtyEl.textContent = Math.min(10, +qtyEl.textContent + 1); });
  $('pdQDown').addEventListener('click', () => { qtyEl.textContent = Math.max(1, +qtyEl.textContent - 1); });

  $('pdAdd').addEventListener('click', () => {
    const selected = sizesEl.querySelector('.size-btn.selected');
    const size = selected ? selected.dataset.size : p.sizes[0];
    addToCart(p.id, p.name, p.price, size, +qtyEl.textContent, p.image);
    $('pdGoCart').hidden = false;   // a página NÃO muda: só aparece o atalho pro carrinho
  });

  $('productDetail').hidden = false;

  /* ---------- Outras peças ---------- */
  const others = PRODUCTS.filter((x) => x.id !== p.id);
  const sameCat = others.filter((x) => x.category === p.category);
  const rest = others.filter((x) => x.category !== p.category);
  const related = sameCat.concat(rest).slice(0, 4);
  if (related.length) {
    const grid = $('relatedGrid');
    related.forEach((x, i) => grid.appendChild(createProductCard(x, i)));
    $('related').hidden = false;
  }
})();
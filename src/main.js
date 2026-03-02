import './style.css';

// 30 Professional Products (5 per Category)
const products = [
  // LACES
  { id: 1, category: "laces", name: "Card Embroidered Net Lace", price: 120, img: "/placeholder-lace.jpg", desc: "Elegant floral patterns for boutique suits." },
  { id: 2, category: "laces", name: "Flower Design Shuttle Lace", price: 480, img: "/placeholder-lace.jpg", desc: "Premium quality shuttle lace for borders." },
  { id: 3, category: "laces", name: "Cotton Crochet Lace", price: 85, img: "/placeholder-lace.jpg", desc: "Pure white cotton crochet lace for summer wear." },
  { id: 4, category: "laces", name: "GPO Fancy White Lace", price: 150, img: "/placeholder-lace.jpg", desc: "Heavy GPO lace for designer necklines." },
  { id: 5, category: "laces", name: "Double Side Border Lace", price: 300, img: "/placeholder-lace.jpg", desc: "Versatile double-sided shuttle lace." },

  // BORDERS
  { id: 6, category: "borders", name: "Golden Pearl Border", price: 350, img: "/placeholder-patches.jpg", desc: "Luxury pearl border for wedding wear." },
  { id: 7, category: "borders", name: "Silver Zari Work Border", price: 280, img: "/placeholder-patches.jpg", desc: "Antique silver zari work for heavy dupattas." },
  { id: 8, category: "borders", name: "Multi-color Thread Border", price: 200, img: "/placeholder-patches.jpg", desc: "Vibrant thread embroidery on velvet base." },
  { id: 9, category: "borders", name: "Mirror Work Fashion Border", price: 450, img: "/placeholder-patches.jpg", desc: "Traditional mirror work border for party wear." },
  { id: 10, category: "borders", name: "Crystal Zigzag Chain", price: 1800, img: "/placeholder-lace.jpg", desc: "Premium sparkling rhinestone design chain." },

  // BUTTONS
  { id: 11, category: "buttons", name: "Metallic Suiting Buttons", price: 15, img: "/placeholder-buttons.jpg", desc: "High-quality metal buttons for gents suits." },
  { id: 12, category: "buttons", name: "Signature Pearl Buttons", price: 25, img: "/placeholder-buttons.jpg", desc: "Elegant marble finish pearl buttons for shirts." },
  { id: 13, category: "buttons", name: "Crystal Dress Buttons", price: 45, img: "/placeholder-buttons.jpg", desc: "Shining crystal buttons for ladies fashion." },
  { id: 14, category: "buttons", name: "Wooden Ethnic Buttons", price: 10, img: "/placeholder-buttons.jpg", desc: "Natural wood buttons for casual kurtas." },
  { id: 15, category: "buttons", name: "Golden Blazer Buttons", price: 35, img: "/placeholder-buttons.jpg", desc: "Premium embossed golden buttons for coats." },

  // THREADS
  { id: 16, category: "threads", name: "Strong Rainbow Threads", price: 95, img: "/placeholder-threads.jpg", desc: "Durable stitching threads in multiple colors." },
  { id: 17, category: "threads", name: "Polyester Overlock Thread", price: 120, img: "/placeholder-threads.jpg", desc: "Large cone high-speed overlock thread." },
  { id: 18, category: "threads", name: "Metallic Embroidery Thread", price: 65, img: "/placeholder-threads.jpg", desc: "Gold and Silver Tilla work threads." },
  { id: 19, category: "threads", name: "Nylon Invisible Thread", price: 40, img: "/placeholder-threads.jpg", desc: "Transparent nylon thread for patchwork." },
  { id: 20, category: "threads", name: "Cotton Stitching Set", price: 180, img: "/placeholder-threads.jpg", desc: "Pack of 12 multi-color cotton thread spools." },

  // PATCHES
  { id: 21, category: "patches", name: "Velvet Fancy Patches", price: 150, img: "/placeholder-patches.jpg", desc: "Trend-setting velvet motifs for fashion." },
  { id: 22, category: "patches", name: "Ethnic Peacock Motif", price: 550, img: "/placeholder-patches.jpg", desc: "Large embroidered peacock patch for back design." },
  { id: 23, category: "patches", name: "Floral Patchwork Set", price: 250, img: "/placeholder-patches.jpg", desc: "Small rose motifs for sleeve decoration." },
  { id: 24, category: "patches", name: "Beaded Fashion Emblem", price: 380, img: "/placeholder-patches.jpg", desc: "Hand-beaded emblem for designer jackets." },
  { id: 25, category: "patches", name: "Fancy Tassel Latkan Pair", price: 450, img: "/placeholder-patches.jpg", desc: "Elegant handmade tassels for dress backs." },

  // TOOLS
  { id: 26, category: "tools", name: "Silicone Liquid Glue", price: 180, img: "/placeholder-threads.jpg", desc: "Industrial strength fabric glue for tailor work." },
  { id: 27, category: "tools", name: "Professional Tailor Scissors", price: 1200, img: "/placeholder-buttons.jpg", desc: "Large 10-inch sharp steel cutting scissors." },
  { id: 28, category: "tools", name: "Measuring Tape & Chalk Kit", price: 80, img: "/placeholder-buttons.jpg", desc: "Standard 60-inch tape and tailor's chalk set." },
  { id: 29, category: "tools", name: "Hand Needle Assortment", price: 50, img: "/placeholder-buttons.jpg", desc: "Pack of 20 needles for various fabric types." },
  { id: 30, category: "tools", name: "Elastic Roll White (1 inch)", price: 250, img: "/placeholder-lace.jpg", desc: "High-elasticity white roll for boutiques." }
];

let cart = JSON.parse(localStorage.getItem('arham_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Filter Logic & Rendering ---
  const shopGrid = document.getElementById('shop-grid');
  const categoryLinks = document.querySelectorAll('.category-list a');

  function renderProducts(cat = 'all') {
    if (!shopGrid) return;

    const filtered = cat === 'all'
      ? products
      : products.filter(p => p.category === cat);

    shopGrid.innerHTML = filtered.map(p => `
            <div class="product-card cat-card animate-up" style="padding:0; overflow:hidden;">
                <div class="product-img gallery-item" style="height:200px;">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <div class="product-info" style="padding:20px; text-align:left;">
                    <h3 style="font-size:1rem; margin-bottom:8px;">${p.name}</h3>
                    <p style="font-size:0.8rem; color:#666; height:35px; overflow:hidden;">${p.desc}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
                        <span style="font-weight:700; color:#ff4081; font-size:1.1rem;">${p.price}.00 Rs.</span>
                        <button class="btn btn-primary btn-sm btn-add-cart" data-id="${p.id}" style="padding:8px 12px; border-radius:5px;">
                            <i class="fa-solid fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

    // Trigger reveal for new products
    document.querySelectorAll('.animate-up').forEach(el => revealObserver.observe(el));
  }

  // Read URL for initial category filter
  const urlParams = new URLSearchParams(window.location.search);
  const initialCat = urlParams.get('cat') || 'all';
  renderProducts(initialCat);

  // Sidebar Filtering
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.cat || 'all';

      // UI Update
      categoryLinks.forEach(l => l.style.color = '');
      categoryLinks.forEach(l => l.querySelector('i').className = 'fa-solid fa-chevron-right');

      link.style.color = 'var(--primary)';
      link.querySelector('i').className = 'fa-solid fa-arrow-right';

      renderProducts(cat);
    });
  });

  // --- 2. Cart Drawer Toggles ---
  const cartBtn = document.getElementById('cart-toggle');
  const cartClose = document.getElementById('cart-close');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');

  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      cartDrawer.style.right = '0';
      cartOverlay.style.display = 'block';
    });
  }

  if (cartClose || cartOverlay) {
    [cartClose, cartOverlay].forEach(el => {
      if (el) el.addEventListener('click', () => {
        cartDrawer.style.right = '-400px';
        cartOverlay.style.display = 'none';
      });
    });
  }

  // --- 3. Add to Cart Logic ---
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-add-cart')) {
      const id = parseInt(e.target.closest('.btn-add-cart').dataset.id);
      const product = products.find(p => p.id === id);

      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.qty++;
      } else {
        cart.push({ ...product, qty: 1 });
      }

      saveCart();
      updateCartUI();

      // Show Feedback
      const btn = e.target.closest('.btn-add-cart');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
      btn.style.background = '#25d366';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
      }, 1000);
    }

    if (e.target.closest('.remove-item')) {
      const id = parseInt(e.target.closest('.remove-item').dataset.id);
      cart = cart.filter(item => item.id !== id);
      saveCart();
      updateCartUI();
    }
  });

  function saveCart() {
    localStorage.setItem('arham_cart', JSON.stringify(cart));
  }

  function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItems) return;

    if (cart.length === 0) {
      cartItems.innerHTML = '<p style="text-align:center; color:#999; margin-top:50px;">Your cart is empty</p>';
      cartCount.innerText = '0';
      cartTotal.innerText = '0.00 Rs.';
      return;
    }

    let total = 0;
    let count = 0;
    cartItems.innerHTML = cart.map(item => {
      total += item.price * item.qty;
      count += item.qty;
      return `
                <div class="cart-item" style="display:flex; gap:15px; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:15px;">
                    <img src="${item.img}" style="width:50px; height:50px; object-fit:cover; border-radius:5px;">
                    <div style="flex:1;">
                        <h4 style="font-size:0.9rem; margin:0;">${item.name}</h4>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                            <span style="font-size:0.8rem; color:#666;">${item.qty} x ${item.price} Rs.</span>
                            <button class="remove-item" data-id="${item.id}" style="background:none; border:none; color:#ff4081; cursor:pointer;"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>
            `;
    }).join('');

    cartCount.innerText = count;
    cartTotal.innerText = total.toFixed(2) + ' Rs.';
  }

  // --- 4. WhatsApp Checkout ---
  const checkoutBtn = document.getElementById('whatsapp-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }

      let message = "Hi Arham Fashion! I want to place an order:%0A%0A";
      let total = 0;
      cart.forEach(item => {
        message += `• ${item.name} (Qty: ${item.qty}) - ${item.price * item.qty} Rs.%0A`;
        total += item.price * item.qty;
      });
      message += `%0A*Total Amount: ${total} Rs.*%0A%0APlease confirm my order.`;

      window.open(`https://wa.me/923107513161?text=${message}`, '_blank');
    });
  }

  updateCartUI();

  // --- 5. General Scroll Animations ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-up, .cat-card, .section-title').forEach(el => revealObserver.observe(el));
});

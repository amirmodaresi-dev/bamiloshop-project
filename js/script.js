// ==================== DATA ====================
const amazingProducts = [
  {
    id: 501,
    name: "کرم روشن کننده سی گل مدل LIPOSOMAL حجم ۵۰ میلی‌لیتر",
    price: 335200,
    oldPrice: 419900,
    discount: "۲۰٪-",
    rating: "۴.۶",
    category: "زیبایی و سلامت",
    img: "img/sec5-box1.jpg",
  },
  {
    id: 502,
    name: "ساعت دیواری دیجیتال مدل ریموت کنترل دار کد ۶۶۲۶",
    price: 3266000,
    oldPrice: 3550000,
    discount: "۸٪-",
    rating: "۴.۸",
    category: "لوازم خانه",
    img: "img/sec5-box2.jpg",
  },
  {
    id: 503,
    name: "کیس کامپیوتر گیمینگ فاطر مدل FG-523X با نورپردازی RGB",
    price: 2992000,
    oldPrice: 3740000,
    discount: "۲۰٪-",
    rating: "۴.۷",
    category: "کالای دیجیتال",
    img: "img/sec5-box3.jpg",
  },
  {
    id: 504,
    name: "پایه نگهدارنده رومیزی گوشی موبایل و تبلت ایتوک مدل Metallo",
    price: 234000,
    oldPrice: 260000,
    discount: "۱۰٪-",
    rating: "۴.۵",
    category: "لوازم جانبی",
    img: "img/sec5-box4.jpg",
  },
  {
    id: 505,
    name: "لنز چشم طبی و رنگی گریس هرا شماره ۱۸ مدل HV 230 رنگ سبز",
    price: 690000,
    oldPrice: 750000,
    discount: "۸٪-",
    rating: "۴.۴",
    category: "زیبایی و سلامت",
    img: "img/sec5-box5.jpg",
  },
  {
    id: 506,
    name: "سرویس قاشق و چنگال ۱۲ پارچه صنایع استیل ایران مدل مودنا",
    price: 772200,
    oldPrice: 990000,
    discount: "۲۲٪-",
    rating: "۴.۹",
    category: "خانه و آشپزخانه",
    img: "img/sec5-box6.jpg",
  },
];

const laptopProducts = [
  {
    id: 701,
    name: "لپ تاپ ۱۳.۸ اینچی مایکروسافت مدل Surface Laptop 7 Copilot+ Snapdragon X Elite 16GB 1TB",
    price: 210710000,
    rating: "۴.۹",
    category: "لپ‌تاپ و اولترابوک",
    img: "img/sec7-box1.jpg",
  },
  {
    id: 702,
    name: "لپ تاپ ۱۵.۶ اینچی ایسوس مدل Vivobook X1504VA-NJ451-i3 1315U 8GB 512SSD",
    price: 210000000,
    rating: "۴.۵",
    category: "لپ‌تاپ مهندسی",
    img: "img/sec7-box2.jpg",
  },
  {
    id: 703,
    name: "لپ تاپ ۱۶.۱ اینچی گیمینگ اچ‌پی مدل Victus 16-R0073CL-i7 13700HX 32GB 1TB RTX4060",
    price: 214900000,
    rating: "۴.۸",
    category: "لپ‌تاپ گیمینگ",
    img: "img/sec7-box3.jpg",
  },
  {
    id: 704,
    name: "لپ تاپ ۱۵.۶ اینچی ایسوس مدل Vivobook 15 F1504VA-NJ828-i3 1315U 12GB 512SSD",
    price: 53000000,
    rating: "۴.۶",
    category: "لپ‌تاپ روزمره",
    img: "img/sec7-box4.jpg",
  },
  {
    id: 705,
    name: "لپ تاپ ۱۵.۶ اینچی ایسوس مدل Vivobook 15 F1504VA-NJ822-i5 1335U 16GB 1TB SSD",
    price: 96900000,
    rating: "۴.۷",
    category: "لپ‌تاپ مالتی‌مدیا",
    img: "img/sec7-box5.jpg",
  },
  {
    id: 706,
    name: "لپ تاپ ۱۳.۸ اینچی مایکروسافت مدل Surface Laptop 7 Copilot+ Snapdragon X Elite 32GB 1TB",
    price: 268930000,
    rating: "۵.۰",
    category: "لپ‌تاپ پرچمدار",
    img: "img/sec7-box6.jpg",
  },
];

const sec9Products = [
  {
    id: 901,
    name: "دراور چوبی چهار کشو اعیان مدل فانتزی کد FH472",
    img: "img/sec9-box1.jpg",
    price: 19170000,
    rating: "۴.۷",
    category: "دکوراسیون منزل",
  },
  {
    id: 902,
    name: "خردکن برقی حرفه‌ای گوسونیک مدل GSC-603 توان ۵۰۰ وات",
    img: "img/sec9-box2.jpg",
    price: 5500000,
    rating: "۴.۸",
    category: "لوازم برقی آشپزخانه",
  },
  {
    id: 903,
    name: "شال مبل و تخت بافتنی مدل Rectangle سایز ۱۷۵×۱۰۰ سانتی‌متر",
    img: "img/sec9-box3.jpg",
    price: 540000,
    oldPrice: 600000,
    discount: "۱۰٪-",
    rating: "۴.۶",
    category: "منسوجات خانگی",
  },
  {
    id: 904,
    name: "شمع دست‌ساز دکوراتیو مدل گوی مارپیچ معطر",
    img: "img/sec9-box4.jpg",
    price: 150000,
    rating: "۴.۵",
    category: "اکسسوری دکوری",
  },
  {
    id: 905,
    name: "کتابخانه و شلف رومیزی مدرن مدل ۱۳۵۰-۱",
    img: "img/sec9-box5.jpg",
    price: 522000,
    oldPrice: 580000,
    discount: "۱۰٪-",
    rating: "۴.۷",
    category: "سازمان‌دهنده",
  },
  {
    id: 906,
    name: "بادکنک فویلی جشن تولد مدل عدد ۹ طلایی متالیک",
    img: "img/sec9-box6.jpg",
    price: 70000,
    rating: "۴.۳",
    category: "لوازم جشن",
  },
];

const allProducts = [...amazingProducts, ...laptopProducts, ...sec9Products];

// ==================== PERSIAN FORMATTING HELPERS ====================
function formatPriceFa(num) {
  if (typeof num !== "number") return num;
  return num.toLocaleString("fa-IR");
}

function toPersianDigits(str) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(str).replace(/\d/g, (x) => farsiDigits[x]);
}

// ==================== HERO SLIDER ====================
let currentIndex = 0;
let sliderInterval = null;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (!slides.length) return;

  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  slides.forEach((s) => s.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));
  slides[currentIndex]?.classList.add("active");
  dots[currentIndex]?.classList.add("active");
}

function changeSlide(dir) {
  showSlide(currentIndex + dir);
  restartSliderAutoPlay();
}

function currentSlide(idx) {
  showSlide(idx);
  restartSliderAutoPlay();
}

function restartSliderAutoPlay() {
  if (sliderInterval) clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4500);
}

// ==================== WISHLIST LOGIC ====================
let wishlist = JSON.parse(localStorage.getItem("bamilo_wishlist")) || [];

function saveWishlist() {
  localStorage.setItem("bamilo_wishlist", JSON.stringify(wishlist));
}

function updateWishlistCount() {
  const el = document.getElementById("wishlist-count");
  if (el) el.textContent = toPersianDigits(wishlist.length);
}

function toggleWishlist(id, event) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("محصول از لیست علاقه‌مندی‌ها حذف شد");
  } else {
    wishlist.push(id);
    showToast("محصول به علاقه‌مندی‌ها اضافه شد ❤️");
  }
  saveWishlist();
  updateWishlistCount();
  applySearchAndRender();
}

// ==================== CART LOGIC ====================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartTotalCount() {
  return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = toPersianDigits(getCartTotalCount());
}

function addToCart(id, event) {
  if (event) event.stopPropagation();
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCartCount();
  showToast(`«${product.name.slice(0, 28)}...» به سبد خرید اضافه شد!`);
}

function renderCartItems() {
  const container = document.getElementById("cart-items-container");
  const footer = document.getElementById("cart-footer");
  if (!container || !footer) return;
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:36px 16px; color:#64748b;">
        <i class="fa fa-shopping-basket" style="font-size:44px; color:#cbd5e1; margin-bottom:14px; display:block;"></i>
        <p style="font-weight:700; font-size:15px; color:#334155; margin-bottom:4px;">سبد خرید شما خالی است!</p>
        <p style="font-size:13px;">می‌توانید از بخش پیشنهادهای شگفت‌انگیز محصولات دلخواه خود را انتخاب کنید.</p>
      </div>`;
    footer.innerHTML = "";
    footer.style.display = "none";
    return;
  }

  footer.style.display = "flex";
  let total = 0;
  cart.forEach((item, i) => {
    const qty = item.quantity || 1;
    total += item.price * qty;
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${formatPriceFa(item.price)} تومان</div>
        </div>
        <div class="quantity-control">
          <button type="button" onclick="changeQuantity(${i}, -1)" aria-label="کاهش تعداد">−</button>
          <span>${toPersianDigits(qty)}</span>
          <button type="button" onclick="changeQuantity(${i}, 1)" aria-label="افزایش تعداد">+</button>
        </div>
        <button type="button" class="remove-btn" onclick="removeFromCart(${i})">
          <i class="fa fa-trash-o"></i> حذف
        </button>
      </div>`;
  });

  footer.innerHTML = `
    <div>
      <span style="font-size:12.5px; color:#64748b; display:block;">مبلغ قابل پرداخت:</span>
      <strong style="font-size:17px; color:#1e293b;">${formatPriceFa(total)} <small style="font-size:12px;">تومان</small></strong>
    </div>
    <button type="button" class="checkout-btn" onclick="checkout()">
      ثبت و نهایی کردن خرید <i class="fa fa-check"></i>
    </button>`;
}

function openCart() {
  renderCartItems();
  document.getElementById("cart-modal")?.classList.add("cart-modal-visible");
}

function closeCart() {
  document.getElementById("cart-modal")?.classList.remove("cart-modal-visible");
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  if (!modal) return;
  modal.classList.contains("cart-modal-visible") ? closeCart() : openCart();
}

function changeQuantity(index, delta) {
  if (!cart[index]) return;
  const newQty = (cart[index].quantity || 1) + delta;
  if (newQty < 1) {
    removeFromCart(index);
    return;
  }
  cart[index].quantity = newQty;
  saveCart();
  updateCartCount();
  renderCartItems();
}

function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  renderCartItems();
  showToast("محصول از سبد خرید حذف شد!");
}

function checkout() {
  if (cart.length === 0) {
    showToast("سبد خرید شما خالی است!");
    return;
  }
  cart = [];
  saveCart();
  updateCartCount();
  renderCartItems();
  closeCart();
  showToast("سفارش شما با موفقیت ثبت شد! از خرید شما سپاسگزاریم 🎉");
}

// ==================== QUICK VIEW MODAL ====================
function openQuickView(id, event) {
  if (event) event.stopPropagation();
  const product = allProducts.find((p) => p.id === id);
  const modal = document.getElementById("quickview-modal");
  const body = document.getElementById("quickview-body");
  if (!product || !modal || !body) return;

  body.innerHTML = `
    <div class="cart-modal-header">
      <h2><i class="fa fa-eye"></i> مشاهده سریع مشخصات کالا</h2>
      <button type="button" class="cart-close-btn" onclick="closeQuickView()">&times;</button>
    </div>
    <div class="quickview-grid">
      <div class="quickview-img-box">
        <img src="${product.img}" alt="${product.name}">
      </div>
      <div class="quickview-details">
        <div class="quickview-badges">
          <span class="qv-badge">${product.category || "کالای منتخب"}</span>
          <span class="qv-badge in-stock"><i class="fa fa-check-circle"></i> موجود در انبار بامیلو</span>
          <span class="qv-badge"><i class="fa fa-star" style="color:#f59e0b;"></i> امتیاز ${product.rating || "۴.۷"}</span>
        </div>
        <h3>${product.name}</h3>
        <p style="font-size:13px; color:#64748b; margin-bottom:16px;">
          ضمانت اصالت و سلامت فیزیکی کالا به همراه ۳۰ روز مهلت بازگشت و ارسال سریع به سراسر کشور.
        </p>
        <div style="background:#f8fafc; padding:14px 16px; border-radius:12px; margin-bottom:18px; border:1px solid #e2e8f0;">
          ${
            product.oldPrice
              ? `<div style="font-size:12.5px; color:#94a3b8; text-decoration:line-through;">${formatPriceFa(product.oldPrice)} تومان</div>`
              : ""
          }
          <div style="font-size:19px; font-weight:800; color:#d96b00;">
            ${formatPriceFa(product.price)} <small style="font-size:13px; color:#475569;">تومان</small>
          </div>
        </div>
        <button type="button" class="checkout-btn" style="width:100%;" onclick="addToCart(${product.id}); closeQuickView();">
          <i class="fa fa-cart-plus"></i> افزودن به سبد خرید
        </button>
      </div>
    </div>
  `;
  modal.classList.add("cart-modal-visible");
}

function closeQuickView() {
  document
    .getElementById("quickview-modal")
    ?.classList.remove("cart-modal-visible");
}

// ==================== RENDER PRODUCTS ====================
function renderList(data, containerId, className) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <div class="empty-products-box">
        <i class="fa fa-search"></i>
        <p>محصولی مطابق با جستجوی شما در این بخش یافت نشد.</p>
      </div>`;
    return;
  }

  container.innerHTML = data
    .map((p) => {
      const isWished = wishlist.includes(p.id);
      return `
    <article class="${className}">
      <div class="product-image-wrap" onclick="openQuickView(${p.id}, event)" style="cursor:pointer;">
        ${p.discount ? `<span class="discount-badge">${p.discount}</span>` : ""}
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="card-actions-float">
          <button type="button" class="cart-button" onclick="addToCart(${p.id}, event)" title="افزودن به سبد خرید" aria-label="افزودن به سبد خرید">
            <i class="fa fa-shopping-cart"></i>
          </button>
          <button type="button" class="quickview-button" onclick="openQuickView(${p.id}, event)" title="مشاهده سریع" aria-label="مشاهده سریع">
            <i class="fa fa-eye"></i>
          </button>
          <button type="button" class="wish-button ${isWished ? "active" : ""}" onclick="toggleWishlist(${p.id}, event)" title="علاقه‌مندی" aria-label="افزودن به علاقه‌مندی">
            <i class="fa ${isWished ? "fa-heart" : "fa-heart-o"}"></i>
          </button>
        </div>
      </div>
      <div class="sec5text">
        <div>
          <div class="product-meta-row">
            <span>${p.category || "بامیلو"}</span>
            <span class="product-rating"><i class="fa fa-star"></i> ${p.rating || "۴.۶"}</span>
          </div>
          <a href="javascript:void(0)" class="product-title-link" onclick="openQuickView(${p.id}, event)">${p.name}</a>
        </div>
        <div>
          <div class="sec5-price">
            ${p.oldPrice ? `<span class="sec5-price1">${formatPriceFa(p.oldPrice)} تومان</span>` : ""}
            <span class="sec5-offer">${formatPriceFa(p.price)} <small>تومان</small></span>
          </div>
          <button type="button" class="add-to-cart-bar-btn" onclick="addToCart(${p.id}, event)">
            <i class="fa fa-plus-circle"></i> افزودن به سبد
          </button>
        </div>
      </div>
    </article>`;
    })
    .join("");
}

let currentSortLaptop = "default";

function renderAll(data) {
  const amazingFiltered = data.filter((p) =>
    amazingProducts.some((x) => x.id === p.id),
  );
  let laptopFiltered = data.filter((p) =>
    laptopProducts.some((x) => x.id === p.id),
  );
  const sec9Filtered = data.filter((p) =>
    sec9Products.some((x) => x.id === p.id),
  );

  if (currentSortLaptop === "asc") {
    laptopFiltered = [...laptopFiltered].sort((a, b) => a.price - b.price);
  } else if (currentSortLaptop === "desc") {
    laptopFiltered = [...laptopFiltered].sort((a, b) => b.price - a.price);
  }

  renderList(amazingFiltered, "amazing-products-container", "sec5boxs");
  renderList(laptopFiltered, "laptop-products-container", "sec7-boxs");
  renderList(sec9Filtered, "sec9-products", "sec9-boxs");
}

// ==================== SEARCH & FILTER HELPERS ====================
function applySearchAndRender() {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  const statusBanner = document.getElementById("search-status-banner");
  const statusText = document.getElementById("search-status-text");

  const term = input ? input.value.trim().toLowerCase() : "";

  if (clearBtn) {
    clearBtn.style.display = term.length > 0 ? "flex" : "none";
  }

  if (term.length > 0) {
    const matched = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        (p.category && p.category.toLowerCase().includes(term)),
    );
    if (statusBanner && statusText) {
      statusBanner.style.display = "flex";
      statusText.textContent = `نتایج جستجو برای «${input.value.trim()}» (${toPersianDigits(matched.length)} کالا یافت شد)`;
    }
    renderAll(matched);
  } else {
    if (statusBanner) statusBanner.style.display = "none";
    renderAll(allProducts);
  }
}

function filterByKeyword(keyword) {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.value = keyword;
  applySearchAndRender();
  scrollToSection("amazing-section");
}

function resetSearchAndScroll(sectionId) {
  const input = document.getElementById("search-input");
  if (input && input.value.trim() !== "") {
    input.value = "";
    applySearchAndRender();
  }
  if (sectionId) scrollToSection(sectionId);
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setupSearch() {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  const resetBtn = document.getElementById("reset-search-btn");
  const sortSelect = document.getElementById("laptop-sort-select");

  input?.addEventListener("input", applySearchAndRender);

  clearBtn?.addEventListener("click", () => {
    if (input) input.value = "";
    applySearchAndRender();
    input?.focus();
  });

  resetBtn?.addEventListener("click", () => {
    if (input) input.value = "";
    applySearchAndRender();
  });

  sortSelect?.addEventListener("change", (e) => {
    currentSortLaptop = e.target.value;
    applySearchAndRender();
  });
}

// ==================== MOBILE MENU DRAWER ====================
function setupMobileDrawer() {
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-nav-close");
  const overlay = document.getElementById("mobile-nav-overlay");
  const drawer = document.getElementById("mobile-nav-drawer");

  const closeMenu = () => {
    drawer?.classList.remove("open");
    overlay?.classList.remove("open");
  };

  openBtn?.addEventListener("click", () => {
    drawer?.classList.add("open");
    overlay?.classList.add("open");
  });

  closeBtn?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ==================== COUNTDOWN TIMER ====================
function startTimer(duration) {
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  if (!hoursEl || !minutesEl || !secondsEl) return;

  let time = duration;
  const update = () => {
    const h = String(Math.floor(time / 3600)).padStart(2, "0");
    const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const s = String(time % 60).padStart(2, "0");
    hoursEl.textContent = toPersianDigits(h);
    minutesEl.textContent = toPersianDigits(m);
    secondsEl.textContent = toPersianDigits(s);
  };
  update();
  setInterval(() => {
    if (time > 0) {
      time--;
      update();
    } else {
      time = duration;
    }
  }, 1000);
}

// ==================== TOAST NOTIFICATION ====================
function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `<i class="fa fa-check-circle"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  renderAll(allProducts);
  updateCartCount();
  updateWishlistCount();
  setupSearch();
  setupMobileDrawer();
  restartSliderAutoPlay();
  startTimer(3 * 3600 + 12 * 60 + 25);

  document.getElementById("cart-icon")?.addEventListener("click", toggleCart);
  document
    .getElementById("cart-close-btn")
    ?.addEventListener("click", closeCart);

  document.getElementById("wishlist-icon")?.addEventListener("click", () => {
    if (wishlist.length === 0) {
      showToast("لیست علاقه‌مندی‌های شما فعلاً خالی است");
    } else {
      showToast(
        `شما ${toPersianDigits(wishlist.length)} محصول در لیست علاقه‌مندی‌ها دارید ❤️`,
      );
    }
  });

  document
    .getElementById("login-trigger-btn")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("نسخه دمو پورتفولیو: ورود و ثبت‌نام کاربران");
    });

  document.getElementById("cart-modal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeCart();
  });

  document.getElementById("quickview-modal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeQuickView();
  });
});

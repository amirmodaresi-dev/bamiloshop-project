// ==================== DATA ====================
const amazingProducts = [
  {
    id: 501,
    name: "کرم روشن کننده سی گل مدل LIPOSOMAL",
    price: 335200,
    oldPrice: 419900,
    discount: "20%-",
    img: "img/sec5-box1.jpg",
  },
  {
    id: 502,
    name: "ساعت دیواری دیجیتال مدل ریموت کنترل دار کد 6626",
    price: 3266000,
    oldPrice: 3550000,
    discount: "8%-",
    img: "img/sec5-box2.jpg",
  },
  {
    id: 503,
    name: "کیس کامپیوتر فاطر مدل FG-523X",
    price: 2992000,
    oldPrice: 3740000,
    discount: "20%-",
    img: "img/sec5-box3.jpg",
  },
  {
    id: 504,
    name: "پایه نگهدارنده گوشی موبایل و تبلت ایتوک مدل Metallo",
    price: 234000,
    oldPrice: 260000,
    discount: "10%-",
    img: "img/sec5-box4.jpg",
  },
  {
    id: 505,
    name: "لنز چشم گریس هرا شماره 18 مدل HV 230 رنگ سبز",
    price: 690000,
    oldPrice: 750000,
    discount: "8%-",
    img: "img/sec5-box5.jpg",
  },
  {
    id: 506,
    name: "سرویس قاشق و چنگال 12 پارچه صنایع استیل ایران مدل مودنا",
    price: 772200,
    oldPrice: 990000,
    discount: "22%-",
    img: "img/sec5-box6.jpg",
  },
];

const laptopProducts = [
  {
    id: 701,
    name: "لپ تاپ 13.8 اینچی مایکروسافت مدل Surface Laptop 7 CopilotPlus PC-Snapdragon X Elite-16GB 1TB SSD",
    price: 210710000,
    img: "img/sec7-box1.jpg",
  },
  {
    id: 702,
    name: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook X1504VA-NJ451-i3 1315U 8GB 512SSD – کاستوم شده",
    price: 210000000,
    img: "img/sec7-box2.jpg",
  },
  {
    id: 703,
    name: "لپ تاپ 16.1 اینچی اچ پی مدل Victus 16-R0073CL-i7 13700HX 32GB 1SSD RTX4060",
    price: 214900000,
    img: "img/sec7-box3.jpg",
  },
  {
    id: 704,
    name: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook 15 F1504VA-NJ828-i3 1315U 12GB 512SSD – کاستوم شده",
    price: 53000000,
    img: "img/sec7-box4.jpg",
  },
  {
    id: 705,
    name: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook 15 F1504VA-NJ822-i5 1335U 16GB 1SSD – کاستوم شده",
    price: 96900000,
    img: "img/sec7-box5.jpg",
  },
  {
    id: 706,
    name: "لپ تاپ 13.8 اینچی مایکروسافت مدل Surface Laptop 7 Copilot Plus PC-Snapdragon X Elite-32GB 1TB SSD",
    price: 268930000,
    img: "img/sec7-box6.jpg",
  },
];

const sec9Products = [
  {
    id: 901,
    name: "دراور اعیان مدل فانتزی کد FH472",
    img: "img/sec9-box1.jpg",
    price: 19170000,
  },
  {
    id: 902,
    name: "خردکن گوسونیک مدل GSC-603",
    img: "img/sec9-box2.jpg",
    price: 5500000,
  },
  {
    id: 903,
    name: "شال مبل و تخت مدل Rectangle سایز 175×100 سانتی متر",
    img: "img/sec9-box3.jpg",
    price: 540000,
    oldPrice: 600000,
    discount: "10%-",
  },
  {
    id: 904,
    name: "شمع دست ساز مدل گوی مارپیچ",
    img: "img/sec9-box4.jpg",
    price: 150000,
  },
  {
    id: 905,
    name: "کتابخانه رومیزی مدل 1350-1",
    img: "img/sec9-box5.jpg",
    price: 522000,
    oldPrice: 580000,
    discount: "10%-",
  },
  {
    id: 906,
    name: "بادکنک فویلی مدل عدد 9",
    img: "img/sec9-box6.jpg",
    price: 70000,
  },
];

const allProducts = [...amazingProducts, ...laptopProducts, ...sec9Products];

// ==================== SLIDER ====================
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
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
}

function currentSlide(idx) {
  showSlide(idx);
}

setInterval(() => changeSlide(1), 4000);

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
  if (el) el.textContent = getCartTotalCount();
}

function addToCart(id) {
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
  showToast("محصول به سبد خرید اضافه شد!");
}

function renderCartItems() {
  const container = document.getElementById("cart-items-container");
  const footer = document.getElementById("cart-footer");
  if (!container || !footer) return;
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; padding:20px;">سبد خرید شما خالی است!</p>';
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
        <img src="${item.img}" alt="${item.name}" style="width:50px;height:50px;object-fit:contain;margin-left:10px;">
        <div style="flex:1;">
          <div style="font-weight:bold;">${item.name}</div>
          <div style="font-size:12px;color:#888;">${item.price.toLocaleString()} تومان</div>
        </div>
        <div class="quantity-control">
          <button onclick="changeQuantity(${i}, -1)">-</button>
          <span>${qty}</span>
          <button onclick="changeQuantity(${i}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${i})">حذف</button>
      </div>`;
  });

  footer.innerHTML = `
    <strong>جمع کل: ${total.toLocaleString()} تومان</strong>
    <button class="checkout-btn" onclick="checkout()">نهایی کردن خرید</button>`;
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
  if (newQty < 1) return;
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
  showToast("خرید شما با موفقیت ثبت شد!");
}

// ==================== RENDER PRODUCTS ====================
function renderList(data, containerId, className) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = data
    .map(
      (p) => `
    <div class="${className}">
      <div class="product-image-wrap">
        ${p.discount ? `<span class="discount-badge">${p.discount}</span>` : ""}
        <img src="${p.img}" alt="${p.name}">
        <button class="cart-button" onclick="addToCart(${p.id})">
          <i class="fa fa-shopping-cart"></i>
        </button>
      </div>
      <div class="sec5text">
        <a href="#">${p.name}</a>
        <div class="sec5-price">
          ${p.oldPrice ? `<span class="sec5-price1">${p.oldPrice.toLocaleString()} تومان</span>` : ""}
          <span class="sec5-offer">${p.price.toLocaleString()} تومان</span>
        </div>
      </div>
    </div>`,
    )
    .join("");
}

function renderAll(data) {
  renderList(
    data.filter((p) => amazingProducts.some((x) => x.id === p.id)),
    "amazing-products-container",
    "sec5boxs",
  );
  renderList(
    data.filter((p) => laptopProducts.some((x) => x.id === p.id)),
    "laptop-products-container",
    "sec7-boxs",
  );
  renderList(
    data.filter((p) => sec9Products.some((x) => x.id === p.id)),
    "sec9-products",
    "sec9-boxs",
  );
}

// ==================== SEARCH ====================
function setupSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("input", (e) => {
    const term = e.target.value.trim().toLowerCase();
    renderAll(
      term
        ? allProducts.filter((p) => p.name.toLowerCase().includes(term))
        : allProducts,
    );
  });
}

// ==================== TIMER ====================
function startTimer(duration) {
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  if (!hoursEl || !minutesEl || !secondsEl) return;

  let time = duration;
  const update = () => {
    hoursEl.textContent = String(Math.floor(time / 3600)).padStart(2, "0");
    minutesEl.textContent = String(Math.floor((time % 3600) / 60)).padStart(
      2,
      "0",
    );
    secondsEl.textContent = String(time % 60).padStart(2, "0");
  };
  update();
  setInterval(() => {
    if (time > 0) {
      time--;
      update();
    }
  }, 1000);
}

// ==================== TOAST ====================
function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `<i class="fa fa-check-circle"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  renderAll(allProducts);
  updateCartCount();
  setupSearch();
  startTimer(3 * 3600 + 12 * 60 + 25);

  document
    .querySelector(".cart-icon-box")
    ?.addEventListener("click", toggleCart);
  document
    .getElementById("cart-close-btn")
    ?.addEventListener("click", closeCart);
  document.getElementById("cart-modal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeCart();
  });
});

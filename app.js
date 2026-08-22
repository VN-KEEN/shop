// Sample Products Data
const products = [
    {
        id: 1,
        name: 'Laptop Gaming',
        price: 15000000,
        emoji: '💻',
        description: 'Laptop cao cấp cho gaming'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro',
        price: 25000000,
        emoji: '📱',
        description: 'Smartphone tối ưu nhất'
    },
    {
        id: 3,
        name: 'Tai nghe Bluetooth',
        price: 3000000,
        emoji: '🎧',
        description: 'Chất lượng âm thanh tuyệt vời'
    },
    {
        id: 4,
        name: 'Smartwatch',
        price: 5000000,
        emoji: '⌚',
        description: 'Đồng hồ thông minh hiện đại'
    },
    {
        id: 5,
        name: 'Camera DSLR',
        price: 12000000,
        emoji: '📷',
        description: 'Máy ảnh chuyên nghiệp'
    },
    {
        id: 6,
        name: 'Tablet Pro',
        price: 8000000,
        emoji: '📱',
        description: 'Máy tính bảng cao cấp'
    }
];

// Cart Management
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count badge
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Add product to cart
function addToCart(productId, quantity) {
    quantity = parseInt(quantity) || 1;
    
    if (quantity <= 0) {
        alert('Vui lòng nhập số lượng hợp lệ!');
        return;
    }

    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            quantity: quantity
        });
    }

    saveCart();
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
}

// Display products
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-quantity">
                    <input type="number" id="qty-${product.id}" value="1" min="1" max="100">
                </div>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)} ₫</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id}, document.getElementById('qty-${product.id}').value)">
                    Thêm vào giỏ
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Display cart items
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Giỏ hàng của bạn đang trống</div>';
        document.getElementById('totalPrice').textContent = '0 ₫';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.emoji} ${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)} ₫ x ${item.quantity}</div>
            </div>
            <div class="cart-item-actions">
                <span style="font-weight: 600; color: var(--secondary-color);">${formatPrice(itemTotal)} ₫</span>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span style="width: 30px; text-align: center;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Xóa</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    document.getElementById('totalPrice').textContent = formatPrice(total) + ' ₫';
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            displayCart();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
}

// Clear cart
function clearCart() {
    if (confirm('Bạn chắc chắn muốn xóa toàn bộ giỏ hàng?')) {
        cart = [];
        saveCart();
        displayCart();
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Cảm ơn bạn! Đã thanh toán ${formatPrice(total)} ₫\n\nĐây là demo, thanh toán thực sẽ được xử lý sau.`);
    cart = [];
    saveCart();
    displayCart();
    closeCart();
}

// Format price
function formatPrice(price) {
    return price.toLocaleString('vi-VN');
}

// Modal functions
const cartModal = document.getElementById('cartModal');
const cartBtn = document.getElementById('cartBtn');
const closeBtn = document.querySelector('.close');

cartBtn.onclick = function() {
    displayCart();
    cartModal.style.display = 'block';
}

function closeCart() {
    cartModal.style.display = 'none';
}

closeBtn.onclick = closeCart;

window.onclick = function(event) {
    if (event.target === cartModal) {
        closeCart();
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    loadCart();
    displayProducts();
});
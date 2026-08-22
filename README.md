# 🛍️ VN-KEEN Shop - Modern Ecommerce Platform

Một ứng dụng web shop hiện đại được xây dựng bằng HTML, CSS và JavaScript với đầy đủ các tính năng cơ bản cho một cửa hàng trực tuyến.

## ✨ Tính năng

- 🏠 **Giao diện đẹp mắt**: Design responsive, hiện đại và thân thiện với người dùng
- 📦 **Quản lý sản phẩm**: Hiển thị danh sách sản phẩm với hình ảnh, giá cả và mô tả
- 🛒 **Giỏ hàng thông minh**: 
  - Thêm/xóa sản phẩm
  - Điều chỉnh số lượng
  - Tính toán tổng tiền tự động
- 💾 **Local Storage**: Lưu giỏ hàng vĩnh viễn trên thiết bị người dùng
- 📱 **Responsive Design**: Hoạt động hoàn hảo trên tất cả các thiết bị (máy tính, tablet, điện thoại)
- 🎨 **UI/UX chuyên nghiệp**: Giao diện sạch, trực quan và dễ sử dụng
- 💳 **Thanh toán demo**: Chức năng thanh toán mô phỏng

## 🚀 Bắt đầu nhanh

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt hoặc dependencies

### Cách sử dụng

1. Clone repository:
```bash
git clone https://github.com/VN-KEEN/shop.git
cd shop
```

2. Mở file `index.html` trong trình duyệt

3. Bắt đầu mua sắm!

## 📁 Cấu trúc dự án

```
shop/
├── index.html       # Trang chính HTML
├── styles.css       # Styling CSS
├── app.js          # Logic JavaScript
└── README.md       # File này
```

## 🎯 Cách hoạt động

### Thêm sản phẩm vào giỏ hàng
1. Nhập số lượng cần mua
2. Click nút "Thêm vào giỏ"
3. Sản phẩm sẽ được thêm vào giỏ hàng

### Quản lý giỏ hàng
1. Click nút giỏ hàng 🛒 ở góc trên bên phải
2. Xem danh sách sản phẩm
3. Điều chỉnh số lượng hoặc xóa sản phẩm
4. Click "Thanh toán" để hoàn tất

### Local Storage
- Giỏ hàng tự động lưu vào bộ nhớ thiết bị
- Dữ liệu được giữ lại ngay cả khi đóng trình duyệt
- Làm sạch bộ nhớ bằng "Xóa giỏ hàng"

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang
- **CSS3**: Styling và layout responsive
- **JavaScript ES6**: Logic và tương tác
- **Local Storage API**: Lưu trữ dữ liệu

## 📝 Thông tin sản phẩm

Dự án hiện có 6 sản phẩm demo:
1. Laptop Gaming - 15,000,000 ₫
2. iPhone 15 Pro - 25,000,000 ₫
3. Tai nghe Bluetooth - 3,000,000 ₫
4. Smartwatch - 5,000,000 ₫
5. Camera DSLR - 12,000,000 ₫
6. Tablet Pro - 8,000,000 ₫

## 🔧 Mở rộng tính năng

Bạn có thể dễ dàng mở rộng dự án:

### Thêm sản phẩm mới
Edit `app.js` và thêm vào mảng `products`:
```javascript
const products = [
    // ...
    {
        id: 7,
        name: 'Sản phẩm mới',
        price: 1000000,
        emoji: '🎁',
        description: 'Mô tả sản phẩm'
    }
];
```

### Thêm tính năng thanh toán thực
- Tích hợp Stripe, Paypal hoặc cổng thanh toán địa phương
- Xử lý backend để lưu trữ đơn hàng
- Gửi email xác nhận

### Quản lý người dùng
- Đăng ký/Đăng nhập
- Lưu địa chỉ giao hàng
- Lịch sử mua hàng

## 📊 Hiệu suất

- ⚡ Tải nhanh (< 1 giây)
- 📦 Kích thước nhỏ gọn (< 50KB)
- 🔄 Không cần backend ban đầu

## 🤝 Đóng góp

Chúng tôi hoan nghênh các đóng góp! Vui lòng:
1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 Giấy phép

Dự án này được cấp phép dưới MIT License - xem file LICENSE để biết chi tiết.

## 📧 Liên hệ

- Email: contact@vn-keen.shop
- Phone: +84 123 456 789
- Website: https://vn-keen.github.io/shop

## 🙏 Cảm ơn

Cảm ơn bạn đã sử dụng VN-KEEN Shop! Nếu bạn thích dự án, vui lòng ⭐ star repository này.

---

**Phiên bản**: 1.0.0  
**Cập nhật lần cuối**: 2024

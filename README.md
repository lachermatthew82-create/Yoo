# Yoo Trading Platform 📈

A modern, professional trading platform built with HTML, CSS (Tailwind), and JavaScript. Perfect for forex, crypto, stocks, and CFD trading.

## Features ✨

- **Professional Landing Page** - Responsive design with hero section, features showcase, and testimonials
- **Trading Dashboard** - Real-time account statistics and market overview
- **Trading Terminal** - Place trades with take profit and stop loss levels
- **Trading Signals** - Daily high-probability trade setups with win probabilities
- **Educational Resources** - Comprehensive courses on trading fundamentals
- **User Accounts** - Secure signup/login system with persistent data
- **Mobile Responsive** - Works perfectly on all devices

## Project Structure 📁

```
Yoo/
├── index.html          # Main landing page
├── dashboard.html      # Trading dashboard
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## Quick Start 🚀

1. Clone the repository:
```bash
git clone https://github.com/lachermatthew82-create/Yoo.git
cd Yoo
```

2. Open `index.html` in your web browser:
```bash
# Using Python (Python 3.x)
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Or simply open the file directly
open index.html
```

3. Create an account on the landing page
4. Access your trading dashboard

## Pages Overview 📄

### 1. Landing Page (`index.html`)
- Hero section with value proposition
- Trust indicators and compliance badges
- Trading instruments showcase
- Testimonials from real traders
- 3-step onboarding guide
- FAQ section with interactive toggles
- Sign-up form with validation

### 2. Dashboard (`dashboard.html`)
- Account balance and statistics
- Open positions tracker
- Real-time market overview
- Trade history and P&L tracking
- Responsive sidebar navigation

### 3. Features
- **Trading Terminal**: Open positions with risk management
- **Trading Signals**: Professional trade setups with entry/exit levels
- **Education**: Courses on forex, technical analysis, risk management, and psychology
- **Account Settings**: User profile and security management

## Technologies Used 🛠️

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (Vanilla)** - Interactive elements and functionality
- **Font Awesome Icons** - Professional icon library

## Key JavaScript Functions 📝

### `toggleFaq(button)`
Toggles FAQ answers visibility with smooth transitions.

### `openDemo()`
Opens a demo modal with video content.

### `logout()`
Clears user data and redirects to landing page.

### Smooth Navigation
Auto-scrolling navigation with hash-based page switching in dashboard.

## Local Storage Implementation 💾

User signup data is stored in browser localStorage:
```javascript
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "timestamp": "2026-05-28T16:21:01Z"
}
```

## Demo Accounts 🎯

For testing purposes, you can use any credentials:
- **Email**: demo@yoo-trading.com
- **Password**: demo123

All data is stored locally in your browser.

## Customization Guide 🎨

### Change Brand Colors
Edit the Tailwind classes in HTML files:
- Primary: `emerald-400` → Your color
- Secondary: `slate-900` → Your color

### Add Real Market Data
Replace placeholder prices with API calls:
```javascript
// Example: Fetch real forex rates
fetch('https://api.exchangerate-api.com/v4/latest/EUR')
  .then(res => res.json())
  .then(data => updatePrices(data));
```

### Connect to Trading Backend
Replace form submissions with API calls:
```javascript
async function submitTrade(tradeData) {
  const response = await fetch('https://api.yoo-trading.com/trades', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tradeData)
  });
  return response.json();
}
```

## Browser Compatibility 🌐

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips ⚡

- Minify CSS/JS for production
- Optimize images and use WebP format
- Enable gzip compression on server
- Use CDN for external libraries
- Implement lazy loading for heavy content

## Security Considerations 🔒

⚠️ **Important**: This is a frontend prototype. For production:
- Never store sensitive data in localStorage
- Implement proper authentication (OAuth, JWT)
- Use HTTPS for all connections
- Validate input on both frontend and backend
- Implement rate limiting and CORS

## Roadmap 🗺️

- [ ] Real-time WebSocket market data
- [ ] Backend API integration
- [ ] Payment gateway integration
- [ ] Advanced charting with TradingView
- [ ] Mobile native apps
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced analytics dashboard

## Contributing 🤝

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Support 💬

For issues or questions:
- Open an issue on GitHub
- Check the FAQ section on the landing page
- Visit our support portal

## License 📜

This project is open source and available under the MIT License.

---

**Made with ❤️ by the Yoo Trading Team**

Start trading smarter today! 🚀

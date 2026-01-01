# SIP & Lumpsum Calculator

A modern, responsive investment calculator built with Bootstrap 5 and Alpine.js that helps you calculate returns for both Systematic Investment Plans (SIP) and Lumpsum investments.

## Features

- 📊 **Dual Mode Calculator**
  - SIP (Systematic Investment Plan) - Calculate returns for monthly investments
  - Lumpsum - Calculate returns for one-time investments

- 🎨 **Modern UI/UX**
  - Bootstrap 5 for responsive design
  - Dark/Light theme toggle
  - Smooth animations and transitions
  - Mobile-friendly interface

- 💰 **Comprehensive Results**
  - Total maturity value
  - Total invested amount
  - Estimated returns
  - Return percentage
  - Investment breakdown
  - Number to words conversion (Indian numbering system)

- 🌓 **Theme Support**
  - Light and dark mode
  - Theme preference saved in localStorage
  - Automatic system preference detection

## Technologies Used

- **HTML5** - Structure
- **Bootstrap 5.3.2** - CSS Framework
- **Alpine.js 3.x** - Reactive JavaScript framework
- **ES6 Modules** - Modular JavaScript architecture
- **Custom CSS** - Theme support and styling

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sip-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:8081`

Alternatively, you can use the serve command:
```bash
npm run serve
```

## Usage

### SIP Calculator

1. Select **SIP** mode from the toggle buttons
2. Enter your **Monthly SIP Amount** (e.g., ₹5,000)
3. Enter **Expected Annual Return** percentage (e.g., 12%)
4. Enter **Investment Period** in years (e.g., 10 years)
5. View your results instantly:
   - Total maturity value
   - Total invested amount
   - Estimated returns
   - Return percentage
   - Detailed breakdown

### Lumpsum Calculator

1. Select **Lumpsum** mode from the toggle buttons
2. Enter your **Lumpsum Amount** (e.g., ₹1,00,000)
3. Enter **Expected Annual Return** percentage (e.g., 12%)
4. Enter **Investment Period** in years (e.g., 10 years)
5. View your results with compound interest calculations

### Theme Toggle

- Click the theme toggle button (🌙/☀️) in the top-right corner
- Switch between light and dark modes
- Your preference is automatically saved

## Project Structure

```
sip-calculator/
├── index.html          # Main HTML file
├── css/
│   └── custom.css      # Custom styles and theme support
├── js/
│   ├── app.js          # Main Alpine.js component
│   ├── calculators.js  # SIP and Lumpsum calculation logic
│   ├── theme.js        # Theme management utilities
│   └── utils.js        # Utility functions (currency, number to words)
├── package.json        # Project dependencies
└── README.md          # This file
```

## Formulas Used

### SIP (Systematic Investment Plan)

The calculator uses the **Future Value of Annuity** formula:

```
FV = P × [((1 + r)^n - 1) / r] × (1 + r)
```

Where:
- **P** = Monthly investment amount
- **r** = Monthly return rate (Annual rate / 12 / 100)
- **n** = Number of months (Years × 12)

### Lumpsum Investment

The calculator uses the **Compound Interest** formula:

```
FV = PV × (1 + r)^n
```

Where:
- **PV** = Present value (Initial investment)
- **r** = Annual return rate (as decimal)
- **n** = Number of years

## Features in Detail

### Number to Words Conversion

The calculator converts large numbers to Indian numbering system:
- Crore (1,00,00,000)
- Lakh (1,00,000)
- Thousand (1,000)
- Example: ₹12,50,000 = "12 Lakh 50 Thousand Rupees"

### Currency Formatting

All amounts are formatted using Indian locale:
- Uses comma separators for thousands
- Example: ₹12,50,000

### Responsive Design

- Works seamlessly on desktop, tablet, and mobile devices
- Bootstrap 5 grid system ensures optimal layout on all screen sizes

## Development

### Running Locally

1. Make sure Node.js is installed
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open `http://localhost:8081` in your browser

### File Structure

- **index.html**: Main application structure with Alpine.js directives
- **js/app.js**: Core Alpine.js component managing state and calculations
- **js/calculators.js**: Pure calculation functions for SIP and Lumpsum
- **js/theme.js**: Theme management with localStorage persistence
- **js/utils.js**: Helper functions for formatting and conversions
- **css/custom.css**: Custom styles with CSS variables for theming

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All calculations are estimates based on the expected return rate
- Actual returns may vary based on market conditions and fund performance
- The calculator assumes consistent monthly investments for SIP
- Compound interest is calculated annually for Lumpsum investments

## License

This project is open source and available for personal and commercial use.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created with ❤️ for helping investors make informed decisions.

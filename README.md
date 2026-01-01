# SIP & Lumpsum Calculator

A modern, responsive investment calculator built with Bootstrap 5 and Alpine.js that helps you calculate returns for both Systematic Investment Plans (SIP) and Lumpsum investments.

## Features

- 📊 **Multiple Calculator Modes**
  - **Standard Mode**: SIP and Lumpsum investment calculations
  - **Goal Calculator**: Reverse calculation to find required investment for target amount
  - **Compare Mode**: Side-by-side comparison of SIP vs Lumpsum investments

- 💰 **Investment Types**
  - SIP (Systematic Investment Plan) - Calculate returns for monthly investments
  - Lumpsum - Calculate returns for one-time investments

- 📈 **Advanced Visualizations**
  - Interactive growth charts using Chart.js
  - Year-wise breakdown table showing investment growth over time
  - Visual comparison of invested amount vs total value

- 🎯 **Quick Presets**
  - Conservative (8% return)
  - Moderate (12% return)
  - Aggressive (15% return)
  - One-click application of common scenarios

- 💾 **Export & Share**
  - Export calculation results to clipboard
  - Formatted text output with all details
  - Easy sharing of investment calculations

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
  - Year-wise growth analysis

- 🌓 **Theme Support**
  - Light and dark mode
  - Theme preference saved in localStorage
  - Automatic system preference detection
  - Theme-aware charts and visualizations

## Technologies Used

- **HTML5** - Structure
- **Bootstrap 5.3.2** - CSS Framework
- **Alpine.js 3.x** - Reactive JavaScript framework
- **Chart.js 4.4.0** - Interactive charts and graphs
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

### Standard Calculator Mode

#### SIP Calculator

1. Select **Standard** mode and then **SIP** from the toggle buttons
2. Enter your **Monthly SIP Amount** (e.g., ₹5,000)
3. Enter **Expected Annual Return** percentage (e.g., 12%)
4. Enter **Investment Period** in years (e.g., 10 years)
5. View your results instantly:
   - Total maturity value
   - Total invested amount
   - Estimated returns
   - Return percentage
   - Detailed breakdown
6. **Optional**: Click "Show Year-wise Breakdown" to see year-by-year growth
7. **Optional**: Click "Show Chart" to visualize investment growth
8. **Optional**: Click "Export Results" to copy results to clipboard

#### Lumpsum Calculator

1. Select **Standard** mode and then **Lumpsum** from the toggle buttons
2. Enter your **Lumpsum Amount** (e.g., ₹1,00,000)
3. Enter **Expected Annual Return** percentage (e.g., 12%)
4. Enter **Investment Period** in years (e.g., 10 years)
5. View your results with compound interest calculations
6. Use the same optional features as SIP calculator

### Goal Calculator Mode

1. Select **Goal Calculator** mode from the top toggle buttons
2. Enter your **Target Amount** (e.g., ₹10,00,000)
3. Enter **Expected Annual Return** percentage (e.g., 12%)
4. Enter **Investment Period** in years (e.g., 10 years)
5. View the required investment amounts:
   - Required Monthly SIP
   - Required Lumpsum Investment

### Compare Mode

1. Select **Compare** mode from the top toggle buttons
2. Enter **Monthly SIP Amount** (e.g., ₹5,000)
3. Enter **Expected Annual Return** percentage (e.g., 12%)
4. Enter **Investment Period** in years (e.g., 10 years)
5. View side-by-side comparison:
   - SIP investment results
   - Equivalent Lumpsum investment results
   - Difference between both approaches

### Quick Presets

- Click on **Conservative (8%)**, **Moderate (12%)**, or **Aggressive (15%)** buttons
- Automatically applies common return rate scenarios
- Available only in Standard mode

### Theme Toggle

- Click the theme toggle button (🌙/☀️) in the top-right corner
- Switch between light and dark modes
- Your preference is automatically saved
- Charts automatically adapt to selected theme

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

### Goal Calculator

#### Required SIP Calculation

Reverse calculation of SIP formula:

```
Required SIP = Target / [((1 + r)^n - 1) / r] × (1 + r)
```

Where:
- **Target** = Desired future value
- **r** = Monthly return rate (Annual rate / 12 / 100)
- **n** = Number of months (Years × 12)

#### Required Lumpsum Calculation

Reverse calculation of compound interest:

```
Required Lumpsum = Target / (1 + r)^n
```

Where:
- **Target** = Desired future value
- **r** = Annual return rate (as decimal)
- **n** = Number of years

## Features in Detail

### Goal Calculator

The goal calculator helps you determine how much you need to invest to reach a specific target amount:

- **Required SIP Calculation**: Uses reverse SIP formula to calculate monthly investment needed
- **Required Lumpsum Calculation**: Uses reverse compound interest formula
- Shows both options so you can choose the best investment strategy

### Comparison Mode

Compare SIP and Lumpsum investments side-by-side:
- Automatically calculates equivalent lumpsum based on SIP total invested
- Shows which investment type performs better
- Displays the difference in returns
- Helps make informed investment decisions

### Year-wise Breakdown

View detailed year-by-year growth:
- Shows cumulative invested amount each year
- Displays returns generated each year
- Total value at end of each year
- Growth percentage calculation
- Helps understand compounding effect over time

### Interactive Charts

Visualize your investment growth:
- Line chart showing invested amount vs total value
- Theme-aware (adapts to light/dark mode)
- Interactive tooltips with detailed values
- Responsive design for all screen sizes
- Powered by Chart.js

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

### Export Functionality

- Copy calculation results to clipboard
- Formatted text with all investment details
- Easy to share via email, messages, or documents
- Includes all key metrics and breakdown

### Responsive Design

- Works seamlessly on desktop, tablet, and mobile devices
- Bootstrap 5 grid system ensures optimal layout on all screen sizes
- Charts and tables are responsive and mobile-friendly

## Development

### Running Locally

1. Make sure Node.js is installed
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open `http://localhost:8081` in your browser

### File Structure

- **index.html**: Main application structure with Alpine.js directives and Chart.js integration
- **js/app.js**: Core Alpine.js component managing state, calculations, charts, and all modes
- **js/calculators.js**: Pure calculation functions for SIP, Lumpsum, goal calculator, and yearly breakdowns
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
- Goal calculator shows required investments assuming consistent returns
- Comparison mode uses equivalent investment amounts for fair comparison
- Year-wise breakdown shows cumulative values at end of each year
- Charts update automatically when inputs change
- Export functionality requires browser clipboard API support

## License

This project is open source and available for personal and commercial use.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created with ❤️ for helping investors make informed decisions.

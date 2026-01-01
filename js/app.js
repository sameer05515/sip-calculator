/**
 * Main Alpine.js component for the Investment Calculator
 */

import { formatCurrency, numberToWords } from './utils.js';
import { calculateSIP, calculateLumpsum } from './calculators.js';
import { initTheme, toggleTheme } from './theme.js';

/**
 * Main calculator component
 * @returns {Object} Alpine.js component data and methods
 */
export function sipCalculator() {
    return {
        mode: 'sip', // 'sip' or 'lumpsum'
        monthlyAmount: 5000,
        lumpsumAmount: 100000,
        annualReturn: 12,
        years: 10,
        theme: 'light', // 'light' or 'dark'
        results: {
            totalValue: 0,
            totalInvested: 0,
            estimatedReturns: 0,
            returnPercentage: 0,
            months: 0,
            monthlyRate: 0
        },

        /**
         * Main calculation method that routes to appropriate calculator
         */
        calculate() {
            const annualRate = parseFloat(this.annualReturn) || 0;
            const yearsValue = parseFloat(this.years) || 0;

            if (annualRate < 0 || yearsValue <= 0) {
                this.resetResults();
                return;
            }

            if (this.mode === 'sip') {
                this.results = calculateSIP(this.monthlyAmount, annualRate, yearsValue);
            } else {
                this.results = calculateLumpsum(this.lumpsumAmount, annualRate, yearsValue);
            }
        },

        /**
         * Resets all results to zero
         */
        resetResults() {
            this.results = {
                totalValue: 0,
                totalInvested: 0,
                estimatedReturns: 0,
                returnPercentage: 0,
                months: 0,
                monthlyRate: 0
            };
        },

        /**
         * Toggles between light and dark theme
         */
        toggleThemeMode() {
            this.theme = toggleTheme(this.theme);
        },

        // Expose utility functions to template
        formatCurrency,
        numberToWords,

        /**
         * Initialize component and perform initial calculation
         */
        init() {
            // Initialize theme
            this.theme = initTheme();
            // Perform initial calculation
            this.calculate();
        }
    };
}


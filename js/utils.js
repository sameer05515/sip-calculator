/**
 * Utility functions for the Investment Calculator
 */

/**
 * Formats a number as Indian currency (₹) with locale-specific formatting
 * @param {number} num - The number to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(num) {
    if (num === null || num === undefined || isNaN(num)) return '0';
    return parseFloat(num).toLocaleString('en-IN', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
    });
}

/**
 * Converts a number to words in Indian numbering system (Crore, Lakh, Thousand)
 * @param {number} num - The number to convert
 * @returns {string} Number in words
 */
export function numberToWords(num) {
    if (num === null || num === undefined || isNaN(num) || num === 0) {
        return 'Zero Rupees';
    }

    const numValue = Math.floor(parseFloat(num));
    const parts = [];

    // Calculate Crore
    const crore = Math.floor(numValue / 10000000);
    if (crore > 0) {
        parts.push(crore === 1 ? '1 Crore' : `${crore} Crore`);
    }

    // Calculate Lakh (remaining after crore)
    const remainingAfterCrore = numValue % 10000000;
    const lakh = Math.floor(remainingAfterCrore / 100000);
    if (lakh > 0) {
        parts.push(lakh === 1 ? '1 Lakh' : `${lakh} Lakh`);
    }

    // Calculate Thousand (remaining after lakh)
    const remainingAfterLakh = remainingAfterCrore % 100000;
    const thousand = Math.floor(remainingAfterLakh / 1000);
    if (thousand > 0) {
        parts.push(thousand === 1 ? '1 Thousand' : `${thousand} Thousand`);
    }

    // Calculate remaining hundreds
    const remaining = remainingAfterLakh % 1000;
    if (remaining > 0) {
        parts.push(remaining.toString());
    }

    if (parts.length === 0) {
        return 'Zero Rupees';
    }

    return parts.join(' ') + ' Rupees';
}


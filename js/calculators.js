/**
 * Calculation functions for SIP and Lumpsum investments
 */

/**
 * Calculates SIP (Systematic Investment Plan) returns
 * Formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r)
 * where P = monthly investment, r = monthly return rate, n = number of months
 * 
 * @param {number} monthlyAmount - Monthly investment amount
 * @param {number} annualRate - Annual return rate (as percentage)
 * @param {number} years - Investment period in years
 * @returns {Object} Calculation results
 */
export function calculateSIP(monthlyAmount, annualRate, years) {
    const amount = parseFloat(monthlyAmount) || 0;
    
    if (amount <= 0) {
        return getEmptyResults();
    }

    // Calculate monthly rate
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    // Calculate total invested
    const totalInvested = amount * months;

    // Calculate future value using SIP formula
    let futureValue = 0;
    
    if (monthlyRate > 0) {
        const compoundFactor = Math.pow(1 + monthlyRate, months);
        futureValue = amount * ((compoundFactor - 1) / monthlyRate) * (1 + monthlyRate);
    } else {
        // If rate is 0, it's just the sum of all investments
        futureValue = totalInvested;
    }

    const estimatedReturns = futureValue - totalInvested;
    const returnPercentage = totalInvested > 0 ? (estimatedReturns / totalInvested) * 100 : 0;

    return {
        totalValue: futureValue,
        totalInvested: totalInvested,
        estimatedReturns: estimatedReturns,
        returnPercentage: returnPercentage,
        months: months,
        monthlyRate: monthlyRate * 100
    };
}

/**
 * Calculates Lumpsum investment returns
 * Formula: FV = PV × (1 + r)^n
 * where PV = present value (initial investment), r = annual return rate, n = number of years
 * 
 * @param {number} lumpsumAmount - Initial investment amount
 * @param {number} annualRate - Annual return rate (as percentage)
 * @param {number} years - Investment period in years
 * @returns {Object} Calculation results
 */
export function calculateLumpsum(lumpsumAmount, annualRate, years) {
    const amount = parseFloat(lumpsumAmount) || 0;
    
    if (amount <= 0) {
        return getEmptyResults();
    }

    // Calculate annual rate as decimal
    const annualRateDecimal = annualRate / 100;
    const months = years * 12;

    // Calculate total invested (same as initial amount for lumpsum)
    const totalInvested = amount;

    // Calculate future value using compound interest formula
    let futureValue = 0;
    
    if (annualRateDecimal > 0) {
        futureValue = amount * Math.pow(1 + annualRateDecimal, years);
    } else {
        // If rate is 0, future value equals present value
        futureValue = totalInvested;
    }

    const estimatedReturns = futureValue - totalInvested;
    const returnPercentage = totalInvested > 0 ? (estimatedReturns / totalInvested) * 100 : 0;

    return {
        totalValue: futureValue,
        totalInvested: totalInvested,
        estimatedReturns: estimatedReturns,
        returnPercentage: returnPercentage,
        months: months,
        monthlyRate: annualRate / 12 // For display purposes
    };
}

/**
 * Returns empty results object
 * @returns {Object} Empty results structure
 */
function getEmptyResults() {
    return {
        totalValue: 0,
        totalInvested: 0,
        estimatedReturns: 0,
        returnPercentage: 0,
        months: 0,
        monthlyRate: 0
    };
}


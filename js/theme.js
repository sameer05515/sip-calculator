/**
 * Theme management utilities
 */

const THEME_STORAGE_KEY = 'calculator-theme';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

/**
 * Gets the current theme from localStorage or system preference
 * @returns {string} 'light' or 'dark'
 */
export function getInitialTheme() {
    // Check localStorage first
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === THEME_LIGHT || storedTheme === THEME_DARK) {
        return storedTheme;
    }
    
    // Fall back to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return THEME_DARK;
    }
    
    return THEME_LIGHT;
}

/**
 * Applies the theme to the document
 * @param {string} theme - 'light' or 'dark'
 */
export function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === THEME_DARK) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
}

/**
 * Toggles between light and dark theme
 * @param {string} currentTheme - Current theme
 * @returns {string} New theme
 */
export function toggleTheme(currentTheme) {
    const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    applyTheme(newTheme);
    return newTheme;
}

/**
 * Initializes theme on page load
 */
export function initTheme() {
    const theme = getInitialTheme();
    applyTheme(theme);
    return theme;
}


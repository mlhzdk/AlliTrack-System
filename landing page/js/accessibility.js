// accessibility.js - Unified Accessibility System for AlliTrack
(function() {
    // ==============================================
    // CONFIGURATION
    // ==============================================
    const CONFIG = {
        STORAGE_PREFIX: 'alliTrack_',
        FONT_SIZES: {
            LEVELS: ['Small', 'Medium', 'Large', 'X-Large'],
            VALUES: ['0.875rem', '1rem', '1.125rem', '1.25rem'],
            DEFAULT: 1 // Medium
        },
        THEMES: {
            LIGHT: 'light',
            DARK: 'dark',
            DEFAULT: 'light'
        }
    };

    // ==============================================
    // STATE MANAGEMENT
    // ==============================================
    const state = {
        fontSizeLevel: CONFIG.FONT_SIZES.DEFAULT,
        highContrast: false,
        focusHighlight: false,
        theme: CONFIG.THEMES.DEFAULT,
        panelOpen: false
    };

    // ==============================================
    // LOCALSTORAGE FUNCTIONS
    // ==============================================
    function saveToStorage(key, value) {
        try {
            localStorage.setItem(CONFIG.STORAGE_PREFIX + key, JSON.stringify(value));
        } catch (e) {
            console.warn('Failed to save to localStorage:', e);
        }
    }

    function loadFromStorage(key, defaultValue) {
        try {
            const item = localStorage.getItem(CONFIG.STORAGE_PREFIX + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('Failed to load from localStorage:', e);
            return defaultValue;
        }
    }

    // ==============================================
    // SETTINGS APPLICATION FUNCTIONS
    // ==============================================
    function applyFontSize() {
        document.documentElement.style.fontSize = CONFIG.FONT_SIZES.VALUES[state.fontSizeLevel];
        
        // Update label if exists
        const fontSizeLabel = document.getElementById('currentFontSize');
        if (fontSizeLabel) {
            fontSizeLabel.textContent = CONFIG.FONT_SIZES.LEVELS[state.fontSizeLevel];
        }
        
        saveToStorage('fontSize', state.fontSizeLevel);
    }

    function applyTheme() {
        // Remove all theme classes
        document.body.classList.remove('light-theme', 'dark-theme');
        
        // Add current theme class
        document.body.classList.add(state.theme === 'dark' ? 'dark-theme' : 'light-theme');
        
        // Update theme buttons if they exist
        const themeButtons = document.querySelectorAll('.theme-btn');
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            const btnTheme = btn.getAttribute('data-theme');
            if (btnTheme === state.theme) {
                btn.classList.add('active');
            }
        });
        
        saveToStorage('theme', state.theme);
    }

    function applyContrast() {
        if (state.highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
        
        // Update contrast button if exists
        const contrastBtn = document.getElementById('toggleContrast');
        if (contrastBtn) {
            contrastBtn.classList.toggle('active', state.highContrast);
            contrastBtn.setAttribute('aria-pressed', state.highContrast.toString());
        }
        
        saveToStorage('highContrast', state.highContrast);
    }

    function applyFocusHighlight() {
        if (state.focusHighlight) {
            document.body.classList.add('focus-highlight');
        } else {
            document.body.classList.remove('focus-highlight');
        }
        
        // Update focus button if exists
        const focusBtn = document.getElementById('toggleFocus');
        if (focusBtn) {
            focusBtn.classList.toggle('active', state.focusHighlight);
            focusBtn.setAttribute('aria-pressed', state.focusHighlight.toString());
        }
        
        saveToStorage('focusHighlight', state.focusHighlight);
    }

    function applyAllSettings() {
        applyFontSize();
        applyTheme();
        applyContrast();
        applyFocusHighlight();
    }

    // ==============================================
    // SETTERS
    // ==============================================
    function setFontSize(level) {
        if (level >= 0 && level < CONFIG.FONT_SIZES.LEVELS.length) {
            state.fontSizeLevel = level;
            applyFontSize();
            return true;
        }
        return false;
    }

    function setTheme(theme) {
        if (theme === 'light' || theme === 'dark') {
            state.theme = theme;
            applyTheme();
            return true;
        }
        return false;
    }

    function setHighContrast(enabled) {
        state.highContrast = enabled;
        applyContrast();
    }

    function setFocusHighlight(enabled) {
        state.focusHighlight = enabled;
        applyFocusHighlight();
    }

    // ==============================================
    // INITIALIZATION
    // ==============================================
    function loadSettings() {
        // Load from localStorage
        state.fontSizeLevel = loadFromStorage('fontSize', CONFIG.FONT_SIZES.DEFAULT);
        state.theme = loadFromStorage('theme', CONFIG.THEMES.DEFAULT);
        state.highContrast = loadFromStorage('highContrast', false);
        state.focusHighlight = loadFromStorage('focusHighlight', false);
        
        // Apply settings
        applyAllSettings();
        
        // If no theme is saved, check system preference
        if (!loadFromStorage('theme', null)) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }

    // ==============================================
    // EVENT HANDLERS
    // ==============================================
    function setupAccessibilityPanel() {
        const accessibilityToggle = document.getElementById('accessibilityToggle');
        const accessibilityPanel = document.getElementById('accessibilityPanel');
        const closeAccessibility = document.getElementById('closeAccessibility');
        const decreaseFont = document.getElementById('decreaseFont');
        const increaseFont = document.getElementById('increaseFont');
        const toggleContrast = document.getElementById('toggleContrast');
        const toggleFocus = document.getElementById('toggleFocus');
        const resetAccessibility = document.getElementById('resetAccessibility');
        const themeButtons = document.querySelectorAll('.theme-btn');

        // Check if accessibility panel exists on this page
        if (!accessibilityPanel || !accessibilityToggle) {
            return;
        }

        // Toggle panel visibility
        function togglePanel() {
            state.panelOpen = !state.panelOpen;
            accessibilityPanel.classList.toggle('open', state.panelOpen);
            accessibilityToggle.setAttribute('aria-expanded', state.panelOpen.toString());
        }

        accessibilityToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            togglePanel();
        });

        closeAccessibility.addEventListener('click', function(e) {
            e.stopPropagation();
            state.panelOpen = false;
            accessibilityPanel.classList.remove('open');
            accessibilityToggle.setAttribute('aria-expanded', 'false');
        });

        // Font size controls
        if (decreaseFont) {
            decreaseFont.addEventListener('click', function() {
                if (state.fontSizeLevel > 0) {
                    setFontSize(state.fontSizeLevel - 1);
                }
            });
        }

        if (increaseFont) {
            increaseFont.addEventListener('click', function() {
                if (state.fontSizeLevel < CONFIG.FONT_SIZES.LEVELS.length - 1) {
                    setFontSize(state.fontSizeLevel + 1);
                }
            });
        }

        // Contrast toggle
        if (toggleContrast) {
            toggleContrast.addEventListener('click', function() {
                setHighContrast(!state.highContrast);
            });
        }

        // Focus highlight toggle
        if (toggleFocus) {
            toggleFocus.addEventListener('click', function() {
                setFocusHighlight(!state.focusHighlight);
            });
        }

        // Theme buttons
        themeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const theme = this.getAttribute('data-theme');
                setTheme(theme);
            });
        });

        // Reset button
        if (resetAccessibility) {
            resetAccessibility.addEventListener('click', function() {
                // Reset to defaults
                setFontSize(CONFIG.FONT_SIZES.DEFAULT);
                setTheme(CONFIG.THEMES.DEFAULT);
                setHighContrast(false);
                setFocusHighlight(false);
                
                // Clear localStorage for our keys
                Object.keys(localStorage).forEach(key => {
                    if (key.startsWith(CONFIG.STORAGE_PREFIX)) {
                        localStorage.removeItem(key);
                    }
                });
                
                // Show confirmation
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Reset Complete!';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        }

        // Close panel when clicking outside
        document.addEventListener('click', function(e) {
            const panel = document.getElementById('accessibilityPanel');
            const toggle = document.getElementById('accessibilityToggle');
            
            if (state.panelOpen && panel && toggle &&
                !panel.contains(e.target) && 
                !toggle.contains(e.target)) {
                state.panelOpen = false;
                panel.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close panel on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && state.panelOpen) {
                state.panelOpen = false;
                const panel = document.getElementById('accessibilityPanel');
                const toggle = document.getElementById('accessibilityToggle');
                if (panel) panel.classList.remove('open');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ==============================================
    // PUBLIC API
    // ==============================================
    window.accessibilityManager = {
        // Get current settings
        getSettings: function() {
            return { ...state };
        },
        
        // Update settings programmatically
        updateSettings: function(newSettings) {
            if (newSettings.fontSizeLevel !== undefined) {
                setFontSize(newSettings.fontSizeLevel);
            }
            if (newSettings.theme !== undefined) {
                setTheme(newSettings.theme);
            }
            if (newSettings.highContrast !== undefined) {
                setHighContrast(newSettings.highContrast);
            }
            if (newSettings.focusHighlight !== undefined) {
                setFocusHighlight(newSettings.focusHighlight);
            }
        },
        
        // Reset to defaults
        reset: function() {
            setFontSize(CONFIG.FONT_SIZES.DEFAULT);
            setTheme(CONFIG.THEMES.DEFAULT);
            setHighContrast(false);
            setFocusHighlight(false);
        }
    };

    // ==============================================
    // INITIALIZATION
    // ==============================================
    function init() {
        // Load settings first
        loadSettings();
        
        // Set up accessibility panel if it exists
        setupAccessibilityPanel();
        
        // Listen for system theme changes (only if user hasn't set a preference)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            // Only update if user hasn't set a manual preference
            const savedTheme = loadFromStorage('theme', null);
            if (!savedTheme) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
        
        console.log('AlliTrack Accessibility System initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
(function() {
    'use strict';

    // Configuration
    const config = {
        mobileBreakpoint: 768,
        modalId: 'mobileBlockModal',
        loginPageUrl: '../../../index.html',
        enableLogging: true 
    };

    // Logging utility
    const log = {
        info: function(msg) {
            if (config.enableLogging) console.log('📱 [MobileRestriction] ' + msg);
        },
        warn: function(msg) {
            if (config.enableLogging) console.warn('⚠️ [MobileRestriction] ' + msg);
        },
        error: function(msg) {
            if (config.enableLogging) console.error('❌ [MobileRestriction] ' + msg);
        }
    };

    // Mobile detection function - STRICT detection
    function isMobileDevice() {
        try {
            // Check screen width (mobile screens are typically <= 768px)
            const isMobileWidth = window.innerWidth <= config.mobileBreakpoint;
            
            // Check user agent for mobile devices
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const mobileRegex = /android|webos|iphone|ipod|blackberry|iemobile|opera mini|mobile|phone|tablet/i;
            const isMobileUA = mobileRegex.test(userAgent.toLowerCase());
            
            // Check touch capability (mobile devices have touch)
            const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            
            // Consider it mobile if ANY of these conditions are true
            const result = isMobileWidth || isMobileUA || hasTouch;
            
            log.info(`Detection: width=${window.innerWidth}, isMobileUA=${isMobileUA}, hasTouch=${hasTouch}, result=${result}`);
            
            return result;
        } catch (error) {
            log.error('Error detecting mobile device: ' + error);
            return true; // Fail safe - BLOCK access on error
        }
    }

    // Show modal and block access completely
    function showModal() {
        const modal = document.getElementById(config.modalId);
        if (!modal) {
            log.error('Modal element not found! Redirecting to login...');
            window.location.href = config.loginPageUrl;
            return;
        }
        
        // Hide main content
        const mainContent = document.querySelector('.app') || document.querySelector('main') || document.body;
        if (mainContent) {
            mainContent.style.opacity = '0.3';
            mainContent.style.pointerEvents = 'none';
            mainContent.style.filter = 'blur(3px)';
        }
        
        // Show modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        // Remove any existing event listeners that might allow bypass
        const continueBtn = document.getElementById('mobileContinueBtn');
        if (continueBtn) {
            continueBtn.style.display = 'none'; // Hide the continue button completely
        }
        
        log.info('Modal shown - mobile access blocked');
    }

    // Block all navigation attempts
    function blockNavigation() {
        // Override all link clicks
        document.addEventListener('click', function(e) {
            const target = e.target.closest('a');
            if (target && target.getAttribute('href') !== config.loginPageUrl) {
                e.preventDefault();
                e.stopPropagation();
                log.warn('Navigation blocked on mobile');
                return false;
            }
        }, true); // Use capture phase to catch all clicks

        // Block form submissions
        document.addEventListener('submit', function(e) {
            e.preventDefault();
            log.warn('Form submission blocked on mobile');
            return false;
        }, true);

        // Block back/forward navigation
        history.pushState(null, null, location.href);
        window.addEventListener('popstate', function() {
            history.pushState(null, null, location.href);
        });
    }

    // Completely block access
    function blockAccess() {
        log.warn('🚫 BLOCKING MOBILE ACCESS');
        
        // Show the modal
        showModal();
        
        // Block all navigation
        blockNavigation();
        
        // Block keyboard shortcuts (F5, Ctrl+R, etc.)
        document.addEventListener('keydown', function(e) {
            // Block F5, Ctrl+R, Ctrl+Shift+R, Cmd+R
            if (e.key === 'F5' || 
                (e.ctrlKey && e.key === 'r') || 
                (e.metaKey && e.key === 'r') ||
                (e.ctrlKey && e.shiftKey && e.key === 'r')) {
                e.preventDefault();
                log.warn('Refresh blocked on mobile');
                return false;
            }
            
            // Block Ctrl+Shift+I (DevTools), Ctrl+U (View Source)
            if ((e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.key === 'u')) {
                e.preventDefault();
                return false;
            }
        });

        // Periodically check if user is still on mobile
        setInterval(function() {
            if (isMobileDevice()) {
                // Re-apply block if somehow bypassed
                showModal();
            }
        }, 1000);
    }

    // Main initialization function
    function init() {
        log.info('Initializing mobile restriction - NO BYPASS MODE');

        try {
            if (isMobileDevice()) {
                log.warn('🚫 MOBILE DEVICE DETECTED - ACCESS DENIED');
                blockAccess();
                return true; // Mobile detected and blocked
            }

            log.info('Desktop device detected - access granted');
            
            // Hide modal if it exists (in case of resize)
            const modal = document.getElementById(config.modalId);
            if (modal) {
                modal.style.display = 'none';
            }
            
            // Restore main content
            const mainContent = document.querySelector('.app') || document.querySelector('main');
            if (mainContent) {
                mainContent.style.opacity = '';
                mainContent.style.pointerEvents = '';
                mainContent.style.filter = '';
            }
            
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            
            return false; // Desktop, no blocking
        } catch (error) {
            log.error('Initialization error: ' + error);
            blockAccess(); // Block on error
            return true;
        }
    }

    // Run immediately BEFORE DOMContentLoaded
    if (isMobileDevice()) {
        // If mobile detected, block immediately
        document.write('<style>body { visibility: hidden; }</style>');
        setTimeout(function() {
            window.location.href = config.loginPageUrl;
        }, 100);
    }

    // Also run on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', init);
    
    // Run on page load
    window.addEventListener('load', init);
    
    // Run on resize (re-check)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 100);
    });

    // Export for debugging (but no override function)
    window.mobileRestriction = {
        checkNow: function() {
            return isMobileDevice();
        }
    };

})();
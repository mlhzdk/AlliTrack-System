(function() {
    'use strict';

    // Configuration
    const config = {
        mobileBreakpoint: 768,
        modalId: 'mobileBlockModal',
        loginPageUrl: '../../../index.html',
        enableLogging: true 
    };

    // Ultra-fast mobile detection
    function isMobileDevice() {
        try {
            // Check screen width (fastest check)
            const isMobileWidth = window.innerWidth <= config.mobileBreakpoint;
            
            // Quick user agent check
            const ua = navigator.userAgent || navigator.vendor || '';
            const isMobileUA = /android|iphone|ipod|blackberry|iemobile|opera mini|mobile/i.test(ua.toLowerCase());
            
            // Touch check
            const hasTouch = 'ontouchstart' in window;
            
            // Block if clearly mobile
            return isMobileWidth || isMobileUA || hasTouch;
        } catch (e) {
            return false;
        }
    }

    // IMMEDIATE EXECUTION - Runs before anything else
    if (isMobileDevice()) {
        // Clear the page instantly
        if (document.documentElement) {
            document.documentElement.innerHTML = '';
        }
        
        // Show minimal blocking message
        document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <title>Access Denied</title>
                <style>
                    body { 
                        margin: 0;
                        background: #0a0a0f;
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    }
                    .block-card {
                        background: #1a1a2e;
                        border-radius: 24px;
                        padding: 32px 24px;
                        max-width: 340px;
                        width: 90%;
                        text-align: center;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                        border: 1px solid rgba(255,255,255,0.1);
                        animation: fadeIn 0.3s ease;
                    }
                    .icon {
                        font-size: 56px;
                        margin-bottom: 20px;
                        color: #ff6b6b;
                    }
                    h2 {
                        color: white;
                        font-size: 24px;
                        margin-bottom: 12px;
                        font-weight: 700;
                    }
                    p {
                        color: #a0a0b0;
                        font-size: 15px;
                        line-height: 1.5;
                        margin-bottom: 28px;
                    }
                    .btn {
                        background: #4a6cf7;
                        color: white;
                        border: none;
                        padding: 14px 28px;
                        border-radius: 50px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        text-decoration: none;
                        display: inline-block;
                        transition: background 0.2s;
                    }
                    .btn:hover {
                        background: #3a5ce5;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                </style>
            </head>
            <body>
                <div class="block-card">
                    <div class="icon">📱</div>
                    <h2>Mobile Access Restricted</h2>
                    <p>This admin area requires a desktop computer.<br>Redirecting to login page...</p>
                    <a href="${config.loginPageUrl}" class="btn">Return to Login</a>
                </div>
                <script>
                    // Auto-redirect after 2 seconds
                    setTimeout(function() {
                        window.location.href = '${config.loginPageUrl}';
                    }, 2000);
                <\/script>
            </body>
            </html>
        `);
        
        // Stop all JavaScript execution
        throw new Error('Mobile access blocked - page cleared');
    }

    // If we get here, it's desktop - continue normally
    console.log('📱 [MobileRestriction] Desktop detected - loading dashboard');

    // Export for debugging
    window.mobileRestriction = {
        isMobile: isMobileDevice
    };
})();
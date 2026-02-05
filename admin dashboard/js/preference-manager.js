// preference-manager.js - Centralized system for language and theme synchronization
class PreferencesManager {
    constructor() {
        this.translations = {
            'en': {
                // COMMON translations used across all pages:
                
                // Page titles
                'dashboard_page_title': 'Admin Dashboard - AlliTrack',
                'system_settings_page_title': 'System Settings - AlliTrack Admin',
                
                // Header/Account
                'search_tickets': 'Search tickets, users, IDs...',
                'search_settings': 'Search settings...',
                'profile': 'Profile',
                'settings': 'Settings',
                'logout': 'Logout',
                
                // Sidebar Navigation (used across admin pages)
                'admin_dashboard': 'Admin Dashboard',
                'dashboard': 'Dashboard',
                'ticket_management': 'Ticket Management',
                'all_tickets': 'All Tickets',
                'ticket_queue': 'Ticket Queue',
                'escalated_tickets': 'Escalated Tickets',
                'user_management': 'User Management',
                'users': 'Users',
                'support_agents': 'Support Agents',
                'roles_permissions': 'Roles & Permissions',
                'analytics': 'Analytics',
                'reports': 'Reports',
                'performance': 'Performance',
                'insights': 'Insights',
                'system_admin': 'System Admin',
                'system_settings': 'System Settings',
                'announcements': 'Announcements',
                'audit_log': 'Audit Log',
                
                // Footer
                'admin_dashboard_template': 'Admin Dashboard Template',
                
                // System Settings Page Specific
                'system_settings_subtitle': 'Configure system-wide settings, preferences, and maintenance operations',
                'general_settings': 'General',
                'ticket_settings': 'Ticket',
                'notification_settings': 'Notification',
                'security_settings': 'Security',
                'maintenance': 'Maintenance',
                'advanced_settings': 'Advanced',
                'application_settings': 'Application Settings',
                'application_name': 'Application Name',
                'application_name_placeholder': 'Enter application name',
                'application_name_help': 'Display name shown throughout the application',
                'timezone': 'Timezone',
                'date_format': 'Date Format',
                'time_format': 'Time Format',
                '12_hour_format': '12-hour format (AM/PM)',
                '24_hour_format': '24-hour format',
                'localization': 'Localization',
                'default_language': 'Default Language',
                'default_language_help': 'Default language for all users',
                'appearance': 'Appearance',
                'default_theme': 'Default Theme',
                'ticket_workflow': 'Ticket Workflow',
                'auto_assign_tickets': 'Auto-assign tickets',
                'auto_assign_enabled': 'Enabled (Round-robin)',
                'auto_assign_disabled': 'Disabled (Manual assignment)',
                'default_priority': 'Default Priority',
                'escalation_time': 'Auto-escalation Time',
                'hours': 'hours',
                'escalation_time_help': 'Time before unresolved tickets are escalated',
                'sla_settings': 'SLA Settings',
                'sla_response_time': 'SLA Response Time',
                'sla_resolution_time': 'SLA Resolution Time',
                'sla_notifications': 'Send SLA violation notifications',
                'ticket_categories': 'Ticket Categories',
                'default_categories': 'Default Categories',
                'add_category_placeholder': 'Add new category',
                'add': 'Add',
                'email_notifications': 'Email Notifications',
                'enable_email_notifications': 'Enable email notifications',
                'smtp_server': 'SMTP Server',
                'smtp_port': 'SMTP Port',
                'sender_email': 'Sender Email',
                'smtp_authentication': 'SMTP Authentication Required',
                'notification_preferences': 'Notification Preferences',
                'notify_new_ticket': 'Notify on new ticket',
                'notify_assignment': 'Notify on ticket assignment',
                'notify_reply': 'Notify on ticket reply',
                'notify_escalation': 'Notify on ticket escalation',
                'notify_sla': 'Notify on SLA violation',
                'push_notifications': 'Push Notifications',
                'enable_push_notifications': 'Enable push notifications',
                'push_provider': 'Push Notification Provider',
                'api_key': 'API Key',
                'authentication': 'Authentication',
                'password_policy': 'Password Policy',
                'require_complex_password': 'Require complex passwords',
                'min_password_length': 'Minimum 8 characters',
                'require_numbers': 'Require numbers',
                'require_symbols': 'Require special characters',
                'session_timeout': 'Session Timeout',
                'minutes': 'minutes',
                'enable_2fa': 'Enable Two-Factor Authentication',
                'security_policies': 'Security Policies',
                'failed_login_attempts': 'Failed Login Attempts',
                'attempts': 'attempts before lockout',
                'account_lockout': 'Account Lockout Duration',
                'enable_ip_whitelist': 'Enable IP Whitelist',
                'force_https': 'Force HTTPS connections',
                'access_control': 'Access Control',
                'admin_ip_restriction': 'Admin IP Restrictions',
                'ip_restriction_placeholder': 'Enter allowed IP addresses (one per line)',
                'enable_audit_log': 'Enable audit logging',
                'enable_api_security': 'Enable API security',
                'database_maintenance': 'Database Maintenance',
                'backup_schedule': 'Backup Schedule',
                'retention_period': 'Retention Period',
                'days': 'days',
                'enable_auto_backup': 'Enable automatic backups',
                'backup_now': 'Backup Now',
                'optimize_db': 'Optimize Database',
                'data_retention': 'Data Retention',
                'ticket_retention': 'Ticket Retention Period',
                'ticket_retention_help': 'Closed tickets older than this will be archived',
                'log_retention': 'Log Retention Period',
                'user_retention': 'Inactive User Retention',
                'user_retention_help': 'Users inactive for this period will be deactivated',
                'cleanup_now': 'Run Cleanup Now',
                'system_maintenance': 'System Maintenance',
                'enable_maintenance_mode': 'Enable Maintenance Mode',
                'maintenance_mode_help': 'Users will see a maintenance message',
                'maintenance_message': 'Maintenance Message',
                'maintenance_message_placeholder': 'Enter maintenance message',
                'auto_system_updates': 'Automatic System Updates',
                'check_updates': 'Check for Updates',
                'warning': 'Warning',
                'advanced_settings_warning': 'These settings are for advanced users only. Incorrect configuration may cause system instability.',
                'api_settings': 'API Settings',
                'api_rate_limit': 'API Rate Limit',
                'requests_per_minute': 'requests/minute',
                'enable_rest_api': 'Enable REST API',
                'enable_webhooks': 'Enable Webhooks',
                'performance_settings': 'Performance Settings',
                'cache_duration': 'Cache Duration',
                'seconds': 'seconds',
                'enable_caching': 'Enable Response Caching',
                'enable_compression': 'Enable GZIP Compression',
                'debug_settings': 'Debug Settings',
                'enable_debug_mode': 'Enable Debug Mode',
                'debug_mode_help': 'Shows detailed error messages (for development only)',
                'log_level': 'Log Level',
                'view_logs': 'View System Logs',
                'clear_cache': 'Clear Cache',
                'discard_changes': 'Discard Changes',
                'save_settings': 'Save Settings',
                
                // Admin Dashboard Page Specific
                'system_overview': 'System Overview',
                'total_tickets': 'Total Tickets',
                'open_tickets': 'Open Tickets',
                'avg_response_time': 'Avg Response Time',
                'from_last_week': 'from last week',
                'from_yesterday': 'from yesterday',
                'improvement': 'improvement',
                'ticket_statistics': 'Ticket Statistics',
                'resolved_tickets': 'Resolved Tickets',
                'in_progress_tickets': 'In Progress',
                'new_tickets': 'New Tickets',
                'admin_actions': 'Admin Actions',
                'add_user': 'Add User',
                'create_new_user_account': 'Create new user account',
                'system_config': 'System Config',
                'configure_system_settings': 'Configure system settings',
                'generate_report': 'Generate Report',
                'create_performance_report': 'Create performance report',
                'post_announcement': 'Post Announcement',
                'broadcast_to_all_users': 'Broadcast to all users',
                'recent_system_activity': 'Recent System Activity',
                'new_admin_added': 'New admin added',
                'user_jdoe_added_as_admin': 'User jdoe added as system administrator',
                'ticket_escalated': 'Ticket escalated',
                'ticket_4872_escalated': 'Ticket #TKT-4872 escalated to Level 2',
                'system_backup_completed': 'System backup completed',
                'daily_backup_successful': 'Daily backup completed successfully',
                'user_deactivated': 'User deactivated',
                'user_inactive_account': 'User account deactivated due to inactivity',
                'system_alerts': 'System Alerts',
                'high_ticket_volume': 'High Ticket Volume',
                'tickets_exceeding_threshold': 'Ticket submissions exceeding threshold',
                'update_available': 'Update Available',
                'system_update_v1_3_0': 'System update v1.3.0 available',
                'backup_successful': 'Backup Successful',
                'latest_backup_completed': 'Latest system backup completed',
                'view': 'View',
                'update': 'Update',
                'details': 'Details',
                
                // User Dashboard translations (from existing code)
                'pageTitle': 'Preferences - AlliTrack',
                'pageHeader': 'Preferences',
                'successMessage': 'Preferences saved successfully!',
                'myTickets': 'My Tickets',
                'notifications': 'Notifications',
                'submitTicket': 'Submit a Ticket',
                'preferences': 'Preferences',
                'profileSettings': 'Profile Settings',
                'announcements': 'Announcements',
                'accountSecurity': 'Account Security',
                'systemInformation': 'System Information',
                'support': 'Support',
                'management': 'Management',
                'system': 'System',
                'searchPlaceholder': 'Search tickets, users, IDs...',
                'notificationSettings': 'Notification Settings',
                'notificationDescription': 'Manage how and when you receive notifications',
                'languageSettings': 'Language Settings',
                'languageDescription': 'Set your preferred language for the entire dashboard',
                'themeSettings': 'Theme Settings',
                'themeDescription': 'Customize your dashboard appearance',
                'emailNotifications': 'Email Notifications',
                'emailDescription': 'Receive email alerts for ticket updates and system announcements',
                'pushNotifications': 'Push Notifications',
                'pushDescription': 'Show browser notifications for urgent updates',
                'ticketUpdates': 'Ticket Updates',
                'ticketDescription': 'Notify me when my tickets are updated or resolved',
                'announcementNotifications': 'New Announcements',
                'announcementDescription': 'Notify me about new system announcements and features',
                'weeklyDigest': 'Weekly Digest',
                'weeklyDescription': 'Send weekly summary of all ticket activities',
                'dashboardLanguage': 'Dashboard Language',
                'languageDropdown': 'This will change the language across all pages of your dashboard',
                'themeMode': 'Theme Mode',
                'themeModeDescription': 'Switch between light and dark theme',
                'auto': 'Auto',
                'light': 'Light',
                'dark': 'Dark',
                'resetDefaults': 'Reset to Defaults',
                'savePreferences': 'Save Preferences',
                'footerText': 'Dashboard Template'
            },
            'fil': {
                // COMMON translations used across all pages:
                
                // Page titles
                'dashboard_page_title': 'Admin Dashboard - AlliTrack',
                'system_settings_page_title': 'System Settings - AlliTrack Admin',
                
                // Header/Account
                'search_tickets': 'Maghanap ng mga ticket, user, ID...',
                'search_settings': 'Maghanap ng mga setting...',
                'profile': 'Profile',
                'settings': 'Mga Setting',
                'logout': 'Mag-logout',
                
                // Sidebar Navigation (used across admin pages)
                'admin_dashboard': 'Admin Dashboard',
                'dashboard': 'Dashboard',
                'ticket_management': 'Pamamahala ng Ticket',
                'all_tickets': 'Lahat ng Ticket',
                'ticket_queue': 'Pila ng Ticket',
                'escalated_tickets': 'Mga Na-escalate na Ticket',
                'user_management': 'Pamamahala ng User',
                'users': 'Mga User',
                'support_agents': 'Mga Support Agent',
                'roles_permissions': 'Mga Role at Permissions',
                'analytics': 'Analytics',
                'reports': 'Mga Report',
                'performance': 'Performance',
                'insights': 'Mga Insight',
                'system_admin': 'System Admin',
                'system_settings': 'Mga Setting ng System',
                'announcements': 'Mga Anunsyo',
                'audit_log': 'Audit Log',
                
                // Footer
                'admin_dashboard_template': 'Admin Dashboard Template',
                
                // System Settings Page Specific
                'system_settings_subtitle': 'I-configure ang system-wide na mga setting, kagustuhan, at maintenance operations',
                'general_settings': 'Pangkalahatan',
                'ticket_settings': 'Ticket',
                'notification_settings': 'Abiso',
                'security_settings': 'Seguridad',
                'maintenance': 'Maintenance',
                'advanced_settings': 'Advanced',
                'application_settings': 'Mga Application Setting',
                'application_name': 'Pangalan ng Application',
                'application_name_placeholder': 'Ilagay ang pangalan ng application',
                'application_name_help': 'Display name na ipinapakita sa buong application',
                'timezone': 'Timezone',
                'date_format': 'Format ng Petsa',
                'time_format': 'Format ng Oras',
                '12_hour_format': '12-hour format (AM/PM)',
                '24_hour_format': '24-hour format',
                'localization': 'Localization',
                'default_language': 'Default na Wika',
                'default_language_help': 'Default na wika para sa lahat ng user',
                'appearance': 'Itsura',
                'default_theme': 'Default na Tema',
                'ticket_workflow': 'Ticket Workflow',
                'auto_assign_tickets': 'Auto-assign ng mga ticket',
                'auto_assign_enabled': 'Enabled (Round-robin)',
                'auto_assign_disabled': 'Disabled (Manual assignment)',
                'default_priority': 'Default na Priority',
                'escalation_time': 'Auto-escalation Time',
                'hours': 'oras',
                'escalation_time_help': 'Oras bago i-escalate ang mga hindi nareresolbang ticket',
                'sla_settings': 'Mga SLA Setting',
                'sla_response_time': 'SLA Response Time',
                'sla_resolution_time': 'SLA Resolution Time',
                'sla_notifications': 'Magpadala ng abiso sa SLA violation',
                'ticket_categories': 'Mga Kategorya ng Ticket',
                'default_categories': 'Default na mga Kategorya',
                'add_category_placeholder': 'Magdagdag ng bagong kategorya',
                'add': 'Idagdag',
                'email_notifications': 'Mga Email Abiso',
                'enable_email_notifications': 'Paganahin ang mga email abiso',
                'smtp_server': 'SMTP Server',
                'smtp_port': 'SMTP Port',
                'sender_email': 'Sender Email',
                'smtp_authentication': 'Kinakailangan ang SMTP Authentication',
                'notification_preferences': 'Mga Kagustuhan sa Abiso',
                'notify_new_ticket': 'Abisuhan sa bagong ticket',
                'notify_assignment': 'Abisuhan sa ticket assignment',
                'notify_reply': 'Abisuhan sa ticket reply',
                'notify_escalation': 'Abisuhan sa ticket escalation',
                'notify_sla': 'Abisuhan sa SLA violation',
                'push_notifications': 'Mga Push Abiso',
                'enable_push_notifications': 'Paganahin ang mga push abiso',
                'push_provider': 'Push Notification Provider',
                'api_key': 'API Key',
                'authentication': 'Authentication',
                'password_policy': 'Password Policy',
                'require_complex_password': 'Mangailangan ng complex password',
                'min_password_length': 'Minimum na 8 character',
                'require_numbers': 'Mangailangan ng mga numero',
                'require_symbols': 'Mangailangan ng special characters',
                'session_timeout': 'Session Timeout',
                'minutes': 'minuto',
                'enable_2fa': 'Paganahin ang Two-Factor Authentication',
                'security_policies': 'Mga Security Policy',
                'failed_login_attempts': 'Mga Nabigong Login Attempt',
                'attempts': 'attempts bago lockout',
                'account_lockout': 'Tagal ng Account Lockout',
                'enable_ip_whitelist': 'Paganahin ang IP Whitelist',
                'force_https': 'Pilitin ang HTTPS connections',
                'access_control': 'Access Control',
                'admin_ip_restriction': 'Mga Admin IP Restriction',
                'ip_restriction_placeholder': 'Ilagay ang mga pinapayagang IP address (isang linya bawat isa)',
                'enable_audit_log': 'Paganahin ang audit logging',
                'enable_api_security': 'Paganahin ang API security',
                'database_maintenance': 'Database Maintenance',
                'backup_schedule': 'Backup Schedule',
                'retention_period': 'Retention Period',
                'days': 'araw',
                'enable_auto_backup': 'Paganahin ang automatic backups',
                'backup_now': 'Backup Ngayon',
                'optimize_db': 'I-optimize ang Database',
                'data_retention': 'Data Retention',
                'ticket_retention': 'Ticket Retention Period',
                'ticket_retention_help': 'Ang mga saradong ticket na mas matanda dito ay i-a-archive',
                'log_retention': 'Log Retention Period',
                'user_retention': 'Inactive User Retention',
                'user_retention_help': 'Mga user na hindi active sa loob ng panahong ito ay i-de-deactivate',
                'cleanup_now': 'Mag-run ng Cleanup Ngayon',
                'system_maintenance': 'System Maintenance',
                'enable_maintenance_mode': 'Paganahin ang Maintenance Mode',
                'maintenance_mode_help': 'Makikita ng mga user ang maintenance message',
                'maintenance_message': 'Maintenance Message',
                'maintenance_message_placeholder': 'Ilagay ang maintenance message',
                'auto_system_updates': 'Automatic System Updates',
                'check_updates': 'Maghanap ng mga Update',
                'warning': 'Babala',
                'advanced_settings_warning': 'Para lamang ito sa advanced users. Maaaring magdulot ng system instability ang maling configuration.',
                'api_settings': 'Mga API Setting',
                'api_rate_limit': 'API Rate Limit',
                'requests_per_minute': 'requests/minuto',
                'enable_rest_api': 'Paganahin ang REST API',
                'enable_webhooks': 'Paganahin ang Webhooks',
                'performance_settings': 'Mga Performance Setting',
                'cache_duration': 'Tagal ng Cache',
                'seconds': 'segundo',
                'enable_caching': 'Paganahin ang Response Caching',
                'enable_compression': 'Paganahin ang GZIP Compression',
                'debug_settings': 'Mga Debug Setting',
                'enable_debug_mode': 'Paganahin ang Debug Mode',
                'debug_mode_help': 'Nagpapakita ng detailed error messages (para sa development lamang)',
                'log_level': 'Antas ng Log',
                'view_logs': 'Tingnan ang System Logs',
                'clear_cache': 'I-clear ang Cache',
                'discard_changes': 'Itapon ang mga Pagbabago',
                'save_settings': 'I-save ang mga Setting',
                
                // Admin Dashboard Page Specific
                'system_overview': 'Pangkalahatang-ideya ng System',
                'total_tickets': 'Kabuuang mga Ticket',
                'open_tickets': 'Mga Bukas na Ticket',
                'avg_response_time': 'Average na Response Time',
                'from_last_week': 'mula noong nakaraang linggo',
                'from_yesterday': 'mula kahapon',
                'improvement': 'pagpapabuti',
                'ticket_statistics': 'Mga Istatistika ng Ticket',
                'resolved_tickets': 'Mga Naresolbang Ticket',
                'in_progress_tickets': 'Kasulukuyang Ginagawa',
                'new_tickets': 'Mga Bagong Ticket',
                'admin_actions': 'Mga Admin Action',
                'add_user': 'Magdagdag ng User',
                'create_new_user_account': 'Gumawa ng bagong user account',
                'system_config': 'System Config',
                'configure_system_settings': 'I-configure ang mga system setting',
                'generate_report': 'Gumawa ng Report',
                'create_performance_report': 'Gumawa ng performance report',
                'post_announcement': 'Mag-post ng Anunsyo',
                'broadcast_to_all_users': 'I-broadcast sa lahat ng user',
                'recent_system_activity': 'Kamakailang System Activity',
                'new_admin_added': 'Bagong admin na idinagdag',
                'user_jdoe_added_as_admin': 'User jdoe idinagdag bilang system administrator',
                'ticket_escalated': 'Na-escalate ang ticket',
                'ticket_4872_escalated': 'Ticket #TKT-4872 na-escalate sa Level 2',
                'system_backup_completed': 'Natapos ang system backup',
                'daily_backup_successful': 'Matagumpay na natapos ang daily backup',
                'user_deactivated': 'Na-deactivate ang user',
                'user_inactive_account': 'Na-deactivate ang user account dahil sa inactivity',
                'system_alerts': 'Mga System Alert',
                'high_ticket_volume': 'Mataas na Volume ng Ticket',
                'tickets_exceeding_threshold': 'Lumalampas sa threshold ang mga submission ng ticket',
                'update_available': 'May Available na Update',
                'system_update_v1_3_0': 'System update v1.3.0 available',
                'backup_successful': 'Matagumpay ang Backup',
                'latest_backup_completed': 'Natapos na ang pinakabagong system backup',
                'view': 'Tingnan',
                'update': 'I-update',
                'details': 'Mga Detalye',
                
                // User Dashboard translations (from existing code)
                'pageTitle': 'Mga Kagustuhan - AlliTrack',
                'pageHeader': 'Mga Kagustuhan',
                'successMessage': 'Matagumpay na na-save ang mga kagustuhan!',
                'myTickets': 'Lahat ng Ticket',
                'notifications': 'Notipikasyon',
                'submitTicket': 'Sumite Ticket',
                'preferences': 'Kagustuhan',
                'profileSettings': 'Settings ng Profile',
                'announcements': 'Anunsyo',
                'accountSecurity': 'Seguridad',
                'systemInformation': 'Impormasyon ng Sistema',
                'support': 'Suporta',
                'management': 'Pamahalaan',
                'system': 'Sistema',
                'searchPlaceholder': 'Maghanap ng ticket, user, ID...',
                'notificationSettings': 'Mga Setting ng Notipikasyon',
                'notificationDescription': 'Pamahalaan kung paano at kailan ka makakatanggap ng mga notipikasyon',
                'languageSettings': 'Mga Setting ng Wika',
                'languageDescription': 'Itakda ang iyong gustong wika para sa buong dashboard',
                'themeSettings': 'Mga Setting ng Tema',
                'themeDescription': 'Ipasadya ang hitsura ng iyong dashboard',
                'emailNotifications': 'Notipikasyon sa Email',
                'emailDescription': 'Tumanggap ng email alerts para sa mga update ng ticket at mga anunsyo sa sistema',
                'pushNotifications': 'Notipikasyon sa Browser',
                'pushDescription': 'Magpakita ng browser notifications para sa mga urgent na update',
                'ticketUpdates': 'Update ng Ticket',
                'ticketDescription': 'Ipaalam sa akin kapag ang aking mga ticket ay na-update o na-resolve',
                'announcementNotifications': 'Mga Bagong Anunsyo',
                'announcementDescription': 'Ipaalam sa akin ang tungkol sa mga bagong anunsyo at feature ng sistema',
                'weeklyDigest': 'Weekly Digest',
                'weeklyDescription': 'Magpadala ng lingguhang buod ng lahat ng aktibidad sa ticket',
                'dashboardLanguage': 'Wika ng Dashboard',
                'languageDropdown': 'Ibabago nito ang wika sa lahat ng pahina ng iyong dashboard',
                'themeMode': 'Mode ng Tema',
                'themeModeDescription': 'Pagpalit-palitin sa pagitan ng light at dark theme',
                'auto': 'Awtomatiko',
                'light': 'Maliwanag',
                'dark': 'Madilim',
                'resetDefaults': 'I-reset sa Default',
                'savePreferences': 'I-save ang Kagustuhan',
                'footerText': 'Dashboard'
            }
        };
        
        this.initialized = false;
        
        // Force language refresh when storage changes
        window.addEventListener('storage', (event) => {
            if (event.key === 'dashboardLanguage') {
                console.log('Language changed in storage, forcing refresh...');
                setTimeout(() => this.applyLanguage(), 100);
            }
        });
    }

    async initialize() {
        if (this.initialized) return;
        
        console.log('=== INITIALIZING PREFERENCES MANAGER ===');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            await new Promise(resolve => {
                document.addEventListener('DOMContentLoaded', resolve);
            });
        }
        
        console.log('DOM ready, applying preferences...');
        
        // Apply saved preferences
        this.applyTheme();
        this.applyLanguage();
        
        // Setup preferences page if needed
        if (document.querySelector('.preferences-content')) {
            this.setupPreferencesPage();
        }
        
        // For admin pages, set up common functionality
        this.setupCommonAdminFeatures();
        
        // Listen for preference changes from other tabs/windows
        this.setupStorageListener();
        
        this.initialized = true;
        console.log('Preferences Manager initialized successfully');
    }

    setupCommonAdminFeatures() {
        console.log('Setting up common admin features...');
        
        // Setup account dropdown (for all admin pages)
        this.setupAccountDropdown();
        
        // Setup logout (for all pages)
        this.setupLogout();
        
        // Apply translations to the entire page
        this.applyLanguage();
    }

    setupPreferencesPage() {
        console.log('Setting up preferences page...');
        
        // Load user data using userDataManager if available
        if (window.userDataManager) {
            console.log('Using userDataManager for user display');
            window.userDataManager.initializeUserDisplay();
        }
        
        // Setup preferences form
        this.setupPreferencesForm();
        
        // Setup logout
        this.setupLogout();
        
        // Setup account dropdown
        this.setupAccountDropdown();
    }

    setupPreferencesForm() {
        console.log('Setting up preferences form...');
        
        const preferencesForm = document.getElementById('preferencesForm');
        if (preferencesForm) {
            preferencesForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.savePreferences();
            });
        }
        
        // Load saved preferences
        this.loadPreferencesIntoForm();
        
        // Setup theme options
        this.setupThemeOptions();
        
        // Setup language selector
        this.setupLanguageSelector();
        
        // Setup reset button
        const resetBtn = document.querySelector('.btn-secondary');
        if (resetBtn) {
            resetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.resetPreferences();
            });
        }
    }

    loadPreferencesIntoForm() {
        const savedLanguage = this.getCurrentLanguage();
        const languageSelect = document.getElementById('language');
        if (languageSelect) {
            languageSelect.value = savedLanguage;
        }
        
        // Load notification settings
        const savedNotifications = JSON.parse(localStorage.getItem('notificationSettings') || '{}');
        const emailNotifications = document.getElementById('emailNotifications');
        const pushNotifications = document.getElementById('pushNotifications');
        const ticketUpdates = document.getElementById('ticketUpdates');
        const announcementNotifications = document.getElementById('announcementNotifications');
        const weeklyDigest = document.getElementById('weeklyDigest');
        
        if (emailNotifications) emailNotifications.checked = savedNotifications.email !== false;
        if (pushNotifications) pushNotifications.checked = savedNotifications.push !== false;
        if (ticketUpdates) ticketUpdates.checked = savedNotifications.ticketUpdates !== false;
        if (announcementNotifications) announcementNotifications.checked = savedNotifications.announcements !== false;
        if (weeklyDigest) weeklyDigest.checked = savedNotifications.weeklyDigest || false;
        
        // Load theme preference
        const savedTheme = this.getCurrentTheme();
        this.updateThemeOptions(savedTheme);
    }

    setupLanguageSelector() {
        const languageSelect = document.getElementById('language');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const language = e.target.value;
                console.log('Language changed to:', language);
                this.setLanguage(language);
                
                // Auto-save when language is changed
                if (document.querySelector('.preferences-content')) {
                    this.savePreferences();
                }
            });
        }
    }

    setupThemeOptions() {
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all options
                themeOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                option.classList.add('active');
                
                // Get selected theme
                const theme = option.getAttribute('data-theme');
                
                // Set theme
                this.setTheme(theme);
                
                // Auto-save preferences
                if (document.querySelector('.preferences-content')) {
                    this.savePreferences();
                }
            });
        });
    }

    updateThemeOptions(selectedTheme) {
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            const theme = option.getAttribute('data-theme');
            if (theme === selectedTheme) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    // Theme Management
    getCurrentTheme() {
        return localStorage.getItem('preferredTheme') || 'auto';
    }

    setTheme(theme) {
        if (!['light', 'dark', 'auto'].includes(theme)) {
            console.error('Invalid theme:', theme);
            return;
        }
        
        localStorage.setItem('preferredTheme', theme);
        this.applyTheme();
        
        // Broadcast theme change to all pages
        this.broadcastPreferenceChange('theme', theme);
    }

    applyTheme() {
        const theme = this.getCurrentTheme();
        let themeToApply = theme;
        
        // If theme is 'auto', detect system preference
        if (theme === 'auto') {
            themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        // Remove existing theme classes
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.body.classList.remove('light-theme', 'dark-theme');
        
        // Add the selected theme class
        document.documentElement.classList.add(themeToApply + '-theme');
        document.body.classList.add(themeToApply + '-theme');
        
        // Apply CSS variables
        this.applyThemeVariables(themeToApply);
        
        console.log('Theme applied:', themeToApply);
    }

    applyThemeVariables(theme) {
        const root = document.documentElement;
        
        if (theme === 'dark') {
            // Dark theme variables
            root.style.setProperty('--surface', '#1e293b');
            root.style.setProperty('--text-primary', '#f1f5f9');
            root.style.setProperty('--text-secondary', '#94a3b8');
            root.style.setProperty('--border', '#334155');
            root.style.setProperty('--hover-bg', 'rgba(59, 130, 246, 0.1)');
            root.style.setProperty('--glass', 'rgba(30, 41, 59, 0.85)');
            root.style.setProperty('--sidebar-border', '#334155');
            root.style.setProperty('--bg', 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)');
            
            // Preferences.css specific variables
            root.style.setProperty('--toggle-bg', '#475569');
            root.style.setProperty('--toggle-handle', '#f8fafc');
            root.style.setProperty('--theme-options-bg', '#334155');
            root.style.setProperty('--accent-border', 'rgba(59, 130, 246, 0.3)');
            
            // Force background color
            document.body.style.background = 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)';
        } else {
            // Light theme variables
            root.style.setProperty('--surface', '#ffffff');
            root.style.setProperty('--text-primary', '#0f172a');
            root.style.setProperty('--text-secondary', '#64748b');
            root.style.setProperty('--border', 'rgba(15, 23, 42, 0.1)');
            root.style.setProperty('--hover-bg', 'rgba(59, 130, 246, 0.06)');
            root.style.setProperty('--glass', 'rgba(255, 255, 255, 0.85)');
            root.style.setProperty('--sidebar-border', '#eef2ff');
            root.style.setProperty('--bg', 'linear-gradient(180deg, #f6f9ff 0%, #ffffff 100%)');
            
            // Preferences.css specific variables
            root.style.setProperty('--toggle-bg', '#e2e8f0');
            root.style.setProperty('--toggle-handle', '#ffffff');
            root.style.setProperty('--theme-options-bg', '#f8fafc');
            root.style.setProperty('--accent-border', 'rgba(59, 130, 246, 0.1)');
            
            // Force background color
            document.body.style.background = 'linear-gradient(180deg, #f6f9ff 0%, #ffffff 100%)';
        }
    }

    // Language Management
    getCurrentLanguage() {
        const lang = localStorage.getItem('dashboardLanguage') || 'en';
        console.log('Getting current language:', lang);
        return lang;
    }

    setLanguage(language) {
        if (!['en', 'fil'].includes(language)) {
            console.error('Invalid language:', language);
            return;
        }
        
        console.log('Setting language to:', language);
        localStorage.setItem('dashboardLanguage', language);
        this.applyLanguage();
        
        // Broadcast language change to all pages
        this.broadcastPreferenceChange('language', language);
    }

    applyLanguage() {
        const language = this.getCurrentLanguage();
        console.log('=== APPLYING LANGUAGE ===');
        console.log('Language:', language);
        
        const lang = this.translations[language] || this.translations.en;
        console.log('Translation object found:', lang ? 'YES' : 'NO');
        
        try {
            // Apply translations to ALL elements with data-translate
            this.applyAllTranslations(lang, language);
            
            // Dispatch language changed event for other components to listen to
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: language }
            }));
            console.log('Dispatched languageChanged event for:', language);
            
            console.log('Language applied successfully!');
        } catch (error) {
            console.error('Error applying language:', error);
        }
    }

    applyAllTranslations(lang, language) {
        console.log('=== APPLYING ALL TRANSLATIONS ===');
        
        // Update page title based on current page
        this.updatePageTitle(lang);
        
        // Update ALL translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (lang[key]) {
                element.textContent = lang[key];
            }
        });
        
        // Update ALL placeholder elements
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (lang[key]) {
                element.placeholder = lang[key];
            }
        });
        
        // Special handling for navigation sections
        this.updateNavigationSections(lang);
        
        console.log('=== ALL TRANSLATIONS COMPLETE ===');
    }

    updatePageTitle(lang) {
        // Determine which page we're on and set appropriate title
        const path = window.location.pathname;
        const filename = path.split('/').pop().toLowerCase();
        
        if (filename.includes('system-settings') && lang['system_settings_page_title']) {
            document.title = lang['system_settings_page_title'];
        } else if (filename.includes('index-admin') && lang['dashboard_page_title']) {
            document.title = lang['dashboard_page_title'];
        } else if (filename.includes('preferences') && lang['pageTitle']) {
            document.title = lang['pageTitle'];
        }
    }

    updateNavigationSections(lang) {
        // Map data-section attributes to translation keys
        const sectionMap = {
            'support': 'support',
            'management': 'management',
            'system': 'system'
        };
        
        // Update navigation section headers
        document.querySelectorAll('.nav-section').forEach(element => {
            const section = element.getAttribute('data-translate');
            if (section && lang[section]) {
                element.textContent = lang[section];
            }
        });
    }

    // Cross-tab synchronization
    setupStorageListener() {
        window.addEventListener('storage', (event) => {
            console.log('Storage event:', event.key, '=', event.newValue);
            
            if (event.key === 'dashboardLanguage') {
                console.log('Language changed in another tab:', event.newValue);
                this.applyLanguage();
            }
            
            if (event.key === 'preferredTheme') {
                console.log('Theme changed in another tab:', event.newValue);
                this.applyTheme();
            }
        });
    }

    broadcastPreferenceChange(type, value) {
        // This ensures changes are reflected across tabs
        localStorage.setItem(`pref_${type}_timestamp`, Date.now().toString());
    }

    // Save preferences
    savePreferences() {
        try {
            console.log('Saving preferences...');
            
            // Collect all preference values
            const preferences = {
                notifications: {
                    email: document.getElementById('emailNotifications')?.checked || true,
                    push: document.getElementById('pushNotifications')?.checked || true,
                    ticketUpdates: document.getElementById('ticketUpdates')?.checked || true,
                    announcements: document.getElementById('announcementNotifications')?.checked || true,
                    weeklyDigest: document.getElementById('weeklyDigest')?.checked || false
                },
                language: document.getElementById('language')?.value || 'en',
                theme: document.querySelector('.theme-option.active')?.getAttribute('data-theme') || 'auto'
            };
            
            console.log('Preferences to save:', preferences);
            
            // Save to localStorage
            localStorage.setItem('dashboardLanguage', preferences.language);
            localStorage.setItem('notificationSettings', JSON.stringify(preferences.notifications));
            localStorage.setItem('preferredTheme', preferences.theme);
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.add('show');
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 3000);
            }
            
            console.log('Preferences saved successfully!');
        } catch (error) {
            console.error('Error saving preferences:', error);
        }
    }

    // Reset preferences
    resetPreferences() {
        try {
            console.log('Resetting preferences to defaults...');
            
            // Reset toggles to default
            const emailNotifications = document.getElementById('emailNotifications');
            const pushNotifications = document.getElementById('pushNotifications');
            const ticketUpdates = document.getElementById('ticketUpdates');
            const announcementNotifications = document.getElementById('announcementNotifications');
            const weeklyDigest = document.getElementById('weeklyDigest');
            const languageSelect = document.getElementById('language');
            
            if (emailNotifications) emailNotifications.checked = true;
            if (pushNotifications) pushNotifications.checked = true;
            if (ticketUpdates) ticketUpdates.checked = true;
            if (announcementNotifications) announcementNotifications.checked = true;
            if (weeklyDigest) weeklyDigest.checked = false;
            if (languageSelect) languageSelect.value = 'en';
            
            // Reset theme to auto
            const themeOptions = document.querySelectorAll('.theme-option');
            themeOptions.forEach(option => {
                option.classList.remove('active');
                if (option.getAttribute('data-theme') === 'auto') {
                    option.classList.add('active');
                }
            });
            
            // Save and apply defaults
            this.savePreferences();
            
            console.log('Preferences reset to defaults');
        } catch (error) {
            console.error('Error resetting preferences:', error);
        }
    }

    setupLogout() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Logout clicked');
                
                // Clear user data from localStorage
                localStorage.removeItem('userData');
                localStorage.removeItem('dashboardLanguage');
                localStorage.removeItem('preferredTheme');
                localStorage.removeItem('notificationSettings');
                
                // Redirect to login page
                window.location.href = '../../landing page/pages/index.html';
            });
        }
    }

    setupAccountDropdown() {
        const accountBtn = document.getElementById("accountBtn");
        const accountMenu = document.getElementById("accountMenu");

        if (accountBtn && accountMenu) {
            accountBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                const isExpanded = accountMenu.classList.contains("show");
                accountMenu.classList.toggle("show");
                accountBtn.setAttribute("aria-expanded", !isExpanded);
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", (e) => {
                if (!accountBtn.contains(e.target) && !accountMenu.contains(e.target)) {
                    accountMenu.classList.remove("show");
                    accountBtn.setAttribute("aria-expanded", false);
                }
            });

            // Close dropdown when pressing Escape key
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && accountMenu.classList.contains("show")) {
                    accountMenu.classList.remove("show");
                    accountBtn.setAttribute("aria-expanded", false);
                }
            });
        }
    }
}

// Initialize globally
window.preferencesManager = new PreferencesManager();
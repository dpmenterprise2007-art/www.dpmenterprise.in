// Analytics & Tracking Implementation
class AnalyticsTracker {
    constructor() {
        this.events = [];
        this.init();
    }

    init() {
        this.trackPageView();
        this.trackUserInteractions();
        this.trackScrollDepth();
        this.trackFormSubmissions();
    }

    trackPageView() {
        const pageData = {
            page: window.location.pathname,
            title: document.title,
            timestamp: new Date(),
            referrer: document.referrer
        };
        console.log('📊 Page View:', pageData);
        this.events.push(pageData);
    }

    trackUserInteractions() {
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                const eventData = {
                    type: 'click',
                    element: e.target.tagName,
                    text: e.target.textContent,
                    timestamp: new Date()
                };
                console.log('👆 User Click:', eventData);
                this.events.push(eventData);
            }
        });
    }

    trackScrollDepth() {
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if ([25, 50, 75, 100].includes(Math.round(scrollPercent))) {
                    const scrollData = {
                        type: 'scroll_depth',
                        percentage: Math.round(scrollPercent),
                        timestamp: new Date()
                    };
                    console.log('📈 Scroll Depth:', scrollData);
                    this.events.push(scrollData);
                }
            }
        });
    }

    trackFormSubmissions() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', () => {
                const formData = {
                    type: 'form_submission',
                    formId: form.id || 'unknown',
                    timestamp: new Date()
                };
                console.log('📝 Form Submitted:', formData);
                this.events.push(formData);
            });
        });
    }

    getAnalytics() {
        return {
            totalEvents: this.events.length,
            events: this.events,
            sessionTime: new Date() - window.pageLoadTime || 0
        };
    }
}

// Initialize Analytics
window.pageLoadTime = new Date();
const analytics = new AnalyticsTracker();

// Export analytics for debugging
window.getAnalytics = () => analytics.getAnalytics();

console.log('✅ Analytics & Tracking JS Loaded');
console.log('💡 Tip: Use window.getAnalytics() to view analytics data');

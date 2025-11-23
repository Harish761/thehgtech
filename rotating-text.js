// Rotating text configuration
const rotatingContent = [
    {
        title: "Threat Intelligence",
        subtitle: "1.2M+ live IOCs from 6 trusted vendors, updated hourly with AI-powered analysis"
    },
    {
        title: "CVE Tracking",
        subtitle: "CISA Known Exploited Vulnerabilities with vendor remediation links and zero-day detection"
    },
    {
        title: "AI-Powered Insights",
        subtitle: "Daily threat summaries and weekly strategic analysis powered by GPT-4"
    },
    {
        title: "Real-Time Updates",
        subtitle: "Automated hourly feeds with trend tracking and interactive visualizations"
    }
];

let currentIndex = 0;

function rotateText() {
    const titleEl = document.getElementById('rotatingText');
    const subtextEl = document.getElementById('rotatingSubtext');

    if (!titleEl || !subtextEl) return;

    titleEl.classList.add('rotating-text-fade-out');
    subtextEl.classList.add('rotating-text-fade-out');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % rotatingContent.length;
        titleEl.textContent = rotatingContent[currentIndex].title;
        subtextEl.textContent = rotatingContent[currentIndex].subtitle;

        titleEl.classList.remove('rotating-text-fade-out');
        titleEl.classList.add('rotating-text-fade-in');
        subtextEl.classList.remove('rotating-text-fade-out');
        subtextEl.classList.add('rotating-text-fade-in');

        setTimeout(() => {
            titleEl.classList.remove('rotating-text-fade-in');
            subtextEl.classList.remove('rotating-text-fade-in');
        }, 500);
    }, 500);
}

// Start rotation when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    setInterval(rotateText, 4000);
});

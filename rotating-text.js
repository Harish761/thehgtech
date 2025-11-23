// Rotating text configuration
const rotatingContent = [
    {
        title: "Threat Intelligence",
        subtitle: "Global attack trends, threat vectors, and real-time telemetry powered by TheHGTech"
    },
    {
        title: "Security Research",
        subtitle: "Vulnerability analysis, exploit research, and defensive strategies"
    },
    {
        title: "Automation & Tools",
        subtitle: "Building security tools, scripts, and automation frameworks"
    },
    {
        title: "Threat Hunting",
        subtitle: "Advanced detection techniques and proactive threat discovery"
    }
];

let currentIndex = 0;

function rotateText() {
    const titleEl = document.getElementById('rotatingText');
    const subtextEl = document.getElementById('rotatingSubtext');

    if (!titleEl || !subtextEl) return;

    // Pause glitch effect during transition
    titleEl.classList.add('no-glitch');

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
            // Resume glitch effect after transition completes
            titleEl.classList.remove('no-glitch');
        }, 500);
    }, 500);
}

// Start rotation when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    setInterval(rotateText, 4000);
});

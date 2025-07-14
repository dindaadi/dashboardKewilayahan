document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidebar state
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarToggle = document.getElementById('sidebarToggle');
    let sidebarCollapsed = window.innerWidth <= 768;
    
    // Set initial state
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
        content.classList.add('expanded');
    }
    
    // Toggle sidebar
    sidebarToggle.addEventListener('click', function() {
        sidebarCollapsed = !sidebarCollapsed;
        sidebar.classList.toggle('collapsed', sidebarCollapsed);
        content.classList.toggle('expanded', sidebarCollapsed);
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const shouldCollapse = window.innerWidth <= 768;
        if (shouldCollapse !== sidebarCollapsed) {
            sidebarCollapsed = shouldCollapse;
            sidebar.classList.toggle('collapsed', sidebarCollapsed);
            content.classList.toggle('expanded', sidebarCollapsed);
        }
    });
    
    // Initialize charts if data is available
    if (typeof window.dashboardData !== 'undefined') {
        initializeCharts();
    }
    
    // Animate cards on load
    animateCards();
    
    // Add hover effects for big numbers
    setupHoverEffects();
});

function initializeCharts() {
    // Gini Rasio Chart
    const giniCtx = document.getElementById('giniChart');
    if (giniCtx && window.dashboardData?.gini_rasio?.chart_data) {
        createBarChart(giniCtx, window.dashboardData.gini_rasio.chart_data, {
            max: 0.5,
            color: 'rgba(79, 172, 254, 0.8)'
        });
    }

    // Pengangguran Chart
    const pengangguranCtx = document.getElementById('pengangguranChart');
    if (pengangguranCtx && window.dashboardData?.pengangguran?.chart_data) {
        createBarChart(pengangguranCtx, window.dashboardData.pengangguran.chart_data, {
            max: 3.5,
            color: 'rgba(79, 172, 254, 0.8)'
        });
    }
}

function createBarChart(ctx, chartData, options = {}) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.map(item => item.label),
            datasets: [{
                data: chartData.map(item => item.value),
                backgroundColor: Array(chartData.length).fill(options.color || 'rgba(79, 172, 254, 0.8)'),
                borderColor: Array(chartData.length).fill('rgba(79, 172, 254, 1)'),
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: options.max,
                    ticks: {
                        color: 'white',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                },
                x: {
                    ticks: {
                        color: 'white',
                        font: { size: 10 }
                    },
                    grid: { display: false }
                }
            }
        }
    });
}

function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 100);
    });
}

function setupHoverEffects() {
    const bigNumbers = document.querySelectorAll('.big-number');
    
    bigNumbers.forEach(number => {
        number.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        number.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Utility function to update chart data
function updateChartData(chartId, newData) {
    const chart = Chart.getChart(chartId);
    if (chart) {
        chart.data.datasets[0].data = newData.map(item => item.value);
        chart.data.labels = newData.map(item => item.label);
        chart.update();
    }
}

// Function to update card metrics
function updateCardMetrics(cardType, target, realisasi) {
    const card = document.querySelector(`[data-card-type="${cardType}"]`);
    if (card) {
        const targetElement = card.querySelector('.metric:first-child .metric-value');
        const realisasiElement = card.querySelector('.metric:last-child .metric-value');
        
        if (targetElement) targetElement.textContent = target;
        if (realisasiElement) realisasiElement.textContent = realisasi;
    }
}
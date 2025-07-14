// Map JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
});

function initializeMap() {
    // Initialize the map
    const map = L.map('indonesiaMap', {
        center: [-2.5, 118.0],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: true
    });
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Indonesia provinces data with Gini ratio values
    const provincesData = [
        {
            name: "DKI Jakarta",
            center: [-6.2088, 106.8456],
            giniRatio: 0.43,
            color: "#d73027"
        },
        {
            name: "Jawa Barat",
            center: [-6.9175, 107.6191],
            giniRatio: 0.41,
            color: "#f46d43"
        },
        {
            name: "Jawa Tengah",
            center: [-7.2504, 110.1755],
            giniRatio: 0.37,
            color: "#fdae61"
        },
        {
            name: "Jawa Timur",
            center: [-7.5360, 112.2384],
            giniRatio: 0.35,
            color: "#fee08b"
        },
        {
            name: "Banten",
            center: [-6.4058, 106.0640],
            giniRatio: 0.39,
            color: "#fee08b"
        },
        {
            name: "DI Yogyakarta",
            center: [-7.8753, 110.4262],
            giniRatio: 0.42,
            color: "#f46d43"
        },
        {
            name: "Bali",
            center: [-8.4095, 115.1889],
            giniRatio: 0.35,
            color: "#e6f598"
        },
        {
            name: "Nusa Tenggara Barat",
            center: [-8.6529, 117.3616],
            giniRatio: 0.34,
            color: "#e6f598"
        },
        {
            name: "Nusa Tenggara Timur",
            center: [-8.6574, 121.0794],
            giniRatio: 0.33,
            color: "#e6f598"
        },
        {
            name: "Kalimantan Barat",
            center: [-0.2787, 111.4752],
            giniRatio: 0.33,
            color: "#e6f598"
        },
        {
            name: "Kalimantan Tengah",
            center: [-1.6815, 113.3824],
            giniRatio: 0.32,
            color: "#d9ef8b"
        },
        {
            name: "Kalimantan Selatan",
            center: [-3.0926, 115.2838],
            giniRatio: 0.34,
            color: "#e6f598"
        },
        {
            name: "Kalimantan Timur",
            center: [0.7893, 113.9213],
            giniRatio: 0.36,
            color: "#fee08b"
        },
        {
            name: "Kalimantan Utara",
            center: [2.7200, 116.9719],
            giniRatio: 0.31,
            color: "#d9ef8b"
        },
        {
            name: "Sulawesi Utara",
            center: [0.6246, 123.9750],
            giniRatio: 0.38,
            color: "#fdae61"
        },
        {
            name: "Sulawesi Tengah",
            center: [-1.4300, 121.4456],
            giniRatio: 0.35,
            color: "#e6f598"
        },
        {
            name: "Sulawesi Selatan",
            center: [-3.6687, 119.9740],
            giniRatio: 0.37,
            color: "#fdae61"
        },
        {
            name: "Sulawesi Tenggara",
            center: [-4.1420, 122.1748],
            giniRatio: 0.33,
            color: "#e6f598"
        },
        {
            name: "Gorontalo",
            center: [0.6999, 122.4467],
            giniRatio: 0.36,
            color: "#fee08b"
        },
        {
            name: "Sulawesi Barat",
            center: [-2.8441, 119.2320],
            giniRatio: 0.32,
            color: "#d9ef8b"
        },
        {
            name: "Sumatera Utara",
            center: [2.1154, 99.5451],
            giniRatio: 0.33,
            color: "#e6f598"
        },
        {
            name: "Sumatera Barat",
            center: [-0.7399, 100.8000],
            giniRatio: 0.31,
            color: "#d9ef8b"
        },
        {
            name: "Riau",
            center: [0.2933, 101.7068],
            giniRatio: 0.34,
            color: "#e6f598"
        },
        {
            name: "Jambi",
            center: [-1.4852, 103.6115],
            giniRatio: 0.33,
            color: "#e6f598"
        },
        {
            name: "Sumatera Selatan",
            center: [-3.3194, 103.9140],
            giniRatio: 0.35,
            color: "#e6f598"
        },
        {
            name: "Bengkulu",
            center: [-3.8004, 102.2655],
            giniRatio: 0.32,
            color: "#d9ef8b"
        },
        {
            name: "Lampung",
            center: [-4.5585, 105.4068],
            giniRatio: 0.34,
            color: "#e6f598"
        },
        {
            name: "Kepulauan Bangka Belitung",
            center: [-2.7410, 106.4405],
            giniRatio: 0.30,
            color: "#d9ef8b"
        },
        {
            name: "Kepulauan Riau",
            center: [3.9457, 108.1429],
            giniRatio: 0.35,
            color: "#e6f598"
        },
        {
            name: "Aceh",
            center: [4.6951, 96.7494],
            giniRatio: 0.32,
            color: "#d9ef8b"
        },
        {
            name: "Maluku",
            center: [-3.2385, 130.1453],
            giniRatio: 0.33,
            color: "#e6f598"
        },
        {
            name: "Maluku Utara",
            center: [1.5709, 127.8088],
            giniRatio: 0.31,
            color: "#d9ef8b"
        },
        {
            name: "Papua",
            center: [-4.2699, 138.0804],
            giniRatio: 0.42,
            color: "#f46d43"
        },
        {
            name: "Papua Barat",
            center: [-1.3361, 133.1747],
            giniRatio: 0.38,
            color: "#fdae61"
        },
        {
            name: "Papua Selatan",
            center: [-6.0800, 140.7000],
            giniRatio: 0.36,
            color: "#fee08b"
        },
        {
            name: "Papua Tengah",
            center: [-3.3500, 136.6000],
            giniRatio: 0.35,
            color: "#e6f598"
        },
        {
            name: "Papua Pegunungan",
            center: [-4.0000, 138.5000],
            giniRatio: 0.37,
            color: "#fdae61"
        },
        {
            name: "Papua Barat Daya",
            center: [-1.8500, 132.0000],
            giniRatio: 0.425,
            color: "#f46d43"
        }
    ];
    
    // Add markers for each province
    provincesData.forEach(province => {
        const marker = L.circleMarker(province.center, {
            radius: 8,
            fillColor: province.color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);
        
        // Add popup with province info
        marker.bindPopup(`
            <div style="font-family: Arial, sans-serif;">
                <h6 style="margin: 0 0 10px 0; font-weight: bold;">${province.name}</h6>
                <p style="margin: 0; font-size: 14px;">
                    <strong>Rasio Gini:</strong> ${province.giniRatio.toFixed(3)}
                </p>
            </div>
        `);
        
        // Add hover effect
        marker.on('mouseover', function(e) {
            this.openPopup();
        });
    });
    
    // Add legend
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42];
        const colors = ['#d9ef8b', '#e6f598', '#fee08b', '#fdae61', '#f46d43', '#d73027', '#a50026'];
        
        div.innerHTML = '<h6 style="margin: 0 0 10px 0; font-weight: bold;">Rasio Gini</h6>';
        
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + colors[i] + '; width: 18px; height: 18px; display: inline-block; margin-right: 8px;"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        
        return div;
    };
    
    legend.addTo(map);
    
    // Add custom CSS for legend
    const style = document.createElement('style');
    style.textContent = `
        .legend {
            line-height: 18px;
            color: #555;
            background: white;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .legend i {
            width: 18px;
            height: 18px;
            float: left;
            margin-right: 8px;
            opacity: 0.8;
        }
        .leaflet-popup-content-wrapper {
            border-radius: 8px;
        }
        .leaflet-popup-content {
            margin: 10px 15px;
        }
    `;
    document.head.appendChild(style);
    
    // Fit map to Indonesia bounds
    const indonesiaBounds = [
        [-11.0, 95.0],  // Southwest
        [6.0, 141.0]    // Northeast
    ];
    map.fitBounds(indonesiaBounds);
    
    // Add attribution
    map.attributionControl.setPrefix('');
    
    return map;
}

// Function to update map data
function updateMapData(newData) {
    // This function can be used to update the map with new data
    console.log('Updating map with new data:', newData);
}

// Function to get color based on value
function getColor(value) {
    return value > 0.42 ? '#a50026' :
           value > 0.40 ? '#d73027' :
           value > 0.38 ? '#f46d43' :
           value > 0.36 ? '#fdae61' :
           value > 0.34 ? '#fee08b' :
           value > 0.32 ? '#e6f598' :
           '#d9ef8b';
}

// Export functions for global use
window.mapFunctions = {
    updateMapData: updateMapData,
    getColor: getColor
};
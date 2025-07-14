from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Sample data based on the images
dashboard_data = {
    "pertumbuhan_ekonomi": {
        "title": "Pertumbuhan Ekonomi",
        "target": 5.20,
        "realisasi": 4.8,
        "unit": "%",
        "province": "Papua Barat Daya",
        "big_number": 4.8,
        "status": "below" # below target
    },
    "gini_rasio": {
        "title": "Gini Rasio",
        "target": 0.375,
        "realisasi": 0.381,
        "unit": "",
        "province": "Papua Barat Daya",
        "big_number": 0.381,
        "status": "above", # above target (worse)
        "chart_data": [
            {"label": "DKI", "value": 0.449},
            {"label": "Jawa Barat", "value": 0.431},
            {"label": "Jawa Timur", "value": 0.425},
            {"label": "Sumatera", "value": 0.417},
            {"label": "Jawa Tengah", "value": 0.367}
        ]
    },
    "kemiskinan": {
        "title": "Kemiskinan",
        "target": 6.5,
        "realisasi": 8.57,
        "unit": "%",
        "province": "Bali",
        "big_number": 4.25,
        "status": "above" # above target (worse)
    },
    "pengangguran": {
        "title": "Pengangguran",
        "target": 5.3,
        "realisasi": 5.3,
        "unit": "%",
        "province": "Papua Barat Daya",
        "big_number": 5.3,
        "status": "equal",
        "chart_data": [
            {"label": "Jawa Barat", "value": 2.27},
            {"label": "Papua", "value": 2.67},
            {"label": "Bali", "value": 2.69},
            {"label": "NTB", "value": 2.80},
            {"label": "Jawa Tengah", "value": 2.95}
        ]
    },
    "ipm": {
        "title": "IPM",
        "target": 5.3,
        "realisasi": 5.3,
        "unit": "%",
        "province": "Papua Barat Daya",
        "big_number": 4.8,
        "status": "equal"
    }
}
# Data untuk peta (simulasi data per provinsi)
provinces_data = {
    "DKI Jakarta": {"gini": 0.42, "kemiskinan": 3.5, "pengangguran": 8.2},
    "Jawa Barat": {"gini": 0.39, "kemiskinan": 7.8, "pengangguran": 9.1},
    "Jawa Tengah": {"gini": 0.35, "kemiskinan": 10.5, "pengangguran": 5.8},
    "Jawa Timur": {"gini": 0.33, "kemiskinan": 10.2, "pengangguran": 4.9},
    "Bali": {"gini": 0.36, "kemiskinan": 4.1, "pengangguran": 2.8},
    "Sumatera Utara": {"gini": 0.32, "kemiskinan": 8.7, "pengangguran": 6.2},
    "Sumatera Barat": {"gini": 0.31, "kemiskinan": 6.5, "pengangguran": 6.8},
    "Kalimantan Timur": {"gini": 0.34, "kemiskinan": 5.9, "pengangguran": 7.3},
    "Sulawesi Selatan": {"gini": 0.40, "kemiskinan": 8.8, "pengangguran": 5.4},
    "Papua": {"gini": 0.41, "kemiskinan": 26.8, "pengangguran": 3.2},
    "Papua Barat": {"gini": 0.39, "kemiskinan": 20.1, "pengangguran": 6.1},
    "Nusa Tenggara Timur": {"gini": 0.32, "kemiskinan": 21.0, "pengangguran": 3.0},
    "Nusa Tenggara Barat": {"gini": 0.35, "kemiskinan": 14.6, "pengangguran": 4.5}
}

@app.route('/')
def dashboard():
    return render_template('dashboard.html', data=dashboard_data)

@app.route('/api/dashboard-data')
def get_dashboard_data():
    return jsonify(dashboard_data)

@app.route('/api/provinces-data')
def get_provinces_data():
    return jsonify(provinces_data)

@app.route('/api/chart-data/<region>')
def get_chart_data(region):
    if region in dashboard_data['wilayah']:
        return jsonify({
            'labels': ['2019', '2020', '2021', '2022', '2023'],
            'data': dashboard_data['wilayah'][region]['chart_data']
        })
    return jsonify({'error': 'Region not found'})

if __name__ == '__main__':
    app.run(debug=True)
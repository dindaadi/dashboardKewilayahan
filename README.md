# Dashboard Kewilayahan Indonesia

Dashboard interaktif untuk memantau indikator kewilayahan Indonesia, termasuk pertumbuhan ekonomi, rasio gini, tingkat kemiskinan, pengangguran, dan IPM.

## Fitur Utama

- **Dashboard Responsif**: Menampilkan KPI utama dengan visualisasi yang menarik
- **Visualisasi Chart**: Menggunakan Chart.js untuk grafik interaktif
- **Peta Interaktif**: Peta Indonesia dengan Leaflet.js dan data GeoJSON
- **Data Real-time**: API endpoints untuk mengambil data terbaru
- **Mobile-Friendly**: Responsive design yang optimal di semua perangkat

## Teknologi yang Digunakan

### Backend
- **Flask**: Framework web Python
- **Flask-CORS**: Untuk menangani Cross-Origin Resource Sharing

### Frontend
- **HTML5 & CSS3**: Struktur dan styling dasar
- **Bootstrap 5**: Framework CSS untuk UI components
- **Chart.js**: Library untuk visualisasi data
- **Leaflet.js**: Library untuk peta interaktif
- **Font Awesome**: Icon library

### Data Visualization
- **Chart.js**: Bar charts, line charts, pie charts
- **Leaflet.js**: Interactive maps dengan GeoJSON
- **Bootstrap Cards**: KPI dan metric cards

## Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd dashboard_kewilayahan
```

2. Buat virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# atau
venv\Scripts\activate     # Windows
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Jalankan aplikasi:
```bash
python app.py
```

5. Buka browser dan akses `http://localhost:5000`

## Struktur Folder

```
dashboard_kewilayahan/
├── app.py                 # Flask application utama
├── requirements.txt       # Python dependencies
├── static/
│   ├── css/
│   │   └── style.css     # Custom CSS styling
│   ├── js/
│   │   ├── dashboard.js  # JavaScript untuk charts dan interaksi
│   │   └── map.js        # JavaScript untuk peta Leaflet
│   └── data/
│       └── indonesia.geojson  # Data geografis Indonesia
├── templates/
│   ├── base.html         # Template base
│   └── dashboard.html    # Template dashboard utama
└── README.md            # Dokumentasi
```

## API Endpoints

### GET /
- **Deskripsi**: Halaman dashboard utama
- **Response**: HTML template dengan data dashboard

### GET /api/dashboard-data
- **Deskripsi**: Mengambil semua data dashboard
- **Response**: JSON dengan data nasional dan regional

### GET /api/regional-data/<region>
- **Deskripsi**: Mengambil data spesifik untuk region tertentu
- **Parameter**: region (string) - nama region
- **Response**: JSON dengan data regional

## Kustomisasi

### Menambah Data Regional
Edit bagian `dashboard_data` di `app.py`:
```python
"regional": {
    "nama_region_baru": {
        "nama": "Nama Region Baru",
        "pertumbuhan_ekonomi": 4.5,
        "data_bulanan": [...]
    }
}
```

### Menambah Chart Baru
1. Tambahkan canvas element di `dashboard.html`
2. Implementasikan chart di `dashboard.js`
3. Styling di `style.css`

### Kustomisasi Peta
Edit data GeoJSON di `map.js` untuk menambah atau memodifikasi data geografis.

## Komponen Dashboard

### 1. KPI Cards
- Pertumbuhan Ekonomi
- Rasio Gini
- Tingkat Kemiskinan
- Tingkat Pengangguran
- Indeks Pembangunan Manusia (IPM)

### 2. Regional Charts
- Chart pertumbuhan ekonomi per region
- Data bulanan dengan visualisasi bar chart
- Interaktif dengan hover effects

### 3. Peta Interaktif
- Peta Indonesia dengan data rasio gini
- Color-coded berdasarkan nilai indikator
- Popup dengan detail informasi
- Legend dan kontrol peta

### 4. Responsive Design
- Mobile-first approach
- Breakpoints untuk tablet dan desktop
- Flexible grid layout

## Pengembangan Lebih Lanjut

### Fitur yang Bisa Ditambahkan:
1. **Database Integration**: Koneksi ke database untuk data real-time
2. **User Authentication**: Login system untuk admin
3. **Data Export**: Export data ke Excel/PDF
4. **Advanced Filtering**: Filter berdasarkan waktu, region, dll.
5. **Real-time Updates**: WebSocket untuk update data real-time
6. **Mobile App**: Progressive Web App (PWA) support

### Optimisasi Performance:
1. **Caching**: Implementasi Redis untuk caching data
2. **Lazy Loading**: Lazy load untuk charts dan peta
3. **CDN**: Gunakan CDN untuk static assets
4. **Compression**: Gzip compression untuk response

## Troubleshooting

### Error Common:
1. **Port sudah digunakan**: Ubah port di `app.py`
2. **Module not found**: Pastikan virtual environment aktif
3. **Chart tidak tampil**: Periksa console browser untuk error JavaScript
4. **Peta tidak load**: Pastikan koneksi internet untuk tile maps

### Development Tips:
1. Gunakan browser dev tools untuk debugging
2. Check console untuk error JavaScript
3. Gunakan Flask debug mode untuk development
4. Test di berbagai ukuran layar

## Kontribusi

1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push ke branch
5. Create Pull Request

## Lisensi

MIT License - Lihat file LICENSE untuk detail.

## Kontak

Untuk pertanyaan atau saran, silakan hubungi tim development.
from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route('/')
def dashboard():
    with open('data/pertumbuhan_ekonomi.json') as f:
        data = json.load(f)
    return render_template('dashboard.html', data=data)

@app.route('/trending')
def trending():
    with open('data/trending_issue.json') as f:
        data = json.load(f)
    return render_template('trending.html', data=data)

@app.route('/potensi')
def potensi():
    with open('data/potensi_daerah.json') as f:
        data = json.load(f)
    return render_template('potensi.html', data=data)

@app.route('/kopi')
def kopi():
    with open('data/kopi_toraja.json') as f:
        data = json.load(f)
    return render_template('kopi.html', data=data)

@app.route('/geojson')
def geojson():
    with open('data/map.geojson') as f:
        geojson = json.load(f)
    return jsonify(geojson)

if __name__ == '__main__':
    app.run(debug=True)

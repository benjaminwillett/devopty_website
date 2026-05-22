from __future__ import annotations

from pathlib import Path

from flask import Flask, jsonify


BASE_DIR = Path(__file__).resolve().parent


app = Flask(__name__, static_folder=str(BASE_DIR), static_url_path="")


@app.get("/")
def home():
    return app.send_static_file("index.html")


@app.get("/health")
def health():
    return jsonify({"status": "ok", "site": "DEVOPTY", "mode": "flask-static"}), 200


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5080, debug=True)
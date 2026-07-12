import urllib.request
import urllib.error

url = "https://www.entraenmicarta.es/local/75ozvrofs3?no_image=1"
req = urllib.request.Request(
    url, 
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.9',
        'Connection': 'keep-alive'
    }
)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read()
        with open("menu.html", "wb") as f:
            f.write(html)
        print("Done, length:", len(html))
except Exception as e:
    print("Error:", e)

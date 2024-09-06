// pages/api/word.js
export default function handler(req, res) {
    // CORS başlıklarını ekle
    res.setHeader('Access-Control-Allow-Origin', '*'); // Her yerden erişime izin verir
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // GET ve OPTIONS yöntemlerine izin verir
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Hangi başlıkların kullanılabileceğine izin verir
  
    if (req.method === 'OPTIONS') {
      // OPTIONS isteklerine hızlı bir yanıt ver
      res.status(200).end();
      return;
    }
  
    if (req.method === 'GET') {
      res.status(200).json({
        "words": [
          "ağaç", "ev", "okul", "araba", "bilgisayar", "kitap", "telefon", "kalem", "defter", "masa",
          "sandaly", "kapı", "pencere", "yatak", "çanta", "ayakkabı", "elma", "portakal", "muz", "sebze",
          "meyve", "gözlük", "şapka", "cüzdan", "saat", "anahtar", "sofra", "tabak", "bardak", "çatal",
          "bıçak", "kaşık", "peynir", "zeytin", "süt", "ekmek", "börek", "çorba", "yemek", "su", "çay",
          "kahve", "dondurma", "şeker", "tatlı", "karnıbahar", "brokoli", "domates", "salata", "kola",
          "bira", "şarap", "tatlı", "yaz", "kış", "bahar", "sonbahar", "güneş", "yağmur", "kar",
          "rüzgar", "bulut", "deniz", "göl", "dağ", "ormanın", "park", "sokak", "cadde", "şehir",
          "köy", "ev", "apartman", "yol", "köprü", "tünel", "trafi", "gece", "gündüz", "sabah",
          "akşam", "öğlen", "büyüklük", "küçüklük", "uzunluk", "kısalık", "yükseklik", "alçaklık"
        ]
      });
    } else {
      res.setHeader('Allow', ['GET', 'OPTIONS']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
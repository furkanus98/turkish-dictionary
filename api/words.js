// pages/api/words.js
export default function handler(req, res) {
    const clientKey = process.env.CLIENT_KEY; // Çevresel değişkenden API anahtarını al
  
    // CORS başlıklarını ekleyin
    res.setHeader('Access-Control-Allow-Origin', '*'); // Tüm alan adlarından erişime izin ver
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // İzin verilen HTTP yöntemleri
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key'); // İzin verilen başlıklar
   
    if (req.method === 'OPTIONS') {
      // Preflight isteği için cevap ver
      res.status(200).end();
      return;
    }
  
    if (req.method === 'GET') {
      // API anahtarını doğrulama
      const requestKey = req.headers['x-api-key']; // API anahtarını istekten al
      if (requestKey !== clientKey) {
        return res.status(401).json({ message: 'Unauthorized' }); // Anahtar doğrulama başarısızsa
      }
  
      // API yanıtını döndür
      res.status(200).json({
        "words": [
          "ağaç", "ev", "okul", "araba", "bilgisayar",
          "kitap", "telefon", "kalem", "defter", "masa",
          "sandaly", "kapı", "pencere", "yatak", "çanta",
          "ayakkabı", "elma", "portakal", "muz", "sebze",
          "meyve", "gözlük", "şapka", "cüzdan", "saat",
          "anahtar", "sofra", "tabak", "bardak", "çatal",
          "bıçak", "kaşık", "peynir", "zeytin", "süt",
          "ekmek", "börek", "çorba", "yemek", "su",
          "çay", "kahve", "dondurma", "şeker", "tatlı",
          "karnıbahar", "brokoli", "domates", "salata", "kola",
          "bira", "şarap", "yaz", "kış", "bahar",
          "sonbahar", "güneş", "yağmur", "kar", "rüzgar",
          "bulut", "deniz", "göl", "dağ", "ormanın",
          "park", "sokak", "cadde", "şehir", "köy",
          "ev", "apartman", "yol", "köprü", "tünel",
          "trafik", "gece", "gündüz", "sabah", "akşam",
          "öğlen", "büyüklük", "küçüklük", "uzunluk", "kısalık",
          "yükseklik", "alçaklık"
        ]
      });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
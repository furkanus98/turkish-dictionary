export default function handler(req, res) {
  if (req.method === 'GET') {
      // Sorgu parametrelerini al
      const { number } = req.query;
      const numberOfWords = parseInt(number, 25) || 25; // Varsayılan olarak 10 kelime döndür

      // Kelime listesi
      const words = [
          "ağaç", "ev", "okul", "araba", "bilgisayar", "kitap", "telefon", "kalem", "defter", "masa",
          "sandaly", "kapı", "pencere", "yatak", "çanta", "ayakkabı", "elma", "portakal", "muz", "sebze",
          "meyve", "gözlük", "şapka", "cüzdan", "saat", "anahtar", "sofra", "tabak", "bardak", "çatal",
          "bıçak", "kaşık", "peynir", "zeytin", "süt", "ekmek", "börek", "çorba", "yemek", "su",
          "çay", "kahve", "dondurma", "şeker", "tatlı", "karnıbahar", "brokoli", "domates", "salata",
          "kola", "bira", "şarap", "tatlı", "yaz", "kış", "bahar", "sonbahar", "güneş", "yağmur",
          "kar", "rüzgar", "bulut", "deniz", "göl", "dağ", "ormanın", "park", "sokak", "cadde",
          "şehir", "köy", "ev", "apartman", "yol", "köprü", "tünel", "trafi", "gece", "gündüz",
          "sabah", "akşam", "öğlen", "büyüklük", "küçüklük", "uzunluk", "kısalık", "yükseklik", "alçaklık"
      ];

      // Sorgu parametresine göre kelimeleri seç
      const selectedWords = words.slice(0, numberOfWords);

      // Yanıtı gönder
      res.status(200).json({ words: selectedWords });
  } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

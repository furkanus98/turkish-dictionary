export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({
        words: [
          "abreact",
          "abreacted",
          "abreacting",
          "abreaction",
          "abreactions",
          "abreacts",
          "abreast",
        ]
      });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
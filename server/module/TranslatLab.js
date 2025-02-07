import translatte from "translatte"

const TranslatLab =  async (req, res) => {
    const { text} = req.body;
  
    if (!text) {
      return res.status(400).json({ error: 'Text and target language (to) are required' });
    }
  
    try {
      const result = await translatte(text, {to:"de" });
      res.json({ translation: result.text });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to translate text' });
    }
  }
  export default TranslatLab 
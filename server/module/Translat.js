import OpenAI from "openai";
import 'dotenv/config'
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
  });
console.log(process.env.OPENAI_KEY)
const Translate = async (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
  
    try {
      // Use OpenAI's GPT model to translate from Arabic to German
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini', // or 'gpt-3.5-turbo'
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that translates Arabic text to German.',
          },
          {
            role:"",
            content: `Translate the following Arabic text to German: "${text}"`,
          },
        ],
      });
  
      // Extract the translated text
      const translatedText = response.choices[0].message.content;
      res.json({ translation: translatedText });
    } catch (error) {
      console.error('Error translating text:', error);
      res.status(500).json({ error: 'Failed to translate text' });
    }
  }
  export default Translate
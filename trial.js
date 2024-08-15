// import * as dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// dotenv.config();

const apiKey = 'AIzaSyAPU2Fg5Tnqxmylg7Vuj0VaYldbeg4E3QM';
const genAI = new GoogleGenerativeAI(apiKey);
async function main() {
    let model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        // Set the `responseMimeType` to output JSON
        generationConfig: { responseMimeType: "application/json" }
      });
      
      let prompt = `
      give me the json form where each object has attributes like id,date even name,even desc extracting from  the following linesso as to make a timeline:10th august product development commences 10th sept it ends 15th sept marketing begins 30th sept product launch
      
      if we dont have event_desc can you put some details based on even name in one line in event desc
      `;
      
      let result = await model.generateContent(prompt)
      console.log(result.response.text());
}

main();
//   const response = await model.generate(prompt);
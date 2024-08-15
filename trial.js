// import * as dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { log } from 'console';

// dotenv.config();

const apiKey = process.env.GOOGLE_GEMINI_AI_API_KEY;
console.log(apiKey);
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
      Be whatever the input i want the output in arrays of object form like this:
      [{
        id:,date:,event_name:,event_desc:
      },
        {id:,date:,event_name:,event_desc:},...]
      `;
      
      let result = await model.generateContent(prompt)
      console.log(result.response.text());
}

main();
//   const response = await model.generate(prompt);
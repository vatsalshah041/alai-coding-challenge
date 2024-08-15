import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";
import './input.css';
import { useState } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function TldrawComponent() {
  interface TimelineEvent {
    id: number;
    date: string;
    event_name: string;
    eventDesc?: string; // optional property if eventDesc might not always be present
  }
  
// const apiKey = process.env.GOOGLE_GEMINI_AI_API_KEY;
const apiKey='AIzaSyAPU2Fg5Tnqxmylg7Vuj0VaYldbeg4E3QM';
const genAI = new GoogleGenerativeAI(apiKey);
const submitinput=()=>{
  async function main() {
    let model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        // Set the `responseMimeType` to output JSON
        generationConfig: { responseMimeType: "application/json" }
      });
      
      let prompt = `
      give me the json form where each object has attributes like id,date even name,even desc extracting from  the following linesso as to make a timeline:
      `+`${inputvalue}`+`
      if we dont have event_desc can you put some details based on even name in one line in event desc
      `;
      
      let result = await model.generateContent(prompt)
      console.log(result.response.text());
      console.log((result.response.text())[0])
      if((JSON.parse(result.response.text()))[0]){
        console.log('seedha seedha agaya')
        setTimeData(JSON.parse(result.response.text()))

      }
      else{
          const k=Object.keys(JSON.parse(result.response.text()));
          console.log('traas:',k);
          
          setTimeData(JSON.parse(result.response.text())[k[0]]);
          
      }
      
      setLoading(true);

}

main();
}
  const [loading, setLoading] = useState(false);
  const [inputvalue,setInputValue] = useState('');
  const [timedata, setTimeData] = useState<TimelineEvent[]>([]);

  // const timedata = [
  //   {
  //     "id": 1,
  //     "date": "2024-04-10",
  //     "event_name": "User Research ",
  //     "eventDesc": "Finalize user research highlighting the need for a social feature that allows users to share their health achievements with friends within the app."
  //   },
  //   {
  //     "id": 2,
  //     "date": "2024-05-05",
  //     "event_name": "Design and Prototyping",
  //     "eventDesc": "Design user interfaces for the social sharing feature, focusing on ease of use and integration with existing app functionalities."
  //   },
  //   {
  //     "id": 3,
  //     "date": "2024-06-01",
  //     "event_name": "Development starts",
  //     "eventDesc": "Start development, prioritizing core functionalities such as posting updates, friend interactions, and privacy settings."
  //   },
  //   {
  //     "id": 4,
  //     "date": "2024-07-25",
  //     "event_name": "Internal Testing ",
  //     "eventDesc": "Begin internal testing to identify bugs and usability issues. Iterate on the feature based on feedback, refining the UI/UX and ensuring seamless integration with the app's existing features."
  //   },
  //   {
  //     "id": 5,
  //     "date": "2024-08-20",
  //     "event_name": "Beta Release ",
  //     "eventDesc": "Release the feature to beta testers, a select group of existing users who have opted in for early access."
  //   },
  //   {
  //     "id": 6,
  //     "date": "2024-09-30",
  //     "event_name": "Public Launch",
  //     "eventDesc": "Incorporate feedback from the beta release and finalize the feature for public launch."
  //   }
  // ];
  // const timedata = [
  //   {
  //     id: 1,
  //     date: "10th August",
  //     event_name: "Product Development Commences",
  //     event_desc: "Product development begins.",
  //   },
  //   {
  //     id: 2,
  //     date: "10th September",
  //     event_name: "Product Development Ends",
  //     event_desc: "Product development phase concludes.",
  //   },
  //   {
  //     id: 3,
  //     date: "15th September",
  //     event_name: "Marketing Begins",
  //     event_desc: "Marketing efforts kick off.",
  //   },
  //   {
  //     id: 4,
  //     date: "30th September",
  //     event_name: "Product Launch",
  //     event_desc: "The product is officially launched to the public.",
  //   },
  // ];

  return (
    <>
    <div style={{justifyContent:"center",display:"flex"}}>
   <h4> Enter your Prompt:</h4>
<input className="input" placeholder="generate your timeline" value={inputvalue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
</div>
<div style={{justifyContent:"center",display:"flex"}}>
<button className="button" onClick={submitinput}>Generate</button>
</div>
{loading && timedata?<>

<div style={{ position: "fixed", width: "250vh", height: "90vh" }}>
      <Tldraw
        hideUi={true}
        onMount={(editor) => {
          const helloWorldShapeId = createShapeId();
          console.log(helloWorldShapeId);
          console.log(timedata.length)
          const defaultLineId = createShapeId();
          editor.createShape({
            id: defaultLineId,
            type: 'line',
           
            
            props: {
              color:"black",
              size:"xl",
              spline:'line',
              points: {
                "start": { id:defaultLineId,index:'a1',x: 60, y: 270 },
                "end": { id:defaultLineId,index:'a2',x:((timedata.length-1)*400)+60, y: 270 }
              }
            },
          });
          
          let ctr = 0;
          timedata.forEach((data, index) => {
            editor.createShape({
              id: createShapeId(),
              type: 'line',
              x: 60+index*400, // X coordinate of the start point
              y: 270, 
              props: {
                color:"red",
                size:"xl",
                
                
              },
            });
            if (ctr % 2 == 0) {
              editor.createShape({
                id: createShapeId(),
                type: "text",
                // x: 100,
                // y: 100+index*50,
                x: 10 + index * 400,
                y: 300,
                props: {
                  text: data.date,
                },
              });
              editor.createShape({
                id: createShapeId(),
                type: "text",
                // x: 300,
                // y: 100+index*50,
                x: 10 + index * 400,
                y: 100,
                props: {
                  text: data.event_name,
                },
              });
              editor.createShape({
                id: createShapeId(),
                type: "line",
                
                props: {
                  color:"blue",
                  size:"l",
                  spline:'line',
                  points: {
                    "start": { id:defaultLineId,index:'a1',x: 60 + index * 400, y: 270 },
                    "end": { id:defaultLineId,index:'a2',x: 60 + index * 400, y: 150 }
                  }
                },
              });
            } else {
              editor.createShape({
                id: createShapeId(),
                type: "text",
                // x: 100,
                // y: 100+index*50,
                x: 10 + index * 400,
                y: 200,
                props: {
                  text: data.date,
                },
              });
              editor.createShape({
                id: createShapeId(),
                type: "text",
                // x: 300,
                // y: 100+index*50,
                x: 10 + index * 400,
                y: 400,
                props: {
                  text: data.event_name,
                },
              });
              editor.createShape({
                id: createShapeId(),
                type: "line",
                
                props: {
                  color:"blue",
                  size:"l",
                  spline:'line',
                  points: {
                    "start": { id:defaultLineId,index:'a1',x: 60 + index * 400, y: 270 },
                    "end": { id:defaultLineId,index:'a2',x: 60 + index * 400, y: 380 }
                  }
                },
              });
            }
            ctr += 1;
            console.log(100 + index * 400);
          });

          return () => {
            editor.deleteShape(helloWorldShapeId);
          };
        }}
      />
    </div>

</>:<></>}
    
    </>
  );
}

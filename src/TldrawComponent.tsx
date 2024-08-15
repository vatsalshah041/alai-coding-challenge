import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function TldrawComponent() {
  // const timedata=[
  //   {
  //     "id": 1,
  //     "date": "2024-04-10",
  //     "event": "User Research and Feature Specification"
  //   },
  //   {
  //     "id": 2,
  //     "date": "2024-04-10",
  //     "event": "Finalize user research highlighting the need for a social feature that allows users to share their health achievements with friends within the app. Complete detailed feature specifications, including privacy controls and user interaction models."
  //   },
  //   {
  //     "id": 3,
  //     "date": "2024-05-05",
  //     "event": "Design and Prototyping"
  //   },
  //   {
  //     "id": 4,
  //     "date": "2024-05-05",
  //     "event": "Design user interfaces for the social sharing feature, focusing on ease of use and integration with existing app functionalities. Develop a clickable prototype for internal review and early feedback from select users."
  //   },
  //   {
  //     "id": 5,
  //     "date": "2024-06-01",
  //     "event": "Development Kick-off"
  //   },
  //   {
  //     "id": 6,
  //     "date": "2024-06-01",
  //     "event": "Start development, prioritizing core functionalities such as posting updates, friend interactions, and privacy settings. Implement analytics to track user engagement and interaction with the new feature."
  //   },
  //   {
  //     "id": 7,
  //     "date": "2024-07-25",
  //     "event": "Internal Testing and Iterations"
  //   },
  //   {
  //     "id": 8,
  //     "date": "2024-07-25",
  //     "event": "Begin internal testing to identify bugs and usability issues. Iterate on the feature based on feedback, refining the UI/UX and ensuring seamless integration with the app's existing features."
  //   },
  //   {
  //     "id": 9,
  //     "date": "2024-08-20",
  //     "event": "Beta Release and User Feedback"
  //   },
  //   {
  //     "id": 10,
  //     "date": "2024-08-20",
  //     "event": "Release the feature to beta testers, a select group of existing users who have opted in for early access. Collect and analyze user feedback, focusing on the feature's impact on user engagement and overall app experience."
  //   },
  //   {
  //     "id": 11,
  //     "date": "2024-09-30",
  //     "event": "Public Launch"
  //   },
  //   {
  //     "id": 12,
  //     "date": "2024-09-30",
  //     "event": "Incorporate feedback from the beta release and finalize the feature for public launch. Launch the new social sharing feature to all users, accompanied by a marketing campaign highlighting its benefits and functionalities."
  //   }
  // ]
  // const timedata = [
  //   {
  //     "id": 1,
  //     "date": "2024-04-10",
  //     "eventHeading": "User Research ",
  //     "eventDesc": "Finalize user research highlighting the need for a social feature that allows users to share their health achievements with friends within the app."
  //   },
  //   {
  //     "id": 2,
  //     "date": "2024-05-05",
  //     "eventHeading": "Design and Prototyping",
  //     "eventDesc": "Design user interfaces for the social sharing feature, focusing on ease of use and integration with existing app functionalities."
  //   },
  //   {
  //     "id": 3,
  //     "date": "2024-06-01",
  //     "eventHeading": "Development starts",
  //     "eventDesc": "Start development, prioritizing core functionalities such as posting updates, friend interactions, and privacy settings."
  //   },
  //   {
  //     "id": 4,
  //     "date": "2024-07-25",
  //     "eventHeading": "Internal Testing ",
  //     "eventDesc": "Begin internal testing to identify bugs and usability issues. Iterate on the feature based on feedback, refining the UI/UX and ensuring seamless integration with the app's existing features."
  //   },
  //   {
  //     "id": 5,
  //     "date": "2024-08-20",
  //     "eventHeading": "Beta Release ",
  //     "eventDesc": "Release the feature to beta testers, a select group of existing users who have opted in for early access."
  //   },
  //   {
  //     "id": 6,
  //     "date": "2024-09-30",
  //     "eventHeading": "Public Launch",
  //     "eventDesc": "Incorporate feedback from the beta release and finalize the feature for public launch."
  //   }
  // ];
  const timedata = [
    {
      id: 1,
      date: "10th August",
      event_name: "Product Development Commences",
      event_desc: "Product development begins.",
    },
    {
      id: 2,
      date: "10th September",
      event_name: "Product Development Ends",
      event_desc: "Product development phase concludes.",
    },
    {
      id: 3,
      date: "15th September",
      event_name: "Marketing Begins",
      event_desc: "Marketing efforts kick off.",
    },
    {
      id: 4,
      date: "30th September",
      event_name: "Product Launch",
      event_desc: "The product is officially launched to the public.",
    },
  ];

  return (
    <div style={{ position: "fixed", width: "250vh", height: "90vh" }}>
      <Tldraw
        hideUi={true}
        onMount={(editor) => {
          const helloWorldShapeId = createShapeId();
          console.log(helloWorldShapeId);
          const defaultLineId = createShapeId();
          editor.createShape({
            id: defaultLineId,
            type: 'line',
           
            
            props: {
              color:"red",
              size:"xl",
              spline:'line',
              points: {
                "start": { id:defaultLineId,index:'a1',x: 150, y: 270 },
                "end": { id:defaultLineId,index:'a2',x: (timedata.length-1)*400+200, y: 270 }
              }
            },
          });
          
          let ctr = 0;
          timedata.forEach((data, index) => {
            editor.createShape({
              id: createShapeId(),
              type: 'line',
              x: 150+index*400, // X coordinate of the start point
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
                x: 100 + index * 400,
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
                x: 100 + index * 400,
                y: 100,
                props: {
                  text: data.event_name,
                },
              });
            } else {
              editor.createShape({
                id: createShapeId(),
                type: "text",
                // x: 100,
                // y: 100+index*50,
                x: 100 + index * 400,
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
                x: 100 + index * 400,
                y: 400,
                props: {
                  text: data.event_name,
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
  );
}

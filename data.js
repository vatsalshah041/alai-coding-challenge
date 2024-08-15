const a = [
  {
    id: 1,
    date: "10th August",
    event_name: "Product Development Commences",
    event_desc: "Product development starts",
  },
  {
    id: 2,
    date: "10th September",
    event_name: "Product Development Ends",
    event_desc: "Product development concludes.",
  },
  {
    id: 3,
    date: "15th September",
    event_name: "Marketing Begins",
    event_desc: "Marketing campaign kicks off",
  },
  {
    id: 4,
    date: "30th September",
    event_name: "Product Launch",
    event_desc: "The product is officially released.",
  },
];

const b = {
  timeline: [
    {
      id: 1,
      date: "April 10, 2024",
      event_name: "User Research and Feature Specification",
      event_desc:
        "Finalize user research highlighting the need for a social feature that allows users to share their health achievements with friends within the app. Complete detailed feature specifications, including privacy controls and user interaction models.",
    },
    {
      id: 2,
      date: "May 5, 2024",
      event_name: "Design and Prototyping",
      event_desc:
        "Design user interfaces for the social sharing feature, focusing on ease of use and integration with existing app functionalities. Develop a clickable prototype for internal review and early feedback from select users.",
    },
    {
      id: 3,
      date: "June 1, 2024",
      event_name: "Development Kick-off",
      event_desc:
        "Start development, prioritizing core functionalities such as posting updates, friend interactions, and privacy settings. Implement analytics to track user engagement and interaction with the new feature.",
    },
    {
      id: 4,
      date: "July 25, 2024",
      event_name: "Internal Testing and Iterations",
      event_desc:
        "Begin internal testing to identify bugs and usability issues. Iterate on the feature based on feedback, refining the UI/UX and ensuring seamless integration with the app's existing features.",
    },
    {
      id: 5,
      date: "August 20, 2024",
      event_name: "Beta Release and User Feedback",
      event_desc:
        "Release the feature to beta testers, a select group of existing users who have opted in for early access. Collect and analyze user feedback, focusing on the feature's impact on user engagement and overall app experience.",
    },
    {
      id: 6,
      date: "September 30, 2024",
      event_name: "Public Launch",
      event_desc:
        "Incorporate feedback from the beta release and finalize the feature for public launch. Launch the new social sharing feature to all users, accompanied by a marketing campaign highlighting its benefits and functionalities.",
    },
  ],
};
console.log(typeof(a));
console.log(b[0]?"contains":"does not contain");
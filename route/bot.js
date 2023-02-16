const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const message = req.body.message.toLowerCase();

  // Define possible responses and associated keywords
  const responses = [
    {
      keywords: ["hi", "hello", "hey", "yow", "G", "mambo", "sasa"],
      response: "Hello! How can I assist you?",
    },
    {
      keywords: ["help", "support"],
      response:
        "Of course! What do you need help with? Please contact me directly at [mwanikicharles226@gmail.com or 0740315545].",
    },
    {
      keywords: ["project", "task"],
      response:
        "What is your project or task about?.Please contact me directly at [mwanikicharles226@gmail.com or 0740315545].",
    },
    {
      keywords: ["technology", "programming", "coding"],
      response:
        "I am experienced in MERN stack, React.js, Node.js, Nextjs, expressjs and MongoDB. What do you need help with? Please contact me directly at [mwanikicharles226@gmail.com or 0740315545].",
    },
    {
      keywords: ["experience", "work", "skills"],
      response:
        "I have worked on several full-stack projects using MERN stack, and I have a solid understanding of front-end and back-end development.",
    },
    {
      keywords: ["education", "background"],
      response:
        "I have a degree in computer science and several years of experience as a full-stack developer.",
    },
    {
      keywords: ["hire", "job"],
      response:
        "I am open to job opportunities. Please contact me directly at [mwanikicharles226@gmail.com or 0740315545].",
    },
    {
      keywords: ["contact", "email", "phone"],
      response:
        "You can contact me directly at [mwanikicharles226@gmail.com or 0740315545]",
    },
    {
      keywords: ["about", "you"],
      response:
        "I am a full-stack developer with expertise in MERN stack. What can I help you with? You can contact me directly at [mwanikicharles226@gmail.com or 0740315545]",
    },
    {
      keywords: ["thanks", "thank you", "appreciate"],
      response:
        "You're welcome. Feel free to contact me [mwanikicharles226@gmail.com or 0740315545] if you have any further questions.",
    },
    {
      keywords: ["bye", "goodbye", "see you"],
      response: "Goodbye! Have a great day.",
    },
    {
      keywords: [
        "JavaScript",
        "HTML",
        "CSS",
        "Python",
        "Java",
        "C#",
        "PHP",
        "Ruby",
        "Swift",
        "Kotlin",
        "Objective-C",
        "SQL",
        "NoSQL",
        "Firebase",
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Git",
        "GitHub",
        "Bitbucket",
        "Visual Studio",
        "VS Code",
        "Sublime Text",
        "Atom",
        "Eclipse",
        "IntelliJ",
        "NetBeans",
      ],
      response:
        "I have experience working with those programming languages and tools. What specific question do you have about them? contact me [mwanikicharles226@gmail.com or 0740315545]",
    },
    {
      keywords: [
        "name",
        "call",
        "who are you",
        "what is your name",
        "introduce yourself",
      ],
      response:
        "My name is charles mwaniki. Senior software developer. How can I assist you? contact me [mwanikicharles226@gmail.com or 0740315545]",
    },
    {
      keywords: ["location", "live", "where are you", "where do you live"],
      response:
        "I currently reside in Nakuru, Kenya. How can I assist you? Please contact me directly at [mwanikicharles226@gmail.com or 0740315545].",
    },
    {
      keywords: [
        "address",
        "personal details",
        "personal information",
        "SSN",
        "social security number",
        "credit card",
        "bank account",
      ],
      response:
        "I'm sorry, but for security reasons, I cannot share my personal information with you. Is there anything else I can help you with? Please contact me directly at [mwanikicharles226@gmail.com or 0740315545].",
    },
    {
      keywords: ["John Doe", "Jane Doe", "fake name"],
      response:
        "I'm sorry, but I'm not familiar with anyone by that name. How can I assist you?",
    },
    {
      keywords: ["problem", "error", "bug", "issue", "debug"],
      response:
        "I'm sorry to, contact me directly to solve the problem [mwanikicharles226@gmail.com or 0740315545]",
    },
  ];

  // Look up the appropriate response based on keywords in the message
  let response =
    "Sorry, I don't know how to respond to that. Am a model trained by charles to answer common questions, contact my superior directly via [mwanikicharles226@gmail.com or 0740315545]";

  for (let i = 0; i < responses.length; i++) {
    const { keywords, response: res } = responses[i];
    if (keywords.some((k) => message.includes(k))) {
      response = res;
      break;
    }
  }

  // Send the response back to the client
  res.status(200).send(response);
});

module.exports = router;
